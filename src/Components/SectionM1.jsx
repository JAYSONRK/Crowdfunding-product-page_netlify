import React, { useState } from "react";

const SectionM1 = (prop) => {
    const [expand, setExpand] = useState(false);

    const expandModal = () => {
        setExpand(true);
        prop.expandModal();  
    }

    return (<>
    <section className="cardm" style={prop.contract === 'a' && expand ? {border: '1px solid hsl(176, 50%, 47%)'} : { border: '1px solid hsla(0, 0%, 48%, 0.32)'}}>
       <div className="changea">
                <div className="second-header">
                    <div>
                        <input type="radio" id="html" name="selected" value="" onClick={expandModal}/>
                    </div> 
                    <div className="head">
                        <h3>Bamboo Stand</h3>
                        <h4>Pledge $25 or more</h4>
                    </div>
                </div>
                <div className="body">
                    <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                </div>
                <div className="foot">
                    <h3>101&nbsp;&nbsp;<span>left</span></h3>
                </div> 
            </div>    
            {prop.contract === 'a' && expand && <div className="pledge">
                <div>
                    <p>Enter your pledge</p>
                </div>
                <div className="pledge-foot">
                    <div className="price">
                        <button className="outlined"><span>$</span> &nbsp;25</button>
                    </div>
                    <div className="continue">
                        <button className="green" onClick={prop.thankYou}>Continue</button>
                    </div>
                </div>
            </div>}
         </section>    
    </>)
}

export default SectionM1;