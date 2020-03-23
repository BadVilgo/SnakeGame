let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");
let position = ['100','100'];
let x = parseInt(position[0]);
let y = parseInt(position[1]);
let lastPosition = [];
let tail = [];
let bgSng = document.getElementById('bcgSong');
let sSng = document.getElementById('scrSound');
let dead = document.getElementById('dead');
sSng.volume = 0.4;

//wąż bez ruchu
function start() {
    ctx.fillStyle = "limegreen"; //rysuje new
    ctx.fillRect(x, y, 10, 10); 
    bgSng.play();
}

//przechodzenie przez ściany
function wall(){
    if(x>290){
        x = 0;
    }
    if(x<0){
        x = 290;
    }
    if(y>290){
        y = 0;
    }
    if(y<0){
        y = 290;
    }
}

//jedzenie węża
function random(){
   return Math.floor(Math.random()*29+1)*10;
} 

let food = [random(),random()];
ctx.fillStyle = "red"; //rysuje new
ctx.fillRect(food[0], food[1], 10, 10); 

function generateFood(){
    food.pop();
    food.pop();
    food.push(random());
    food.push(random());
    ctx.fillStyle = "red"; //rysuje new
    ctx.fillRect(food[0], food[1], 10, 10); 
}

//score
let score=0;
document.getElementById('score').innerHTML="Score: ";
function addScore(){
    if(food[0] === position[0] && food[1] === position[1]){
        console.log(food+" food x,y");
        console.log(position+ " snake x,y");
        score++;
        sSng.play();
        document.getElementById('score').innerHTML="Score: "+score;
        generateFood();
    }
}

//dodawanie ogona
function addTail(){
    tail.unshift([lastPosition[0],lastPosition[1]]); 
    tail.splice(score+1);
    ctx.fillStyle = "#3e3e3e"; //usuwa poprz
    ctx.fillRect(tail[score][0], tail[score][1], 10, 10);
}

//ugryzienie ogona
function canibal(){
    for(let i = 0; i<= score; i++){
        if(position[0]==tail[i][0] && position[1] == tail[i][1]){
            dead.play();
            ctx.font = "25px Arial bold";
            ctx.fillStyle = 'yellow';
            ctx.fillText("You have bitten your tail!", 10, 100);
            ctx.fillText("Try one more time", 10, 140);
            setInterval(function(){ 
                location.reload(); 
            }, 1500);
        }
    }
}

//wąż ruch
//prawo x+10,y//do dokończenia sob
function right(){
        lastPosition[0] = x;
        lastPosition[1] = y;
        x=x+10;
        wall();
        position.shift(); //zabieram z array
        position.unshift(x); //push array
        ctx.fillStyle = "limegreen"; //rysuje new
        ctx.fillRect(x, y, 10, 10); 
        addScore();
        addTail(); 
        canibal()
}

//lewo x-10,y//
function left(){
    lastPosition[0] = x;
    lastPosition[1] = y;
    x=x-10;
    wall();
    position.shift(); //zabieram z array
    position.unshift(x); //push array
    ctx.fillStyle = "limegreen"; //rysuje new
    ctx.fillRect(x, y, 10, 10); 
    addScore();
    addTail(); 
    canibal() 
}

//góra x,y-10//
function up(){
    lastPosition[0] = x;
    lastPosition[1] = y;
    y=y-10;
    wall();
    position.pop(); //zabieram z array
    position.push(y); //push array
    ctx.fillStyle = "limegreen"; //rysuje new
    ctx.fillRect(x, y, 10, 10); 
    addScore();  
    addTail();
    canibal()
}

//dół x,y+10
function down(){
    lastPosition[0] = x;
    lastPosition[1] = y;
    y=y+10;
    wall();
    position.pop(); //zabieram z array
    position.push(y); //push array
    ctx.fillStyle = "limegreen"; //rysuje new
    ctx.fillRect(x, y, 10, 10); 
    addScore();  
    addTail();
    canibal()
}

let downInt;
let rightInt;
let upInt;
let leftInt;

document.onkeydown = checkKey;
function checkKey(e) {
    if (e.keyCode == '38') {
        // up arrow
        clearInterval(leftInt);
        clearInterval(upInt);
        clearInterval(downInt);
        clearInterval(rightInt);
        upInt = setInterval(up,120);
    }
    else if (e.keyCode == '40') {
        //down();
        clearInterval(leftInt);
        clearInterval(upInt);
        clearInterval(downInt);
        clearInterval(rightInt);
        downInt = setInterval(down,120);
        
    }
    else if (e.keyCode == '37') {
       // left arrow
       clearInterval(leftInt);
       clearInterval(upInt);
       clearInterval(downInt);
       clearInterval(rightInt);
       leftInt = setInterval(left,120);
    }
    else if (e.keyCode == '39') {
        //right();
        clearInterval(leftInt);
        clearInterval(upInt);
        clearInterval(downInt);
        clearInterval(rightInt);
        rightInt = setInterval(right,120);
    }
}






