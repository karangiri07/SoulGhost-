
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  const Fashion = [
    {
      id: 1,
      name: "Gray SKim Hoodie",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLrbHQc90SN7MRvdGkFaHK9n5o9DHNmd51y4-fPG6YW8K8_0q2omfrIas2OgYgSTLxE6_a7_YM_KE2k41ZCp44SgIrmPMJb0S0OEJS8M49YxHqsnjPlhImU3zxFKory0-hbg&usqp=CAc",
      price: "₹3,299",
      oldPrice: "₹5,499",
      discount: "-40%",
  },
  
   {
      id: 2,
      name: "Oversized printed sweatshirt",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTRhxdGHHQcqa5j0E_JURtEnBaRyvqElxKdQ7SZ3ruOTXyN1_LxG2oThEunUNZwD6Y-Ib2Mg-pD50BeNEOg6JRRNoB09rPKSNg3yM20qRIRLedOdwCSzxHNnWy0MrX-7GGhZHA&usqp=CAc",
      price: "₹5,579",
      oldPrice: "₹8,999",
      discount: "-38%",
    },
    {
      id: 3,
      name: "Cotton piqué polo shirt",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKI4nPZp9Vbf3QOuhXzUOOS9vtSWTVEBv0f40D4-oKnTA3eQAN9h4MaUqXIVV518zQa_6uB-6hhGVZjZ1J6NaVptOYyplq5NA72MpfV0-2Bz7uxaPo2sMTRLbyy4Pj8AzoBQ&usqp=CAc",
      oldPrice: "₹6,999",
      discount: "-40%",
    },
    {
      id: 4,
      name: "Multi skim Hoodie",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTC6-mlhvWGVBlQv0QxDPW_dyx6CWFdmvwygDtHZ5QYTRSil7Wbz2SP5ZD5IINniTI5BdXFgiYxdhWeDTho91oxdzT-JYE1hmTvdSMB8aSV8u3rvaP3L-yAcVIxdmkL-M0rIA&usqp=CAc",
      price: "₹8,999",
      oldPrice: "",
      discount: "-48%",
    },
    {
      id: 5,
      name: "Black Vision Hoddie Men's",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgJEYGDruc6YSmoumb1FmdTFTk6VJTzvEJbNOYPAU5KvhUKhdMYIfJ8RFXxzBdd7JCV802eg2vBZ8Zy6IrsAuvufNT0APuZR9X76QuTOa1dHoqHNxqb5ioxA",
      price: "₹8,999",
      oldPrice: "",
      discount: "-48%",
    },
    
]

const products = [
    {
      id: 1,
      name: "Nike Ava Rover",
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhMSExITFhUXGBgYGBUYGBIYGhgZFhcXGBYZGBkkHSgiGSEmIBgVITEhJikrLi4uFyAzODMsNygtLi0BCgoKDg0NFQ8QFSsdFR0rLS0tLS0rKys3LS0tLS0tKystLS03KystLS0rKy0tKzctLSstKzctLS0tLTItKys3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBQcIBAH/xABCEAACAQIDBAgCBQoFBQAAAAABAgADEQQSIQUxQVEGBxMiYXGBkTKhFFKx0fAjM0JicoKSweHxFlSywtIVQ0STov/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EAB4RAQEBAAICAwEAAAAAAAAAAAARAQISQVEhMWET/9oADAMBAAIRAxEAPwDeMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBESM9P+mFPZWGFd0aozNkp0wbZmsW7zWOUAA62PlAk0TVPQ3pFtHblLE1ExNHCdmyoiJSL3uM13YuGHAAi3HSUVsftLZZ7TEluzFg1bPWxWHfxYN+Vw7HcLWTvDiNbBtmJjOj22FxdFaoUqdAyHXK1g1r7mFiCDxBG7dMnIEREBERAREQEREBERAREQEREBERAREQEREBERAREQEiHWl0WO0sC1NPztM9rSH1mUEFP3lLAeNjJfLGOxaUab1ajZUpqzsx4KoJY+wgcs9A+kNfZ2MpvRJK1HSnVpWNqilrWI4MLnKd4PgSDvXavTrD4iq+zsIn0uu4dGAFqCC1nNWodCovrlDct5midq7Tp4vG4jE06fZI7lwnEXGpPJmILG24sdZj8LXek6vSdqbLqGQlSLciN03KjqHoZ0dGz8KmHD5yAMzWtchVXQcrKJnZCeqvpkdp4Zu1t29EhalrDMCO5UtwvZgRzU8JNpnVJpfpv1tV0xFWhg+zVKRZDVYZmZlOVio3ABrgaG9rzdE5T6bbCq4LG16NVd7tUptwem7kqw+w8iDGDJ0Os3aqHP9MLm+qtToFTv0sEBA3bi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",
      price: "₹3,299",
      oldPrice: "₹5,499",
      discount: "-40%",
    },
    {
      id: 2,
      name: "Nike DUNK LOW RETRO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xDeyKNuRuN8Q3qduKz_1gSPRb_MAyM-BP2AND9U2Xw&s",
      price: "₹5,579",
      oldPrice: "₹8,999",
      discount: "-38%",
    },
    {
      id: 3,
      name: "Nike Vision Sneakers Low Olive Green White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosh-btwyW68Q-yFIyOq01pNqUdGQ33g-hlg&s",
      price: "₹4,199",
      oldPrice: "₹6,999",
      discount: "-40%",
    },
    {
      id: 4,
      name: "Nike Court Vision Low Men's Shoes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLvGbz7gm4lLZ3p7lOR2Fe8XaTPHtyAzE4UkaOngUDQ&s",
      price: "₹8,999",
      oldPrice: "",
      discount: "-48%",
    },
    {
      id: 5,
      name: "Nike Court Vision Low Men's Shoes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKIb6doqaRrl95VQMAA78WgNtYeAhSF0U0w&s",
      price: "₹8,999",
      oldPrice: "",
      discount: "-48%",
    },
  ];
