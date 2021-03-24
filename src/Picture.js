import React, { useContext, useEffect, useState } from "react";
import { Apicontext } from "./API_key";
import "./Picture.css";

function Picture() {
  const [imageData, setImageData] = useState({});
  const apikey = useContext(Apicontext);
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
      .then((res) => res.json())
      .then((data) => {
        setImageData(data);
        document.getElementById("topbar__imageTitle").innerHTML = data?.title;
      });
  }, []);

  return (
    <div className="picture">
      <img
        className="picture__image"
        src={imageData?.url}
        alt={imageData?.title}
      />
      <p className="picture__description">{imageData?.explanation}</p>
      <h3 className="picture__date">{imageData?.date}</h3>
      <h4>&#169; {imageData?.copyright}</h4>
    </div>
  );
}

export default Picture;
