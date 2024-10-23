alert('test')


var chosenPet = 'Lulu';

var shelter = {
    dogs: ['Mackie', 'Bernice', 'Coolie Monster', 'Spot'],
    cats: ['Astrid', 'Lulu', 'Fluffy', 'Mouser'],
    apptMessage: function () {
        console.log(
            'Email us at meetafriend@wayadpets.com to make an appointmemt to meet your new friend.'
        );
    },
};

// Debugging the code below

function dogMessage() {
    console.log(
        'Congrats!' + chosenPet + ', a great dog , is available for adoption!'
    );
    shelter.Message();
}

function catMessage() {
    console.log(
        'Congrats!' + chosenPet + ', a great cat , is available for adoption!'
    );
    shelter.apptMessage();
}