// alert('test')
// alert('anotherTest')

// How to store function in a object. Objects can store more than primitive data types like strings, booleans and numbers
var planet = {
    name : 'Earth',
    age :'4.543 billion yeats',
    moons: 1,
    isPopulated: true,
    population:'7.594 billion',
    // Objects can store arraya in a key-value pair
    neibouringPlanets: ['Mars', 'Venus'],
    // Objects can also store methods
    tellFunFact: function () {
        console.log(
            ' The Eeath is the only planet in our soler system not named after a Roman God or Goddess.'
        );
    },

    showWarning: function (){
        console.log(
            "Space junk falls into the Earth's atmosphere at a rate of about one a day."
        );
    },
};

// To access in a vaule of an array, use the name of the object, the key and the index.
// Log Mars using the dot notation;
console.log(planet.neibouringPlanets[0]);

// Loge Mars using the brakets notation
console.log(planet['neibouringPlanets'][0]);

planet.tellFunFact();
planet.showWarning();


// The default keyword "this" refers to the global object
// In a browser, the global object is the window
// Logs window
// console.log(this);

// When the keyword "this" is used inside of an object like planet, "this" belongs to the object.
var planet = {
    name: 'Earth',
    age: '4.543 billion',
    isPopulated: true,
     population: '7.594 billion',
     logFacts: function(){
        // Logs "This planet name is Earth"
        console.log("This planet name is" + this.name);
        // Logs "This planet's age is 4.53 billion years"
        console.log("This planet's age is" + this.age);
     },
     logPopulation : function(){
        if(this.isPopulated){
            // Logs "This planet's population is 4.53 billion"
            console.log("This planet's population is" + this.population);
        }else{
            console.log('The planet is unpopulated');
        }
     },
};

// Calls Objects Methods:
planet.logFacts();
planet.logPopulation();




// This refers to the window
console.log(this);

// this refers to the window object
function helloThis(){
    console.log('inside this function, this is a ' + this);
}