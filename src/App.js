import React, {useEffect, useRef} from "react";
import logo from './judge.png';
import alexander from './alexanderHamilton.jpg';
import fedsoclogo from './FEDSOCLOGO.PNG';
import Slideshow from './Slideshow';
import './App.scss';
import {TimelineLite ,TweenMax, Power3} from 'gsap';

function App() {


  return (
    <>
    <div className="App">
      {/* <Slideshow/> */}
      <div className= "hero">
        <div className= "container">
          <div className= "hero-inner">
                    <div className= "hero-content">
                          <div className="hero-content-inner" >
                                    <h1>
                                        <div className = "hero-content-line">
                                            <div className = "hero-content-line-inner">The Federalist Society</div>
                                        </div>
                                        <div className = "hero-content-line">
                                            <div className = "hero-content-line-inner">Tufts University Chapter</div>
                                        </div>
                                        <div className = "hero-content-line">
                                            <div className = "hero-content-line-inner">Founded September 2020</div>
                                        </div>
                                    </h1>
                                    <p>
                                    Founded in 1982, the Federalist Society for Law and Public Policy Studies is a group of conservatives and libertarians dedicated to reforming the current legal order. We are committed to the principles that the state exists to preserve freedom, that the separation of governmental powers is central to our Constitution, and that it is emphatically the province and duty of the judiciary to say what the law is, not what it should be. The Society seeks to promote awareness of these principles and to further their application through its activities.
                                    </p>
                                          <div className= "btn-row">
                                              <button className = "explore-button">
                                                explore
                                                      <div className = "arrow-icon">
                                                  
                                                      </div>
                                              </button>
                                           </div>
                                </div>
                          </div>
                <div className="hero-images">
                <div className="hero-images-inner">
                  <div className= "hero-image-justice">
                  <img src={fedsoclogo} class="logo"/>  
                  </div>
                </div>
                  </div>
          </div>
        </div>
      </div>   
    </div>
    </>
    
  );
}

export default App;
