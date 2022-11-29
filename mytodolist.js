function checkLogin(credentials){
    let username= document.getElementById("username");
    let password= document.getElementById("password");
    credentials(username,password);
}

function validate(username,password) {
    if(username.value==""||password.value==""){
        alert("Fields are empty");
        return false;
    }
    else if(username.value!="admin"){
        alert("Incorrect username");
        return false;
    }
    else if(password.value!="12345"){
        alert("Incorrect password");
        password.style.border="2px solid red";
        return false;
    }
    else if(username.value=="admin"||password.value=="12345"){
        document.querySelector("form").action = "./mytodolist.html";
    }
    else {alert("invalid login")}
}

function login(){
    checkLogin(validate);
}