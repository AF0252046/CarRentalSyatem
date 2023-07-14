import {BsJustify} from "react-icons/bs";
import React, { useState } from "react";
import { Carousel ,card} from "bootstrap";
import { Card,Button } from "react-bootstrap";

import'./Homestyle.css';

function Home(){
    return(
        <>
        <div className="slide-content">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/sliderimg11.png" class="d-block w-100" alt="slide1"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Book A Cab</h1>
        <p>For More Than Three People</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/sliderimg16.jpg" class="d-block w-100" alt="slide2"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Book A Scooter</h1>
        <p>For Two OR Less Than Two People.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/sliderimg17.jpg" class="d-block w-100" alt="slide3"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Book A Auto Rikshaw</h1>
        <p>For Three OR Less Than # People.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="maincontent">
  <div className="rows1">
    <div className="col-3">
{ <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/cabpng.png" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>SUV</Card.Title>

        <Card.Text>
          Book A SUV It can contain minimum 5 people and 2 big bags and 2-3 smaller bags.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
</div>
<div className="col-3">
{ <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/rikshawimg1.png" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>Rikshaw</Card.Title>
        
        <Card.Text>
        Book A Rikshaw it can contain 3 people and smaller 2-3 bags and 1 big bag.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
    </div>
    <div className="col-3">
    { <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/cardimg1.jpg" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>Scooty</Card.Title>
     
        <Card.Text>
        Book A Scooty If You Are Single It can contain 1 big.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
    </div>
    <div className="col-3">
    { <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/carimg2.svg" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>Hybrid</Card.Title>
       
        <Card.Text>
       Book a Cab Along Rikshaw if you have more people.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
    </div>

</div>
<div className="rows2">
<div className="col-3">
    { <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/carimg3.svg" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title> Sedan</Card.Title>
        
        <Card.Text>
        Book A Sedan It can contain minimum 6 people and 2 big bags and 2-3 smaller bags.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
    </div>
    <div className="col-3">
    { <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/carimg4.svg" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>mini</Card.Title>
        <Card.Text>
        book Mini for Fast ride or emergency.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
    </div>
    <div className="col-3">
    { <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/sliderimg8.jpg" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title> Long Tour</Card.Title>
        <Card.Text>
          Book This cab for long drive for long journy
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
    </div>
    <div className="col-3">
    { <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src="./images/sliderimg12.jpg" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title> Private Cab</Card.Title>
        <Card.Text>
       Book Here A Private cab For sheduling for a period of time
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>}
    </div>
</div>
</div>
               
        </>
    )
}
export default Home;