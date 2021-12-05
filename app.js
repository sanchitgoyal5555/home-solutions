
let btn= document.querySelector(".signupbtn");
btn.addEventListener("click",fun);
function fun(){
    this.textContent='You are Registered';
    document.getElementById("name").value=" ";
    document.getElementById("email").value=" ";
}

