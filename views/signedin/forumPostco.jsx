const React = require("react");
const Signed = require("../components/Signed.jsx");

class forumPostco extends React.Component {
  render() {
    const {aPost, index, forumCreator} = this.props
    return (
        <Signed title={aPost.subject}>
        <div className = "container" id="postInfoFull">
            <div className = "row"> 
            {/* entire row of forum and profile */}
                <div className ="col-7" id="postInfo"> 
                <div className = "row">
                    <div className= "col">
                            <div className="display-5" id="postDate">
                                {aPost.created_at.toUTCString()}
                            </div>
                        </div>
                    </div>
                    <div className = "row">
                        <div className= "col">
                            <div id="postSubject">
                                {aPost.subject}
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
                <div className="col-3 sectionShadow" id="userInfo">
                    <div classname= "row">
                        <div className = "col">
                            <div className="display-5">
                                {forumCreator[0].username}
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
                            <br></br> Identity: <br></br> {forumCreator[0].identity}
                            </div>
                        </div>
                    </div>
                    <div classname= "row">
                        <div className = "col">
                            <div className="display-5">
                            <br></br>   Age:<br></br>  {forumCreator[0].age} 
                            </div>
                        </div>
                    </div>
                    <div classname= "row">
                        <div className = "col">
                            <div className="display-5">
                            <br></br>    About the writer: <br></br> <br></br>   {forumCreator[0].aboutMe}
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* COMMENT SECTION */}
            <div className = "row" id="commentsSection">
            <h4 className="commentsHead">Comments<img id="catIcon" src="/img/comments.png"></img></h4>
                    <ul id='commentList'>
                    {aPost.comments.map((item, index) => {
                                    return (
                                    <li>
                                    <div className="aComment sectionShadow">
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
                                        </div>
                                    </li>
                                    )
                    })}
                    </ul>   
            </div>   
            <div className = "row">
            <div className = "col-7">
            <h4 className="commentsHead">Add a comment</h4>
                    <form action={`/forum/co/${index}`} method="POST">
                        <div className="form-group">
                        <textarea className="form-control" id="body" name="body" placeholder="comment here" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary commentButton">Comment</button>  
                    </form>
                </div>    
            </div>    
        </div>
        </Signed>
    )}
    }
module.exports = forumPostco