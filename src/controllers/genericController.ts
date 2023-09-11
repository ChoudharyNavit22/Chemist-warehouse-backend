import Services from '../services';
import * as utils from "../utils";
import * as lodash from 'lodash';
import GenericMongoService from '../services/genericServices/mongoService';
import DataTypeConverters from '../utils/converters';
import config from '../config';

class GenericController {
    declare protected services: typeof Services;
    declare protected utils: typeof utils;
    declare protected config: typeof config;
    declare protected _: lodash.LoDashStatic;
    declare protected defaultService?: GenericMongoService;
    declare protected useAuth: boolean;
    declare protected convert: typeof DataTypeConverters;
    constructor(service?: GenericMongoService) {
        this.services = Services;
        this.utils = utils;
        this.config = config;
        this._ = lodash;
        this.defaultService = service;
        this.convert = DataTypeConverters;
    }
}

export default GenericController;