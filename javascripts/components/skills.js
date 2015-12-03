var services = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Skills</h2>
              <hr className="primary"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>

                <h3>Ruby on Rails</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-html5 wow bounceIn text-primary" data-wow-delay=".1s"></i>

                <h3>HTML/CSS</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>

                <h3>JavaScript</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-server wow bounceIn text-primary" data-wow-delay=".3s"></i>

                <h3>SQL Databases</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>

                <h3>Ruby on Rails</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-html5 wow bounceIn text-primary" data-wow-delay=".1s"></i>

                <h3>HTML/CSS</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>

                <h3>JavaScript</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-server wow bounceIn text-primary" data-wow-delay=".3s"></i>

                <h3>SQL Databases</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(services),
  document.getElementById('skills')
);
