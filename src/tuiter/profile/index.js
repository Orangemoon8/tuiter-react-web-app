import React from "react";
import ProfileInfo from "./ProfileItem";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const selectedProfile = useSelector(state => state.profile)

    return (
        <ProfileInfo profile = {selectedProfile}/>
    )
}


export default ProfileComponent;