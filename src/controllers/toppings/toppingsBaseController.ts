import GenericController from "../genericController";
import { GenericObject } from "../../interfaces";

class ToppingsBaseController extends GenericController {
    private declare ERROR;
    constructor() {
      super();
      this.ERROR = this.config.APP_CONSTANTS.STATUS_MSG.ERROR;
    }

    createToppings = async(
        payloadData: GenericObject
    ) => {
        try {
            payloadData.name = payloadData.name.toLowerCase();
            const toppingsData = await this.services.ToppingService.createRecord(payloadData);
            return toppingsData;
        }
        catch(err){
            throw err.message;
        }
    }
    getToppings = async(
        payloadData: GenericObject
        ) => {
        try {
            const shopsData = await this.services.ToppingService.getRecord({shopId: payloadData.shopId},{},{});
            return {shop: shopsData};
        }
        catch(err){
            throw err.message;
        }
    }
}

export default new ToppingsBaseController();