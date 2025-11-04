document.addEventListener(
    'DOMContentLoaded',() =>
        {
            const bodyID=document.body.id;
            if(bodyID==='bookingform'){
                bookingformsubmission();  
            }
            if(bodyID==='login'){
                loginformsubmission();  
            }
        });

/*booking form logic*/

function bookingformsubmission(){
    const form = document.getElementById('bookingcredentials');
    const busernameInput= document.getElementById('usernameinfo');
    const bpasswordInput= document.getElementById('passwordinfo');
    const submitbtn= document.getElementById('toursubmitbtn');
    if(form && busernameInput && bpasswordInput){ 
        form.addEventListener('submit',(event)=>
            {
                event.preventDefault();
                const enteredusername=busernameInput.value.trim();
                const enteredpassword=bpasswordInput.value.trim();
                if(enteredusername===''|| enteredpassword===''){
                    alert('Please enter both username and password');
                    return;
                }
                else{
                    alert("Booking Successful! We will contact you soon.");
                    window.location.href='index.html';
                    return;
                }
                
            });
        }
    }

/*login form logic*/

function loginformsubmission(){
            const form = document.getElementById('logincredentials');
            const roleInput=document.querySelectorAll('input[name="role"]');
            const submitbtn= document.getElementById('submitbtn');
            const inputs={
                emailInput: document.getElementById('email'),
                phonenumberInput: document.getElementById('number'),
                usernameInput: document.getElementById('username'),
                passwordInput: document.getElementById('password')
            };
            
            if(form){

                form.addEventListener('submit',(event)=>{
                event.preventDefault();
                for (let key in inputs){
                    if(!inputs[key].value.trim()){
                        alert('Please enter all the credentials');
                        return;
                    }
                }
                let selectedrole='';
                roleInput.forEach(radio => {
                    if(radio.checked){
                        selectedrole=radio.value;
                    }
                });

               
                if(!selectedrole){
                    alert('Please select the mode (User or Admin)');
                    return;
                }
                else{
                    const successmessage=`
                    Registration Successful!
                    Role: ${selectedrole}`
                    alert(successmessage);
                }
                if(selectedrole==='User'){
                    window.location.href='packages.html';
                }
                if(selectedrole==='Admin'){
                    window.location.href='index.html';
                }
                form.reset();
            });
        }
}   


    
    