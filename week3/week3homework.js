const pizzaToppings = ["pepperoni", "mushrooms", "olives", "bell peppers"];

function greetCustomer() {
  let greeting = "Welcome to Pizza House, our toppings are: ";
  for (let name of pizzaToppings) {
    greeting += ` ${name},`;
  }
  console.log(greeting);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} pizza with` 
  for(let topping of toppings) {
    order += ` ${topping}`;
  }
 order += " coming right up!";
//console.log(order);

  return [size, crust, toppings];
}
console.log (getPizzaOrder("large", "thick", pizzaToppings));

function preparePizza(size, crust, toppings) {
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
