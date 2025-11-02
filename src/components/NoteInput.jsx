import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            color: '',
            maxTitleLength: 50,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;
        if (title.length <= this.state.maxTitleLength) {
            this.setState({ title });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({ body: event.target.value });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const { title, body } = this.state;
        this.props.addNote({ title, body });
        this.setState({ title: '', body: ''});
    }

    render() {
        const remaining = this.state.maxTitleLength - this.state.title.length;

        return (
            <form onSubmit={this.onSubmitEventHandler} className="note-input">
                <span>{remaining} remaining characters</span>
                <input
                    type="text"
                    className="note-input__title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                    className="note-input__body"
                    placeholder="Take a note..."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                />

                <button type="submit">Add Note</button>
            </form>
        );
    }
}

export default NoteInput;