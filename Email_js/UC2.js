class Email{
    checkPatternEmail(data){

        var pattern=RegExp("^[0-9A-Za-z.]+@bridgelabz");

        if(pattern.test(data)){
            console.log("valid email");
        }else{
            console.log("invalid email");    
        }

    }
}

const checkPattern=new Email();
checkPattern.checkPatternEmail("abc.xyz@bridgelabz.co.in");
checkPattern.checkPatternEmail("abc@co.in"); 
