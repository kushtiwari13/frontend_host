import React from 'react'

const Pricing = () => {
  return (
    <>
      {/* ts pricing start*/}
      <section
        className="ts-pricing gradient"
        style={{ backgroundImage: "url(./images/pricing/pricing_img.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title white">
                <span>RESERVE YOUR EQUITABLE SEAT</span>
                Get your Ticket
              </h2>
            </div>
            {/* section title end*/}
          </div>
          {/* col end*/}
          {/* row end*/}
          <div className="row">
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="400ms"
            >
              <div className="pricing-item">
                <img className="pricing-dot " src="images/pricing/dot.png" alt="" />
                <div className="ts-pricing-box">
                  <div className="ts-pricing-header">
                    <h2 className="ts-pricing-name">Super Early Bird VIP Pass</h2>
                    <h3 className="ts-pricing-price">
                      <span className="currency">$</span>1999
                    </h3>
                  </div>
                  <div className="ts-pricing-progress">
                    <p className="amount-progres-text">
                      Exclusive access to
                    </p>

                    <ul>
                      <li>Conferencing Sessions</li>
                      <li>Networking Lounge & Cafe</li>
                      <li> Networking Luncheons</li>
                      <li>Starclass Workshop</li>
                      <li>Exclusive Prospectia On Demand Access for 3
                        months</li>

                    </ul>

                    {/* <div className="ts-progress">
                      <div
                        className="ts-progress-inner"
                        style={{ width: "100%" }}
                      />
                    </div> */}

                    <p className="ts-pricing-value"></p>
                  </div>
                  <div className="promotional-code">
                    {/* <p className="promo-code-text">Enter Promotional Code</p> */}
                    <a href="#" className="btn pricing-btn">
                      Buy Ticket
                    </a>
                    <p className="vate-text">Available until March 31st</p>
                  </div>
                </div>

                {/* ts pricing box*/}
                <img
                  className="pricing-dot1 "
                  src="images/pricing/dot.png"
                  alt=""
                />
              </div>
            </div>
            {/* col end*/}
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="500ms"
            >
              <div className="pricing-item">
                <img className="pricing-dot " src="images/pricing/dot.png" alt="" />
                <div className="ts-pricing-box">
                  <span className="big-dot" />
                  <div className="ts-pricing-header">
                    <h2 className="ts-pricing-name">Early Bird VIP Pass</h2>
                    <h3 className="ts-pricing-price">
                      <span className="currency">$</span>2499
                    </h3>
                  </div>
                  <div className="ts-pricing-progress">
                    <p className="amount-progres-text">
                      Exclusive access to
                    </p>
                    <ul>
                      <li>Conferencing Sessions</li>
                      <li>Networking Lounge & Cafe</li>
                      <li> Networking Luncheons</li>
                      <li>Starclass Workshop</li>
                      <li>Exclusive Prospectia On Demand Access for 3
                        months</li>

                    </ul>

                    {/* <div className="ts-progress">
                      <div className="ts-progress-inner" style={{ width: "75%" }} />
                    </div> */}

                    <p className="ts-pricing-value"></p>
                  </div>

                  <div className="promotional-code">
                    {/* <p className="promo-code-text">Enter Promotional Code</p> */}
                    <a href="#" className="btn pricing-btn">
                      Buy Ticket
                    </a>
                    <p className="vate-text">Available until May 31st</p>
                  </div>
                </div>

                {/* ts pricing box*/}
                <img
                  className="pricing-dot1 "
                  src="images/pricing/dot.png"
                  alt=""
                />
              </div>
            </div>
            {/* col end*/}
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="600ms"
            >
               <div className="pricing-item">
                <img className="pricing-dot " src="images/pricing/dot.png" alt="" />
                <div className="ts-pricing-box">
                  <span className="big-dot" />
                  <div className="ts-pricing-header">
                    <h2 className="ts-pricing-name">Early Bird VIP Pass</h2>
                    <h3 className="ts-pricing-price">
                      <span className="currency">$</span>2499
                    </h3>
                  </div>
                  <div className="ts-pricing-progress">
                    <p className="amount-progres-text">
                      Exclusive access to
                    </p>
                    <ul>
                      <li>Conferencing Sessions</li>
                      <li>Networking Lounge & Cafe</li>
                      <li> Networking Luncheons</li>
                      <li>Starclass Workshop</li>
                      <li>Exclusive Prospectia On Demand Access for 3
                        months</li>

                    </ul>

                    {/* <div className="ts-progress">
                      <div className="ts-progress-inner" style={{ width: "75%" }} />
                    </div> */}

                    <p className="ts-pricing-value"></p>
                  </div>

                  <div className="promotional-code">
                    {/* <p className="promo-code-text">Enter Promotional Code</p> */}
                    <a href="#" className="btn pricing-btn">
                      Buy Ticket
                    </a>
                    <p className="vate-text">Available until May 31st</p>
                  </div>
                </div>

                {/* ts pricing box*/}
                <img
                  className="pricing-dot1 "
                  src="images/pricing/dot.png"
                  alt=""
                />
              </div>
            </div>
            {/* col end*/}
          </div>
        </div>
        {/* container end*/}
        <div
          className="speaker-shap wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="400ms"
        >
          <img className="shap2" src="images/shap/pricing_memphis1.png" alt="" />
        </div>
      </section>
      {/* ts pricing end*/}
    </>

  )
}

export default Pricing