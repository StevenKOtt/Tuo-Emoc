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
                    <a className="btn btn-light" id="newComingOut" href="/forum/new/" role="button">Create</a> 
                    
                </div>
            </div>
            <div className ="row">
                <div className="col">
                <div className ="info">
                    Here you will be able to read, comment, and experience individuals stories.
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
                                            <td><a href = {`/Forum/${item._id}`}>{item.subject}</a></td>
                                            <td>{item.comments}</td>
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
                                            <td><a href = {`/Forum/${item._id}`}>{item.subject}</a></td>
                                            <td>{item.comments}</td>
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