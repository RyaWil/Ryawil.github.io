import React                    from 'react';
import { UserContext }          from '../components/user-context';
import Card                     from '../components/card';
import validate                 from '../components/validate';

function Deposit() {
    const ctx = React.useContext(UserContext);

    // Set the state variables
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]   = React.useState(0);
    const [message, setMessage]   = React.useState(null);
    const [enable, setEnable]     = React.useState(false);
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUser) {
            return true;
        } else {
            return false;
        }
    });
    
    function handleSubmit() {

        if (deposit <= 0) {
            setMessage('Deposit amount must be greater than zero');
            return;
        }
        let i = ctx.userIndex;
        let currentBalance = Number(ctx.users[i].balance);
        ctx.users[i].balance = currentBalance + Number(deposit);
        ctx.currentUser = ctx.users[i];
        setMessage(`Deposited ${deposit}`)
        setDeposit("")
        setEnable(false);
    };

    const validateThis = () => {
        if (validate(deposit, 'please enter an amount to deposit', setStatus))
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
            bgcolor="danger"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                    <h5>{ctx.currentUser.name}</h5>
                    <h5>{ctx.currentUser.email}</h5>
                    <h6>Your current balance is:</h6>
                    <h6>${ctx.currentUser.balance}</h6>
                    Deposit<br/>
                    <input type="number" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} onChange={e => {makeChange(e, setDeposit)}}/><br/>
                    <button type="submit" disabled={!enable} className="btn btn-light" onClick={handleSubmit}>Deposit</button><br/><br/>
                    {message && <h5>{message}</h5>}
                </>
            ):(
                <>
                    <h5>You must login to proceed</h5>
                </>
            )}
        />
    );
}

export default Deposit;