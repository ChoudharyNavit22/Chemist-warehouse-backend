import { ServerRoute } from '@hapi/hapi';
import * as Joi from "joi";
import CONFIG from "../../config"
import { sendError, sendSuccess, failActionFunction } from "../../utils";
import Controller from "../../controllers";

const createPizzas = {
    method: "POST",
    path: "/api/admin/pizzas/create/{shopId}",
    options: {
      description: "create Pizzas Api",
      tags: ["api", "admin"],
      handler: function (request, h) {
        let payloadData = request.payload;
        payloadData.shopId = request.params.shopId
        return new Promise((resolve, reject)=>{
          Controller.PizzaBaseController.createPizzas(payloadData).then( result => {
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
          ingredients: Joi.array().items(Joi.string().required()).optional(),
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

  const getPizzas = {
    method: "GET",
    path: "/api/user/{shopId}/pizzas",
    options: {
      description: "get Pizzas",
      tags: ["api", "admin"],
      handler: function (request, h) {
        return new Promise((resolve, reject)=>{
          Controller.PizzaBaseController.getPizzas(request.params).then( result => {
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

  const getPizza = {
    method: "GET",
    path: "/api/user/pizzas/{pizzaId}",
    options: {
      description: "get Pizza",
      tags: ["api", "admin"],
      handler: function (request, h) {
        return new Promise((resolve, reject)=>{
          Controller.PizzaBaseController.getPizza(request.params).then( result => {
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
            .label("User: (Get) Pizza Id (Params)"),
        failAction: failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages: CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

const PizzasBaseRoute: ServerRoute[]= [
    createPizzas,
    getPizzas,
    getPizza
];
export default PizzasBaseRoute;