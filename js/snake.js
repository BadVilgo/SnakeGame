let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");
let position = ['100','100'];
let x = parseInt(position[0]);
let y = parseInt(position[1]);
let lastPosition = [];
let tail = [];

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
ctx.fillStyle = "yellow"; //rysuje new
ctx.fillRect(food[0], food[1], 10, 10); 

function generateFood(){
    food.pop();
    food.pop();
    food.push(random());
    food.push(random());
    ctx.fillStyle = "yellow"; //rysuje new
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
        document.getElementById('score').innerHTML="Score: "+score;
        generateFood();
    }
}

//wąż bez ruchu
ctx.fillStyle = "limegreen"; //rysuje new
ctx.fillRect(x, y, 10, 10); 

//dodawanie ogona
function addTail(){
    tail.unshift([lastPosition[0],lastPosition[1]]); 
    tail.splice(score+1);
    ctx.fillStyle = "#3e3e3e"; //usuwa poprz
    ctx.fillRect(tail[score][0], tail[score][1], 10, 10);
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






