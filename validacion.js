document.getElementById('studentForm').addEventListener('submit', function(event)){
    let valid = true;

    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if(name.length<3){
        nameError.textContent = "El nombre debe contener al menos 3 caracteres.";
        valid = false;

    }else{
        nameError.textContent="";
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email').value;
    const emailPattern =/^[^]+@[^]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email)){
        emailError.textContent = "Introduce un email valido."
    }else{
        emailError.textContent = "";
    }
    const age = document.getElementById('age').value;
    const ageError = document.getElementById('ageError');
    if(age < 10 || age > 99){
        ageError.textContent = "La edad debe estar entre los 10 y 99 años";
        valid= false;
    }else{
        ageError.textContent="";
    }
    if(!valid){
        event.preventDefault();
    }
}