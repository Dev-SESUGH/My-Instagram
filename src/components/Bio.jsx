import { useState } from "react";
import getPhotoUrl from 'get-photo-url'
import profileIcon from "../assets/profileIcon.svg";

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Dev sesugh",
    about: "software developer @Rova",
  });

  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon)

  const updateUserDetails = (event) => {
    event.preventDefault();
    setUserDetails({
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    });
    setEditFormIsOpen(false);
  };

  const updateProfilePhoto = async () => {
      const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
      setProfilePhoto(newProfilePhoto);
    };

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" placeholder="Your name" />
      <input type="text" id="" name="aboutUser" placeholder="About you" />
      <br />
      <button
        type="button"
        className="cancel-button"
        onClick={() => setEditFormIsOpen(false)}
      >
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  const editButton = (
    <button onClick={() => setEditFormIsOpen(true)}>Edit</button>
  );



  return (
    <section className="bio">
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto} >
        <div
          className="profile-photo"
          role="button"
          title="click to edit photo"
        >
          <img src={profilePhoto} alt="profile picture" />
        </div>
      </label>

      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>

        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
