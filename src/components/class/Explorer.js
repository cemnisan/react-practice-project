import React, { Component } from 'react';


class Explorer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="container-fluid mt-5">
                <div className="row mx-4">
                    {
                        resumeData.explorerCard.map(item =>{
                            return(
                                <div className="col-md-4 d-none d-xl-block">
                                    <div className="card rounded mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img className="img-fluid rounded-start" src={item.picture} alt="..."></img>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card-body">
                                                    <h6 className="my-3">{item.title}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Explorer;
