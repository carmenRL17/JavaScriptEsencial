
var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
 //var input =null;
function countPositivesSumNegatives(input) {
  
    let nuevoArr = [0, 0];
    
    if(input === null || input.length ===0){
     return [];
    }
     for(let i=0; i<input.length; i++){
         if(input[i]>0){
             nuevoArr[0] +=1; 
 
         }else if(input[i] < 0){
             nuevoArr[1]= nuevoArr[1] + input[i];        
             
         } 
     }
   
    return nuevoArr;
 
   
}