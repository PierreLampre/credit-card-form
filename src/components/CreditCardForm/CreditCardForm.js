import React, { useState } from 'react';
import CreditCardVisual from "../CreditCardVisual/CreditCardVisual";
import "./creditcardform.css";
import mc from "./img/mastercard.svg"
import ds from "./img/discover.svg"

const CreditCardForm = () => {

    const [strings, setStrings] = useState({
        ccNum: "•••• •••• •••• ••••",
        expiry: "--/--",
        name: "CARDHOLDER NAME",
        cvv: "---"
    });
    const [disabled, setDisabled] = useState(true);
    const [img, setImg] = useState("");

    let ccNum = document.getElementById("ccNum");
    let expiry = document.getElementById("expiry");
    let fullName = document.getElementById("fullName");
    let cvv = document.getElementById("cvv");
    let info1 = document.getElementById("info1");
    let info2 = document.getElementById("info2");
    let info3 = document.getElementById("info3");
    let info4 = document.getElementById("info4");

    const cards= {
        visa: <img src='/static/media/visa.9ffefcfc.svg' className="cc-logo" alt='visa card logo' />,
        mc: <img src="/static/media/mastercard.8b1d6346.svg" className="cc-logo" alt="mastercard logo" />,
        ds: <img src="/static/media/discover.42e5cc04.svg" className="cc-logo" alt="discover card logo" />,
        spacer: <div className="cc-logo" />
    }

    function changeStrings(e) {
        setStrings({ ...strings, [e.target.name]: e.target.value });

        if (e.target.value.length === 5 && e.target.name === "expiry"){
            expiry.style.border = "1px solid black";
            info2.style.visibility = "hidden";
        } else if(e.target.value.length >= 1 && e.target.name === "name"){
            fullName.style.border = "1px solid black";
            info3.style.visibility = "hidden";
        } else if(e.target.value.length >= 3 && e.target.name === "cvv"){
            cvv.style.border = "1px solid black";
            info4.style.visibility = "hidden";
        }
    }

    function changeStringsAddWhiteSpace(e) {
        setStrings({ ...strings, [e.target.name]: e.target.value.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')});
        
        let ccNum = document.getElementById("ccNum");
        let slicedCCNum = ccNum.value.slice(0, 1);

        console.log(slicedCCNum);
        console.log(typeof slicedCCNum);
        console.log(cards.visa);

        if (slicedCCNum === "4") {
            setImg(cards.visa);
            console.log(img);
        } else if (slicedCCNum === "5") {
            setImg(cards.mc);
        } else if (slicedCCNum === "3") {
            setImg(cards.ds);
        } else {
            setImg(cards.spacer);
        }

        //enable buttons
        if(ccNum.value.length > 0) {
            setDisabled(false);
        } 

        //toggle svgs for credit card view
        

        //HTML5 validation ignores the maxlength property when type is number :(
        //The if statement provides desired maxlength limit when type="number"
        if (ccNum.value.length > 15) ccNum.value = ccNum.value.slice(0, 15);
        if(ccNum.value.length >= 15) { 
            ccNum.style.border = "1px solid black";
            info1.style.visibility = "hidden";
        }
    }

    function invalidInput(el, id) {
        el.style.border = "4px solid red";
        document.getElementById(id).style.visibility = "visible";
    }

    function resetInputStyles(el, message){
        el.style.border = "1px solid black";
        el.placeholder = message;
    }

    function resetAllInputStyles() {
        resetInputStyles(ccNum, "Enter Your CC Number");
        resetInputStyles(expiry, "MM/YY");
        resetInputStyles(fullName, "Your Name");
        resetInputStyles(cvv, "***");
        info1.style.visibility = "hidden";
        info2.style.visibility = "hidden";
        info3.style.visibility = "hidden";
        info4.style.visibility = "hidden";
    }
    
    function clearInputs(e) {
        e.preventDefault();
        // reset state to initial
        setStrings({
            ccNum: "•••• •••• •••• ••••",
            expiry: "--/--",
            name: "CARDHOLDER NAME",
            cvv: "---"
        });
        //clear form inputs
        ccNum.value = "";
        expiry.value = "";
        fullName.value = "";
        cvv.value = "";
        resetAllInputStyles();
    }

    function validateStrings(e) {
        e.preventDefault();
        if(ccNum.value.length < 14 || ccNum.value === null) {
            invalidInput(ccNum, "info1");
        } else if (expiry.value.length < 5){
            invalidInput(expiry, "info2");
        } else if(fullName.value.length < 2){
            invalidInput(fullName, "info3");
        } else if(cvv.value.length < 3 || cvv.value.length > 5) {
            invalidInput(cvv, "info4")
        } else {
            resetAllInputStyles();
            clearInputs(e);
        } 
    }

    return (
        <div className="ccForm">
            <CreditCardVisual strings={strings} cardImg={img}/>
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
                            <div id="info1" className="info">Credit card number is too short</div>
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
                            <div id="info2" className="info">Use this format: MM/YY</div>
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
                            <div id="info3" className="info">Enter your name as it appears on your card</div>
                        </div>
                        <div className="row">
                            <label>CVV</label>
                            <input
                                type="number"
                                name="cvv"
                                id="cvv"
                                className="input-small"
                                placeholder="***"
                                onChange={changeStrings}
                                required
                            />
                            <div id="info4" className="info">CVV should be 3-4 digits</div>
                        </div>

                    </div>


                    <div className="button-box">
                        <button 
                        id="submit"
                        disabled={disabled}
                        onClick={(e) => validateStrings(e)}>
                            Submit
                        </button>
                        <button 
                        id="clear"
                        disabled={disabled}
                        onClick={(e) => clearInputs(e)}
                        >
                            Clear
                        </button>
                    </div>

                </div>

            </form>
        </div>

    )
}

export default CreditCardForm
