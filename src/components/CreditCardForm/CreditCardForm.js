import React, { useState } from 'react'
import "./creditcardform.css"

const CreditCardForm = () => {
    
    const [strings, setStrings] = useState({ 
        ccNum: "○○○○ ○○○○ ○○○○ ○○○○",
        expiry: "--/--",
        name: "CARDHOLDER NAME",
        cvv: "---"
    });

    function changeStrings(e) {
        setStrings({...strings, [e.target.name]: e.target.value});
    }

    return (
            <form className="credit-card-form">

                <div className="inputs">
                    <div className="input-box">
                        <div className="row">
                            <label>CC Number</label>
                            <input 
                                type="text"
                                name="ccNum" 
                                className="input-big"
                                required 
                            />
                        </div>
                        <div className="row">
                            <label>Expiration</label>
                            <input 
                                type="text"
                                name="expiry" 
                                className="input-small" 
                                required 
                            />
                        </div>
                 
                    </div>
                    <div className="input-box">
                        <div className="row">
                             <label>Name On Card</label>
                            <input 
                            type="text"
                            name="name"  
                            className="input-big"
                            required 
                        />
                        </div>
                       <div className="row">
                           <label>CVV</label>
                            <input 
                            type="text"
                            name="cvv"  
                            className="input-small"
                            required 
                        />
                       </div>
                        
                    </div>
                     

                        <div className="button-box">
                            <button id="submit">Submit</button>
                            <button id="clear">Clear</button>
                        </div>
                        
                </div>

            </form>
    )
}

export default CreditCardForm
