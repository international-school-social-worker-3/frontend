import React from "react";
import ProfileImage from "./ProfileImage";
import ChildBio from './ChildBio';


// const kdjlskj = [
//     key: IDBCursorWithValue;
// ]
const ChildCard = props => {
    return(
        <section className="child-card">
            <div className="child-name">
                <h1>Child Name</h1>
            </div>
            <div className="middle-content-card">
                <div className="profile-image">
                    <ProfileImage
                        // image={item.image}
                    />
                </div>
                <div className="child-bio">
                <ChildBio />
                </div>
            </div>
            <div className="bottom-content-card">
                <div className="start-date">
                    <h2>Start Date</h2>
                </div>
                <div className="status">
                    <h2>Visitor</h2>
                </div>
            </div>
        </section>
    );
};

export default ChildCard;