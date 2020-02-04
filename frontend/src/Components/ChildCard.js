import React from "react";
import ProfileImage from "./ProfileImage";
import ChildBio from "./ChildBio";

const ChildCard = props => {
    return(
        <>
            <div className="child-name">
                <h1>Child Name</h1>
            </div>
            <ProfileImage />
            <ChildBio />
            <div className="start-date">
                <h2>Start Date</h2>
                <h2>Visitor</h2>
            </div>
        </>
    );
};

export default ChildCard;