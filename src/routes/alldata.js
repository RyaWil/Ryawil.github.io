import React from 'react';
import { UserContext } from '../components/user-context';
import Card from '../components/card';
import './styles/alldata.css';

function AllData() {
    const ctx = React.useContext(UserContext);

    
    return (
        
        <Card
            bgcolor="info"
            header="All Data"
            width="40rem"
            body={
                <>
                <div className="alldata">
                    <div className="offset"><h5>Name</h5></div>
                    <div><h5>Email</h5></div>
                    <div><h5>Password</h5></div>
                    <div><h5>Transactions</h5></div>
                </div>    
                    {ctx.users.map((user, index) => {
                        return (
                            <div className="alldata data-item" key={index}>
                                <div className="blockquote mb-10">{user.name}</div>
                                <div className="blockquote mb-10">{user.email}</div>
                                <div className="blockquote mb-10">{user.password}</div>
                                <div className="blockquote mb-10">
                                   <strong><em> Balance: ${user.balance}</em></strong>

                                </div>
                            </div>
                        )
                    }




                    )}
                
                </>
            }
        
        
        
        
        />
        
    );
}

export default AllData