import GenericController from "../genericController";
import { GenericObject } from "../../interfaces";

class PizzaBaseController extends GenericController {
    private declare ERROR;
    constructor() {
      super();
      this.ERROR = this.config.APP_CONSTANTS.STATUS_MSG.ERROR;
    }

    createPizzas = async(
        payloadData: GenericObject
    ) => {
        try {
            payloadData.name = payloadData.name.toLowerCase();
            const pizzaData = await this.services.PizzaService.createRecord(payloadData);
            return pizzaData;
        }
        catch(err){
            throw err.message;
        }
    }
    getPizzas = async(
        payloadData: GenericObject
        ) => {
        try {
            const pizzaData = await this.services.PizzaService.getRecord({shopId: payloadData.shopId},{},{});
            return pizzaData;
        }
        catch(err){
            throw err.message;
        }
    }
}

export default new PizzaBaseController();