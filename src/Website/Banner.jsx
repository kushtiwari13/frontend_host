import { React, useEffect } from './imports';
import BannerImage from './CopySource/images/hero_area/banner7.jpg'


const Banner = () => {
    return (
        <section className="hero-area hero-speakers">
            <div className="banner-item overlay" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="banner-content-wrap">
                                <p className="banner-info wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">10 - 12 December, 2020</p>
                                <h1 className="banner-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">DUNES TO
                                    DIGITAL OASIS</h1>
                                <p className="banner-info wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">Accelerating Arabia's Digital Reality
                                </p>
                                <p className="banner-info wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
                                    #RebootSummitArabia</p>
                                <div className="banner-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
                                    <a href="#" className="btn">Buy Ticket</a>
                                    <a href="#" className="btn fill">REGISTER TO EXHIBIT</a>
                                </div>
                            </div>
                            {/* Banner content wrap end */}
                        </div>{/* col end*/}
                        <div className="col-lg-4 offset-lg-1">
                            <div className="hero-form-content">
                                <h2>Register Now</h2>
                                <p>
                                   #HitTheButton
                                </p>
                                <form action="#" method="POST" className="hero-form">
                                    <input className="form-control form-control-name" placeholder="Name" name="name" id="f-name" type="text" required="" />
                                    <input className="form-control form-control-phone" placeholder="Phone" name="phone" id="f-phone" type="number" />
                                    <input className="form-control form-control-email" placeholder="Email" name="email" id="f-email" type="email" required="" />
                                    <select name="ticket" id="ticket">
                                        <option value="ticket">No of Tickets</option>
                                        <option value="ticket">Ticket 1</option>
                                        <option value="ticket">Ticket 2</option>
                                        <option value="ticket">Ticket 3</option>
                                    </select>
                                    <button className="btn" type="submit"> Register Now</button>
                                </form>{/* form end*/}
                            </div>{/* hero content end*/}
                        </div>{/* col end*/}
                    </div>{/* row end*/}
                </div>
                {/* Container end */}
            </div>
        </section>
    );
}

export default Banner;

