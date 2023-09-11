import { ServerRoute } from '@hapi/hapi';
import * as Joi from "joi";
import CONFIG from "../../config"
import { sendError, sendSuccess, failActionFunction } from "../../utils";
import Controller from "../../controllers";

const createToppingsApi = {
    method: "POST",
    path: "/api/admin/toppings/create/{shopId}",
    options: {
      description: "create Toppings Api",
      tags: ["api", "admin"],
      handler: function (request, h) {
        let payloadData = request.payload;
        payloadData.shopId = request.params.shopId
        return new Promise((resolve, reject)=>{
          Controller.ToppingsBaseController.createToppings(payloadData).then( result => {
            resolve(sendSuccess(CONFIG.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,result))
          }).catch( err => {
            reject(sendError(err))
          })
        })
      },
      validate: {
        params: Joi.object({
            shopId: Joi.string().required(),
          })
            .required()
            .label("Admin: (POST) Shop Id (Params)"),
        payload: Joi.object({
          name: Joi.string().required(),
          price: Joi.number().required()
        }).label("Toppings Model"),
        failAction: failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages: CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

  const getToppings = {
    method: "GET",
    path: "/api/user/toppings/{shopId}",
    options: {
      description: "get Toppings",
      tags: ["api", "admin"],
      handler: function (request, h) {
        return new Promise((resolve, reject)=>{
          Controller.ToppingsBaseController.getToppings(request.params).then( result => {
            resolve(sendSuccess(CONFIG.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,result))
          }).catch( err => {
            reject(sendError(err))
          })
        })
      },
      validate: {
        params: Joi.object({
            shopId: Joi.string().required(),
          })
            .required()
            .label("User: (Get) Shop Id (Params)"),
        failAction: failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages: CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

const ToppingsBaseRoute: ServerRoute[]= [
    createToppingsApi,
    getToppings
];
export default ToppingsBaseRoute;