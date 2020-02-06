import React from "react";
import ProfileImage from "./ProfileImage";
import ChildBio from './ChildBio';

const ChildCard = props => {
    return (
        <section className="child-card">
            <div className="child-name">
                <h1>{props.card.name}</h1>
            </div>
            <div className="middle-content-card">
                <div className="profile-image">
                    {/* <ProfileImage
                    {props.card.image}
                    /> */}
                    <img src={props.card.image} />
                </div>
                <div className="child-bio">
                    {/* <ChildBio 
                        card={props.card.bio}/> */}
                    <p>{props.card.bio}</p>
                </div>
            </div>
            <div className="bottom-content-card">
                <div className="start-date">
                    <h2>{props.card.date}</h2>
                </div>
                <div className="status">
                    <h2>{props.card.status}</h2>
                </div>
            </div>
        </section>
    );
};

export default ChildCard;