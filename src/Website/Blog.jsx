import { React, useEffect } from './imports';

const Blog = () => {
  return (
    <>
  {/* ts blog start*/}
  <section className="ts-blog section-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="section-title">
            {/* <span>Info Update</span> */}
            RESERVE YOUR SPACE
          </h2>
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
      <div className="row">
        <div
          className="col-lg-4 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="400ms"
        >
          <div className="post">
            <div className="post-media post-image">
              <a href="#">
                <img src="images/blog/blog1.jpg" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                {/* <span className="post-author">
                  <a href="#"></a>
                </span> */}
                {/* <div className="post-meta-date">3 X 3 SQM SPACE</div> */}
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">3 X 3 SQM SPACE</a>
                </h2>
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">$6499</a>
                </h2>
              </div>
              {/* header end */}
              <div className="entry-content">
                <p>
                  Exhibition booths are limited and arealloted on the first-come-first-serve basis
                </p>
              </div>
              <div className="post-footer">
                <a href="news-single.html" className="btn-link">
                  Reserve Booth <i className="icon icon-arrow-right" />
                </a>
              </div>
            </div>
            {/* post-body end */}
          </div>
          {/* post end*/}
        </div>
        {/* col end*/}
        <div
          className="col-lg-4 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="500ms"
        >
          <div className="post">
            <div className="post-media post-image">
              <a href="#">
                <img src="images/blog/blog1.jpg" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                {/* <span className="post-author">
                  <a href="#"></a>
                </span> */}
                {/* <div className="post-meta-date">3 X 3 SQM SPACE</div> */}
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">6 X 3 SQM SPACE</a>
                </h2>
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">$8999</a>
                </h2>
              </div>
              {/* header end */}
              <div className="entry-content">
                <p>
                  Exhibition booths are limited and arealloted on the first-come-first-serve basis
                </p>
              </div>
              <div className="post-footer">
                <a href="news-single.html" className="btn-link">
                  Reserve Booth <i className="icon icon-arrow-right" />
                </a>
              </div>
            </div>
            {/* post-body end */}
          </div>
          {/* post end*/}
        </div>
        {/* col end*/}
        <div
          className="col-lg-4 wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="600ms"
        >
          <div className="post">
            <div className="post-media post-image">
              <a href="#">
                <img src="images/blog/blog1.jpg" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                {/* <span className="post-author">
                  <a href="#"></a>
                </span> */}
                {/* <div className="post-meta-date">3 X 3 SQM SPACE</div> */}
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">9 X 9 SQM SPACE</a>
                </h2>
              </div>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a href="#">$12999</a>
                </h2>
              </div>
              {/* header end */}
              <div className="entry-content">
                <p>
                  Exhibition booths are limited and are alloted on the first-come-first-serve basis
                </p>
              </div>
              <div className="post-footer">
                <a href="news-single.html" className="btn-link">
                  Reserve Booth <i className="icon icon-arrow-right" />
                </a>
              </div>
            </div>
            {/* post-body end */}
          </div>
          {/* post end*/}
        </div>
        {/* col end*/}
      </div>
      {/* row end*/}
    </div>
    {/* container end*/}
    {/* shap image*/}
    <div className="speaker-shap">
      <img className="shap2" src="images/shap/news_memphis2.png" alt="" />
      <img className="shap1" src="images/shap/news_memphis1.png" alt="" />
    </div>
  </section>
  {/* ts blog end*/}
</>

  )
}

export default Blog