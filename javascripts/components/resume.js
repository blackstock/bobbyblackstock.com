var resume = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-4 col-sm-6">
              <a href="https://p2bi.com/" className="portfolio-box" target="_blank">
                <img src="img/portfolio/p2bi.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Software Engineer
                    </div>
                    <div className="project-name">
                      P2B Investors
                    </div>
                    <p className="text-faded">
                      Since January of 2015, I've been working as a full-stack web developer for P2Bi.
                      Our stack consists of: Ruby on Rails, React, and Postgres. Click to learn more.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="https://github.com/blackstock" className="portfolio-box" target="_blank">
                <img src="img/portfolio/github.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Project Repository
                    </div>
                    <div className="project-name">
                      GitHub
                    </div>
                    <p className="text-faded">
                      Click to see my GitHub profile. Unfortunately, most of my contributions over the past year have
                      been to private repositories, so the contributions you see here are primarily from my time at
                      gSchool - the programming boot camp I attended.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="http://www.mgstover.com/" className="portfolio-box" target="_blank">
                <img src="img/portfolio/mg_stover.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Operations Manager
                    </div>
                    <div className="project-name">
                      MG Stover & Company
                    </div>
                    <p className="text-faded">
                      Oversaw the accounting and administrative duties for dozens of hedge funds, private equity funds
                      and family offices. Accounted for over $1 Billion in assets under management (AUM).
                      Click to learn more.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="http://cargocollective.com/nothingpretty/Duck-Duck-Deal" className="portfolio-box" target="_blank">
                <img src="img/portfolio/duckduck_deal.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Sales, Marketing and Operations
                    </div>
                    <div className="project-name">
                      DuckDuck Deal
                    </div>
                    <p className="text-faded">
                      Created and managed all aspects of the start-up company’s operations in Fort Collins and assisted
                      with marketing efforts in Boulder, CO.
                      Click to learn more.
                    </p>
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
                      After I left, the company was acquired by Federated Media and has subsequently spun-off into SOVRN.
                      Click to learn more.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-sm-6">
              <a href="https://us.axa.com/home.html" className="portfolio-box" target="_blank">
                <img src="img/portfolio/axa.png" className="img-responsive" alt=""/>

                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Finance Intern
                    </div>
                    <div className="project-name">
                      AXA Finance
                    </div>
                    <p className="text-faded">
                      Improved AXA Distributors website, enhancing the accuracy and usability of the reporting metrics.
                      Performed competitive analysis of AXA’s market share based on sales force compensation.
                      Click to learn more.
                    </p>
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
  React.createElement(resume),
  document.getElementById('resume')
);
