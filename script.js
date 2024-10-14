// gsap.from("#navigation-bar",{
//     opacity: 0,
//     duration : 3,
//     delay:0.6,
//     y:-20
// })

const scrollContainer = document.querySelector(".user-feedback");
scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})


let hr = 17;
let min = 52;
let sec = 59 ;
let count = 100;
let timer = true



window.addEventListener("DOMContentLoaded", function(){
    timer = true
    coundown();
})
function coundown(){
    if(timer == true)
        count = count - 1;

    if(count == 0){
       sec = sec -1;
        count = 100;
    }
    if(sec == 0){
        min = min - 1;
        sec = 59;
    }

    if(min == 0){
        hr -= 1;
        min = 59;
        sec = 59;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let countString = count; 

    if(hr < 10 ){
        hrString = "0" + hrString;
    }
    if(min < 10){
        minString = "0" + minString;
    }
    if(sec < 10){
        secString = "0" + secString;
    }
    // if(count < 10){
    //     countString = "0" + countString;
    // }

    document.querySelector("#hr").innerHTML = hrString + " : ";
    document.querySelector("#min").innerHTML = minString + " : ";
    document.querySelector("#sec").innerHTML= secString;
    // document.querySelector("#count").innerHTML = countString;


    setTimeout("coundown()",10)
}


let email = document.querySelector("#email");
let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let flag = 1;

function form_validation(){
  
    if(email.value == ""){
        document.querySelector("#email_error").innerHTML = "Email can't be empty!";
        flag = 0;
    }else{
        document.querySelector("#email_error").innerHTML = "";
        flag = 1;
    }

    if(first_name.value == ""){
        document.querySelector("#first_name_error").innerHTML = "First name required";
        flag = 0;
    }
    else{
        document.querySelector("#first_name_error").innerHTML = "";
        flag = 1;
    }
    
    if(last_name.value == ""){
        document.querySelector("#last_name_error").innerHTML = "Last name required";
        flag = 0;
    }
    else{
        document.querySelector("#last_name_error").innerHTML = "";
        flag = 1;
    }
    
    if(flag){
        document.querySelector("#data").innerHTML = "Form Submitted";
        return true;
    }else{
        return false;
    }
 
}





