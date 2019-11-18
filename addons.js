    var B = document.getElementById("body");
    var H = document.getElementById("mainH");
    H.style.textAlign="center";
    function Get_info(){
        var input = document.getElementById("usr");
        var answer = document.getElementById("output");
     var A = document.getElementById("img");
        if (input.value=="help"){
            answer.innerHTML="search something we may have info";
        };
       if (input.value=="sebastian"|| input.value=="Sebastian"){
            answer.innerHTML="nationality: indonesien, Hair Color: black";
            A.hidden = "hidden";
        };
     if (input.value=="itay" || input.value=="Itay"){
            answer.innerHTML="nationality: Hebrew, Hair Color: braces";
      A.hidden="";
            A.src = "https://raw.githubusercontent.com/ccm7676/data-base/master/Photo%20on%2014-11-2019%20at%2013.32.jpg";
  
        };
        
    };
    
