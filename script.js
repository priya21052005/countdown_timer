var deadline = new Date("may 20, 2024 15:37:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML =days ;
    document.querySelector(".hours").innerHTML =hours;
    document.querySelector(".minutes").innerHTML = minutes; 
    document.querySelector(".seconds").innerHTML = seconds; 
    if (t < 0) {
        clearInterval(x);
        document.getElementById("clockdiv").innerHTML = "EVENT HAS STARTED";
    }
}, 1000);
