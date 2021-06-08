

let count = 0;

function onClickCounter() {

    count += 1;

    document.getElementById("counter").innerHTML = "Count: " +count;

}

function onClickReset() {

    count = 0;

    document.getElementById("counter").innerHTML = "Count: " +count;

}