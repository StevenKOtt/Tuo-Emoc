const React = require("react");
const Signed = require("../components/Signed.jsx");

class Home extends React.Component {
  render() {
    return (
      <Signed title="The Title!">
        <div className ="container">
          <div className ="row">
            <div className ="col">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
             <img src="img/logo.png"></img>
            <p class="lead">Tuo Emoc is a place where anyone can allow themselves to be heard. No matter who you are, you are important. While visiting Tuo Emoc, you will hear from a variety of different people about their experiences with coming out. You will also be able to hear from individuals who are struggling and seek advice on what to do.</p>
              </div>
            </div>
            </div>
          </div>
          <div className = "row">
          
            <div className = "col">
              <div className ="section sectionShadow">
              <h3>What do I do?</h3>
              <p>
                You play a big part in helping or asking for advice. Start by heading to the forums and reading over some experiences.

              </p>
              </div>
            </div>
            <div className = "col">
             <div className ="section sectionShadow">
              <h3>Rules</h3>
              <p>Info about Profile</p>
              </div>
            </div>
        </div>
        </div>
      </Signed>
    );
  }
}

module.exports = Home;