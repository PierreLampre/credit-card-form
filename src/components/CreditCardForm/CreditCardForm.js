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

    let ccNum = document.getElementById("ccNum");
    let expiry = document.getElementById("expiry");
    let fullName = document.getElementById("fullName");
    let cvv = document.getElementById("ccv");

    function changeStringsAddWhiteSpace(e) {
        setStrings({ ...strings, [e.target.name]: e.target.value.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')});
        
        let ccNum = document.getElementById("ccNum");
        //HTML5 validation ignores the maxlength property when type is number :(
        //The if statement provides desired maxlength limit when type="number"
        if (ccNum.value.length > 15) ccNum.value = ccNum.value.slice(0, 15);
    }

    function invalidInput(el, message) {
        el.style.border = "4px solid red";
        el.placeholder = message
    }

    function validateStrings(e, ccNum, expiry, fullName, cvv) {
        e.preventDefault();
        if(ccNum.value.length < 14) {
            invalidInput(ccNum, "Credit card number entered is too short.");
        } else if (expiry.value.length < 5){
            invalidInput(expiry, "Format = MM/YY");
        } else if(fullName.value.length < 2){
            invalidInput(fullName, "Please Enter Full Name");
        } else if(cvv.value.length < 3 || cvv.value.length > 5) {
            invalidInput(cvv, "Invalid CCV")
        }
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
                                placeholder="Enter Your CC Number"
                                onChange={changeStringsAddWhiteSpace}
                                required
                            />
                        </div>
                        <div className="row">
                            <label>Expiration</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                className="input-small"
                                placeholder="MM/YY"
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
                                id="fullName"
                                placeholder="Your name"
                                onChange={changeStrings}
                                required
                            />
                        </div>
                        <div className="row">
                            <label>CVV</label>
                            <input
                                type="number"
                                name="cvv"
                                id="ccv"
                                className="input-small"
                                placeholder="***"
                                required
                            />
                        </div>

                    </div>


                    <div className="button-box">
                        <button 
                        id="submit"
                        onClick={(e) => validateStrings(
                            e,
                            ccNum, 
                            expiry,
                            fullName,
                            cvv
                        )}
                        >
                            Submit
                        </button>
                        <button id="clear">Clear</button>
                    </div>

                </div>

            </form>
        </div>

    )
}

export default CreditCardForm
