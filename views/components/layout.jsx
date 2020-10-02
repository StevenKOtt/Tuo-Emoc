const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"></link>

          <link rel="stylesheet" href="/css/style.css"/>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,100&display=swap" rel="stylesheet"></link>
          <script src="/js/app.js" defer></script>
          
        </head>
        <body className ="text-center">
          <header>
          <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/home"><img src= "/img/logo.png" className= "logo"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/auth/login">Sign-In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/auth/signup">Sign-up</a>
      </li>
      <li>
        <form action="/auth/login" method="post">
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" name="username" placeholder="Username"></input>
          </div>
            <div class="col">
              <input type="text" class="form-control" name="password" placeholder="Password"></input>
            </div>
            <div class="col">
            <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>

        </form>
      </li>
    </ul>
  </div>
</nav> 
          
          </header>
          <main>{this.props.children}</main>
          <footer>
           
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;