const React = require("react");
const Signed = require("../components/Signed.jsx");

class Forum extends React.Component {
  render() {
    return (
      <Signed title="Forums">
        <div className ="container">
          <div clssName = "row">
            <div className = "Forums">
              <div display-5>Forums</div>
            </div>
          </div>
          <div className = "row">
          
            <div className = "col">
              <div className ="section">
              <h3>Coming Out's</h3>
              <p>---Insert convo  here---</p>
              </div>
            </div>
            <div className = "col">
             <div className ="section">
              <h3>Help Me Out's</h3>
              <p>Info about Profile</p>
              </div>
            </div>
        </div>
        </div>
      </Signed>
    );
  }
}

module.exports = Forum;