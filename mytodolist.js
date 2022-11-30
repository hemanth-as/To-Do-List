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

function displayList(){
    const xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let thelist = JSON.parse(this.responseText);

            task(thelist);
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function task(list){
    document.getElementById("view").style.display="none";

    let table="<thead><tr><th>My Tasks</th><th>Status</th></tr></thead>";
    for(let i=0;i<list.length;i++){
        table+="<tr>";
        if(list[i].completed==true){
            table+="<td>"+list[i].title+"</td><td><input type=checkbox checked disabled></td>";
        }
        else{
            table+="<td>"+list[i].title+"</td><td><input type=checkbox name=check onclick=counter()></td>";
        }
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("mylist").innerHTML=table;
}

function counter(){
    var i=0;
    var count= 0;
    check= document.getElementsByName("check");
    for(i=0;i<check.length;i++){
        if(check[i].checked==true){
            count+=1;
            console.log(count);
        }
    }
    if (count==5){
        alert(" Congrats! Successfully completed 5 tasks");
    }
}