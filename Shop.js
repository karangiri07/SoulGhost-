import React from 'react';

function Frame() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "40px", padding: "20px" }}>
        <h1>
          TOP BRANDING <span style={{ color: "red" }}>FASHION</span> COLLAP
        </h1>
        </div>
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",gap: "100px",padding: "20px",}} >
          <div style={{ flex: 1 ,marginLeft:"110px"}}>
            <img
            src='data:image/png;base64,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'
              alt="Top Branding Fashion" style={{}} />
          </div>
          <div style={{ flex: 1 }}>
              <img
              src='data:image/png;base64,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'
              alt="Top Branding Fashion" style={{}} />
        </div>
         <div style={{ flex: 1 }}>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8AAADn5+f8/Pz29vbLy8vz8/P5+fkiIiIEBAQaGhofHx8LCwsbGxsXFxcPDw/f39/Y2NisrKy/v7+0tLTOzs7t7e1PT08xMTF2dna6urpVVVXb29snJydGRkalpaWKioqVlZV/f386OjpsbGxfX19CQkJxcXGRkZGmpqadnZ2FhYU8PDwtLS1LS0tHqPP3AAAHp0lEQVR4nO2bi3biOAyGbRxyJzcCBCjXQi/M0Pd/vJVkJwTI7HbazjrTo+8c2iYKHP1IlmI7FYJhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhmAvKtgP/A99aI4gbFLad+JMoobZSTr9zFBeplPLwTRWCquynJHLbvvwhnLmUASl8su3KHwACWMgL5TfM00kl23w7gdNDnaCGrW2PvhKlvJ28Y2DbrS8lvxcol7ad+lrmHRKHtp36UqZ3+gJZfa9yerquM8TGtlNfiRJhR546tt36IhQl47hD4d62a1/LrENiZtupT0PRW2zpd/YtOwYoy9/qUM07is34r6+n7nMdKiXcjiCObDv4KZTwXq5CdeqQeLLt5aco01qHT8fK75A4tezkR1E3syUdqnHHSHz+W0fi4HgtxBUo+75jBPLBtqsfwtveKplTqB460nRt29mPsJDyLh91x9h3SCwte/sRJh06dHP3OiyxZW8/xHOHkDFZNu0xGOiRuLPs7Ue4nw5KudKmVRO6c1VVup/8fQsaSrzcCQygY2CxGdYjtIrSUVrRwcG2w78N3M3cNz7dMTyx1AfJOa38KtUh/QuWwJuuDZNBmg8uOhTO6Qozx4hWqziJRlph/xc0POfi4UJ7+7NDYrtjpBC/VRRF2tL7juG6tCCBk6VHUzS7FhBnJN6RMR6cz2lYjWJj8my6/w5cRy+54Mq2HOl4HjokonglXgOTp6078W2P81Q5juc6GAMPp0dppPubGkjdCtIopBey8hzPcdRjGEUJFJsU6mptxo4BNqd/ShXEz8EYqjF4LP0I+jjMiODEVmKMolGQrsLAFM0NfB+OB3OMwI/jCOxRBCa4JDxqgU7/1t9Anuu5nsiO0g9lEqb+CoomOusmaSjjKPUjCa8Ya0okpyDQE8cET44iCUKNWQ6FQxL7NiIxJkp50z24CcPLl74PWnJMXVHCYZLq1yjFgPq4gOh5DnWMdGTMiS+jNFopDwqW5/YtS3FgCfEay2BEEiAwo1A+CseFvriOZAjpSVISMsfQMfAd+3gVYAxDGLZxqM2FhwnfN4EUw2EFsQhwVMlVgAKlfFWup9RQggRfpmGtcJXGa8xgzx2FcUwKL+Z0CuMZ7xi8fqkEb8ME0o/qBngKIwwSVbooAzpGW0LkJzDexlCbXG8jZXqjUG4FDUPX7VemQrBKiI1RCNUGRmOM4w0rUEauowlkBFGAOnxBFbOi00lozBTiDEeict1prxRCnqo1ahslpv35GEP5gCNUbSVEDcoMFM1EJhFdssE8xQzGd4AJf6M5kDOF49CZurY13fF7c3qpBRw7LGObKv6VX3tbdFj0dHDQJb5f6dnCHdyzWB6PR4+W8hfXlgwMy1xM79+TXfJTleXCoqL3MERtWuHNBJdS97928U+LYtHfpCVaCifXlncp3JXP6uWPOfclfFLh6yLb9HxxQyv0iqIsbtbS3qNQqXExsT6TUs0P0fGXVgj3PHqJQ6nG7jQK6dy9DK8/84vFYRTEjz8e3Gq9rvQqjHtaJjJ92k0nlyw18RrOz3HsH4bics4rjomMf26zweN6vSa14wPc2Kazjf2274lJs7pL/ZAUXvrf8UZh9lRb3mJ9TsH86upquGrw2KP2f3FPgwpvl/NrhUonbQs8d7NDFcPXlraO7Uokl5tl38AofGlvOQXtGD7c7kYNaQ/j6hwo3OKZ3XhYnE1MbUokp+ZQJrOD3mPJjIwTjKDhkz7XKKzQdIAvYbCvFerNjRe4Op+RVFCIwuhhsCb29qBNJPOPEzuTpbSAmKNbytyq1grpiagXXTwLo3BrROC5g4khfWv0mfv5/NlumuKa9nN9QHsRmWqJFiJuK0S9zeNB9GDNEC4ILo9iVJcYynRf5vYfYKCe1mzBU4gyWl9q8mrXVmhyVUPL4ROyNEKK1jgk/LnlR8LIv2aY0ExogOXyrTk3vFIYtNTQPc0E9/Sj5vMetEK3XXp2Voched7celD0BtjjHxuvxr9UqO9V8T1J83m5VigGzeMaQSvjbaDjUN9yUWvMKJJmFUnpB59rhSE4vKhv82iTdKJQRJOJL7Le0J+W+zejMLF6X4q144lqoxJqpWvpCH7+MPbBVS3FFnGutb/pb+cRRNTPC011LaWZNB0XVKisbn+PJTlIHE232F6K6dS/UkjFxRTTvdS1dIMtUxdT96dWSJlN7Ua8Wleot0DPRZ5vzC5nZp4+XI4fJvX9WNPxD6gq3eR5YR4GGwqPVt7WizzfSdPxqUIf6eOXV8PUAqq9khQYhe297eBaoSNvbtGGeokuaF0dY3zhr+o03mAKy61NheL+VhOrRjO1CG5iKKbnliXQd2Q3z34H8MU91W9FpZYnwEpMm0XEuVGoRN48kfh8rVB4P2rLQZ/Df0dcX30CXnV5Lmzeh93Swek4W84LVxVlWZgp6+RlOVvux1AOy7JUKgeMxS0Os9nhNBBgqFc28h1+QqkcvFpfVe6Xy+W+sD8DbnOznvGeq3sQn99B/fLgA+9nGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhmG/NPz93Wfc5r34PAAAAAElFTkSuQmCC'
                alt="Top Branding Fashion" style={{width:"100%"}} />
        </div>
         <div style={{ flex: 1 }}>
              <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00V6XT8pGvh4LJfGug9TeYi--rwtSb6QMng&s'
              alt="Top Branding Fashion" style={{}} />
        </div>
         <div style={{ flex: 1 }}>
              <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZB1ejyZyAZUGZMPEFq4iHD4YVmlAO7TbUkQ&s'
              alt="Top Branding Fashion" style={{}} />
        </div>
      </div>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // 👈 centers vertically
    backgroundColor: "#fbf4f4ff",
    color: "Black",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  }}
