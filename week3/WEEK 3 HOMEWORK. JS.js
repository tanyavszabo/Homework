const pizzaToppings = ["pepperoni", "mushrooms", "olives", "bell peppers"];

function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings are: ");
  for (let name of pizzaToppings) {
    console.log(name)
  }
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming right up!`);
  return [size, crust, toppings];
}
getPizzaOrder("large", "thick", pizzaToppings);

function preparePizza([size, crust, pizzaToppings]) {
  console.log("...Cooking pizza...");
  const pizzaType = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaType;
}
let orderType = preparePizza(getPizzaOrder("large", "thick", pizzaToppings));

function servePizza(pizzaType) {
  console.log(`Order is Hot and Ready!! Here's your ${pizzaType.size} ${pizzaType.crust} with ${pizzaType.toppings}. Enjoy your Pizza!`
  );
  return pizzaType;
}
servePizza(orderType);
