import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
            Hello world! I am a full-stack JS developer.<br/>
            I've more than 1 year programming experience.<br/>
            I learn fast and I love to come up with solutions to seemingly intractable problems.<br/>
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