const settings = {
    dots: true,
  infinite: true,
  autoplaySpeed: 2500,
  arrows: false,       // 👈 enables left/right arrows
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
    swipe: true,
  draggable: true, 
  pauseOnHover: true,         
  autoplaySpeed: 2500,
  cssEase: "ease-in-out",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  };
function Frame() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      const res = await fetch("http://localhost:3001/api/bookings");
      const data = await res.json();
      setBookings(data);
    };
    loadBookings();
  }, []);
  
  return (
    <div>
        <div style={{textAlign: "center" ,marginTop: "40px",padding:"20px"}}>
            <h1>Festive offer - Extra 15% Off on ₹3999</h1>
        </div>
        <div style={{display:"flex",gridTemplateColumns:"repeat(3, 1fr)", gap:"-60px", padding:"20px"}}>
            <div style={{flex:1, position: "relative"}}>
                <img src='data:image/jpeg;base64,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'
              style={{width:"70%",height:"400px"}}>
              </img>
              <div style={{ position: "absolute", top: "70%",  right: "-180px", transform: "translate(-218%, 90%)", color: "red" }}>
                <h2 style={{fontSize:"30px",backdropFilter: "blur(11px)" }}>Up to 50% Off</h2>
                </div>
              

                </div>
                <div style={{flex:1, position: "relative"}}>
                    <img src='data:image/jpeg;base64,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'
                   style={{width:"70%",height:"380px"}} ></img>
                     <div style={{ position: "absolute", top: "70%",  right: "-180px", transform: "translate(-218%, 90%)", color: "red" }}>
                <h2 style={{fontSize:"30px",backdropFilter: "blur(11px)" }}>Up to 30% Off</h2>
                </div>
                    </div>
                    <div style={{flex:1, position: "relative"}}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80sdUbJ298mlnIJeCxFYxmTJ4duY5Ycb3-w&s'
                        style={{width:"70%",height:"380px"}} ></img>
                        <div style={{ position: "absolute", top: "70%",  right: "-180px", transform: "translate(-218%, 90%)", color: "red" }}>
                <h2 style={{fontSize:"30px",backdropFilter: "blur(11px)" }}>Up to 65% Off</h2>
                </div>
                        </div>
                        <div style={{flex:1, position: "relative"}}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztIwjgSb7y6QPg9gCc67uzqzADqaS0zXf7w&s'
                            style={{width:"70%",height:"380px"}} ></img> 
                            <div style={{ position: "absolute", top: "70%",  right: "-180px", transform: "translate(-218%, 90%)", color: "red" }}>
                <h2 style={{fontSize:"30px",backdropFilter: "blur(11px)" }}>Up to 40% Off</h2>
                </div>  
                            </div>
            
                  </div>
                  <div style={{ padding: "40px", backgroundColor: "#fff" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "600" }}>TRENDING NOW <span style={{color:"red"}}>SHOES</span></h2> 
                    <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} style={{ padding: "10px",  gap: "20px", }}>
            <div
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "10px",
                textAlign: "center",
                position: "relative",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                 transform: "scale(1.0100029)", 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
            >
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#a20a0a",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
              >
                {item.discount}
              </span>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "contain",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h4 style={{ fontSize: "14px", fontWeight: "500" }}>{item.name}</h4>
              <div style={{ marginTop: "5px" }}>
                <span style={{ color: "#c00", fontWeight: "600", marginRight: "8px" }}>
                  {item.price}
                </span>
                {item.oldPrice && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#888",
                      fontSize: "13px",
                    }}
                  >
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
                  </div>



            <div style={{ padding: "40px", backgroundColor: "#fff" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "600" }}>TRENDING NOW <span style={{color:"red"}}>FASHION</span></h2> 
       <Slider {...settings}>
        {Fashion.map((item) => (
          <div key={item.id} style={{ padding: "10px",  gap: "20px", }}>
            <div
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "10px",
                textAlign: "center",
                position: "relative",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                 transform: "scale(1.0100029)", 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
            >
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#a20a0a",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
              >
                {item.discount}
              </span>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "contain",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h4 style={{ fontSize: "14px", fontWeight: "500" }}>{item.name}</h4>
              <div style={{ marginTop: "5px" }}>
                <span style={{ color: "#c00", fontWeight: "600", marginRight: "8px" }}>
                  {item.price}
                </span>
                {item.oldPrice && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#888",
                      fontSize: "13px",
                    }}
                  >
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
                  

      </div>
      
    </div>
  );
}
export default Frame;