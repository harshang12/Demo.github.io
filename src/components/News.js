import React, { Component } from 'react'
import NewsItems from './NewsItems';
import WOW from 'wowjs';

export class News extends Component {
     
    componentDidMount(){
     new WOW.WOW().init();
    };

    
    render() {
        return (
            <div id='about'>
            <div className="container-fluid  my-3 text-center" >


                {/* <h2>Vlogger Update</h2> */}


                <div className="row">

                    <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-4  d-flex justify-content-center     wow fadeInUp" data-wow-duration="0.5s" >
                        <NewsItems   title="Start"  imageUrl="https://im.indiatimes.in/content/2023/Jul/3_64aa95e445ae3.jpg" ></NewsItems>
                    </div>

                    <div  className="col-xs-12 col-sm-12 col-md-12   col-lg-4  d-flex justify-content-center     wow fadeInUp"  data-wow-duration="1s">
                        <NewsItems title="Learn"  imageUrl="https://im.indiatimes.in/content/2023/Jul/4_64abaf1416221.jpg"></NewsItems>
                    </div>

                    <div  className="col-xs-12 col-sm-12 col-md-12   col-lg-4  d-flex justify-content-center   wow fadeInUp"  data-wow-duration="1.5s"  >
                    <NewsItems title="Post It"  imageUrl="https://blog.mynd.com/assets/images/Blog_Global/099/_379x253_crop_center-center_line/099_card.webp"></NewsItems>
                       
                    </div>

                </div>


            </div>
            </div>
        )
    }
}

export default News
