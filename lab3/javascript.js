window.addEventListener('load',function () {


    
    
let dropdown = document.getElementById("dropdown");
let dropdownChildren = dropdown.children;    
let meny = document.getElementById("meny");
let canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 400;    
let context = canvas.getContext("2d");
let statusBar = document.getElementById("statusbar");   
let json = document.getElementById("json"); 
let selectColor = document.getElementById("colorList");
let inputColor = document.getElementById('input-color');
let addColor = document.getElementById('add-color'); 
let hexColors = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';
let userHex;    
    

let values = [];





let okColor=false;
inputColor.addEventListener('keyup',function(event){
    if(inputColor.value.match(hexColors) !== null){
        okColor = true;
        statusBar.innerHTML ="Godkänd färg!";
    }
    else if (inputColor.value == null || inputColor.value==""){
        okColor = false;
        statusBar.innerHTML="Ogiltig färgkod, försök igen";
    }
})
// Add Color to list
addColor.addEventListener('click',function(event){
    if (okColor === true){
        userHex = inputColor.value.toLowerCase();
        let newOption = document.createElement('option');
        newOption.value = userHex;
        newOption.innerHTML = userHex;
        selectColor.appendChild(newOption);
        statusBar.innerHTML ="Färg tillagd i listan";}
    else {
        statusBar.innerHTML = "Ogiltig färgkod"
    }
})



function getColor(){
    let c = document.getElementById('colorList').value;
    return c;
}

selectColor.addEventListener('change', function(event){
    context.strokeStyle = getColor();
})    


//rita triangel

let triangle = document.getElementById('triangle');
triangle.addEventListener('click', function(event){
    ritaT();
});

triangle.addEventListener('mouseover',function(event){
    statusBar.innerHTML = "Rita triangel med tre klick på canvas";
})

let ritaT = function(){
    let click = 0;
    canvas.addEventListener('click', function acl(event) {
    let rect = canvas.getBoundingClientRect();
    click++;
    
    if (click === 1) {
        x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x1, y1, 1, 1);
        context.beginPath();
        context.moveTo(x1, y1);
        statusBar.innerHTML = "Två klick till!";
         abortBtn(acl);  
        
    } 
    
    if (click === 2) {
        x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x2, y2, 1, 1);
        context.lineTo(x2, y2);
        statusBar.innerHTML = "Ett klick till!";
         abortBtn(acl);  
    }
    
    if (click === 3) {
        x3 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y3 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x3, y3, 1, 1);
        context.lineTo(x3, y3);
        context.closePath();
        context.stroke();
        statusBar.innerHTML = "Färdig triangel!";
    }
});
}

// rita rektangel

let rectangle = document.getElementById('rectangle');
rectangle.addEventListener('click', function(event){
    ritaR();
});

rectangle.addEventListener('mouseover', function (event){
    statusBar.innerHTML = "Rita rektangel med två klick på canvas";
})
let ritaR = function(){
        let click = 0;
        canvas.addEventListener('click', function acl(event){
        let rect = canvas.getBoundingClientRect();
        click++;
        
        if(click === 1){
        x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x1, y1, 1, 1);
        context.beginPath();
        statusBar.innerHTML = "Ett klick till!";
        abortBtn(acl);      
        }
        if (click === 2) {
        x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.rect(x1,y1,x2-x1,y2-y1);
        context.stroke();   
        statusBar.innerHTML = "Färdig rektangel!";
    }
    })
}


// rita cirkel

let circle = document.getElementById('circle');
circle.addEventListener('click', function(event){
    ritaC();
});

circle.addEventListener('mouseover', function(event){
    statusBar.innerHTML = "Rita en cirkel med två klick på canvas!";
    
})

let ritaC = function(){
    let click = 0;
    canvas.addEventListener('click', function acl(event){
     let rect = canvas.getBoundingClientRect();
        click++;
        
        if (click === 1){
            x1 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y1 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        context.fillRect(x1, y1, 1, 1);
        context.beginPath(); 
        statusBar.innerHTML = "Ett klick till!";  
        abortBtn(acl);  
        }
        
       if (click === 2) {
        x2 = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        y2 = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        let r = Math.sqrt(Math.pow((x2 - x1),2) +Math.pow((y2 -y1),2));   
        context.arc(x1,y1,r,0,2*Math.PI);
        context.stroke();
        statusBar.innerHTML = "Färdig cirkel!";  
           
       }
    })
}


//rensa canvas

let deleteCanvas = document.getElementById('deleteCanvas');
deleteCanvas.addEventListener('click', function(event){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
})
deleteCanvas.addEventListener('mouseover', function(event){
    let statusBar = document.getElementById('statusbar');
    statusBar.innerHTML = "Click to Clear Canvas"
})
deleteCanvas.addEventListener('click', function(event){
    let statusBar = document.getElementById('statusbar');
    statusBar.innerHTML = "Done!"
})

//avbryt canvas
let abortCanvas = document.getElementById('abortCanvas');

function abortBtn(funC){
    abortCanvas.addEventListener('click', function(event){
    canvas.removeEventListener('click', funC);
})
    
}



//statusbar vad händer text
    
meny.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att visa menyn";
});
    
meny.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
}); 
    
canvas.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att rita på canvas";
});
    

    
canvas.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
});     

    
rectangle.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att rita rektangel";
});
    
rectangle.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
});     
    
circle.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att rita cirkel";
});
    
circle.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
}); 
    
triangle.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att rita triangel";
});
    
triangle.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
}); 
    
deleteCanvas.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att ta bort allt på canvas";
});
    
deleteCanvas.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
}); 
    
abortCanvas.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att  avbryta canvas";
});
    
abortCanvas.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
});     
    
json.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att exportera till json";
});
    
json.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
});     

colorpicker.addEventListener("mouseenter", function(event){
    statusBar.innerHTML = "Klicka här för att välja färg";
});
    
colorpicker.addEventListener("mouseleave", function(event){
    statusBar.innerHTML = "Status";
});       
    
dropdown.style.display = "none";

meny.addEventListener("click", function(event){
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block"; 
    } else {
    dropdown.style.display = "none";
        }
});
    
  



}); 