import React, { useState } from "react";

const SectionM2 = (prop) => {
    const [expand, setExpand] = useState(false);

    const expandModal = () => {
        setExpand(true);
        prop.expandModal();
    }
    return (<>
    <section className="cardm" style={prop.contract === 'b' && expand ? {border: '1px solid hsl(176, 50%, 47%)'} : { border: '1px solid hsla(0, 0%, 48%, 0.32)'}}>
        <div className="changea">
                <div className="second-header">
                    <div>
                        <input type="radio" id="html" name="selected" value="" onClick={expandModal}/>
                    </div> 
                    <div className="head">
                        <h3>Black Edition Stand</h3>
                        <h4>Pledge $75 or more</h4>
                    </div>
                </div>
                <div className="body">
                    <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                </div>
                <div className="foot">
                    <h3>64&nbsp;&nbsp;<span>left</span></h3>
                </div> 
            </div>    
            {prop.contract === 'b' && expand && <div className="pledge">
                <div>
                    <p>Enter your pledge</p>
                </div>
                <div className="pledge-foot">
                    <div className="price">
                        <button className="outlined"><span>$</span> &nbsp;75</button>
                    </div>
                    <div className="continue">
                        <button className="green" onClick={prop.thankYou}>Continue</button>
                    </div>
                </div>
            </div>}
        </section>    
    </>)
}

export default SectionM2;