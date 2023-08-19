// we will call by ID
// logic makig: 1. after inputing data in email, and password than press submit. 
// 2. after pressing(event) the submit button the data will be taken 




// [S:1 -ADD EVENT HANDELER WITH SUBMIT BUTTON, "as clicked so, .addEventListener used"]
document.getElementById('btn-submit').addEventListener('click', function(){
// console.log('Login button clicked')

// [S:2 -get the email address inside the email input field]
const emailInfo= document.getElementById('email');
const email=emailInfo.value;

// [S:2 -get the email address inside the email input field]
const passField=document.getElementById('password')
const password=passField.value;
// console.log('hella');


// [S:4 -Email and pass verification, n ot the right way surly]
if(email==="hello@world.com" && password==="mongo"){
    window.location.href = 'account.html';
}
else{
    console.log('welcome to earth')
}
}
)