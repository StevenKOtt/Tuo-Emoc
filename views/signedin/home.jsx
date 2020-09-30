const React = require("react");
const Signed = require("../components/Signed.jsx");

class Home extends React.Component {
  render() {
    return (
      <Signed title="The Title!">
        <div className ="container">
          <div clssName = "row">
            <div className = "aboutTuo">
              Tuo Emoc is a place where anyone can allow themselves to be heard. No matter who you are, you are important. While visiting Tuo Emoc, you will hear from a variety of different people about their experiences with coming out. You will also be able to hear from individuals who are struggling and seek advice on what to do.
            </div>
          </div>
          <div className = "row">
          
            <div className = "col">
              <div className ="section">
              <h3>Convo of the day</h3>
              <p>---Insert convo  here---</p>
              </div>
            </div>
            <div className = "col">
             <div className ="section">
              <h3>Opened Profile User Experience</h3>
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