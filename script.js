const passBox = document.getElementById('passBox');
const sliderBox = document.getElementById("sliderBox");
const sliderValue = document.getElementById('slidervalue');
const upperCase = document.getElementById('chose-up');
const lowerCase = document.getElementById('chose-l');
const numberCase = document.getElementById('chose-n');
const specialCase = document.getElementById('chose-s');
const genbtn = document.getElementById('genbtn');
const copy=document.getElementById('copy');
const message=document.getElementById('message');




copy.addEventListener('click', () => {
    const textToCopy = passBox.value;

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            
                message.style.display = "block";
                setTimeout(() => {
                    message.style.display = "none";
                }, 1000);
            
            
    } else {
        message.style.display = "none";
    }
});


sliderValue.textContent = sliderBox.value;

sliderBox.addEventListener('input', () => {
    sliderValue.textContent = sliderBox.value;
});

genbtn.addEventListener('click', () => {
    passBox.value = generatePassword();
    
});


let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialcase = "!@#$%^&*";

function generatePassword() {
    let genpass = "";
    let allchar = "";

    allchar += upperCase.checked ? uppercase : "";
    allchar += lowerCase.checked ? lowercase : "";
    allchar += numberCase.checked ? number : "";
    allchar += specialCase.checked ? specialcase : "";

   
    if (allchar === "") {
        return "Please select at least one option!";
    }

    for (let i = 0; i < sliderBox.value; i++) {
        genpass += allchar.charAt(Math.floor(Math.random() * allchar.length));
    }

    return genpass;
}


