let password = document.getElementById('btn');
let rangeInput = document.getElementById('len');
let p = document.getElementById('length');

// Display initial value
p.innerText = rangeInput.value;

function updateLength() {
    // Update value of p when range input changes
    p.innerText = rangeInput.value;
}
// Get all elements with class "b"


function generatePassword() {
   
    let length = rangeInput.value;

    let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseLetters = lowercaseLetters.toUpperCase();
    let numbers = '0123456789';
    let symbols = '@#$%^&*()`"?><';
    
    
  
 

    let char = "";
    
    if(document.getElementById('upper').checked){
        char += upperCaseLetters;
    }
    if(document.getElementById('lower').checked){
        char += lowercaseLetters;
    }
    if(document.getElementById('Number').checked){
        char += numbers;
    }
    if(document.getElementById('symbol').checked){
        char += symbols;
    }

    if(char === "") {
        // If no character set is selected, display a message
        document.getElementById('password').innerText = "Select any one Character Set";
        return;
    }

    let password = "";
    
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        password += char[randomIndex];
    }

    document.getElementById('password').innerText = password;
}

// Add event listeners
password.addEventListener('click', generatePassword);
rangeInput.addEventListener('input', updateLength);
