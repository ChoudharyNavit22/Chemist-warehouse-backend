import { ServerRoute } from '@hapi/hapi';
import * as Joi from "joi";
import CONFIG from "../../config"
import { sendSuccess, failActionFunction } from "../../utils";

const demoApi = {
    method: "POST",
    path: "/api/demo/demoApi",
    options: {
      description: "demo api",
      tags: ["api", "demo"],
      handler: function (request, h) {
        let payloadData = request.payload;
        return new Promise((resolve, reject)=>{
          resolve(sendSuccess(CONFIG.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,payloadData.message));
        })
      },
      validate: {
        payload: Joi.object({
          message: Joi.string().required()
        }).label("Demo Model"),
        failAction: failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages: CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

const DemoBaseRoute: ServerRoute[]= [demoApi];
export default DemoBaseRoute;