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
  console.log(toppings);

  let order = `One ${size} ${crust} pizza with`;
  for (let topping of toppings) {
    order += ` ${topping}`;
  }
  order += " coming right up!";
  console.log(order);

  return [size, crust, toppings];
}
console.log(getPizzaOrder("large", "thick", "pepperoni", "mushrooms"));

function preparePizza(size, crust, toppings) {
  console.log("...Cooking pizza...");
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizza;
}
let orderType = preparePizza(
  getPizzaOrder("large", "thick", "pepperoni", "mushrooms")
);

function servePizza(pizza) {

  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;

  for (let topping of pizza.toppings) {
   
    orderReady += `${topping}, `;
  }
 
  console.log(`${orderReady}. Enjoy!`);
  return pizza;
}
servePizza(cookedPizza);

greetCustomer();
const myPizza = servePizza(
preparePizza(getPizzaOrder("small", "thin", "mushrooms", "banana peppers"))
);
console.log(myPizza);