import React from "react";

const Common = (prop) => {
    return (<>
            <div className="head">
                <h3>{prop.heading}</h3>
                <h4>{prop.pledge}</h4>
            </div>
            <div className="body">
                <p>{prop.content}</p>
            </div>
            <div className="foot">
                <h1>{prop.left}&nbsp;<span>left</span></h1>
                <button id={prop.btncls}className={prop.btncls}>{prop.btnname}</button>
            </div>
    </>)
}

export default Common;