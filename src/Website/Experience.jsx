import React from 'react'

const Experience = () => {
  return (
    <>
      {/* ts experience start*/}
      <section id="ts-experiences" className="ts-experiences">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 no-padding">
              <div
                className="exp-img"
                style={{ backgroundImage: "url(./images/cta_img.jpg)" }}
              >
                {/* <img class="img-fluid" src="images/cta_img.jpg" alt=""> */}
              </div>
            </div>
            {/* col end*/}
            <div
              className="col-lg-6 no-padding align-self-center wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="500ms"
            >
              <div className="ts-exp-wrap">

                <div className="ts-exp-content">

                  <h2 className="column-title">
                    298.2Bn USD
                    <span>
                      Analysis estimation of the Digital Transformation Market by 2030

                    </span>
                  </h2>

                  <h2 className="column-title">
                    135.2Bn USD
                    <span>
                      in projected to contribution to the Saudi
                      economy, over the next 7 years (12.4% of national GDP). Key sectors
                      such as crucial industries, especially manufacturing, health,
                      transportation, logistics, and energy.
                    </span>
                  </h2>

                  <h2 className="column-title">
                    50Bn USD
                    <span>
                      allocated by NIS, in line with Saudi Vision 2030,
                      to build advanced digital infrastructure across the country.
                    </span>
                  </h2>

                </div>

              </div>
            </div>
            {/* col end*/}
          </div>
          {/* row end*/}
        </div>
        {/* container fluid end*/}
      </section>
      {/* ts experience end*/}
    </>

  )
}

export default Experience