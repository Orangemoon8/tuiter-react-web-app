import React from "react";
import {useNavigate} from "react-router";


const ProfileInfo = (
    {
        profile = {
                         "firstName": "Dexian", "lastName": "Chen", "handle": "@orangemoon",
                         "profilePicture": "profile.jpg", 	"bannerPicture": "banner.jpg",
                         "bio": "International Student, Computer Science Major, Technology enthusiast. Currently taking Web dev class.",
                         "website": "youtube.com/webdevtv",
                         "location": "San Jose, CA",	"dateOfBirth": "03/31/1997",	"dateJoined": "09/2021",
                         "followingCount": 0,	"followersCount": 0
        }
    }
) => {
    const navigate = useNavigate();
    //console.log(`/images/${profile.bannerPicture}`);
    return (
        <div>
            <div>
                <img src={`/images/${profile.bannerPicture}`} className="w-100"/>
                <br/>
                <img src={`/images/${profile.profilePicture}`} className="position-absolute rounded-circle" width={90} height={90} />
                <br/>
                <button onClick={()=>navigate("/tuiter/edit-profile")} className="btn btn-outline-dark rounded-pill mt-1 float-end fw-bolder">Edit profile</button>
                <br/>
            </div>
            <br/><br/><br/><br/>
            <div>
                <div className="fw-bolder"><h4>{profile.firstName} {profile.lastName}</h4></div>
                <div className="text-secondary">{profile.handle}</div>
                <div>
                    <p>
                    {profile.bio}
                    </p>
                </div>

                <div className="row text-secondary">
                    <div className="col-4"><i className="bi bi-geo-alt">{profile.location}</i></div>
                    <div className="col-4"><i className="bi bi-balloon">{profile.dateOfBirth}</i></div>
                    <div className="col-4"><i className="bi bi-calendar2-week">{profile.dateJoined}</i></div>
                </div>
                <br/>
                <div>
                    <b>{profile.followingCount}</b> Following <b>{profile.followersCount}</b> Followers
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;