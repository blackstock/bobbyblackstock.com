var contact = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">Contact Me</h2>
              <hr className="primary"/>
              <p>Want to talk tech? Looking for some consulting or some part-time software
              development? Please don't hesitate to contact me. Thanks!</p>
            </div>
            <div className="col-lg-4 col-lg-offset-2 text-center">
              <i className="fa fa-phone fa-3x wow bounceIn"></i>

              <p>(303)-981-2822</p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="fa fa-envelope-o fa-3x wow bounceIn" data-wow-delay=".1s"></i>

              <p><a href="mailto:your-email@your-domain.com">bobbyblackstock@gmail.com</a></p>
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
