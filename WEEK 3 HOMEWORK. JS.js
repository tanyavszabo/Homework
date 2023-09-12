const pizzaToppings = ["pepperoni", "mushrooms", "olives", "bell peppers"];

function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings are: " + pizzaToppings(", ") + "...");
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log("One " + size + " " + crust + " crust pizza with " + toppings.join(", ") + " coming up!");
  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizza;
}

function servePizza(pizza) {
  console.log("Order up! Here's your "  pizza.size + " " + pizza.crust + " crust pizza with " + pizza.toppings.join(", ") + "... Enjoy!");
  return pizza;
}

greetCustomer();
const order = getPizzaOrder("large", "thick", "pepperoni", "mushrooms", "olives");
const pizza = preparePizza(order);
servePizza(pizza);
