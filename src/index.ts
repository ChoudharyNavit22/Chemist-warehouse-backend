import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import  HapiSwaggerPlugin  from "./plugins/swagger";
import * as Handlebars from "handlebars";
import 'dotenv/config';

const init = async () => {
    const server: Server = new Server({
        port: process.env.PORT || 8000,
        host: '0.0.0.0'
    });
    try{
        await server.register(HapiSwaggerPlugin);
        server.views({
            engines: {
              html: Handlebars
            },
            relativeTo: __dirname,
            path: "../src/views"
          });
          server.route({
            method: 'GET',
            path: '/',
            handler: (request: Request, h: ResponseToolkit) => {
                return h.view("welcome");
            }
        });
    }
    catch(err) {
        console.debug("Swagger error: ",err)
    }
    await server.start();
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
};
process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});
init();