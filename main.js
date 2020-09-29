var doCoolStuff = function () {
    var currentClassName = document.getElementById("cool").className;

    if (currentClassName == "cool") {
        document.getElementById("cool").className = "cool red";
    }
    else {
        document.getElementById("cool").className = "cool";

    }
}



/*
1. in html created div with class cool and id cool
2  in html created link to var doCoolStuff()
3  in css created 2 selectors .cool and 
.cool.red
    assigned color and transition in .cool selector
4. created in js a var/function do coolStuff:
    a: created var=className;
    b: got div by document.getElementById('cool') 
    c: we assign to it a class using: document.getElementById('cool').className<---
    d: make an if statement  (currentClassName==cool)
    where we get the element document.getElementById('cool') and use the selector .className="color red"  <--in css color.red
    d: make an else option stating, if currentClassNames is  'cool red'   switch it to 'cool

*/

let car = {
    make: 'VW',
    type: 'polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: ['seat1', 'seat2', 'seat3', 'seat4'],
    turnOn: function () {
        this.isTurnedOn = true;
    },
    fly: function () {
        alert('fly');
    },
    switchCar: function (isOn) {
        console.log('turn car' + isOn)
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
};



