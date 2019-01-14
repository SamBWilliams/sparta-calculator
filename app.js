//CALCULATOR
console.log("working");
var useCalculator = true;

while(useCalculator){

    var start = prompt("Type 'A' for basic calculator, 'B' for advanced calculator or 'C' to exit");
    //alert("xdgdfhg")
    switch (start){
        
        case "A":
        //Basic calculator functions
        console.log("bc functions");
        var useBasicCalculator = true;

        while(useBasicCalculator){

            var bcOperators = prompt("Type 'A' for addition\n 'B' for subtraction\n 'C' for multiplication\n 'D' for division\n 'E' for main menu");

            switch (bcOperators){

                //Addition
                case "A":
                alert("Addition")
                var num1Input = parseInt(prompt("Enter first number: "), 10);
                var num2Input = parseInt(prompt("Enter second number: "), 10);

                alert(addNumbers(num1Input, num2Input));

                function addNumbers(num1,num2){
                   return num1 + num2;
                }
                break;

                //Subtraction
                case "B":
                alert("Subtraction")
                var num1Input = parseInt(prompt("Enter first number: "), 10);
                var num2Input = parseInt(prompt("Enter second number: "), 10);

                alert(subtractNumbers(num1Input, num2Input));

                function subtractNumbers(num1,num2){
                   return num1 - num2;
                }
                break;

                //Multiplication
                case "C":
                alert("Multiplication")
                var num1Input = parseInt(prompt("Enter first number: "), 10);
                var num2Input = parseInt(prompt("Enter second number: "), 10);

                alert(timesNumbers(num1Input, num2Input));

                function timesNumbers(num1,num2){
                   return num1 * num2;
                }
                break;

                //Division
                case "D":
                alert("Division")
                var num1Input = parseFloat(prompt("Enter first number: "));
                var num2Input = parseFloat(prompt("Enter second number: "));

                alert(divNumbers(num1Input, num2Input));

                function divNumbers(num1,num2){
                   return num1 / num2;
                }
                break;

                case "E":
                useBasicCalculator = false;
                break;

                
            }



        }



        break;

        case "B":
        //Advanced calculator functions
        break;


        //useCalculator app
        case "C":
        useCalculator = false;
        break;
    }
    
}