//CALCULATOR
console.log("working");
var useCalculator = true;

while(useCalculator){

    var mainMenu = prompt("Type:\n 'A' for basic calculator\n 'B' for advanced calculator\n 'E' to exit");

    switch (mainMenu){
        //Basic calculator functions
        case "A":
        var useBasicCalculator = true;

        while(useBasicCalculator){

            var basicMenu = prompt("Type:\n 'A' for addition\n 'B' for subtraction\n 'C' for multiplication\n 'D' for division\n 'E' for main menu");

            switch (basicMenu){

                //Addition
                case "A":
                alert("Addition")
            
                numInput();
                var addNumbers = (num1,num2) => num1 + num2;

                alert(addNumbers(n1,n2));
                break;

                //Subtraction
                case "B":
                alert("Subtraction")

                numInput();
                var subNumbers = (num1,num2) => num1 - num2;

                alert(subNumbers(n1,n2));
                break;

                //Multiplication
                case "C":
                alert("Multiplication")
                
                numInput();
                var timesNumbers = (num1,num2) => num1 * num2;

                alert(timesNumbers(n1,n2));
                break;

                //Division
                case "D":
                alert("Division")
                
                numInput();
                var divNumbers = (num1,num2) => num1 / num2;

                alert(divNumbers(n1,n2));
                break;

                //Exit to main
                case "E":
                useBasicCalculator = false;
                break;  
            }

            //Input function
            function numInput(){
                n1 = parseFloat(prompt("Enter first number: "));
                n2 = parseFloat(prompt("Enter second number: "));
            }
        }
        break;

        //Advanced calculator functions
        case "B":
        var useAdvancedCalculator = true;

        while (useAdvancedCalculator){
            var advancedMenu = prompt("Type:\n 'A' for BMI\n 'B' for Temp conversion\n 'E' for main menu");

            switch(advancedMenu){

                //BMI
                case "A":
                alert("BMI");

                var weight = parseFloat(prompt("Enter weight in kilos: "));
                var height = parseFloat(prompt("Enter height in meters: "));

                alert(bmi(weight,height));
                function bmi(w,h){
                    return w / h*h;
                }
                break;

                //Fahrenheit to celcius
                case "B":
                alert("Fahrenheit to Celcius");

                var fah = parseFloat(prompt("Enter temperature in fahrenheit: "));
                alert(fToC(fah));

                function fToC(f){
                    return (fah - 32)*(5/9);
                }
                break;

                //Exit to main
                case "E":
                useAdvancedCalculator = false;
                break;
            }
        }
        break;

        //Exit app
        case "E":
        useCalculator = false;
        break;
    }
    
}