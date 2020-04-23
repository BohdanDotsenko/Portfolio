import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. <br></br>
              </span>
              <span className="quote-author">        - Mosher’s Law of Software Engineering</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
