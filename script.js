function register(){
    window.location='./index.html'
}

function sign(){
    window.location='./index.html'
}


function register(){
    uname=user_name.value
    mail=user_email.value
    pswd=user_pswd.value

    Details = {
        uname,mail,pswd
    }
    if(uname in localStorage){
        alert("User Already Exist")
    }else{
        localStorage.setItem(uname,JSON.stringify(Details))
        alert('Registration Successfull')
        window.location='./index.html'
    }
}

function Regg(){
     window.location='./Register.html'
}

function log(){
    let username = document.getElementById('user_name').value
    console.log(username);
    localStorage.setItem('USERNAME',username);

    uname=user_name.value
    pswd=user_pswd.value
    console.log(uname,pswd);

    if(uname in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(uname))
        if(pswd==accountDetails.pswd){
            alert("login successful")
            window.location="./User.html"
        }
        else{
            alert("Incorrect password");
        }
    }else{
        alert("User does not exist,Please register")
    }

}

function logout(){
    localStorage.clear()
    window.location = './index.html'
}





