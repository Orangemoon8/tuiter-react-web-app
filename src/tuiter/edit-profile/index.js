import React from "react";
import {updateProfile} from "../profile/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useState} from "react";

const EditProfile = () => {

    const profileInfo = useSelector(state => state.profile) // retrieve profile from store
    const [profile, setProfile] = useState(profileInfo) // hook allow us to modify local states
    const saveProfile = (profile)=>{
        const nameLength = Name.split(' ').length
        if(nameLength >=2) {
            const newFirstName= Name.split(' ')[0]
            const newLastName= Name.split(' ')[1]
            dispatch(updateProfile({...profile,firstName:newFirstName,lastName:newLastName})) // save other data and reformat full name
        } else {
            alert("Invalid input of new name, please split firstname and lastname with spaces.")
        }
        navigate("/tuiter/profile")
    }


    const [editBirth, setEditBirth] = useState(false)
    const handleBirth =()=>{
        setEditBirth(!editBirth)
    }


    const [Name, setName] = useState(profileInfo.firstName + " " + profileInfo.lastName)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className="mb-2">
            <div className="row">
                <div className="col-9">
                    <button type="button" className="btn-close" onClick={() => navigate("/tuiter/profile")}/>
                    <b> Edit profile</b>
                </div>
                <div className="col-3">
                    <button className="rounded-pill btn btn-primary float-end" onClick={() => saveProfile(profile)}>Save</button>
                </div>
            </div>

            <div className="mt-1">
                <img src="/images/banner.jpg" className="w-100"/>
            </div>
            <div>
                <img src="/images/profile.jpg" height={90} width={90} className="position-absolute rounded-circle"/>
            </div>
            <br/><br/><br/><br/>
            <div>
                <ul className="list-group pt-2">
                    <li className="list-group-item">
                        <div className="text-secondary">Name</div>
                        <textarea className="form-control border-light border-3"
                                  onChange={(event) => {setName(event.target.value)}} value ={Name}/>

                    </li>
                    <br/>
                    <li className="list-group-item">
                        <div className="text-secondary">Bio</div>
                        <textarea className="form-control border-light border-3"
                                  onChange={(event) => setProfile({...profile, bio:event.target.value})} value ={profile.bio}/>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <div className="text-secondary">Location</div>
                        <textarea className="form-control border-light border-3"
                                  onChange={(event) => setProfile({...profile, location: event.target.value})} value ={profile.location}/>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <div className="text-secondary">Website</div>
                        <textarea className="form-control border-light border-3"
                                  onChange={(event) => setProfile({...profile, website:event.target.value})} value ={profile.website}/>
                    </li>
                </ul>
            </div>

            <div>
                <span className="text-primary text-decoration-underline" onClick={handleBirth}>Edit Date of Birth</span>
                {!editBirth && <div>{profile.dateOfBirth}</div>}
                {editBirth &&<textarea onChange={(event) => setProfile({...profile, dateOfBirth:event.target.value})} value={profile.dateOfBirth}/>}
            </div>
            <br/><br/><br/>
        </div>
    );
};
export default EditProfile;

// <div>
//     <div>
//         <img src={`/images/${profile.bannerPicture}`} className="w-100"/>
//         <br/>
//         <img src={`/images/${profile.profilePicture}`} className="position-absolute rounded-circle" width={90} height={90} />
//         <br/>
//         <button onClick={()=>navigate("/tuiter/edit-profile")} className="btn btn-outline-dark rounded-pill mt-1 float-end fw-bolder">Edit profile</button>
//         <br/>
//     </div>
//     <br/><br/><br/><br/>
//     <div>
//         <div className="fw-bolder"><h4>{profile.firstName} {profile.lastName}</h4></div>
//         <div className="text-secondary">{profile.handle}</div>
//         <div>
//             <p>
//                 {profile.bio}
//             </p>
//         </div>
//
//         <div className="row text-secondary">
//             <div className="col-4"><i className="bi bi-geo-alt">{profile.location}</i></div>
//             <div className="col-4"><i className="bi bi-balloon">{profile.dateOfBirth}</i></div>
//             <div className="col-4"><i className="bi bi-calendar2-week">{profile.dateJoined}</i></div>
//         </div>
//         <br/>
//         <div>
//             <b>{profile.followingCount}</b> Following <b>{profile.followersCount}</b> Followers
//         </div>
//     </div>
// </div>