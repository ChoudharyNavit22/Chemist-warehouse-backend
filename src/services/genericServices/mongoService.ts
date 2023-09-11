import Mongo from "../models/mongo";
import { GenericObject, GenericServiceCallback } from '../../interfaces';
import mongoose from "mongoose";
import GenericDBService from "./generic";


/**
 * @author Navit Choudhary
 * @description Generic MongoDB Service Template
 */
export default class GenericMongoService extends GenericDBService {
    declare model: mongoose.Model<unknown>;

    /**
     * 
     * @param {String} modelName Name of the Model
     */
    constructor(modelName: string) {
        super();
        if (!this.isModelValid(Mongo, modelName)) {
            console.error(`Invalid model name ${modelName}`);
            throw "Invalid model name '" + modelName + "'. Terminating app..."
        }
        this.model = Mongo[modelName];
    }

    /**
     * @author Navit Choudhary
     * @description Update a record in DB
     * @param {Object} criteria 
     * @param {Object} data 
     * @param {Object} options 
     * @param {Function} callback 
     */
    async updateRecord(criteria: GenericObject, data: GenericObject, options: GenericObject) {
        try {
            options.lean = true;
            options.new = true;
            const result = await this.model.findOneAndUpdate(criteria, data, options);
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @author Navit Choudhary
     * @description Insert a record in DB
     * @param {Object} data 
     * @param {Function} callback 
     */
    async createRecord(data: GenericObject) {
        try {
            const result = await new this.model(data).save();
            return result;
        } catch (error) {
            throw error;
        }

    }

    /**
     * @author Navit Choudhary
     * @description Hard delete a record
     * @param {Object} criteria 
     * @param {Function} callback 
     */
    async deleteRecord(criteria: GenericObject) {
        try {
            const result = await this.model.findOneAndRemove(criteria);
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @author Navit Choudhary
     * @description Retrive records
     * @param {Object} criteria 
     * @param {Object} projection 
     * @param {Object} options 
     * @param {Function} callback 
     */
    async getRecord(criteria: GenericObject, projection: GenericObject, options: GenericObject) {
        try {
            options.lean = true;
            const result = await this.model.find(criteria, projection, options);
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @author Navit Choudhary
     * @description Retrive records
     * @param {Object} criteria 
     * @param {Object} projection 
     * @param {Object} options 
     * @param {Function} callback 
     */
    async getSingleRecord(criteria: GenericObject, projection: GenericObject, options: GenericObject) {
        try {
            options.lean = true;
            const result = await this.model.findOne(criteria, projection, options);
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @author Navit Choudhary
     * @description Retrive records while populating them
     * @param {Object} criteria 
     * @param {Object} projection 
     * @param {Object|string} populate 
     * @param {Function} callback 
     */
    async getPopulatedRecords(criteria: GenericObject, projection: GenericObject, populate: string | string[]) {
        try {
            const result = await this.model.find(criteria).select(projection).populate(populate);
            return result;
        } catch (error) {
            throw error;
        }
    }
}