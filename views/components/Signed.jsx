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
  crossorigin="anonymous"
/>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body className ="text-center">
          <header>
            <div className ="container">
            <div className ="row">
              <img src= "/img/logo.png" className ="col-sm, logo"></img>
              <div className ="col-sm" id="quote"><i>Be free!</i></div>
              <nav className="col-sm" >
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Account</a></li>
                    <li><a href="/forums">Forums</a></li>
                    <li><a href="/auth/login">Resources</a></li>
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