import { React, useEffect } from './imports';
import About_pic1 from './CopySource/images/about/learn_img.jpg'
import About_pic2 from './CopySource/images/about/connect_img.jpg'
const EventOutcome = () => {
    return (
        <section className="ts-event-outcome event-intro">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">
                            <div className="outcome-content ts-exp-content">
                                <h2 className="column-title">
                                    {/* <span>Event Outcomes</span> */}
                                    About Reboot
                                </h2>
                                <p>
                                    Reboot Summit Arabia aims to catalyze the Kingdom's rapidly
                                    accelerating digital reality landscape in alignment with Saudi
                                    Arabia's ambitious V Sion 2030. This two day, cross industry,
                                    technology summit is scheduled as part of the Riyadh Technology
                                    Week while being colocated with the Future Factories Forum and
                                    will host a total cf 20C pre-qualified, invite-only attendees who are
                                    leading technologists, futurists and the most impactful names in
                                    tech striving to change the way we live, study, work.
                                </p>
                                <p>
                                    This 2 day closed door premier summit, is co-located alongside the
                                    Reboot Texpo which expects a foot fall of 5000 visitors, 500 Global
                                    Product and service Providers and and comes at a time when Saudi
                                    Arabia aims to diversify the economy, improve the quality of life for
                                    citizens and position the kingdom in an elite league of AI enabled
                                    economies.

                                </p>
                                <a href="#" className="btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="outcome-content">
                            <div className="outcome-img overlay">
                                <img className="" src={About_pic1} alt="" />
                            </div>
                            <h3 className="img-title text-white"><a href="#" className="text-white">Learn Things</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="outcome-content">
                            <div className="outcome-img overlay">
                                <img className="" src={About_pic2} alt="" />
                            </div>
                            <h3 className="img-title"><a href="#" className="text-white">Connect People</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventOutcome;
