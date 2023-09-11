import GenericController from "../genericController";
import { GenericObject } from "../../interfaces";

class ShopBaseController extends GenericController {
    private declare ERROR;
    constructor() {
      super();
      this.ERROR = this.config.APP_CONSTANTS.STATUS_MSG.ERROR;
    }

    createShop = async(
        payloadData: GenericObject
    ) => {
        try {
            const shopsData = await this.services.ShopService.createRecord(payloadData);
            return shopsData;
        }
        catch(err){
            throw err.message;
        }
    }
    getShops = async() => {
        try {
            const shopsData = await this.services.ShopService.getRecord({},{},{});
            return shopsData;
        }
        catch(err){
            throw err.message;
        }
    }
    getShop = async(
        payloadData: GenericObject
        ) => {
        try {
            const shopsData = await this.services.ShopService.getSingleRecord({_id: payloadData.shopId},{},{});
            return {shop: shopsData};
        }
        catch(err){
            throw err.message;
        }
    }
}

export default new ShopBaseController();