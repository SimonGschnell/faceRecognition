import React, { Fragment } from "react";
import "./App.css";
import Navigation from "../Components/Single/Navigation/Navigation";
import Logo from "../Components/Single/Logo/Logo";
import UrlImageSearch from "../Components/Single/UrlImageSearch/UrlImageSearch";
import FaceRecognition from "../Components/Single/FaceRecognition/FaceRecognition";
import Container from "react-bootstrap/Container";
import Rank from '../Components/Single/Rank/Rank.js'
import ErrorBound from "../Components/Parent/ErrorBound/ErrorBound";
import Tiltjs from "../Components/Parent/Tilt/Tilt";

import { Row, Col } from "react-bootstrap";

import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

const params = {
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

const app = new Clarifai.App({
  apiKey: 'd5e832429129456e9d922e5368878fc3'
})

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      boxes:[]
    };
  }

  detectImage = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  createBoundingBoxes= (data) =>{
    const regions = data.outputs[0].data.regions;
    const boxes = []
    const img = document.getElementById('imageBox');
    const img_height = Number(img.height);
    const img_width = Number(img.width);
    for (let region of regions){
      const box = {
        top: region.region_info.bounding_box.top_row * img_height,
        right: img_width - (region.region_info.bounding_box.right_col * img_width),
        bottom: img_height - (region.region_info.bounding_box.bottom_row * img_height),
        left: region.region_info.bounding_box.left_col * img_width
      }

      boxes.push(box)
    }
    return boxes;
    
  }

  setBoundingBoxes= (boxes) =>{
    this.setState({boxes})
  }

  sendFaceRecognitionRequest = () =>{
    if(this.state.imageUrl){
      app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.imageUrl)
      .then( response => {
          this.setBoundingBoxes(this.createBoundingBoxes(response));
        }).catch(error => {console.log(error)})
    }
    
  }

  render() {
    const { imageUrl, boxes } = this.state;
    return (
      <Fragment >
       
        <Particles className="particles" params={params}/>
        <Navigation />
        <Container >
          <Row className="p-4 align-items-center">
            <Col sm='auto'>
              <Tiltjs>
                <Logo />
              </Tiltjs>
            </Col>
            <Col className="text-center ">
              <Rank/>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <UrlImageSearch event={this.detectImage} buttonEvent={this.sendFaceRecognitionRequest} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm='auto'>
          <FaceRecognition imageURL={imageUrl} boxes={boxes}/>
          </Col>
          </Row>
        </Container>
        
      </Fragment>
    );
  }
}
export default App;
