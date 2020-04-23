import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MicrophoneIcon from 'material-ui/svg-icons/av/mic';
import MicrophoneOffIcon from 'material-ui/svg-icons/av/mic-off';
import  {Howl} from 'howler';
import './dark-voice.css';

const darkVoiceSound = new Howl({
  src: ['dark-voice.mp3']
});

class DarkVoiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sound: false
        };
    }

    disableSound() {
      this.setState({sound: false});
      darkVoiceSound.pause();
    }

    enableSound() {
      this.setState({sound: true});
      darkVoiceSound.play();
      // Fires when the sound finishes playing.
      darkVoiceSound.on('end', () => {
        this.disableSound();
      });
    }

    render() {
        return (
            <div className="dark-voice">
              <p className="text-center">
                  <b className="dark-voice-tag">&#x3C;TheProgrammersPrayer&#x3E; </b><br/>
                  Our program, who art in memory. <br/>
                  "Hello world" by thy name<br/>
                  Thy work will be done on Printer<br/>
                  As it is on screen <br/>
                  Forgive us our I/O errors<br/>
                  As we forgive those who ask us to document.<br/>
                  And lead us not into fustration<br/>
                  And Deliver us from errors.<br/>
                  For thine is  the computation, Iteration<br/>
                  Looping forever and ever.<br/>
                  <em>Return.</em><br/>
                    <b className="dark-voice-tag">&#x3C;/TheProgrammersPrayer&#x3E;</b>
              </p>
              <div className="microphone-action">
                { !this.state.sound &&
                  <FloatingActionButton backgroundColor="#A80202" onTouchTap={this.enableSound.bind(this)}>
                    <MicrophoneIcon />
                  </FloatingActionButton>
                }
                { this.state.sound &&
                  <FloatingActionButton backgroundColor="#A80202" onTouchTap={this.disableSound.bind(this)}>
                    <MicrophoneOffIcon />
                  </FloatingActionButton>
                }

              </div>
            </div>
        );
    }
}

export default DarkVoiceComponent;
