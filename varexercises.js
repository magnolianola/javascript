// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var fortune = prompt("I am going to tell you your fortune. Where is your favourite place? 1) Hollywood, 2) Paris)");

switch (fortune){
        case "Hollywood":
            
            var partner = ("You love show business, huh? Who is your favourite actor of the following? 1) Cate Blanchett, 2) Brad Pitt, 3) Alan Rickman (answer by name, not by number please)");
            if (partner === "Cate Blanchett"){
                z = "Cate Blanchett";
                y = "Hollywood";
            }       
            else if (partner === "Brad Pitt"){
                z = "Brad Pitt";
                y = "Hollywood";
            }
            else if (partner === "Alan Rickman"){
                z = "Alan Rickman";
                y = "Hollywood";
            }
            else {
                alert("Thank you for your answer.");
            }
            var children = prompt("How many children would you like to have? 1) zero, 2) two, or 3) five");
            if (children === "zero"){
                n = "zero";
            }
            else if (children === "two"){
                n = "two";
            }
            else if (children === "five"){
                n = "five";
            }
            else{
                prompt("Thank you for your answer (Type 'ok')");
            }
            var job = prompt("What is your dream job? 1) actor, 2) director, or 3) screenwriter");
            if (job === "actor"){
                x = "actor";
                prompt("You will be a " + x + "in " + y + ", and married to " + z + " with " + n + " kids.");
            }
            else if (job === "director"){
                x = "director";
                prompt("You will be a " + x + "in " + y + ", and married to " + z + " with " + n + " kids.");
            }
            else if (job === "screenwriter"){
                x = "screenwriter";
                prompt("You will be a " + x + "in " + y + ", and married to " + z + " with " + n + " kids.");
            }
            else{
                alert("I'm not sure you understood my question");
            }
            break;


        
        case 'Paris':
            var partner = prompt("I bet you would love to go to a Parisian marketplace. I wonder who you would want to live with? 1) Marion Cotillard, 2) Audrey Tautou, 3) Jean Dujardin");
            if (partner === "Marion Cotillard"){
                z = "Marion Cotillard";
                y = "Paris";
            }
            else if (partner === "Audrey Tautou"){
                z = "Audrey Tautou";
                y = "Paris";
            }
            else if (partner === "Jean Dujardin"){
                z = "Jean Dujardin";
                y = "Paris";
            }
            else {
                alert("Thank you.");
            }
            var children = prompt("How many children would you like to have? 1) zero, 2) two, or 3) five");
            if (children === "zero"){
                n = "zero";
            }
            else if (children === "two"){
                n = "two";
            }
            else if (children === "five"){
                n = "five";
            }
            else{
                alert("Thank you for your answer.");
            }
            var job = prompt("What kind of job would you like to do in France? 1) Winemaker, 2) French-English interpreter, 3) Work in a cafe");
            if (job === "Winemaker"){
                x = "Winemaker";
            }
            else if (job === "French-English interpreter"){
                x = "French-English interpreter";
                prompt("You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.");
            }
            else if (job === "Work in a cafe"){
                x = "Work in a cafe";
                prompt("You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.");
            }
            else {
                alert("I'm not sure you answered my question corrently...");
            }

}





// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var c = 2013;

var age = c - y;
var altAge = (c - y) - 1;

var y = prompt("Enter your year of birth");

prompt("You are either " + age + " or " + altAge + ".");
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var currentAge = prompt("Let's find out how many units of your favourite snack you could get in a lifetime supply. How old are you now?");
var faveSnack = prompt("What is your favourite snack?");
var day = prompt("How many of these do you eat a day?");
var maxAge = prompt("How many years do you think you'll live?");
var totalSnacks = (maxAge - currentAge) * (day * 365);

console.log("You will need " + totalSnacks + " of " + faveSnack + " to last you until the ripe old age of " + maxAge + ".");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var diameter = prompt("Measure the length of your circle’s center to its perimeter. How long is it in centimeters?");
var radius = (diameter % 2);
var circumference = Math.PI * (2 * radius);
var area = Math.PI * Math.pow(radius, 2);
console.log("The circumference is " + circumference + ". The area is " + area + ".");


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = prompt("You're an American in Canada. Tell me the temperature out in Celcius and I will convert it to Fahrenheit.");
var fahrenheit = ((celsius * 9) % 5) + 32;
console.log(celsius"°C is " + fahrenheit + "°F.");

