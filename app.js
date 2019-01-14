//CALCULATOR
console.log("working");
var exit = false;

while(exit !== true){

    var start = prompt("Type 'A' for basic calculator, 'B' for advanced calculator or 'C' to exit");

    switch (start){
        
        case "A":
        //Basic calculator functions
        console.log("bc functions");
        break;

        case "B":
        //Advanced calculator functions
        break;


        //Exit app
        case "C":
        exit == true;
        break;
    }
}