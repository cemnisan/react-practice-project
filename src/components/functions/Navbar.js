import React from 'react';
import logo from '../image/Vector.svg';
import NavbarForm from '../functions/Navbar-Form'

const Navbar = () => {
    return (
        <div className="img-cont img-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="..." width="30" height="24" class="d-inline-block align-top"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Türkçe(TR)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">TL ₺</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Ev Sahibi Olun</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/" >Deneyim</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/" >Yardım</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/" >Giriş Yap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/" >Kaydol</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NavbarForm />
        </div>
    )
}

export default Navbar;
