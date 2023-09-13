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
            let pizzaData: any = await this.services.PizzaService.getRecord({shopId: payloadData.shopId},{},{});
            pizzaData.forEach((item: any) => {
                item.ingredients = item.ingredients.join()
            })
            return pizzaData;
        }
        catch(err){
            throw err.message;
        }
    }
    getPizza = async(
        payloadData: GenericObject
        ) => {
        try {
            let pizzaData: any = await this.services.PizzaService.getRecord({_id: payloadData.pizzaId},{},{});
            pizzaData.forEach((item: any) => {
                item.ingredients = item.ingredients.join()
            })
            return pizzaData;
        }
        catch(err){
            throw err.message;
        }
    }
}

export default new PizzaBaseController();