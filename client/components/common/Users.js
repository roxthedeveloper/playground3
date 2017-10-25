import React from 'react'

import { Switch } from 'react-router-dom'

class Users extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/roaster' component={AllUsers} />
                <Route exact path='/roaster/:number' component={OneUser} />
            </Switch>
        );
    }
}

export default Users