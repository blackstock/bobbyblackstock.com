var contact = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Contact Me</h2>
              <hr className="primary"/>
              <p>Want to talk tech? Looking for some consulting or some part-time software
                development? Please don't hesitate to contact me. Thanks!</p>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://www.facebook.com/bobby.blackstock" target="_blank">
                <i className="fa fa-facebook-official fa-5x wow bounceIn"></i>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://twitter.com/bobbyblackstock" target="_blank">
                <i className="fa fa-twitter-square fa-5x wow bounceIn"></i>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://www.linkedin.com/in/bobbyblackstock" target="_blank">
                <i className="fa fa-linkedin-square fa-5x wow bounceIn"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(contact),
  document.getElementById('contact')
);
