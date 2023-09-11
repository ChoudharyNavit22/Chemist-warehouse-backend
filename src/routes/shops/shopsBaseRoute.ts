import { ServerRoute } from '@hapi/hapi';
import * as Joi from "joi";
import CONFIG from "../../config"
import { sendError, sendSuccess, failActionFunction } from "../../utils";
import Controller from "../../controllers";

const createShop = {
    method: "POST",
    path: "/api/admin/shops/create",
    options: {
      description: "create Shops Api",
      tags: ["api", "admin"],
      handler: function (request, h) {
        let payloadData = request.payload;
        return new Promise((resolve, reject)=>{
          Controller.ShopsBaseController.createShop(payloadData).then( result => {
            resolve(sendSuccess(CONFIG.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,result))
          }).catch( err => {
            reject(sendError(err))
          })
        })
      },
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          location: Joi.string().required()
        }).label("Shops Model"),
        failAction: failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages: CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

  const getShops = {
    method: "GET",
    path: "/api/user/shops",
    options: {
      description: "get Shops",
      tags: ["api", "admin"],
      handler: function (request, h) {
        return new Promise((resolve, reject)=>{
          Controller.ShopsBaseController.getShops().then( result => {
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

  const getShop = {
    method: "GET",
    path: "/api/user/shops/{shopId}",
    options: {
      description: "get Shops",
      tags: ["api", "admin"],
      handler: function (request, h) {
        return new Promise((resolve, reject)=>{
          Controller.ShopsBaseController.getShop(request.params).then( result => {
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
    createShop,
    getShops,
    getShop
];
export default ToppingsBaseRoute;