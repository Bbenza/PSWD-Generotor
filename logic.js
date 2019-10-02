
var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var password_length = 8;
var randomPassword = '';
for (var i=0; i<password_length; i++) {
   var random = Math.floor(Math.random() * characters.length);
   randomPassword += characters.substring(random,random +1);
}
document.getElementById("Password").innerHTML=randomPassword;


var word = "getPassword";
document.getElementsById("getPassword").innerHTML=randomPassword;



