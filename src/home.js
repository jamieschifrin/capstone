import React from 'react';
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import ut from './assets/8.jpg';







export default class home extends Component {
    render() {
        return (

        <div>
                <div class="container-fluid pl-0 pr-0">
                <div class="site-content">
                    <div class="d-flex justify-content-center">
                        <div class="d-flex flex-column">
                            <h1 class="site-title">Welcome Cincinnati</h1>
                            <p class="site-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                            {/* <div class="d-flex">
                                <input type="button" value="Button 1" class="btn site-btn1 px-4 py-3 mr-4 btn-dark"/>
                                <input type="submit" value="button 2" class="btn site-btn2 px-4 py-3 btn-z"/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-1" id="features">
                <div class="content text-center">
                    <h1 class="heading-1">Amazing Features</h1>
                    <h1 class="heading-2">& Different types of Links</h1>
                    <p class="para-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                    <div class="row justify-content-content-center text-center container mx-auto">
                        <div class="col-md-4">
                            <div class="card">
                                <img src={ut} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Union Terminal</div>
                                    <div class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src={ut} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Music Hall</div>
                                    <div class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src={ut} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">The Newport Aquarium</div>
                                    <div class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src={ut} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">The Cincinnati Zoo</div>
                                    <div class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src={ut} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Krohn Conservatory</div>
                                    <div class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src={ut} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Findlay Market</div>
                                    <div class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-2">
                <div class="container-fluid">
                    <div class="d-flex justify-content-end row container">
                        <h1 class="heading-1 col-12">Like & Share Your Ideas</h1>
                        <p class="para col-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"></div>
                        <div class="col">
                            <button class="btn btn-danger col-12">show</button>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>

            <div class="section-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                <i class="fas fa-question fa-3x m-2"></i>
                                <div class="d-flex flex-column">
                                    <h3 class="m-2">Sports</h3>
                                    <p class="m-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                <i class="fas fa-seedling fa-3x m-2"></i>
                                <div class="d-flex flex-column">
                                    <h3 class="m-2">Weather</h3>
                                    <p class="m-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                <i class="fas fa-rocket fa-3x m-2"></i>
                                <div class="d-flex flex-column">
                                    <h3 class="m-2">Events</h3>
                                    <p class="m-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                <i class="fas fa-user-shield fa-3x m-2"></i>
                                <div class="d-flex flex-column">
                                    <h3 class="m-2">Food</h3>
                                    <p class="m-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                <i class="fas fa-search fa-3x m-2"></i>
                                <div class="d-flex flex-column">
                                    <h3 class="m-2">Bars</h3>
                                    <p class="m-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                <i class="fas fa-sliders-h fa-3x m-2"></i>
                                <div class="d-flex flex-column">
                                    <h3 class="m-2">Outdoors</h3>
                                    <p class="m-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-5">
                <div class="container-fluid">
                    <div class="d-flex justify-content-end row container">
                        <h1 class="heading-1 col-12">Like & Share Your Ideas</h1>
                        <p class="para col-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col"></div>
                        <div class="col">
                            <button class="btn btn-danger col-12">show</button>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>

            <div class="section-4 bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <img src={ut} alt="book and glasses" align="center"/>
                        </div>
                        <div class="col-md-5">
                            <h2 class="text-white">Meet Our Team</h2>
                            <a href="#">just a Click away</a>
                            <p class="para-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        

       

                {/* <script>
                    ScrollReveal().reveal('.site-content .d-flex');
                    ScrollReveal().reveal('.section-1 .card');
                    ScrollReveal().reveal('.section-2 .d-flex');
                    ScrollReveal().reveal('.section-3 .col-md-4');
                    ScrollReveal().reveal('.section-4 .col-md-5 .col-md-7');
                </script>
                <script src="https://unpkg.com/scrollreveal"></script> */}

 
        </div>
        )
    }
}
