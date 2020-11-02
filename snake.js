var canvas=document.getElementById('canvas');
var snake,fruit;
var c=canvas.getContext('2d');
var  scale=10   ;
var rows=canvas.width / scale;
var coloumn=canvas.height / scale;
var x=0,y=0,dx=1,dy ;
var fx,fy;
var by;

function Snake(){
    this.x =0;
    this.y = 0;
    this.dx=scale*1;
    this.dy=0;
    this.fx=fx;
    this.fy=fy;
    this.total=0;
    this.tail=[];
this.scale=scale;
    this.update = function() {
        if(this.x==canvas.width){
            this.x=0;
        }
        if(this.y==canvas.height){
            this.y=0;
        }
        if(this.x<0){
            this.x=canvas.width;
        
        }
        if(this.y<0){
            this.y=canvas.height;
        }
        

      for(var i=0;i<this.tail.length;i++){
        this.tail[i]=this.tail[i+1];
    }
      this.tail[this.total-1]={x:this.x,y:this.y};
      

        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
        // console.log(this.fx);
        // console.log(this.fy);
        if(this.x ==this.fx && this.y ==this.fy){
            this.total++;

            console.log(this.fx);
            console.log(this.fy);
            snake.food();
            snake.fooddraw();

        }
        
    }

    this.draw = function(){ 
        c.clearRect(0,0,canvas.width,canvas.height);
        // c.clearRect(this.x-(this.total+1)*10,this.y-(this.total+1)*10,this.x,this.y);


        // fruit.draw();

        c.fillRect(this.x,this.y,10,10);


        for(var i=0;i<this.tail.length;i++){
            c.fillRect(this.tail[i].x,this.tail[i].y,10,10);
    //   console.log(this.tail[i].x);
         
              }
    }
    this.move=function(z){
        document.getElementById("demo").innerHTML = "The Unicode value is: " + z;
        switch(z){
            case 40 :
                this.dx=0;
                this.dy=scale*1;
                break;
            case 39 :
                this.dy=0
                this.dx=scale*1;
                break;
            case 37 :
                this.dy=0;
                this.dx=-scale*1;
                break;
            case 38 :
                this.dx=0;
                this.dy=-scale*1;
                break;        
        }
    } 
 
    this.food=function(){
        this.fx=(Math.floor(Math.random()*rows-1)+1)*scale;
    this.fy=(Math.floor(Math.random()*coloumn-1)+1)*scale;    

    }
    this.fooddraw=function(){
        c.fillRect(this.fx,this.fy,10,10);
        
    }
}   

snake=new Snake();


snake.food();



// food
var fx,fy;
// function Fruit(){
//     this.fx=fx;
//     this.fy=fy;
//     this.food=function(){
//         this.fx=(Math.floor(Math.random()*rows-1)+1)*2;
//     this.fy=(Math.floor(Math.random()*coloumn-1)+1)*2;    
//    console.log(this.fx);
//    console.log(this.fy);
//     }
//     this.fooddraw=function(){
//         c.fillRect(this.fx,this.fy,10,10);
//     }
// }
// fruit=new Fruit();


function raju(){
    // requestAnimationFrame(raju);   
         
    snake.update();
snake.draw();

snake.fooddraw();
}
// raju();
setInterval(raju, 150)
// requestAnimationFrame(ra)

  

  document.addEventListener("keydown",function keycode(event){    

    var z =event.which || event.keyCode;
    console.log(z);
    snake.move(z);
  
})






// var praveen={
//     jsj:"jos",
//     teju:function(){
//         console.log("hii")
//     }
// }
// praveen.teju();

// function snake{
// }

// function Snake(){
//   this.h="hii";
//   this.k=function(){
      
//   }
// }
// snake.k();
// var snake=new Snake();
// console.log(snake.h)