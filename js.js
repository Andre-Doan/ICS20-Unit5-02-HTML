  document.getElementById("guess").onclick = function(){
  let x = document.getElementById("numbersubmit").value;
  if(x == 0)
   {
       alert("This number is neutral");
   }
   else if(x > 0)
   {
       alert("this number is positive ");
   }
   else
   {
       alert("This number is negative");
   }
};