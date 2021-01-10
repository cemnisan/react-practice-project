import React, { Component } from 'react';
import png from '../image/Rectangle 4.png';

class Explorer extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row mx-5">
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={png} alt="..."></img>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <h6 className="py-3">Logements</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={png} alt="..."></img>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <h6 className="py-3">Logements</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={png} alt="..."></img>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <h6 className="py-3">Logements</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Explorer;
