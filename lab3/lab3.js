document.addEventListener('DOMContentLoaded',function (event) {

let x = 11;
    console.log(x);
    
}); // Laddning av dom, avslutning


    //rita rektangeln
    //rita cirkeln
    //rita triangeln
    //avbryt canvas
    //delete canvas
    //exportera till json
    

//för att få fram mouseposition
/*function getMousePosition(canvas,event){
     let rectangle = canvas.getBoundingClientRect();
   return {
     x: event.clientX - rectangle.left,
     y: event.clientY - rectangle.top
   };
}

//skapa en lista (tom) som man sparar alla klick i



var trianglePressed = false;
canvas.getContext();
*/
/*
canvas.addEventListener("click", function(event) {
   let mousePos = getMousePosition(canvas, event);
     clickList.push(mousePos);
if (trianglePressed === true) {
if (clickList.length === 1) {
               log1.innerHTML = "Klicka för välja triangelns andra punkt.";
           } if (clickList.length === 2) {
               log1.innerHTML = "Klicka för välja triangelns tredje punkt.";
           }
} //lägg till else if om cirkel/triangle osv
    else {
               let nyTri = new Triangle(clickList[0].x,clickList[0].y,clickList[1].x,clickList[1].y,clickList[2].x,clickList[2].y)
               nyTri.rita();
       
console.log(clickList[0].x) 
console.log(clickList[0].y)
*/
//spara alla knappar i en variabel
//skapa ny variabel som finns när man klickar på "rectangle" 
//add eventlistener = true (ifsats)
//funktion för att nolla listan



/*
//funktionen för att rita en triangel  spara I TRIANGELFUNKTIONEN
function Triangle (x1, y1, x2, y2, x3, y3) {
       this.x1 = x1;
       this.y1 = y1;
       this.x2 = x2;
       this.y2 = y2;
       this.x3 = x3;
       this.y3 = y3;
    
    
this.rita = function() {
           context.beginPath();
           context.strokeStyle = this.color;
           context.moveTo(this.x1, this.y1);
           context.lineTo(this.x2, this.y2);
           context.lineTo(this.x3, this.y3);
           context.closePath();
           context.stroke();
       };
}*/