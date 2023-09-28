import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
// import './Images'


function Home(){
    return(
    <div id="Home">
      <div className="topbar">
        <div className="logo">Momentum Wedding</div>
        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <div className="capture">
          <p className="centeralign">
            We don't remember days <br />we remember moments
          </p>
        </div>
        <div className="work" id="works">
          <p className="textwork">Our Work</p>
          <div className="cards d-flex justify-content-center gap-3">
            <div className="card">
                    <img
                      src="Images/img1.jpg"
                      className="d-block w-100"
                      alt="Card 1"
                    />                
            </div>
            <div className="card">
                    <img
                      src="Images/img2.jpg"
                      className="d-block w-100"
                      alt="Card 2"
                    />
            </div>
            <div className="card">
                    <img
                      src="Images/img3.jpg"
                      className="d-block w-100"
                      alt="Card 3"
                    />
                  
                
              
            </div>
          </div>
          <div className="cards2-container">
            <div className="cards2">
              <div className="scrolling-container">
               
                <div className="card2">
                  <img
                    src="Images/l1.jpg"
                    className="d-block w-100"
                    alt="Landscape Image 1"
                  />
                </div>
                <div className="card2">
                  <img
                    src="Images/l2.jpg"
                    className="d-block w-100"
                    alt="Landscape Image 2"
                  />
                </div>
                <div className="card2">
                  <img
                    src="Images/l3.jpg"
                    className="d-block w-100"
                    alt="Landscape Image 3"
                  />
                </div>
                <div className="card2">
                  <img
                    src="Images/l4.jpg"
                    className="d-block w-100"
                    alt="Landscape Image 4"
                  />
                </div>
                <div className="card2">
                  <img
                    src="Images/l5.jpg"
                    className="d-block w-100"
                    alt="Landscape Image 5"
                  />
                </div>
                <div className="card2">
                  <img
                    src="Images/l1.jpg"
                    className="d-block w-100"
                    alt="Landscape Image 1"
                  />
                </div>
                <div className="card2">
                  <img
                    src="Images/l2.jpg"
                    className="d-block w-100"
                    alt="Landscape Image 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <p className="aheading">About Momentum Weddings</p>
          <br /><br /><br />
          <p className="aboutpara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </p>
        </div>
        <div className="services" id="services">
          <p className="aheading">Our Services</p>
          <div className="card-container">
            <div className="service-card">
              <img src="Images/img4.jpg" alt="Wedding Photography" />
            </div>
            <div className="service-card">
              <img src="Images/img3.jpg" alt="Event Photography" />
            </div>
            <div className="service-card">
              <img src="Images/img2.jpg" alt="Portrait Photography" />
            </div>
          </div>
          <div className="service-text">
            <div className="w-text">
              <p className="w-head">Wedding Photography</p>
              <p className="w-inside-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-text">
              <p className="w-head">Event Photography</p>
              <p style={{ textAlign: 'center', marginLeft: '30px' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-text">
              <p className="w-head">Portrait Photography</p>
              <p style={{ textAlign: 'center', marginLeft: '30px' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="rectloc">
            <div><p style={{marginLeft: '14px'}}>Location</p></div>
            <div>
            <p style={{fontSize: '15px',fontFamily: "'Lora', sans-serif",marginLeft: '14px'}}>
              Pala,KT</p>
            </div>
          </div>
        </div>
        <div className="footer" id="contact">
          <div className="footer-left">
            <p className="aheading">Momentum Weddings</p>
            <a href="https://www.facebook.com/" target="_blank"
              ><img className="footer-icon" src="Images/fb.png" alt="Facebook"
            /></a>
            <a href="https://www.instagram.com/" target="_blank"
              ><img className="footer-icon" src="Images/inst.png" alt="Instagram"
            /></a>
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              ><img className="footer-icon" src="Images/w.png" alt="WhatsApp"
            /></a>
          </div>
          <Link to="/login" className="footer-admin-link">
          admin
        </Link>
          <p className="footer-email">contact@example.com</p>
          

        </div>
      </div>
    </div>
    )
}

export default Home