const React = require("react");
const Signed = require("../components/Signed.jsx");

class forumPostci extends React.Component {
  render() {
    const {aPost, index} = this.props
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
            {/* COMMENT SECTION */}
            <div className = "row" id="commentsSection">
                    <ul>
                    {aPost.comments.map((item, index) => {
                                    return (
                                    <li className="aComment">
                                        <div className = "row">
                                            <div className = "col" id="commentUser">
                                                {item.user}
                                            </div>
                                            <div className = "col" id="commentDate">
                                                {item.commentDate.toUTCString()}
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className = "col" id="commentBody">
                                                {item.body}
                                            </div>
                                        </div>
                                    </li>
                                    )
                    })}
                    </ul>   
            </div>   
            <div className = "row">
            <div className = "col-7">
                    <form action={`/forum/ci/${index}`} method="POST">
                        <div className="form-group">
                        <textarea className="form-control" id="body" name="body" placeholder="comment here" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Comment</button>  
                    </form>
                </div>    
            </div>    
        </div>
        </Signed>
    )}
    }
module.exports = forumPostci