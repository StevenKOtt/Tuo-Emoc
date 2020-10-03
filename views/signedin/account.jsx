const React = require("react");
const Signed = require("../components/Signed.jsx");

class Account extends React.Component {
  render() {
    const {usersComingOut,usersClosetedIn, userInfo} =this.props

    return (
      <Signed title="Your Account">
        <div className="container">
            <div className="row" id="topHeader">
                <div className = "col">
                    <div className = "headerAccount">
                         I hope your day is going well {userInfo[0].username}
                    </div> 
                </div>
            </div>
            <div className = "row">
                {/* Account Info */}
                <div className = "col-4 sectionShadow" id="accountInfo">
                <div id="roq">

                    <div className = "row">
                        <div classSName = "col">
                            <div className ="headerInfo">
                                Info
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div classSName = "col">
                            <div className = "info">
                                Username: <br></br>{userInfo[0].username}
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div classSName = "col">
                            <div className = "info">
                                Age: <br></br>{userInfo[0].age}
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div classSName = "col">
                            <div className = "info">
                                Identity: <br></br>{userInfo[0].identity}
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col">
                            <div className = "info">
                                AboutMe: <br></br><br></br>{userInfo[0].aboutMe}
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                {/* Forum Information */}
                <div className = "col-6">
                    <div className = "row">
                        <div className = "col">
                            <div className = "forumHeader">
                                Below are all your forums you've made: 
                            </div>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col">
                            <div className = "forumTitle">Coming Out</div>
                            <hr />
                    </div>
                        </div>
            
                    <div className = "row">
                        <div className = "col">
                        <div className ="section forums">
                            <table className ="table table-striped table-bordered table-sm " id="dtBasicExample" cellSpacing="-3" width="100%">
                                <thead>
                                    <tr>
                                        <th className="th-sm">Subject</th>
                                        <th className="th-sm">Comments</th>
                                        <th className="th-sm">Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersComingOut.map((item, index) => {
                                        return (
                                            <tr>
                                                <td><a href = {`/forum/co/${item._id}`}>{item.subject}</a></td>
                                                <td>{item.comments.length}</td>
                                                <td>
                                                <img type="button" src="/img/edit.png" data-toggle="modal"  data-target={`#coEditModal${item._id}`} className="forumOptionIcons"></img>
                                                <a href={`/account/co/${item._id}/delete`}><img src="/img/delete.png" className="forumOptionIcons"></img></a>
                                                
                                                {/* //MODEL */}

                                                <div class="modal fade" id={`coEditModal${item._id}`} tabindex="-1" aria-labelledby={`coEditModal${item._id}`}     aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id={`#coEditModal${item._id}`}>Edit Coming Out Post</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                        </div>
                                                        <div class="modal-body">

                                                        <form action={`/account/co/${item._id}/update?_method=PUT`} method="POST">
                                                <div className = "form-group">
                                                    <label for="subject">Subject</label>
                                                    <input type="text" name="subject" className="form-control" id="subject" value={item.subject}></input>
                                                </div> 
                                                <div className="form-group">
                                                    <label for="body">Body</label>
                                                    <textarea className="form-control" id="body" name="body" rows="4" value={item.body}></textarea>
                                                </div>   
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="submit" class="btn btn-primary">Submit Edits</button>        
                                            </form>   
                                                                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                                
                                                
                                                
                                                
                                                </td>
                                            </tr>
                                        )})}
                                </tbody>
                            </table>
                    </div>
                
            <div className = "row">
                <div class="col">
                    <div className = "forumTitle forumCloseted">Closeted In</div>
                    <hr />
                </div>
            </div>
            <div className = "row">
                 <div className = "col">
                    <div className ="section forums">
                        <table className ="table table-striped table-bordered table-sm" id="dtBasicExample" cellSpacing="-3" width="100%">
                            <thead>
                                <tr>
                                    <th className="th-sm">Subject</th>
                                    <th className="th-sm">Comments</th>
                                    <th className="th-sm">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersClosetedIn.map((item, index) => {
                                    return (
                                        <tr>
                                            <td><a href = {`/forum/ci/${item._id}`}>{item.subject}</a></td>
                                            <td>{item.comments.length}</td>
                                            <td>
                                                <img type="button" src="/img/edit.png" data-toggle="modal"  data-target={`#ciEditModal${item._id}`} className="forumOptionIcons"></img>
                                                <a href={`/account/ci/${item._id}/delete`}><img src="/img/delete.png" className="forumOptionIcons"></img></a>



                
                                            <div class="modal fade" id={`ciEditModal${item._id}`} tabindex="-1" aria-labelledby={`ciEditModal${item._id}`}     aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id={`#ciEditModal${item._id}`}>Edit Closeted In Post</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                        </div>
                                                        <div class="modal-body">

                                                        <form action={`/account/ci/${item._id}/update?_method=PUT`} method="POST">
                                                <div className = "form-group">
                                                    <label for="subject">Subject</label>
                                                    <input type="text" name="subject" className="form-control" id="subject" value={item.subject}></input>
                                                </div> 
                                                <div className="form-group">
                                                    <label for="body">Body</label>
                                                    <textarea className="form-control" id="body" name="body" rows="4" value={item.body}></textarea>
                                                </div>   
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="submit" class="btn btn-primary">Submit Edits</button>        
                                            </form>   
                                                                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>










                                                
                                            </td>
                                        </tr>
                                    )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
                    </div>
                    <div className = "row">
                        <div className = "col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Signed>
    );
  }
}

module.exports = Account;