
function display(){
var num = document.getElementById("x").value;

//var n=parseInt(num);
if(num%1 !=0){
  document.write("enter a whole number");

}
else{
fizzbuzz(num);
}
}
function fizzbuzz(num){

var i=0;


  for(i=1;i<num;i++){
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