>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "600" }}>Book Your Fashion Experience</h2>
        <p style={{ color: "#ccc", marginBottom: "25px" }}>
          Please fill the form below to reserve your styling session or showroom visit.
        </p>

        <div
          style={{ backgroundColor: "#1e1e1e", padding: "25px", borderRadius: "6px", boxShadow: "0 2px 6px rgba(0,0,0,0.5)",}} >
          {/* Store */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Branch / Store</label>
            <select style={{  width: "100%",  padding: "10px",  backgroundColor: "#121212",  border: "1px solid #444",  color: "white",  borderRadius: "4px",}}>
              <option>--Select--</option>
              <option>Delhi Boutique</option>
              <option>Mumbai Studio</option>
              <option>Bangalore Showroom</option>
            </select>
          </div>
 
          {/* Service Type */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Service Type</label>
            <select style={{ width: "100%", padding: "10px", backgroundColor: "#121212", border: "1px solid #444", color: "white", borderRadius: "4px",}}>
              <option>--Select--</option>
              <option>Personal Styling</option>
              <option>Designer Consultation</option>
              <option>Fashion Show Invite</option>
              <option>Showroom Visit</option>
            </select>
          </div>

          {/* First Name */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>First Name</label>
            <input type="text" placeholder="Enter First Name" style={{  width: "100%",  padding: "10px",  backgroundColor: "#121212",  border: "1px solid #444", 
             color: "white",  borderRadius: "4px", } }/>
          </div>

          {/* Last Name */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Last Name</label>
            <input type="text" placeholder="Enter Last Name" style={{   width: "100%",   padding: "10px",   backgroundColor: "#121212",   border: "1px solid #444", 
              color: "white",borderRadius: "4px",}}  />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Email Address</label>
            <input type="email" placeholder="Enter Email"
              style={{ width: "100%", padding: "10px", backgroundColor: "#121212", border: "1px solid #444", color: "white", borderRadius: "4px",}}/>
          </div>

          {/* Mobile */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Mobile Number</label>
            <input type="tel" placeholder="Enter Mobile Number" style={{ width: "100%", padding: "10px", backgroundColor: "#121212", border: "1px solid #444", color: "white",
                borderRadius: "4px", }} />
          </div>

          {/* Fashion Interest */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Fashion Interest</label>
            <select style={{ width: "100%", padding: "10px", backgroundColor: "#121212", border: "1px solid #444", color: "white",
                borderRadius: "4px", } }>
              <option>--Select--</option>
              <option>Men's Fashion</option>
              <option>Women's Fashion</option>
              <option>Accessories</option>
              <option>Footwear</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div style={{ marginBottom: "15px" }}>
            <input type="checkbox" id="offers" style={{ marginRight: "8px" }} />
            <label htmlFor="offers" style={{ color: "#ccc" }}>
              Interested in receiving exclusive fashion updates and offers.
            </label>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input type="checkbox" id="terms" style={{ marginRight: "8px" }} />
            <label htmlFor="terms" style={{ color: "#ccc" }}>
              I accept the{" "}
              <a href="#" style={{ color: "#ff69b4", textDecoration: "underline" }}>
                Terms & Conditions
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button  style={{    width: "100%",    padding: "12px",    backgroundColor: "#ff69b4",    color: "white",    border: "none",    borderRadius: "4px",    fontWeight: "bold",    cursor: "pointer", }} >
            SUBMIT
          </button>
        </div>
      </div>
   <div
    style={{
      textAlign: "center",
      marginRight: "1   00px",
    }}
  >
  <h1 style={{fontSize:"130px",color:"red"}}>SOUL GHOST</h1>
  <p style={{fontSize:"20px",color:"blue"}}>Your one-stop shop for all things fashion.</p>
</div>

</div>
 <footer style={{ backgroundColor: "#fdfcfcff", color: "#020101ff", padding: "40px" }}>
      {/* Top Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        borderBottom: "1px solid #333",
        paddingBottom: "30px",
      }}>
        {/* THANE */}
        <div>
          <h4>THANE</h4>
          <strong>Service</strong>
          <p>Navnit House,<br />
            Old Mumbai Agra Road,<br />
            Gokul Nagar, Thane (W), Mumbai,<br />
            India - 400604.<br />
            Tel.: +91 224 2211111<br />
            Email: info-mumbai@bmw-navnitmotors.in</p>
        </div>

        {/* ANDHERI WEST */}
        <div>
          <h4>ANDHERI - WEST</h4>
          <strong>Sales</strong>
          <p>C - Wing Waterford Building,<br />
            C.D. Burfiwala Road, Juhu Lane,<br />
            Andheri West, Mumbai, Maharashtra,<br />
            India - 400058.<br />
            Tel.: +91 226 6777777<br />
            Email: info-mumbai@bmw-navnitmotors.in</p>
        </div>

        {/* ANDHERI EAST */}
        <div>
          <h4>ANDHERI - EAST</h4>
          <strong>Service</strong>
          <p>Plot No. 14 - B,<br />
            Mahal Industrial Estate, Paperbox Compound,<br />
            Andheri (E), Mumbai,<br />
            India - 400093.<br />
            Tel.: +91 226 7679797<br />
            Email: info-mumbai@bmw-navnitmotors.in</p>
        </div>

        {/* MALAD */}
        <div>
          <h4>MALAD</h4>
          <strong>Sales & Service</strong>
          <p>Ramchandra Lane Junction,<br />
            New Malad Link Road,<br />
            Malad (W), Mumbai,<br />
            India - 400064.<br />
            Tel.: +91 9821212253<br />
            Email: info-mumbai@bmw-navnitmotors.in</p>
        </div>
      </div>

      {/* Bottom Links */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        marginTop: "30px",
        gap: "30px"
      }}>
        <div>
          <h4>QUICK LINKS</h4>
          <p>Book A Cloth Store<br />Retail Offers<br />Pre-Owned Clothes</p>
        </div>
        <div>
          <h4>CONTACT US:</h4>
          <p>About Us<br />Locate Us<br />The Team</p>
        </div>
        <div>
          <h4>FOLLOW US:</h4>
          <p>Instagram</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid #333",
        marginTop: "40px",
        paddingTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        fontSize: "14px",
        color: "#aaa"
      }}>
        <p style={{color:"black"}}> © SOUL GHOST 2025</p>
        <div style={{ display: "flex", gap: "15px" }}>
          <a href="#" style={{ color: "#917f7fff", textDecoration: "none" }}>Sitemap</a>
          <a href="#" style={{ color: "#8f7474ff", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ color: "#a98b8bff", textDecoration: "none" }}>Legal Disclaimer / Imprint</a>
        </div>
      </div>
    </footer>
</div>

  );
}

export default Frame;
