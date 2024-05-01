


let password = document.getElementById('btn');
function gg(e){
        e.preventDefault();
        let length = document.getElementById('len').value;
        let p = document.getElementById('length');
        p.innerText = length;
    
        let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        let upperCaseLetters = lowercaseLetters.toUpperCase(lowercaseLetters);
        let numbers = '0123456789'
        let symbols = '@#$%^&*';
        
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
    
        let password = "";
        
    
        for(let i = 0;i < length;i++){
            const randomIndex = Math.floor(Math.random() * char.length);
            console.log(randomIndex)
            password += char[randomIndex]
        }
    
        document.getElementById('password').innerText = password;
    
    }
    // let length = document.getElementById('length').value;
   

password.addEventListener('click',gg)




