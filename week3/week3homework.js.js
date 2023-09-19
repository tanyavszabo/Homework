
Let PizzaToppings = ["Pepperoni","Cheese","Bacon","Pineapple","Olives"];

function greetCustomer() {
  console.log(
  "Welcome to Pizza House! Our toppings tonight are:");
for (let name of PizzaToppings)
{
  console.log(name)
}
}
greetCustomer();
function getPizzaOrder(size, crust,...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming right up!`);
  return [size, crust, toppings];

}
getPizzaOrder("large","thick", PizzaToppings);

function preparePizza([size, crust, pizzaToppings])

function getPizzaOrder(Size, Crust, ...PizzaToppings);{
  console.log('One ${Size} ${crust} right away!`);
  return [size, crust, toppings];
}

function preparePizza([size, crust, pizzaToppings]) {
  console.log(..."Baking your pizza...");
  const pizzaType = {
    size: size,
    crust: crust,
    toppings; pizzaToppings
  };
  return pizzaType;
}

let orderType = preparePizza(getPizzaOrder("large", "thick", pizzaToppings));

function servePizza(pizzaType) {
  console.log(
    `Order is Hot and Ready! Enjoy your ${pizzaType.size} ${pizzaType.crust} with ${pizzaType.toppings}`);
    return pizzaType;
}
servePizza(orderType)




