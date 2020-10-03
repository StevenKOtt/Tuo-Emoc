const React = require("react");
const Layout = require("../components/layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Sign-Up">

        <div className ="container">
          <div className="row">
            <div className="col">
              <form action="/auth/signup" method="post">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputUsername">Username</label>
                      <input type="text" name="username" className="form-control" id="inputUsername" placeholder="Username"></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword">Password</label>
                      <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password"></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="identity">What do you identify as:</label>
                        <select className="form-control" id="identity" placeholder="optional" type="text" name="identity">
                            <option>Prefer not to say</option>
                            <option>Gay</option>  
                            <option>Bi</option>
                            <option>Lesbian</option>
                            <option>Queer</option>
                            <option>Trans</option>  
                        </select>
                  </div>
                  <div className="form-group">
                    <label for="age">Age</label>
                    <input type="number" className="form-control" name="age" id="age" placeholder="optional"></input>
                  </div>
                  <div className="form-row">
                  <div className="form-group">
                        <label for="aboutMe">Body</label>
                        <textarea className="form-control" name="aboutMe" id="aboutMe" placeholder="Type a little about you if you'd like" name="aboutMe" rows="4"></textarea>
                    </div>   
                </div>
                  <button type="submit" className="btn btn-success">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
