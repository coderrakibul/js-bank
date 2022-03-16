document.getElementById("login-button").addEventListener("click", function(){
    const userEmail = document.getElementById("user-email");
    const userEmailText = userEmail.value;
    
    const userPassword = document.getElementById("user-password");
    const userPasswordText = userPassword.value;
    
    if(userEmailText == "rs@love.com" && userPasswordText == "lovers" ){
        window.location.href = "bank.html"
    };
   
})