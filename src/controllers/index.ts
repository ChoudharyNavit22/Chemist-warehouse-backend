import ToppingsBaseController from "./toppings/toppingsBaseController";
import ShopsBaseController from "./shops/shopBaseController";
import PizzaBaseController from "./pizzas/pizzaBaseController";

class Controllers {
    ToppingsBaseController = ToppingsBaseController;
    ShopsBaseController = ShopsBaseController;
    PizzaBaseController = PizzaBaseController;
}

export default new Controllers();