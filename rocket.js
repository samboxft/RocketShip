/*
1.  <HTML> 
        <body class="body-state1">   <---now i can affect both the main body and the div called state1
2. <html> created divs with name state1
    state2, etc,
3.  created in css two options where state1 displays none ; the other where 
    body.body-state1 .state1{ display: block;}
    is displayed in blocked position.
4. <html> <-- make button called changeState(1) than in JS
5. the function changeState(2):  calls: document.body.className="body-state" + state;
     has parameter state if(2==state) inside it  timer  is made into a function setInterval that takes <h1> and places countdownNumber which is simply a counter that subtracts from 10 , -1 every second

*/


var timer = null;
var countdownNumber = 10;
var changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber - 1;
            document.getElementById('countDown').innerHTML = countdownNumber;

            if (countdownNumber <= 0) {
                changeState(3);
            };
        }, 1000)
    }
    else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log(randomNumber)
            if (randomNumber > 5) {
                changeState(4);
            } else {
                changeState(5);
            }
        }, 2000);
    };

};


