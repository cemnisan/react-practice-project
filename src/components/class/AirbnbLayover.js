import React, { Component } from 'react'


class AirbnbLayover extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div>
                {
                    resumeData.layover.map(item => {
                        
                        return(
                            <div className="container-fluid p-5">
                                <div className="airBnb-Text">
                                    <h4>{item.title}</h4>
                                    <p>{item.paragraph}</p>
                                </div>
                                <div className="airBnb-image">
                                    <img src={item.picture} class="img-fluid" alt="..." id="airBnb-imageID"></img>
                                    <div className="centered">
                                        <img className="img-fluid centered-img" src={item.svg} alt="..."></img>
                                    </div>
                                    <div className="centeredBtn">
                                        <button className="btn btn-white">{item.btnTitle}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default  AirbnbLayover;
