var about = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">About Me</h2>
            <hr className="light"/>
            <p className="text-faded">
              I studied accounting and finance at the University of Colorado at Boulder, but I was always more drawn to
              the
              computer sciences and the start-up, technology scene. Unfortunately, my degree didn't help land me any
              jobs
              in the technology space after I graduated... Instead, I went to work for a Denver-based CPA firm,
              where I worked primarily with Hedge Funds, Private Equity Funds and Family Offices providing a variety of
              accounting services.
            </p>

            <p className="text-faded">
              While working full-time as a CPA, I was actively trying to find a way into the tech world.
              I tried creating a few iPhone app businesses in my spare time, but the reality was starting to set in:
              I didn't have the required skill-set make it in the tech world.
              After several years at the CPA firm, I finally decided to pursue my passion... So, I quit my job and
              entered
              a 6-month Full-Stack Web Development program (the program was called gSchool through Galvanize in Denver,
              CO).
            </p>

            <p className="text-faded">
              It was easily one of the best decisions I've made in my life and now I'm absolutely obsessed with all
              things programming. I now work as a developer at a start-up in Denver called P2Bi, which is a
              crowd-lending platform for early
              stage, high growth companies. We offer revolving lines of credit ranging from $250,000 to $5,000,000.
            </p>
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
