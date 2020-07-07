import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="job-card">
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/insta.svg" />
            </div>
          </div>
          <div className="job-content">
            <div className="job-title">Lead UI designer</div>
            <div className="job-salary">$10k-$16k</div>
          </div>
        </div>
        <div className="job-card">
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/skype.svg" />
            </div>
          </div>
          <div className="job-content">
            <div className="job-title">Senior Web Designer</div>
            <div className="job-salary">$8k-$10k</div>
          </div>
        </div>
        <div className="job-card">
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/google.svg" />
            </div>
          </div>
          <div className="job-content">
            {" "}
            <div className="job-title">UI/UX Designer</div>
            <div className="job-salary">$6k-$10k</div>
          </div>
        </div>
        <div className="job-card">
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/dribble.svg" />
            </div>
          </div>
          <div className="job-content">
            <div className="job-title">Graphic Designer</div>
            <div className="job-salary">$4k-$6k</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
