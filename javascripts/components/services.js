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

                <p className="text-muted">Rails is a model–view–controller (MVC) framework,
                  providing default structures for a database, a web service, and web pages.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i>

                <h3>HTML/CSS</h3>

                <p className="text-muted"> HyperText Markup Language and CSS for presentation,
                  style the appearance of web pages.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o wow bounceIn text-primary" data-wow-delay=".2s"></i>

                <h3>JavaScript</h3>

                <p className="text-muted">A high-level, dynamic, untyped, and interpreted programming language.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i>

                <h3>Accounting/Finance</h3>

                <p className="text-muted"> Certified Public Accountant in the state of Colorado.</p>
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
  document.getElementById('services')
);
