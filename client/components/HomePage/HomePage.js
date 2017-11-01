import React from 'react';
import { connect } from 'react-redux';

import { taskActions } from '../../actions/actions'

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: 'not at bottom',
            tasks: []
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(){
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeigh;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
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

    componentDidMount(){
        console.log('component did mount');
        const { dispatch } = this.props;
        dispatch(taskActions.getTaskList('email', 'password'));
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnMount(){
        console.log('component will unmount');
        window.removeEventListener('scroll', this.handleScroll);
    }

    render(){
      return (
          <div className="container">
              <h2>Upcoming events</h2>
              <div><span>Please wait...</span></div>
              <div>{this.state.message}</div>
          </div>
      );
    }

}

export default connect(state => state)(HomePage);
