let display = document.getElementById("display");
let tombol = document.querySelectorAll(".btn");

for(let i = 0; i < tombol.length; i++){
    tombol[i].addEventListener("click", function(){
        let nilai = tombol[i].value;
        if(nilai == "="){
            display.value = eval(display.value);
        }else if(nilai == "C"){
            display.value = "";
        }else{
            display.value += nilai;
        }
    });
}
document.addEventListener("keydown", function(event){
    let tombol = event.key;
    if((tombol >= "0" && tombol <= "9") || tombol == "*" || tombol == "/" || tombol == "+" || tombol == "-"){
        display.value += tombol;
    }else if(tombol == "Enter"){
        display.value = eval(display.value);
    }else if(tombol == "Backspace"){
        display.value = display.value.slice(0,-1);
    }else if(tombol == " "){
        display.value = "";
    }
})