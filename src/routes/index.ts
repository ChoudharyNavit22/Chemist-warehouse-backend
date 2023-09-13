import DemoBaseRoute from "./demo/demoBaseRoute";
import ToppingsBaseRoute from "./toppings/toppingsBaseRoute";
import ShopsBaseRoute from "./shops/shopsBaseRoute";
import PizzasBaseRoute from "./pizzas/pizzasBaseRoute";
import OrdersBaseRoute from "./orders/ordersBaseRoute";

const Routes = [].concat(DemoBaseRoute,ToppingsBaseRoute,ShopsBaseRoute,PizzasBaseRoute,OrdersBaseRoute);

export default Routes;