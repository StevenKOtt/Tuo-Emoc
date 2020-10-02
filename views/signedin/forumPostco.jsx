const React = require("react");
const Signed = require("../components/Signed.jsx");

class forumPost extends React.Component {
  render() {
    const {aPost , index} = this.props
    return (
        <Signed>
        <div className = "container" id="postInfoFull">
            <div className = "row">
                <div className ="col-7" id="postInfo"> 
                    <div className = "row">
                        <div className= "col">
                            <div className="display-4" id="postSubject">
                                {aPost.subject}
                            </div>
                        </div>
                        <div className= "col">
                            <div className="display-5" id="postDate">
                                {aPost.created_at.toUTCString()}
                            </div>
                        </div>
                    </div>
                    <div className= "row">
                        <div className = "col">
                            <p id= 'bodyField'>
                                {aPost.body}
                            </p>
                        </div>
                    </div>
                    <div className = "row">

                    </div>
                </div>
                <div className="col-3" id="userInfo">
                    <div classname= "row">
                        <div className = "col">
                            <div className="display-5">
                                {aPost.user}
                            </div>
                        </div>
                    </div>
                    <div classname= "row">
                        <div className = "col">
                            <div className="display-5">
                                <img src="/img/icon.jpg" id="profileIcon"></img>
                            </div>
                        </div>
                    </div>
                    <div classname= "row">
                        <div className = "col">
                            <div className="display-5">
                             Identity: {aPost.identity}
                            </div>
                        </div>
                    </div>
                    <div classname= "row">
                        <div className = "col">
                            <div className="display-5">
                                Age: {aPost.age}
                            </div>
                        </div>
                    </div>
                </div>  
            </div>    
        </div>
        </Signed>
    )}
    }
module.exports = forumPost