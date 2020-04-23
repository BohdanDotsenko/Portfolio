import React, {Component} from 'react';
import './agile.css';


class AgileComponent extends Component {

    render() {
        return (
          <div className="agile">
              <p className="headline">Caring about your project</p>
              <p className="text-justify">
              My cooperation with a client is based on revealing and understanding all aspects of the working process for both sides before production.That helps to avoid misunderstanding when work has been already started. 
              My goal is to provide high-quality service and products to my clients. After project completion, I will ensure follow-up support of the project.
                {/* <br /> <br />
                Through working experience, I have become an expert on Scrum.
                I have worked with JIRA, Confluence and classic tools like post-its. */}
              </p>
          </div>
        );
    }
}

export default AgileComponent;
