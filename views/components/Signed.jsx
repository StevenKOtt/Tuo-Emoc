const React = require("react");

class inLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          
           <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossOrigin="anonymous"
/>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js" defer></script>
        </head>
        <body className ="text-center">
          <header>
            <div className ="container">
            <div className ="row">
              <img src= "/img/logo.png" className ="col-sm, logo"></img>
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
            </div>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <h1>This is my footer</h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = inLayout;