import React from "react";

class LoginInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="login-input">
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
                <input type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={this.onPasswordChange} />
                <button>Login</button>
            </form>
        );
    }
}

LoginInput.defaultProps = {
    login: () => {},
};

export default LoginInput;