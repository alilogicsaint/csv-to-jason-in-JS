
void main() {

 var csv="username, email, phone \n octavia,octavia@gmail.com, 099-83-44 \n clark, clark@gmail.com, 054-83-23 \n raven, raven@gmail.com, 784-44-98"; 
  
  var array= csv.split("\n");
  
  var result = [];
  
  var headers = array[0].split(",");
  
  
   var s = '';
   
  for (var i = 0; i < array.length - 1 ; i++) { 
      var obj = {};
      var li=1+i;
      var list = array[li].split(',');
      for (var j = 0; j < headers.length ; j++){
        if (list[j].contains(", ")) {
        obj[headers[j]] = list[j]
        .split(", ").map((e) =>  e.trim());
          
    }
    else obj[headers[j]] = list[j];
      }
     result.add(obj); 
     
    }
  
 print(result[0]);
  
}

  
