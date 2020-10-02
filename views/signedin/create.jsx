const React = require("react");
const Signed = require("../components/Signed.jsx");

class Create extends React.Component {
  render() {
    const {comingout} = this.props
    return (
        <Signed>
        <div className = "container">
            <div className = "row">
                <div className = "col">
                    <div className ="display-3">Create your post below:</div>
                </div>
            </div>
            <div className = "row">
                <div className ="col">
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
                
        </div>
        </Signed>
    )
    
}}
module.exports = Create;