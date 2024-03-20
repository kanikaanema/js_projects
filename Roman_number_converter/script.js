function validNumber(){

    const numberEntered = document.querySelector("#number").value
    const result = document.querySelector("#output")
  
    if(numberEntered === ""){
      result.innerText = "Please enter a valid number"
    }else if(numberEntered <= 0){
      result.innerText = "please enter a number greater than or equal to 1"
    }else if(numberEntered >= 4000){
  result.innerText = "Please enter a number less than or equal to 3999"
    }else if(romanToNum(numberEntered)){
       result.innerText = romanToNum(numberEntered)
    }
  }
  
    function romanToNum(num){
      let roman = ""
     while(num > 0){
     if(num<=3){
       roman = roman+"I"; 
      //  console.log(roman)
       num = num-1;
      //  console.log(num)
     }
     else if(num == 4){
        roman =roman+"IV";
        num=num-4;
     }else if(num >= 5 && num < 9){
          roman=roman+"V";
          num -= 5;
     }else if(num==9){
       roman=roman+"IX"
       num-=9
     }
     else if(num >=10 && num <= 39){
      roman=roman+"X"
      num-=10
     }else if(num <= 49){
      roman = roman+"XL"
      num-=40
     }else if(num >= 50 && num <=89){
      roman = roman+"L"
      num-=50
     }else if(num<=99){
      roman = roman+"XC"
      num-=90
     }else if(num>=100 && num<=399){
      roman=roman+"C"
      num-=100
     }else if(num<=499){
     roman=roman+"CD"
     num-=499
     }else if(num >= 500 && num<=899){
      roman=roman+"D"
       num-=500
     }else if(num<=900 || num <=999){
      roman=roman+"CM"
       num-=900
     }else if(num >=1000 ){
      roman = roman+"M"
      num-=1000
     }
     }
     return roman;
      }
      console.log(romanToNum(3999))
  
  
    
  
  