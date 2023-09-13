import GenericController from "../genericController";
import { GenericObject } from "../../interfaces";

class OrdersBaseController extends GenericController {
    private declare ERROR;
    constructor() {
      super();
      this.ERROR = this.config.APP_CONSTANTS.STATUS_MSG.ERROR;
    }

    createOrders = async(
        payloadData: GenericObject
    ) => {
        try {
            const pizzaData: any = await this.services.PizzaService.getSingleRecord({_id: payloadData.pizzaId}, {}, {})
            if(pizzaData){
                const dataToSave = {
                    customerName: payloadData.customerName,
                    customerAddress: payloadData.customerAddress,
                    customerPhone: payloadData.customerPhone,
                    pizzaId: pizzaData?._id,
                    amount: pizzaData?.price,
                    shopId: pizzaData?.shopId
                }
                const orderData = await this.services.OrderService.createRecord(dataToSave);
                return orderData;
            }else{
                throw new Error("Pizza not found")
            }
        }
        catch(err){
            throw err.message;
        }
    }
    getOrders = async() => {
        try {
            const populate = {
				path: "pizzaId shopId",
				select: {
					name: 1,
                    ingredients: 1,
                    location: 1,
                    _id: 0
				}
			}
            const orderData = await this.services.OrderService.getPopulatedRecords({},{_id: 0,__v:0},populate);
            let orders = []
            orderData.forEach( (item: any) => {
                let temp: any = {
                    customerName: item.customerName,
                    customerAddress: item.customerAddress,
                    customerPhone: item.customerPhone,
                    pizzaName: item.pizzaId.name,
                    ingredients: item.pizzaId.ingredients.join(),
                    shopName:  item.shopId.name,
                    shopLocation: item.shopId.location,
                    amount: item.amount,
                    orderStatus: item.orderStatus,
                    createdAt: item.createdAt
                }
                orders.push(temp)
            })
            return orders;
        }
        catch(err){
            throw err.message;
        }
    }
}

export default new OrdersBaseController();