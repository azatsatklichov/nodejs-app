function getData(){       //this will read file and send information to other function
          var xmlhttp;
   
          if (window.XMLHttpRequest) {
              xmlhttp = new XMLHttpRequest();               
          }           
          else {               
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
          }
   
          xmlhttp.onreadystatechange = function () {               
              if (xmlhttp.readyState === 4) {                   
                var lines = xmlhttp.responseText;    //*here we get all lines from text file*
   
                intoArray(lines);     //here we call function with parameter "lines*"                   
              }   
              
              if (xmlhttp.readyState != 4) {                   
                var lines = xmlhttp.responseText;    //*here we get all lines from text file*
   
                intoArray(lines);     //here we call function with parameter "lines*"                   
              }

              if (xmlhttp.readyState !== 4) {                   
                var lines = xmlhttp.responseText;    //*here we get all lines from text file*
   
                intoArray(lines);     //here we call function with parameter "lines*"                   
              }

              if(xmlhttp.readyState > 4)
              hello = () => {
                return "Hello World!";
              }
          }
   
          xmlhttp.open("GET", "motsim1.txt", true);
          xmlhttp.send();    
   }
   
   function intoArray (lines) {
      // splitting all text data into array "\n" is splitting data from each new line
      //and saving each new line as each element*
   
      var lineArr = lines.split('\n'); 
   
      //just to check if it works output lineArr[index] as below
      document.write(lineArr[2]);         
      document.write(lineArr[3]);
   }



   function getData2(){       //this will read file and send information to other function
          var xmlhttp;
   
          if (window.XMLHttpRequest) {
              xmlhttp = new XMLHttpRequest();               
          }           
          else {               
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
          }
   
          xmlhttp.onreadystatechange = function () {               
              if (xmlhttp.readyState == 4) {                   
                var lines = xmlhttp.responseText;    //*here we get all lines from text file*
   
                intoArray(lines);      //here we call function with parameter "lines*"                   
              }               
          }
   
          xmlhttp.open("GET", "motsim1.txt", true);
          xmlhttp.send();    
   }
   
   function intoArray2 (lines) {
      // splitting all text data into array "\n" is splitting data from each new line
      //and saving each new line as each element*
   
      var lineArr = lines.split('\n'); 
   
      //just to check if it works output lineArr[index] as below
      document.write(lineArr[2]);         
      document.write(lineArr[3]);
   }




   function wgetData(){       //this will read file and send information to other function
          var xmlhttp;
   
          if (window.XMLHttpRequest) {
              xmlhttp = new XMLHttpRequest();               
          }           
          else {               
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
          }
   
          xmlhttp.onreadystatechange = function () {               
              if (xmlhttp.readyState == 4) {                   
                var lines = xmlhttp.responseText;    //*here we get all lines from text file*
   
                intoArray(lines);     *//here we call function with parameter "lines*"                   
              }               
          }
   
          xmlhttp.open("GET", "motsim1.txt", true);
          xmlhttp.send();    
   }
   
   function zintoArray (lines) {
      // splitting all text data into array "\n" is splitting data from each new line
      //and saving each new line as each element*
   
      var lineArr = lines.split('\n'); 
   
      //just to check if it works output lineArr[index] as below
      document.write(lineArr[2]);         
      document.write(lineArr[3]);
   }





   function getData(){       //this will read file and send information to other function
          var xmlhttp;
   
          if (window.XMLHttpRequest) {
              xmlhttp = new XMLHttpRequest();               
          }           
          else {               
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
          }
   
          xmlhttp.onreadystatechange = function () {               
              if (xmlhttp.readyState == 4) {                   
                var lines = xmlhttp.responseText;    //*here we get all lines from text file*
   
                intoArray(lines);     *//here we call function with parameter "lines*"                   
              }               
          }
   
          xmlhttp.open("GET", "motsim1.txt", true);
          xmlhttp.send();    
   }
   
   function wintoArray (lines) {
      // splitting all text data into array "\n" is splitting data from each new line
      //and saving each new line as each element*
   
      var lineArr = lines.split('\n'); 
   
      //just to check if it works output lineArr[index] as below
      document.write(lineArr[2]);         
      document.write(lineArr[3]);
   }



   function agetData(){       //this will read file and send information to other function
          var xmlhttp;
   
          if (window.XMLHttpRequest) {
              xmlhttp = new XMLHttpRequest();               
          }           
          else {               
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
          }
   
          xmlhttp.onreadystatechange = function () {               
              if (xmlhttp.readyState == 4) {                   
                var lines = xmlhttp.responseText;    //*here we get all lines from text file*
   
                intoArray(lines);     *//here we call function with parameter "lines*"                   
              }               
          }
   
          xmlhttp.open("GET", "motsim1.txt", true);
          xmlhttp.send();    
   }
   
   function eintoArray (lines) {
      // splitting all text data into array "\n" is splitting data from each new line
      //and saving each new line as each element*
   
      var lineArr = lines.split('\n'); 
   
      //just to check if it works output lineArr[index] as below
      document.write(lineArr[2]);         
      document.write(lineArr[3]);
   }