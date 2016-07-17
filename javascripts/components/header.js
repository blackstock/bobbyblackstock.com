var header = React.createClass({
  render: function() {
    return (
      <div className="header-content">
        <div className="header-content-inner">
          <h1>Bobby Blackstock</h1>
          <hr className="light"/>
          <p>Hello and welcome! My name is Bobby and I'm a software developer, Certified Public Accountant (CPA) and
            a self-proclaimed entrepreneur.</p>
          <a href="#about" className="btn btn-primary btn-xl page-scroll">About Me</a>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(header),
  document.getElementById('header')
);
