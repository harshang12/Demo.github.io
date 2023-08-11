import React, { Component } from 'react'
import WOW from 'wowjs';
import News from './News';

export default class Main extends Component {
    componentDidMount(){
        new WOW.WOW().init();
       }
  render() {
    return (
      <div>
        <div className=" " id='Main' >
         
            <div className="container py-5" >
              <h1 className="display-5 d-flex justify-content-center   fw-bold  wow tada  " id="VU">Vlogger Update</h1>
              <p className="col-md-12 fs-4 d-flex justify-content-center ">This is one type of social media Web  ,Which is make better to learn and earn Service. </p>
              {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
            </div>

            
          </div>
          <News></News>
      </div>
    )
  }
}
