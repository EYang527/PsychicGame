// Function generate random letter
var possibleLetter = "abcdefghijklmnopqrstuvwxyz";
var randomChar;
var letterToGuess;
var yourInput ="";
var inputArray=[];
var index = 0;


// initialization of values 
var guess = 9;
var losses = 0;
var wins = 0;
var guessSoFar = "";





letterToGuess = createRandom();
//alert("randomchar is  "+ randomChar + " index= "+index);


//=======================================================================

// Event Listening

document.addEventListener('keypress', (event) => {
    var keyName = event.key.toLowerCase();
    var sameID=-1;

    sameID=inputArray.indexOf(keyName);

   // console.log("sameID = " +sameID);
    //alert('keypress event\n\n' + 'key: ' + keyName);
    if (!(validateKey(keyName)) || (sameID>=0))
    {
        document.getElementById("message").innerHTML = "Key already entered or wrong key pressed";
        return 0;
    }
   

    if (keyName === randomChar) {
        document.getElementById("message").innerHTML = "You win !!!";
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;

        resetValues();
        return 1;
    }

    else {
        --guess;
        document.getElementById("guessLeft").innerHTML = "Guesses left: " + guess;


        if (guess <= 0) {
            document.getElementById("message").innerHTML = "You loose !!!";
            losses++;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            resetValues();
            return 0; //exit 

        }
         yourInput += keyName;
         inputArray.push(keyName);   //store wrong letter in array

       
        document.getElementById("yourGuess").innerHTML = "You Guesses so far : " + yourInput;
        yourInput = yourInput + ",";

    }
   

});

function createRandom() {
    index = Math.floor(Math.random() * possibleLetter.length+1);
    return randomChar = possibleLetter.charAt(index);
}

function resetValues() {
    
    console.log(yourInput);
    inputArray=[];
    letterToGuess = createRandom();
    guess = 9;
    document.getElementById("guessLeft").innerHTML = "Guesses left: " + guess;

    yourInput = "";
    console.log(yourInput);

    // alert("input in resetValues is "+yourInput);
    document.getElementById("yourGuess").innerHTML = "You Guesses so far : " + yourInput;
}

function validateKey(key){
   // alert("inside");   
    if ((key.search(/[^a-zA-Z]+/) === -1) || (!key==="Enter"))
    {
        //only characters        
        document.getElementById("message").innerHTML = "";
        console.log(key);
        return true;
    }
    else
    {
       //non characters        
       document.getElementById("message").innerHTML = "You can only enter [a-z]";

       return false;     
    }
    return false;
}
