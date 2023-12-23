import React, { useState } from "react";

const SectionM = (prop) => {
    const [expand, setExpand] = useState(false);

    const expandModal = () => {
        setExpand(true);
        prop.expandModal();   
    }

    return (<>
            <div className="cardm changea" style={prop.contract === 'm' && expand ? {border: '1px solid hsl(176, 50%, 47%)'} : { border: '1px solid hsla(0, 0%, 48%, 0.32)'}} >
                    <div className="second-header">
                        <div>
                            <input type="radio" id="html" name="selected" value="" onClick={expandModal}/>
                        </div> 
                        <div className="head">
                            <h3>Pledge with no reward</h3>
                        </div>
                    </div>
                    <div className="body">
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    </div> 
                </div>    
    </>)
}

export default SectionM;