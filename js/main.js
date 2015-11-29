
function display(){
var num = document.getElementById("x").value;

var n=parseInt(num);

fizzbuzz(n);
}
function fizzbuzz(n){

var i=0;

for(i=1;i<n;i++){
     if((i%5)==0 && (i%3)==0){
        document.write("fizzbuzz"+"<br>");
      }
      else if((i%5)==0){
        document.write("buzz"+"<br>")
       }
     else if((i%3)==0){
        document.write("fizz"+"<br>")
       }
      else{
        document.write(i+"<br>");
       }
}

}


