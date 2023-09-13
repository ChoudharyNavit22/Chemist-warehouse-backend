import ToppingsBaseController from "./toppings/toppingsBaseController";
import ShopsBaseController from "./shops/shopBaseController";
import PizzaBaseController from "./pizzas/pizzaBaseController";
import OrdersBaseController from "./orders/ordersBaseController";

class Controllers {
    ToppingsBaseController = ToppingsBaseController;
    ShopsBaseController = ShopsBaseController;
    PizzaBaseController = PizzaBaseController;
    OrdersBaseController = OrdersBaseController;
}

export default new Controllers();