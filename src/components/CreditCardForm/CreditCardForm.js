import React, { useState } from 'react';
import CreditCardVisual from "../CreditCardVisual/CreditCardVisual";
import "./creditcardform.css";

const CreditCardForm = () => {

    const [strings, setStrings] = useState({
        ccNum: "•••• •••• •••• ••••",
        expiry: "--/--",
        name: "CARDHOLDER NAME",
        cvv: "---"
    });

    function changeStrings(e) {
        setStrings({ ...strings, [e.target.name]: e.target.value });
    }

    function changeStringsAddWhiteSpace(e) {
        setStrings({ ...strings, [e.target.name]: e.target.value.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')});
        let ccNum = document.getElementById("ccNum");
        
        //HTML5 validation ignores the maxlength property when type is number :(
        //The if statement provides desired maxlength limit when type="number"
        if (ccNum.value.length > 15) ccNum.value = ccNum.value.slice(0, 15);
    }

    return (
        <div className="ccForm">
            <CreditCardVisual strings={strings}/>
            <form className="credit-card-form">

                <div className="inputs">
                    <div className="input-box">
                        <div className="row">
                            <label>CC Number</label>
                            <input
                                type="number"
                                name="ccNum"
                                id="ccNum"
                                className="input-big"
                                onChange={changeStringsAddWhiteSpace}
                                required
                            />
                        </div>
                        <div className="row">
                            <label>Expiration</label>
                            <input
                                type="text"
                                name="expiry"
                                className="input-small"
                                onChange={changeStrings}
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
                                onChange={changeStrings}
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
        </div>

    )
}

export default CreditCardForm
