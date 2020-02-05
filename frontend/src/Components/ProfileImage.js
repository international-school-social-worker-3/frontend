import React from "react";

const ProfileImage = props => {
    console.log(props);
    return(<img
        className="image"
        src={props.image}
        alt="Child Profile Pictures"
    />
    )
};

export default ProfileImage;