import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import HomeBG from "./images/card_bg_birdseyeview.jpg";
import ShowcaseBG from "./images/card_bg_showcase.jpg";
import RandomBG from "./images/card_bg_random.jpg";

class TwitterShowcase extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-card">
          <Card className="bg-dark text-white">
            <Card.Img src={HomeBG} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>A Birdseye view</Card.Title>
              <Card.Text>View Tweets from the last seven days</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="home-card">
          <Card className="bg-dark text-white">
            <Card.Img src={ShowcaseBG} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Twitter Showcase</Card.Title>
              <Card.Text>Search by User or Tweet content.</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="home-card">
          <Card className="bg-dark text-white">
            <Card.Img src={RandomBG} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Feeling Lucky?</Card.Title>
              <Card.Text>Random Tweet from select Twitter users.</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    );
  }
}

export default TwitterShowcase;