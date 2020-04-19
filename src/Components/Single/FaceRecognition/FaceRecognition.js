import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import "./FaceRecognition.css"

const FaceRecognition = ({imageURL, boxes}) => {
  const divs = boxes.map((box)=>{
    return (<div className="faceBox" style={{ top: box.top, right: box.right, left: box.left,bottom: box.bottom }} ></div>)
  })
  return (
    <Fragment>
      <div style = {{position: 'relative'}}  >
          <Image id="imageBox" src={imageURL? imageURL: ''} rounded style={{width: '600px', height: 'auto'}} />
          {divs}
      </div>
    </Fragment>
  );
};

export default FaceRecognition;
