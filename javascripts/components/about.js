var about = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">We've got what you need!</h2>
            <hr className="light"/>
            <p className="text-faded">Hello and welcome! My name is Bobby and I'm a software developer, Certified Public Accountant (CPA), soon-to-be father, and
            a self-proclaimed entrepreneur.</p>
            <a href="#" className="btn btn-default btn-xl">About Me</a>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(about),
  document.getElementById('about')
);
