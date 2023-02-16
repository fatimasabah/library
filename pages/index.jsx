import { useEffect } from "react";
// import { useQuery } from "@apollo/react-hooks";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
// import SpecialCollection from '~/components/partials/home/special-collection';
// import DealCollection from '~/components/partials/home/deal-collection';
// import TrendyCollection from '~/components/partials/home/trendy-collection';
// import TopCollection from '~/components/partials/home/top-collection';
// import NewsletterModal from "~/components/features/modals/newsletter-modal";

// import withApollo from '~/server/apollo';
// import { GET_HOME_DATA } from '~/server/queries';
// import { attrFilter } from '~/utils';

import { homeData, introSlider, brandSlider, fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter, fadeIn } from '~/utils/data';

function Home () {

    // useEffect( () => {
    //     document.querySelector( '.footer-middle' ).classList.add( 'border-0' );

    //     return () => {
    //         document.querySelector( '.footer-middle' ).classList.remove( 'border-0' );
    //     }
    // }, [] )

    return (
        <div className="main home-page skeleton-body">
            <div className="intro-section pt-3 pb-3 mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="intro-slider-container slider-container-ratio mb-2 mb-md-0">
                                <OwlCarousel adClass="intro-slider owl-simple owl-dark owl-nav-inside" options={ introSlider }>
                                    <div className="intro-slide">
                                        <figure className="slide-image">
                                            <picture>
                                                <img src="images/home/sliders/slide-1.jpg" alt="intro" width="780" height="400" />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay="100" duration={ 1000 }>
                                                <>
                                                    <h3 className="intro-subtitle text-primary">Daily Deals</h3>
                                                    <h1 className="intro-title">
                                                        AirPods <br />Earphones
                                                    </h1>

                                                    <div className="intro-price">
                                                        <sup>Today: &nbsp;</sup>
                                                        <span className="text-primary">
                                                            $247<sup>.99</sup>
                                                        </span>
                                                    </div>

                                                    <ALink href="/shop/sidebar/3cols" className="btn btn-primary btn-round">
                                                        <span>Click Here</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </>
                                            </Reveal>
                                        </div>
                                    </div>

                                    <div className="intro-slide">
                                        <figure className="slide-image">
                                            <picture>
                                                <img src="images/home/sliders/slide-2.jpg" alt="intro" width="780" height="400" />
                                            </picture>
                                        </figure>

                                        <div className="intro-content">
                                            <Reveal keyframes={ fadeInUpShorter } delay="100" duration={ 1000 }>
                                                <>
                                                    <h3 className="intro-subtitle text-primary">Deals and Promotions</h3>
                                                    <h1 className="intro-title">
                                                        Echo Dot <br />3rd Gen
                                                    </h1>

                                                    <div className="intro-price">
                                                        <sup className="intro-old-price">$49,99</sup>
                                                        <span className="text-primary">
                                                            $29<sup>.99</sup>
                                                        </span>
                                                    </div>

                                                    <ALink href="/shop/sidebar/3cols" className="btn btn-primary btn-round">
                                                        <span>Click Here</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </ALink>
                                                </>
                                            </Reveal>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            

            <div className="mb-7"></div>

            <div className="container">
                <div
                    className="cta cta-border cta-border-image mb-5 mb-lg-7"
                    style={ { backgroundImage: 'url(images/home/bg-1.jpg)' } }
                >
                    <div className="cta-border-wrapper bg-white">
                        <div className="row justify-content-center">
                            <div className="col-md-11 col-xl-11">
                                <div className="cta-content">
                                    <div className="cta-heading">
                                        <h3 className="cta-title text-right">
                                            <span className="text-primary">New Deals</span>
                                            <br />Start Daily at 12pm e.t.
                                    </h3>
                                    </div>

                                    <div className="cta-text">
                                        <p>
                                            Get
                                            <span
                                                className="text-dark font-weight-normal"
                                            >FREE SHIPPING* & 5% rewards</span> on
                                            <br />every order with Molla Theme rewards program
                                        </p>
                                    </div>

                                    <ALink href="#" className="btn btn-primary btn-round">
                                        <span>Add to Cart for $50.00/yr</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <DealCollection/>
            </Reveal> */}

            <div className="container">
              
            </div>

            <div className="container">
                <hr className="mt-3 mb-6" />
            </div>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                {/* <TrendyCollection/> */}
            </Reveal>

            <div className="container">
                <hr className="mt-5 mb-6" />
            </div>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                {/* <TopCollection/> */}
            </Reveal>

            <div className="container pt-3">
                <hr />
            </div>

            <div className="icon-boxes-container mb-2 bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rocket"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Shipping</h3>

                                        <p>orders $50 or more</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rotate-left"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Returns</h3>

                                        <p>within 30 days</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-info-circle"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>

                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-life-ring"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">We Support</h3>

                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3"></div>

            <div className="container">
                <div className="cta cta-separator cta-border-image cta-half mb-0" style={ { backgroundImage: `url(images/home/bg-2.jpg)` } }>
                    <div className="cta-border-wrapper bg-white">
                        <div className="row">
                            <div className="col-lg-6">
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div className="cta-wrapper cta-text text-center">
                                        <h3 className="cta-title">Shop Social</h3>
                                        <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                        <div className="social-icons social-icons-colored justify-content-center">
                                            <ALink href="#" className="social-icon social-facebook" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                                            <ALink href="#" className="social-icon social-twitter" title="Twitter"><i className="icon-twitter"></i></ALink>
                                            <ALink href="#" className="social-icon social-instagram" title="Instagram"><i className="icon-instagram"></i></ALink>
                                            <ALink href="#" className="social-icon social-youtube" title="Youtube"><i className="icon-youtube"></i></ALink>
                                            <ALink href="#" className="social-icon social-pinterest" title="Pinterest"><i className="icon-pinterest"></i></ALink>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            <div className="col-lg-6">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div className="cta-wrapper text-center">
                                        <h3 className="cta-title">Get the Latest Deals</h3>
                                        <p className="cta-desc">and <br />receive <span className="text-primary">$20 coupon</span> for first shopping</p>

                                        <form action="#">
                                            <div className="input-group">
                                                <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary btn-rounded" type="submit"><i className="icon-long-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div >
    )
}

export default  Home ;