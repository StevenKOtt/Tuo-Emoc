const React = require("react");
const Signed = require("../components/Signed.jsx");

class Forum extends React.Component {
  render() {
    const {comingout} = this.props
    const {closetedin} = this.props
    return (
      <Signed title="Forums">
        <div className ="container">
            <div className = "row">
                <div className = "col">
                    <div className ="display-4">
                        Forums
                    </div>
                </div>
                <div className ="col">
                <button type="button" id="submit-post" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Submit Post
                </button>

                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"     aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                             <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Create Post</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                            </button>
                            </div>
                            <div class="modal-body">

                             <form action="/forum" method="POST">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="forumType" id="coming_Out" value="comingOut"></input>
                        <label className="form-check-label" for="coming_Out">Coming Out</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio"  name="forumType" id="help_me_out" value="helpMeOut"></input>
                        <label className="form-check-label" for="help_me_out">Help Me Out</label>
                    </div>
                    <div className = "form-group">
                        <label for="subject">Subject</label>
                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject here"/>
                    </div>
                    <div className = "form-group">
                        <label for="identity">What do you identify as:</label>
                        <select className="form-control" id="identity" type="text" name="identity">
                            <option>Prefer not to say</option>
                            <option>Gay</option>  
                            <option>Bi</option>
                            <option>Lesbian</option>
                            <option>Queer</option>
                            <option>Trans</option>  
                        </select>
                    </div>  
                    <div className = "form-group">
                        <label for="age">Age - Optional</label>
                        <input type="number" name="age" className="form-control" id="age" placeholder="Age"/>
                    </div>
                    <div className="form-group">
                        <label for="body">Body</label>
                        <textarea className="form-control" id="body" name="body" rows="4">Type text here</textarea>
                    </div>   
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Submit Post</button>        
                </form>   
                                                        
                            </div>
                        </div>
                    </div>
                </div>






                </div>
            </div>
            <div className ="row">
                <div className="col">
                <div className ="info">
                    Here you will be able to read, comment, and experience individuals stories.
                </div>
                </div>
            </div>

{/* COMING OUT STORIES */}
            <div className = "row">
                <div className = "col">
                    <div className = "forumTitle">Coming Out</div>
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
                                    <th className="th-sm">Identity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comingout.map((item, index) => {
                                    return (
                                        <tr>
                                            <td><a href = {`/forum/co/${item._id}`}>{item.subject}</a></td>
                                            <td>{item.comments.length}</td>
                                            <td>{item.identity}</td>
                                        </tr>
                                    )})}
                            </tbody>
                        </table>
                    </div>
                </div>
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
                                    <th className="th-sm">Identity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {closetedin.map((item, index) => {
                                    return (
                                        <tr>
                                            <td><a href = {`/forum/ci/${item._id}`}>{item.subject}</a></td>
                                            <td>{item.comments.length}</td>
                                            <td>{item.identity}</td>
                                        </tr>
                                    )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
      </Signed>
    );
  }
}

module.exports = Forum;