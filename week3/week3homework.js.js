//Create an array of pizzaToppings with at least four different toppings
Let PizzaToppings = ["Pepperoni","Cheese","Bacon","Pineapple","Olives"];


//2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  console.log(`Welcome to Pizza House, our toppings are ${PizzaToppings} `);
//3. Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings

function getPizzaOrder(Size, Crust, ...PizzaToppings);{
  console.log("One" Size, Crust,"Crusted pizza with" PizzaToppings ..."Coming right up!");
}
getPizzaOrder("Large","Thick", pepperoni);
//4. Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let preparePizza = ["Large","Thick",PizzaToppings]
//5. Create a servePizza function that
//has a parameter of a pizza Object
let servePizza = 
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in

//6.Call each function and (starting with preparePizza) use the returned value from the previous function as its input
//Add, commit, and push your JS file to your GitHub repo.
//Send your TA a link to your GitHub Homework repo when finished.

An example output for this assignment is:

Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!


