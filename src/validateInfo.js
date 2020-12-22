export default function validateInfo(values) {
    let errors = {};
    if(!values.username.trim()) {
        errors.username = 'username required'
    }

    if(!values.email) {
        errors.email = 'Email Required'
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i.test(values.email))
    {
        errors.email = "Email address is invalid";
    }

    if(!values.password) {
        errors.password = "Password is required"
    } else if(values.password.length < 6) {
        errors.password = "password needs to be 6 character or more";
    }

if(!values.password2)
   {
       errors.password2 = "password is required"
   } else if(values.password2 !== values.password){
       errors.password2 = "password does not match"
   }

   return errors;
}