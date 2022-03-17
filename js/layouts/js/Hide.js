// Hide password part
const passFiled = document.querySelector(".form input[type='password']"),
	  tagLeBtn = document.querySelector(".form .field i");

tagLeBtn.onclick = ()=>{
    if (passFiled.type == "password"){
	    passFiled.type = "text";
	    tagLeBtn.classList.add("active");
    }else{
	    passFiled.type = "password";
	    tagLeBtn.classList.remove("active"); 
    }
} 

const errorText = document.querySelector('.error-txt');

if(res.status === 200) errorText.style.display = "block";
