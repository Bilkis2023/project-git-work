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