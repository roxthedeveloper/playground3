import React from 'react'

import { Switch } from 'react-router-dom'

class UserPage extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/user' component={AllUsers} />
                <Route exact path='/user/:number' component={OneUser} />
            </Switch>
        );
    }
}

export default UserPage