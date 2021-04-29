// Retreiving HTML elements from DOM
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const emailaddr = document.getElementById('emailaddr');
const username = document.getElementById('username');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// Creating functions, function to update class and message
function fnc_ShowErr(input, message){
    // getting parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override the class - add error class in it too
    formControl.className = 'form-control error';
    // get the small element for the error message
    const small = formControl.querySelector('small');
    // getting the message by Override the text for small element by using input message
    small.innerText = message;
}

function fnc_ShowSuccess(input){

// getting parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override the class - add error class in it too
    formControl.className = 'form-control success';
    
}

// for checking of valid email
function isValidEmail(email) {
	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return !!email && typeof email === 'string'
		&& email.match(emailformat)
}



// Create event listener for submit button
form.addEventListener('submit', function(e){
    //stop page from reloading 
    e.preventDefault();
    console.log(fname.value);

    // Check username is not empty
    if(fname.value==='')
    {
        fnc_ShowErr(fname, 'First Name is required');
    }
    else
    {
        fnc_ShowSuccess(fname);
    }
    if(lname.value==='')
    {
        fnc_ShowErr(lname, 'Last Name is required');
    }
    else
    {
        fnc_ShowSuccess(lname);
    }
    if(emailaddr.value==='')
    {
        fnc_ShowErr(emailaddr, 'Email Address required');
    }
    else
    {
        //fnc_ShowSuccess(emailaddr);
        if (isValidEmail(emailaddr.value)===true)
        {
            fnc_ShowSuccess(emailaddr);
        }
        else
        {
            fnc_ShowErr(emailaddr, 'Not a valid Email address');
        }

    }
    if(username.value==='')
    {
        fnc_ShowErr(username, 'Username is required');
    }
    else
    {
        fnc_ShowSuccess(username);
    }
    if(password.value==='')
    {
        fnc_ShowErr(password, 'Password is required');
    }
    else
    {
        fnc_ShowSuccess(password);
    }
    if(cpassword.value==='')
    {
        fnc_ShowErr(cpassword, 'Confirm Password is required');
    }
    else
    {
        fnc_ShowSuccess(cpassword);
    }

    if (password.value !== cpassword.value)
    {
        fnc_ShowErr(password, 'Password must be same');
        fnc_ShowErr(cpassword, 'Password must be same');
    }
    else
    {
        fnc_ShowSuccess(password);
        fnc_ShowSuccess(cpassword);
    }

});