import React, { useState } from "react";
import MasterLogo from "../images/logo-mastercraft.svg";
import Bookmark from  "../images/icon-bookmark.svg";
import BookmarkG from "../images/icon-bookmark - green.svg";

const SectionA = (prop) => {
    const [bookmark, setBookmark] = useState(true);

    const bookmarked = () => {
        setBookmark(!bookmark);
    }

    return (<>
        <section className="carda">
            <div className="mlogo">
                <img  src={MasterLogo} alt="mlogo"/>
            </div>
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="selection">
                <button className="project green" onClick={prop.ShowModal}>Back this project</button>
                <button className="bookmark" onClick={bookmarked}>{bookmark ? <img src={Bookmark} alt="bookmark"/> : <img src={BookmarkG} alt="bookmark"/>}<span className="tag" style={bookmark ? {color:'hsl(0, 0%, 48%)'} : {color: 'hsl(176, 72%, 28%)'}} >Bookmark</span></button>
            </div>
        </section>
    </>)
}

export default SectionA