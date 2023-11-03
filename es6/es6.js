
const form = document.forms.myform
// const forms=document.getElementById('myform');
// const name=document.getElementById('name');
// const password=document.getElementById('password');
// const error=document.getElementById('error');
const nameInput = form.name;
const passInput = form.password

nameInput.addEventListener('input', () => {
    if (nameInput.value.length > 4) {
      nameInput.style.border = "1px solid green";
      error.style.display="none"
    } else {
      nameInput.style.border = "1px solid red";
    }
  });

  passInput.addEventListener('input', () => {
    if (passInput.value.length === 8) {
      passInput.style.border = "1px solid green";
      passerror.style.display="none"
    } else {
      passInput.style.border = "1px solid red";
    }
  });

form.addEventListener('submit',(e)=>{
    let messages = []
    let passmessages = []
    if(nameInput.value==="" || nameInput.value ===null){
        messages.push("name is required")
        error.innerHTML=messages.join(", ");
        nameInput.style.border="1px solid red"
        e.preventDefault()

    }
    else{
        error.style.display="none"
        nameInput.style.border="1px solid green"
    }
    
    if(passInput.value.length<8 || passInput.value ===""){
       
        passmessages.push("password must be upto 8 characters")
        passInput.style.border="1px solid red"
        passerror.innerHTML=passmessages.join(", ");
        e.preventDefault()
    }
    
})
