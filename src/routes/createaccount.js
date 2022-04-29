import React from 'react';
import Card from '../components/card';
import { UserContext } from '../components/user-context';
import validate from '../components/validate';

function CreateAccount() {

    const ctx = React.useContext(UserContext);

    const [show, setShow]                   = React.useState(true);
    const [status, setStatus]               = React.useState('');
    const [errorMessage, setErrorMessage]   = React.useState(null);
    const [enable, setEnable]               = React.useState(false);
    const [name, setName]                   = React.useState('');
    const [email, setEmail]                 = React.useState('');
    const [password, setPassword]           = React.useState('');
 
    function handleCreate() {
        console.log(name,email,password);
        if (!validateThis()) return;
        if (!email.includes('@') ) {
            setErrorMessage('Email should include @');
            return
        }
        if (password.length < 8) {
            setErrorMessage('Your password must be at least 8 characters long');
            return
        }
        setErrorMessage(null);
        ctx.users.push({name:name,email:email,password:password,balance:1500,history:[]});
        const newUserIndex = ctx.users.length - 1;
        ctx.currentUser = ctx.users[newUserIndex];
        ctx.userIndex = newUserIndex;
        setShow(false);
    }
    
    
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        setEnable(false);
    }

    const validateThis = () => {
        if (validate(name, 'please enter your name', setStatus) &&
            validate(email, 'please enter your email', setStatus) &&
            validate(password, 'please choose a password', setStatus))
            {
                return true
            } else {
                return false
            };
    };

    const makeChange = (e, setThis) => {
        setThis(e.currentTarget.value);
        if (validateThis())
            {setEnable(true)};
    }; 
 
    return (
        <Card
             bgcolor="info"
             header="Create Account"
             status={status}
             body={show ? (
                 <>
                     Name<br/>
                     <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {makeChange(e, setName)}}/><br/>
                     Email<br/>
                     <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {makeChange(e, setEmail)}}/><br/>
                     Password<br/>
                     <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {makeChange(e, setPassword)}}/><br/>
                     <button type="submit" disabled={!enable}className="btn btn-light" onClick={handleCreate}>Create Account</button>
                     <br/><br/>
                     {errorMessage && <h5>{errorMessage}</h5>}
                 </>
             ):(
                 <>
                     <h5>Success! User: {ctx.currentUser.name}</h5>
                     <p>Your account has been created.</p>
                     <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
 
                 </>
             )}
        
        />
    )
 }

 export default CreateAccount;