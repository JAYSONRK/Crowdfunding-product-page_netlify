import React, { useState } from "react";

const SectionM3 = (prop) => {
    const [expand, setExpand] = useState(false);

    const expandModal = () => {
        setExpand(true);
        prop.expandModal();
    }
    return (<>
    <section className="cardm supressed-container" style={prop.contract === 'c' && expand ? {border: '1px solid hsl(176, 50%, 47%)'} : { border: '1px solid hsla(0, 0%, 48%, 0.32)'}}>
        <div className="changea">
                <div className="second-header">
                    <div>
                        <input type="radio" id="html" name="selected" value="" onClick={expandModal}/>
                    </div> 
                    <div className="head">
                        <h3>Mahogany Special Edition</h3>
                        <h4>Pledge $200 or more</h4>
                    </div>
                </div>
                <div className="body">
                    <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                </div>
                <div className="foot">
                    <h3>0&nbsp;&nbsp;<span>left</span></h3>
                </div> 
            </div>    
        </section>
    </>)
}

export default SectionM3;