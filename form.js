let form=document.getElementById("loginform");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let username=document.getElementById("username").value ;
    let password=document.getElementById("password").value ;
    let remember=document.getElementById("remember").checked ;
    let role = document.getElementById("role");
    let about = document.getElementById("about").value;
    document.getElementById("output").innerHTML =

    ` username:${username}<br>
      password:${password}<br>
      remember:${remember}<br>
      role Index:${role.selectedIndex}<br>
      role Value:${role.value}<br>
      about:${about}

`

    
});