import GenericMongoService from './genericServices/mongoService';

class Services {
    ToppingService= new GenericMongoService("Toppings")
}


export default new Services();