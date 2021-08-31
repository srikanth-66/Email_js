class PinCode{
    checkPatternNumber(data){

        var pattern=RegExp("[a-z]{1}[0-9]{6}");

        if(pattern.test(data)){
            console.log("valid code");
        }else{
            console.log("invalid code");
        }

    }
}

const checkPattern=new PinCode();
checkPattern.checkPatternNumber("dgksgdk431001"); 
