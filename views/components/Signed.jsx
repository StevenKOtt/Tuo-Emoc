const React = require("react");

class inLayout extends React.Component {
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
  <a className="navbar-brand" href="/"><img src= "/img/logo.png" className= "logo"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/forum">Forum</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Account">Account</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Resources</a>
      </li>
    </ul>
  </div>
</nav> 
            {/* <div className ="container">
            <div className ="row">
              <img src= "/img/logo.png" className= "logo"></img>
                  <nav className="col-sm" >
                    <ul class="nav nav-pills">
                      <li class="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                     </li>
                      <li class="nav-item">
                         <a  className= "nav-link" href="/">Account</a>
                      </li>
                      <li class="nav-item">
                        <a className= "nav-link" href="/forum">Forum</a>
                      </li>
                      <li class="nav-item">
                        <a  className= "nav-link" href="/auth/login">Resources</a>
                      </li>
                    </ul>
                   </nav> 
            </div>
            </div> */}
          </header>
          <main>{this.props.children}</main>
          <footer>

          </footer>
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = inLayout;