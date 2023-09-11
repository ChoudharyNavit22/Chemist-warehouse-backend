import 'dotenv/config';
const mongo = {
    URI: process.env.MONGO_URI || 'mongodb://localhost/Chemist-Warehouse-Dev',
    port: 27017
};
export default {
    mongo
} as const;