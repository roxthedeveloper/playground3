import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Alert } from 'react-bootstrap';

import { workeventActions } from '../../actions/actions.workevent'
import WorkEventRow from '../common/WorkEventRow';

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: 'not at bottom',
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(){
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeigh;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (this.refs.testAlert){
            if (windowBottom >= docHeight) {
                this.setState({
                    message: 'bottom reached'
                });
            }else{
                this.setState({
                    message: 'not at bottom'
                });
            }    
        }
    }

    componentDidMount(){
        console.log('component did mount');
        const { dispatch } = this.props;
        dispatch(workeventActions.getWorkEventList());
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnMount(){
        console.log('component will unmount');
        window.removeEventListener('scroll', this.handleScroll);
    }

    render(){
        const { fetchingData, error, workevents } = this.props;

        console.log('LoginPage state', this.state)
        console.log('LoginPage props', this.props)

        var sortWorkEvents;
        if(workevents){
            sortWorkEvents = workevents.sort(function(t1, t2){
                var t1Date = new Date(t1.start);
                var t2Date = new Date(t2.start);
                if(t1Date > t2Date) return 1;
                else if(t1Date < t2Date) return -1;
                else return 0;
            });
        }

        console.log('sortWorkEvents', sortWorkEvents)
        
        return (
            <div>
                {/* <h2>Upcoming events</h2> */}
                {/* <Alert bsStyle="warning" ref="testAlert">{this.state.message}</Alert> */}
                { fetchingData && <div><span>Please wait...</span></div> }
                { workevents && 
                    <Grid>
                    { 
                        sortWorkEvents.map((workevent) => 
                            <WorkEventRow key={workevent.id} workevent={workevent}></WorkEventRow>
                        )
                    }
                    </Grid>
                }
            </div>
        );
    }

}

function mapStateToProps(state) {
    return ({
        error: state.workeventList.error,
        fetchingData: state.workeventList.fetchingData,
        workevents: state.workeventList.workevents
    });
}
export default connect(mapStateToProps)(HomePage);
