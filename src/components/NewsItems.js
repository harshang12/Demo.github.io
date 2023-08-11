import React, { Component } from 'react'

export class NewsItems extends Component {
 

    render() {
       let  {title,description,imageUrl} = this.props;
        return (
            <div  className="my-5">
                    <div  className="card block"  style={{width : "18rem"}} >
                    <img src={imageUrl} className="card-img-top" alt="..." loop muted />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                           
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
