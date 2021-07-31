import React, { useContext, useState } from "react";
import "./newproduct.css";
import { Link } from "react-router-dom";
import storage from "../../firebase";
import { addMovies } from "../../context/movieContext/apiCalls";
import { MovieContext }from "../../context/movieContext/MovieContext";

export default function NewProduct() {
  const [movie, setmovie] = useState(null);
  const [img, setimg] = useState(null);
  const [imgTitle, setimgTitle] = useState(null);
  const [imgSm, setimgSm] = useState(null);
  const [trailer, settrailer] = useState(null);
  const [video, setvideo] = useState(null);
  const [upload, setupload] = useState(0);
  const {dispatch} = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value;
    setmovie({ ...movie, [e.target.name]: value });
  };

  const uploads = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setmovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setupload((prev) => prev + 1);
          });
        }
      );
    });

  }

 // console.log(movie);
 const handleUpload = (e) => {
    e.preventDefault();
    uploads([
      {file: img, label:"img"},
      {file: imgTitle, label:"imgTitle"},
      {file: imgSm, label:"imgSm"},
      {file: trailer, label:"trailer"},
      {file: video, label:"video"}
      
    ])

 }

 const handleSubmit = (e) => {
  e.preventDefault();
  addMovies(movie,dispatch)

}
console.log(movie);
  return (
    <div className="newproduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setimg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setimgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setimgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="lama dev"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="desc"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Serise?</label>
          <select name="isSerise" id="isSerise" onChange={handleChange}>
            <option value="false">Yes</option>
            <option value="true">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" onChange={(e) => settrailer(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" onChange={(e) => setvideo(e.target.files[0])} />
        </div>

        {
          upload === 5 ? (

            <button className="addProductButton" onClick={handleSubmit}>
              Create</button>

          ) : (
            <button className="addProductButton" onClick={handleUpload}>
              Upload</button>
          )
        }
          
      
      </form>
    </div>
  );
}
