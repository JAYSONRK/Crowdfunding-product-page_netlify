import React, { useState } from "react";
import Close from "../images/icon-close-modal.svg";
import SectionM from "./SectionM";
import SectionM1 from "./SectionM1";
import SectionM2 from "./SectionM2";
import SectionM3 from "./SectionM3";

const Modal = (prop) => {
    const [expand, setExpand] = useState('');
    const [complete, setComplete] = useState(false);
    const expandModala = () => {
        setExpand('a');
    }
    const expandModalb = () => {
        setExpand('b');
    }
    const expandModalc = () => {
        setExpand('c');
    }

    const expandModalm = () => {
        setExpand('m');
    }
    
    const thankYou = () => {
        setComplete(!complete);
        prop.completeDiv()
    }

    
    return (<>
        <section id="modal-block" className="cardc">
            <div className="modal-header">
                <div>
                    <h3>Back this project</h3>
                </div>
                <div className="close">
                    <img src={Close} alt="close" onClick={prop.hideModal}/>
                </div>
            </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <SectionM
                expandModal={expandModalm}
                contract={expand}
            />
            <SectionM1
                expandModal={expandModala}
                contract={expand}
                thankYou={thankYou}
            />
            <SectionM2
                expandModal={expandModalb}
                contract={expand}
                thankYou={thankYou}
            />
            <SectionM3
                expandModal={expandModalc}
                contract={expand}
                thankYou={thankYou}
            />
        </section>
    </>)
}

export default Modal;