import { React, useEffect } from './imports';
import Score from './CopySource/images/funfact_bg.jpg'

const FunFact = () => {
    return (
        <section className="ts-funfact" style={{ backgroundImage: `url(${Score})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="43">40</span></h3>
                            <h4 className="funfact-title"> Distinguished Speakers</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="62">17</span></h3>
                            <h4 className="funfact-title">Engaging Sessions</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="28">200</span>+</h3>
                            <h4 className="funfact-title">Paticipants</h4>
                        </div>
                    </div>

                    {/* <div className="col-lg-3 col-md-6">
                        <div className="ts-single-funfact">
                            <h3 className="funfact-num"><span className="counterUp" data-counter="950">950</span>+</h3>
                            <h4 className="funfact-title">Event Participants</h4>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}

export default FunFact;
