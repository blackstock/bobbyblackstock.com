var portfolio = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/p2bi.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Software Engineer
                    </div>
                    <div className="project-name">
                      P2B Investors
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/github.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Project Repository
                    </div>
                    <div className="project-name">
                      GitHub
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/mg_stover.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Operations Manager
                    </div>
                    <div className="project-name">
                      MG Stover & Company
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/duckduck_deal.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Sales, Marketing and Operations
                    </div>
                    <div className="project-name">
                      DuckDuck Deal
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="http://www.sovrn.com/" className="portfolio-box" target="_blank">
                <img src="img/portfolio/lijit.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Sales Intern
                    </div>
                    <div className="project-name">
                      Lijit (now SOVRN)
                    </div>
                    <p className="text-faded">
                      During my time at Lijit, I focused primarily on targeting new clients and finding new sales verticals.
                      After I left, the company was acquired by Federated Media and has subsequently spun-off into
                      SOVRN. Click to learn more.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src="img/portfolio/axa.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Finance Intern
                    </div>
                    <div className="project-name">
                      AXA Finance
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
