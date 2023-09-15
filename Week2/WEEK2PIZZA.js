//1. Creates the two Variables and assign values.
// Decided to use "let" instead of "const" so it is re-assignable.
let pizzaPlace = "Macro's Pizza";
let numberOfToppings = 12;

//print the variables and their types using template literal.
typeof pizzaPlace;
typeof numberOfToppings;
typeof "Macros Pizza";
typeof 12;

// Construct a sentence with a template literal using both variables
console.log(`Welcome to ${pizzaPlace}, We offer
${numberOfToppings} Macro
friendly, organic toppings!`);

//if statement to determine message
//on number of toppings.
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");

} else {
console.log("A whole lot of pizza.");

}

