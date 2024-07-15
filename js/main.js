function validate(){
    var user =document.getElementById("user").value ;
    var email =document.getElementById("email").value ;
    var password =document.getElementById("password").value ;
    var confirm =document.getElementById("confirm").value ;
    var result =document.getElementById("result") ;


    result.setAttribute("class", "alert alert-danger text-center p-1") ;

    if(user=="" && email=="" && password=="" && confirm=="" ){
        result.innerHTML="enter data in form";
        return false ;
    }

    else if(user.length<5 || user.length>15 ){
        result.innerHTML="enter name 5-15 charcter";
        return false;

    }else if(email.indexOf("@" , 3) ==-1){
        result.innerHTML = "enter Valid e-mail" ;
        return false ;

    }else if (password.length<8){
        result.innerHTML=" week password" ;
        return false ;

    }else if(password != confirm){
        result.innerHTML ="Matched password" ;
        return false

    }else{
        return true
    }

}


