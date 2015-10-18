var portfolio = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/1.jpg" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/2.jpg" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/3.jpg" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/4.jpg" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/5.jpg" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/6.jpg" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(portfolio),
  document.getElementById('portfolio')
);
