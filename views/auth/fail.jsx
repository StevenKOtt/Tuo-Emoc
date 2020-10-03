const React = require("react");
const Layout = require("../components/layout.jsx");

class Fail extends React.Component {
  render() {
    return (
      <Layout title="Failed to Login">
        <h1>FAILED TO LOGIN</h1>
      </Layout>
    );
  }
}

module.exports = Fail;
