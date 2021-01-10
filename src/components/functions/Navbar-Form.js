import React from 'react'

function NavbarForm() {
    return (
        <div className="row px-3 mx-3 py-3 my-5">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body ">
                        <h1 className="card-title">Réservez des hébergements et des activités uniques.</h1>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Partout"></input>
                            </div>
                            <div className="label-text">
                                <h6 className="d-flex">Arrivée Départ</h6>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="jj/mm/aaaa" aria-label="jj/mm/aaaa"></input>
                                <input type="text" className="form-control" placeholder="jj/mm/aaaa" aria-label="jj/mm/aaaa"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Voyageurs"></input>
                            </div>
                            <div className="fromBtn d-flex justify-content-end">
                                <button class="btn btn-danger">Rechercher</button>                                    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarForm;
