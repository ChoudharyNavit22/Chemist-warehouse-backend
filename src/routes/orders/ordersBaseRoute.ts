import { ServerRoute } from '@hapi/hapi';
import * as Joi from "joi";
import CONFIG from "../../config"
import { sendError, sendSuccess, failActionFunction } from "../../utils";
import Controller from "../../controllers";

const createOrders = {
    method: "POST",
    path: "/api/user/orders/create/{pizzaId}",
    options: {
      description: "create Orders Api",
      tags: ["api", "user"],
      handler: function (request, h) {
        let payloadData = request.payload;
        payloadData.pizzaId = request.params.pizzaId
        return new Promise((resolve, reject)=>{
          Controller.OrdersBaseController.createOrders(payloadData).then( result => {
            resolve(sendSuccess(CONFIG.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,result))
          }).catch( err => {
            reject(sendError(err))
          })
        })
      },
      validate: {
        params: Joi.object({
            pizzaId: Joi.string().required(),
          })
            .required()
            .label("Admin: (POST) Pizza Id (Params)"),
        payload: Joi.object({
            customerName: Joi.string().required(),
            customerAddress: Joi.string().required(),
            customerPhone: Joi.string().required(),
        }).label("Orders Model"),
        failAction: failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages: CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

  const getOrders = {
    method: "GET",
    path: "/api/admin/orders",
    options: {
      description: "get Orders",
      tags: ["api", "admin"],
      handler: function (request, h) {
        return new Promise((resolve, reject)=>{
          Controller.OrdersBaseController.getOrders().then( result => {
            resolve(sendSuccess(CONFIG.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,result))
          }).catch( err => {
            reject(sendError(err))
          })
        })
      },
      validate: {
        failAction: failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages: CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

const OrdersBaseRoute: ServerRoute[]= [
    createOrders,
    getOrders
];
export default OrdersBaseRoute;