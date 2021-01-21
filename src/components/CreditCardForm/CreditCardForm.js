import React from 'react'
import "./creditcardform.css"

const CreditCardForm = () => {
    return (
            <form className="credit-card-form">

                <div className="inputs">
                    <div className="input-box">
                        <div className="row">
                            <label>CC Number</label>
                            <input 
                                type="text" 
                                className="input-big"
                                required 
                            />
                        </div>
                        <div className="row">
                            <label>Expiration</label>
                            <input 
                                type="text"
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
                            className="input-big"
                            required 
                        />
                        </div>
                       <div className="row">
                           <label>CVV</label>
                            <input 
                            type="text" 
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
