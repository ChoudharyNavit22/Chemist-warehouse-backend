import * as Hapi from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import 'dotenv/config';


const swaggerOptions: HapiSwagger.RegisterOptions = {
    pathPrefixSize: 2,
    info: {
        'title': `${process.env.APP_NAME} Backend`,
        'description': `${process.env.APP_NAME} Backend APIs.`,
        'version': `${process.env.npm_package_version}`
    },
    documentationPath: "/swagger"
};

const HapiSwaggerPlugin: Array<Hapi.ServerRegisterPluginObject<any>> = [
    {
        plugin: Inert
    },
    {
        plugin: Vision
    },
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
];

export default HapiSwaggerPlugin;