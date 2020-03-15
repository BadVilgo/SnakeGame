let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");
let position = ['0','100'];
let x = parseInt(position[0]);
let y = parseInt(position[1]);

//prawo x+10,y
function right(){
    setInterval(function righty(){ 
        //console.log(x,y,position);
        x = parseInt(position[1]);
        for(let i=x; i<=x+10; i=i+10){ 
                position.pop(); //zabieram z array
                position.push(i); //push array
                ctx.fillStyle = "red"; //rysuje new
                ctx.fillRect(x, y, 10, 10); 
                ctx.fillStyle = "black"; //usuwam poprz
                ctx.fillRect(x-10, y, 10, 10);          
        }
    }, 500);
    if (e.keyCode == '38' || '40' || '37') {
        clearInterval(righty);
    }

    
}


//dół x,y+10
function down(){
    setInterval(function downy(){ 
        //console.log(x,y,position);
        y = parseInt(position[1]);
        for(let i=y; i<=y+10; i=i+10){ 
                position.pop(); //zabieram z array
                position.push(i); //push array
                ctx.fillStyle = "red"; //rysuje new
                ctx.fillRect(x, y, 10, 10); 
                ctx.fillStyle = "black"; //usuwam poprz
                ctx.fillRect(x, y-10, 10, 10);          
        }
    }, 500);
}
//down();

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        
       
        down();
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
        
        right();
    }

}



/**
array=[x,y]

onClick lewo{
    funcja lewo(){
        interval co 0,5{
            x zostaje, do y dodaje 10
            pushnij do array
            narysuj
        }
    }
        
}
array=[20,50]

onClick dół{
    funkcja dół(){
        interval co 0,5{
            x dodaje 10, y zostaje
            pushnij do array
            narysuj
        }
    }
}




//////////////

//prawo x+10,y
function right(){
    setInterval(function snakeGo(){ 
        j=j+10;
        console.log(position);
        for(let i=0; i<=j; i=i+10){ 
            if(j>=250){
                clearInterval(snakeGo);
            }else{
                position.shift();
                position.unshift(i);
                ctx.fillStyle = "red";
                ctx.fillRect(position[0], position[1], 10, 10); 
                ctx.fillStyle = "black";
                ctx.fillRect(position[0]-10, position[1], 10, 10);
            }
        }
    }, 500);
}
//right();






















//prawo22
setInterval(function snakeGo(){ 
    j=j+10;
    if(j>=250){
        clearInterval(snakeGo);
    }else{
        for(let x=0; x<=j; x=x+10){
            ctx.fillStyle = "red";
            ctx.fillRect(x, 100, 10, 10);   
        }
        
        for(let x=0; x<=j; x=x+10){
            ctx.fillStyle = "black";
            ctx.fillRect(x-10, 100, 10, 10); 
        }
    }
}, 500);
//dół
setInterval(function snakeGo(){ 
    j=j+10;
    if(j>=250){
        clearInterval(snakeGo);
    }else{
        for(let x=0; x<=j; x=x+10){
            ctx.fillStyle = "red";
            ctx.fillRect(100, x, 10, 10);   
        }
        
        for(let x=0; x<=j; x=x+10){
            ctx.fillStyle = "black";
            ctx.fillRect(100, x-10, 10, 10); 
        }
    }
}, 500);

 */

