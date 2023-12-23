import React, { useState } from "react";
import Top from "./Top";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./sectionC";
import Modal from "./Modal";
import ThankYou from "./ThankYou";
import MobileMenu from "./MobileMenu";


const Page = () => {
    const [modalBlock, setModalBlock] = useState(false);
    const [complete, setComplete] = useState(false);
    const [menu, setMenu] = useState(false);
    
    const ShowModal = () => {
        setModalBlock(!modalBlock);
    };

    const thankYou = () => {
        setComplete(!complete);
        setModalBlock(!modalBlock);
    };

    const gotIt = () => {
        setComplete(!complete);
    };

    const toggleMenu = () => {
        setMenu(!menu);
    }
    

    return (<>
        <main className="page">
            {menu && <MobileMenu/>}
            <div className={modalBlock || complete ? "supreme-container" : "none"}>
                <Top
                   toggleMenu={toggleMenu} 
                />
                <div className="bottom">
                    <SectionA
                        ShowModal={ShowModal}
                    />
                    <SectionB/>
                    <SectionC/>
                </div>
            </div>
            {modalBlock &&<div id="myModal" className="modal fade">
             <Modal
                hideModal={ShowModal}
                completeDiv={thankYou}
            />
            </div>}
            {complete && <ThankYou
               gotIt={gotIt} 
            />}
        </main>
    </>)
}

export default Page;