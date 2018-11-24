import React, {PureComponent} from 'react'
import {Route, Link} from 'react-router-dom'
import './App.css'
import CreateAccount from './page/CreateAccount/CreateAccount'
import LoginForm from './page/LoginForm/LoginForm'
import FullForm from './page/FullForm/FullForm'
import client from './api/userApi'
import Standard from './page/Standard/Standard'
import AppBarSN from './component/AppBarSN/AppBarSN'

class App
    extends PureComponent {
    state = {
        response: ''
    };

    componentDidMount() {
        client.ping()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log(err))
    }

    render() {
        console.log('--------->', window.location.href)

        return (
            <div className="App" style={{width: '100%'}}>

                    <header>
                        <Link to="/">Home</Link>
                        <Link to="/login">login</Link>
                        <Link to="/full">Full</Link>
                        <Link to='/test'>Test</Link>
                    </header>

                    <section>
                        <Route exact path='/' component={CreateAccount}/>
                        <Route exact path="/login" component={LoginForm}/>
                        <Route exact path="/full" component={FullForm}/>
                        <Route exact path='/test' component={Standard}/>
                    </section>
                    <p className="App-intro">{this.state.response}</p>
                <AppBarSN/>
            </div>
        )
    }
}

export default App
