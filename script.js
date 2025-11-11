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
            if(bodyID==='packageform'){
                packageformsubmission();
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

/*package page logic*/
function packageformsubmission(){
    const form = document.getElementById('packagecredentials');
    const PAGE_MAP={
                    "lucknow":{
                        "5d4n":"tourlucknow.html"
                    },
                    "delhi":{
                        "5d4n":"tourdelhi.html"
                    },
                    "jaipur":{
                        "5d4n":"tourjaipur.html"
                    },
                    "amritsar":{
                        "5d4n":"touramritsar.html"
                    },
                    "kolkata":{
                        "5d4n":"tourkolkata.html"
                    },
                    "darjeeling":{
                        "5d4n":"tourdarjeeling.html"
                    }
                };
                const applyButton = document.getElementById("applybtn");
                if(form){
                    form.addEventListener('submit',(event)=>{
                        event.preventDefault();
                    const selectedDurationElement= document.querySelector('input[name="duration"]:checked');
                    const citySelect= document.querySelector('select[name="city"]');
                    const personInput= document.querySelector('input[type="number"]');
                    const durationcode= selectedDurationElement ?
                    selectedDurationElement.value:null;
                    const city= citySelect?
                    citySelect.value: null;
                    const personvalue= personInput?
                    personInput.value.trim(): "";
                    const person= parseInt(personvalue);
                    if(!durationcode){
                        alert("Please select a package duration.");
                        return;
                    }
                    if(personvalue===""||isNaN(person)||person<1){
                        alert("Please enter a valid number of travelers (atleast 1).");
                        return;
                    }
                    const cityMap=PAGE_MAP[city];
             
                    const targetpage= cityMap?
                    cityMap[durationcode] : null;
                    if(!targetpage){
                        alert("not available");
                        return;
                    }
                    const params= new URLSearchParams();
                    params.append('duration',durationcode);
                    params.append('city',city);
                    params.append('person',person);
                    const finalURL = `${targetpage}?${params.toString()}`;
                    console.log("redirecting to:", finalURL);
                    window.location.href= finalURL;
                    });
                }
}
 

    
    