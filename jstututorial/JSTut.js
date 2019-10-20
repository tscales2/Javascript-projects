
//madlib generator
let mLText = "My dear old ~ sat me down to hear some words of wisdom: \n 1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. He who ~ at the right time can ~ again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";
 //convert string into array
let mLArray = mLText.split(" ");

//create array for user input
let inputArray = [];

function madlibGenerator(){
    createInputArray();
    if(checkForMissingInput()){
        document.getElementById("output1").value= "Enter all values please";
    }
    else{
        createMLSentence();
    }
}
function createInputArray(){
    for(i =0; i<= 13; i++){
        inputArray[i] = document.getElementById("i" + i).value;
    }
}
function checkForMissingInput(){
    let defaultArrayValues = ["Person", "Noun", "Verb","Adjective","Plural Verb","Body Part","Event" ];
    for(i =0; i < inputArray.length; i++){
        if(defaultArrayValues.indexOf(inputArray[i]) > -1){
            return true;
        }
    }return false;
}

function createMLSentence(){
    let arrIndex = 0;
    for(i=0; i < mLArray.length; i++ ){
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    }
    document.getElementById("output1").value= mLArray.join(" ");
}