import { useState } from "react";
import getPhotoUrl from "get-photo-url";

const Gallery = () => {
  const [allPhotos, setAllPhotos] = useState({});

  const addphoto = async () => {
    const newPhoto = {
      id: Date.now(),
      url: await getPhotoUrl("#addPhotoInput"),
    };
    setAllPhotos([newPhoto, ...allPhotos]);
  };

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addphoto}>
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>

      <section className="gallery">
        {allPhotos.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} className="item-image" alt="" />
            <button className="delete-button">Delete</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
