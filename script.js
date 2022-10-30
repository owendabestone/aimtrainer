class ballon{
    constructor( height, width,id){
        this.height = height;
        this.width = width;
        this.id = id;
    }

    // pop(){
    //     score ++;
    //     document.getElementById("score").innerHTML = "Score: " + score;
    // }

    display(){
        const btn = document.createElement("button");

        btn.setAttribute('style',
        `position:fixed; bottom: ${this.height}%; right: ${this.width}%`);

        btn.setAttribute("onclick",
        `delete_(${this.id})`);

        btn.setAttribute(
        `id`,`${this.id}`);

        btn.setAttribute(
            `z-index`,2);
        return btn
    }
    
}
var score = 0;
var number_balloons = 0;

document.addEventListener("keydown", function(event) {
    if (event.key == "q") {
    alert("stopped");
    }});


function reset(){
    document.getElementById("score").innerHTML = "Score: " + 0;
    make_ballons()
}
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }

 function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
(async function make_ballons(){
    for (var i = 1; i < 10000; i++) {
        pos1 = 20+ Math.random()*60 ;
        pos2 = 20+ Math.random()*60;
        id_ = number_balloons;
        var balloon_ = new ballon(pos1, pos2, id_);
        console.log(balloon_.height, balloon_.width);
        ballon_html = balloon_.display();
        document.getElementById("balloons").appendChild(ballon_html);
        number_balloons ++;
        await delay(1000);

    }

})()

function delete_(id){
    const balloons = document.getElementById("balloons");
    const popped_balloon = document.getElementById(id);
    console.log(popped_balloon);
    balloons.removeChild(popped_balloon);
    score ++
    document.getElementById("score").innerHTML = "Score: " + score;
}


