import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'



export default class Form extends PureComponent {
    render() {
        return (
            <div>
                <section id='signUp' className="form" >
                    <div className="">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-12">
                                <div className="text-black">
                                    <div className=" p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                                <form className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                       
                                                        <div className="form-outline flex-fill mb-0">
                                                       
                                                            <input type="text" id="form3Example1c" className="form-control" />
                                                            <label className="form-label" for="form3Example1c">Username</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="form3Example3c" className="form-control" />
                                                            <label className="form-label" for="form3Example3c">Your Email</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4c" className="form-control" />
                                                            <label className="form-label" for="form3Example4c">Password</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4cd" className="form-control" />
                                                            <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                        </div>
                                                    </div>

                                                   

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <Link to="/login">   <button type="button" className="btn btn-primary btn-lg"> Get login</button></Link>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center ">

                                                <img src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?size=626&ext=jpg&ga=GA1.1.1828397869.1688663992&semt=ais"
                                                    className="img-fluid" alt="Sample image" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section>
            </div>
        )
    }
}
