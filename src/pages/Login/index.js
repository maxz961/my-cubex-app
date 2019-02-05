import React, {Component} from 'react'
import FormsLogin from '../../components/FormsLogin'
import './Login.css'


class Login extends Component {
    render() {
        return (
            <div className="Pages__center">
                <h1>Логин страница</h1>
                <p>Ку-ку</p>
                <FormsLogin />
            </div>
        )
    }
}

export default Login