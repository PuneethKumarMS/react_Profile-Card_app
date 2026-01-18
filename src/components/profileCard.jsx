import React from "react";
import "../style.css"

function ProfileCard ({name, image, bio, bgColor}) {
    const cardStyle ={
        backgroundColor: bgColor,
    };
    return(
        <div className="profile-card" style={cardStyle}>
            <img src={image} alt={name} className="profile-image" />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-bio">{bio}</p>
        </div>
    );
}
export default ProfileCard;
