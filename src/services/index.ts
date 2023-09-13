import GenericMongoService from './genericServices/mongoService';

class Services {
    ToppingService = new GenericMongoService("Toppings");
    ShopService = new GenericMongoService("Shops");
    PizzaService = new GenericMongoService("Pizzas");
    OrderService = new GenericMongoService("Orders")
}


export default new Services();