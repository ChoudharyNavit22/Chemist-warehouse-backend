import DemoBaseRoute from "./demo/demoBaseRoute";
import ToppingsBaseRoute from "./toppings/toppingsBaseRoute";
import ShopsBaseRoute from "./shops/shopsBaseRoute";
import PizzasBaseRoute from "./pizzas/pizzasBaseRoute";

const Routes = [].concat(DemoBaseRoute,ToppingsBaseRoute,ShopsBaseRoute,PizzasBaseRoute);

export default Routes;