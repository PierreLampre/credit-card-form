import React from 'react'
import "./creditcardvisual.css"

const CreditCardVisual = (props) => {
    return (
        <div className="credit-card-box">
            <div className="some-bank">
                <div className="some">SOME</div>
                <div className="bank">BANK</div>
            </div>
            <div className="ccNum">{props.strings.ccNum}</div>
            <div className="chip">
                <div className="col col1">
                    <div className="row1"></div>
                </div>
                <div className="col col2">
                    <div className="row2"></div>
                    <div className="row3"></div>
                </div>
                <div className="col col3">
                    <div className="row4"></div>
                </div>
            </div>
            <div className="good-thru">
                <div className="good">GOOD</div>
                <div className="thru">THRU</div> 
            </div>
            <div className="expiry">{props.strings.expiry}</div>
            <div className="name">{props.strings.name}</div>
        </div>
    )
}

export default CreditCardVisual
