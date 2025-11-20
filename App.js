import React, { useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frame from './Component/frame';
import Shop from './Component/Shop';
import { Nav, NavItem } from 'react-bootstrap';
import { Button } from 'reactstrap';
import './App.css';

function App() {

  // Backend Fetch
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then(res => res.json())
      .then(data => console.log("Backend Data:", data))
      .catch(err => console.log("Fetch error:", err));
  }, []);

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", height: "10vh",gap:"20px"}}>
        <p style={{marginBottom:"1px"}}>Experience New Fashion Site</p>
        <Button color='primary' outline>Get Started</Button>
      </div>

      <div>
        <Nav style={{backgroundColor:"black",padding:"10px",height:"80px"}}>
          <div style={{ display: "flex",alignItems: "center", justifyContent: "space-between",width:"100%",color:"white"}}>
            <div style={{ display: "flex", alignItems: "center", gap: "60px" }}>
              <img src='' alt='' />
              <h2 style={{color:"red"}}>Soul Ghost </h2>
              <h5>New</h5>
              <h5>Men</h5>
              <h5>Women</h5>
              <h5>Lifestyle</h5>
              <h5>Collections</h5>
              <h5>About us</h5>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input 
                type="text" 
                placeholder='Search' 
                style={{ padding: "6px 10px", borderRadius: "5px", border: "1px solid gray" }} 
              />
            </div>

          </div>
        </Nav>
      </div>

      <div style={{ position: "relative", width: "100%" }}>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgiZPZ_VEXzUXLm2D8nsa2t0KsEBgD-18YCw&s.jpg'
          style={{width:"100%",height:"700px"}}
          alt=''
        />
        <div style={{ position: "absolute", top: "60%", right: "-180px", transform: "translate(-50%, -50%)", color: "red", textAlign: "center" }}>
          <h1 style={{ fontSize: "40px", margin: 0 }}>FOR THE TRENDSETTER</h1>
          <h4 style={{ marginTop: "2px" }}>
            Discover the latest trends and styles<br/> 
            that define the future of fashion.
          </h4>
          <div style={{display:"flex",marginLeft:"90px",paddingTop:"14px"}}>
            <Button color='primary'>SHOP BALLET</Button>
            <Button style={{marginLeft:"10px"}} outline>SHOP NOW</Button>
          </div>
        </div>
      </div>

      <Frame />
      <Shop />
    </div>
  );
}

export default App;
