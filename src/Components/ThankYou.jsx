import React from "react";
import Check from "../images/icon-check.svg";

const ThankYou = (prop) => {
    return (
        <section className="thankyou">
        <img src={Check} alt="check"/>
            <h3>Thanks for your support!</h3>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button className="green" onClick={prop.gotIt}>Got it!</button>
        </section>
    )
}

export default ThankYou;