import React, { Component } from 'react'


class WorlwideAcc extends Component {
    render(){
        let resumeData = this.props.resumeData;
        return(
            <div className="container-fluid px-4 mt-5 mb-5">
                <h3>Logements dans le monde entier</h3>
                <div className="row mt-4 gx-5">
                    {
                        resumeData.worldwideCard.map(item=>{
                            let {title,titleTwo,picture,content} = item;
                            return(
                                <div className="col-md-3 mb-4">
                                    <div className="card border-0">
                                        <img src={picture} className="col-img-top" alt="..."></img>
                                    </div>
                                    <div className="col-title d-flex justify-content-start">
                                        <h6 className="fw-bold mt-3 my-1 py-2 rounded" id="col-border">{title}</h6>
                                        <h6 className="mx-2 mt-3 ms-3 py-2" style={{color:"#767676"}}>{titleTwo}</h6>
                                    </div>
                                    <h6 className="mt-2" style={{color:"#484848"}}>{content}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default WorlwideAcc;
