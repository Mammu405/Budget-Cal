function movetoreg(){
    window.location='./register.html'
}
function movetologin(){
    window.location='./index.html'
}
function Signup(){
    const user={
        username:r_user.value,
        email:r_email.value,
        password:r_pswd.value,
        balance:0
    }
    emm=r_email.value
    console.log(user);
  if(emm in localStorage){
    alert("Email already registered")
  }else{
        localStorage.setItem('email',JSON.stringify(user))
        alert("Registered successfully")
        window.location='./index.html'   
  }
}

function Signin(){
    email=l_email.value
    pswd=l_pswd.value
    // if(email in localStorage){ 
        user=JSON.parse(localStorage.getItem('email'))
        if(email==user.email&&pswd==user.password){
            alert("login Successful")
            window.location='./home.html'  ////////
        }    
        else{
            alert("incorect password ")
        }  
    //  }
    // else{
    //     alert("invalid email")
    // }
}



function Add(){
    des=a_des.value,
    amount=a_amt.value
    user=JSON.parse(localStorage.getItem('email'))
    user.balance+= +amount
    console.log(user.balance);
    localStorage.setItem('email',JSON.stringify(user))
    // alert("Added Successfully")
    var inputElement = document.getElementById("a_des");
    // Clear the input value
    inputElement.value = "";
    var inputElement1 = document.getElementById("a_amt");
    // Clear the input value
    inputElement1.value = "";

    FullAmount.innerHTML=` <h2 class="text-center">${user.balance}</h2>`
    data=""
    data=`<tr>
    <td>${des}</td>
    <td>${amount}</td>
    <td>${user.balance}</td>
  </tr>`
  resultadd.innerHTML+=data
}

function Expense(){
    des=e_des.value,
    amount=e_amt.value
    user=JSON.parse(localStorage.getItem('email'))
    user.balance-= +amount
    console.log(user.balance);
    localStorage.setItem('email',JSON.stringify(user))
    var inputElement = document.getElementById("e_des");
    // Clear the input value
    inputElement.value = "";
    var inputElement1 = document.getElementById("e_amt");
    // Clear the input value
    inputElement1.value = "";
    FullAmount.innerHTML=` <h2 class="text-center">${user.balance}</h2>`
    data=""
    data=`<tr>
    <td>${des}</td>
    <td>${amount}</td>
    <td>${user.balance}</td>
  </tr>`
  resultexp.innerHTML+=data
}

function logout(){
    localStorage.clear()
    window.location='./index.html'
}