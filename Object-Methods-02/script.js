alert('test')


var chosenPet = 'Lulu';

var shelter = {
    dogs: ['Mackie', 'Bernice', 'Coolie Monster', 'Spot'],
    cats: ['Astrid', 'Lulu', 'Fluffy', 'Mouser'],
    apptMessage: function () {
        console.log(
            'Emain us at meetafriend@wayadpets.com to make an appointmemt to meet your new friend.'
        );
    },
};

// Debugging the code below

function dogMessage() {
    console.log(
        'Congrats!' + chosenPet + ', a great dog , is available for adoption!'
    );
    shelter.apptMessage();
}

function catMessage() {
    console.log(
        'Congrats!' + chosenPet + ', a great cat , is available for adoption!'
    );
    shelter.apptMessage();
}

if(shelter.dogs.includes(chosenPet)){
       dogMessage();
}else if(shelter.cats.includes(chosenPet)){
        catMessage();
}else {
    console.log('Its look like pet animel is not available' );
    console.log('Checkout our featured dog' + 
        shelter.dog[3] + ', checkout our featured cat' +
        shelter.cat[1]
    );
}