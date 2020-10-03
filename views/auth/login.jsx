const React = require("react");
const Layout = require("../components/layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <h1>Please Log-in to unlock Tuo-Emoc</h1>
      </Layout>
    );
  }
}

module.exports = Login;
