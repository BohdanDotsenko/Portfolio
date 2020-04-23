import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
              <div className="timeline-entry">
                    <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                        <CardHeader title="Software Developer" subtitle="FireFly Studio"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            March	2020 - Till present. Full-Stack JavaScript developer.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Javascript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>React</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>React Native</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Wordpress</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Node.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Bootstrap</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Software Developer" subtitle="Freelancer"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            September	2019 - Ferbrury 2020. Full-Stack JavaScript developer.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Javascript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>React</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>React Native</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Wordpress</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Node.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Bootstrap</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>PHP</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Student" subtitle="Unit Factory(School 42)"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          June 2019 - Till Pesent. Non-profit programming school. Computer scince

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>C</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Linux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Git</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>JavaScript</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>React</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Node.js</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
