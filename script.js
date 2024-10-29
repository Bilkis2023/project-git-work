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



// Logs window object using this
console.log("this: ");
console.log(this);

// Logs the Document Object
console.log("window.document: ");
console.log(window.document);

// Logs body of document
console.log("document.body: ");
console.log(document.body);

// Logs root element of document.
// Because document severs as the entry poing to a webpage content we use
// document.documentElement to access the root element
console.log(document.documentElement);

// return head element of current document
console.log(document.head);

console.log("Document.body: ")
console.log(document.body);
console.log("element of Document Body: ")
console.log(document.body.children);

console.log("Second element of body: ");
console.log(document.body.children[1]);

console.log("Frist child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
var secondChildBody = document.getElementById("second-child-body");
var firstChildUl = document.getElementById("first-child-ul");

// setting style of element
firstChildUl.style.color = "#e97451";



// This refers to the window
console.log(this);

// this refers to the window object
function helloThis(){
    console.log('inside this function, this is a ' + this);
}



var numbers = [1,2,3,4];

// Iterative methods
numbers.forEach(lessThanThree);

function lessThanThree(i){
    if(i<3){
        console.log(i.toString() + 'is less than 3' )
    }else{
        console.log(i.toString() + 'is Not less than 3');
    }
}


var numbersDubled = numbers.map(multiply);
function multiply(i){
    return i*2;
}
console.log(numbersDubled);