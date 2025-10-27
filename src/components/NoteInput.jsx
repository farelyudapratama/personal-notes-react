import React from "react";
import { presetColors } from "../utils";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            color: '',
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onColorChangeEventHandler = this.onColorChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState({ title: event.target.value });
    }

    onBodyChangeEventHandler(event) {
        this.setState({ body: event.target.value });
    }

    onColorChangeEventHandler(event) {
        this.setState({ color: event.target.value });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler} className="note-input">
                <input type="text" className="note-input__title" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className="note-input__body" placeholder="Take a note..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <div>
                    <label htmlFor="color">Color: </label>
                    <div>
                        {presetColors.map((color) => (
                            <button
                                key={color.name}
                                type="button"
                                className={`note-input__color-button ${this.state.color === color.name ? 'selected' : ''}`}
                                style={{
                                    background: `linear-gradient(to right, ${color.from}, ${color.to})`,
                                    border: `2px solid ${color.border}`,
                                    boxShadow: `0 6px 18px ${color.glow}`,
                                    color: '#021018',
                                }}
                                onClick={() => this.onColorChangeEventHandler({ target: { value: color.name } })}
                                aria-pressed={this.state.color === color.name}
                                aria-label={`Choose ${color.name}`}
                            >
                                {color.name}
                            </button>
                        ))}
                    </div>
                </div>
                <button type="submit" className="note-input__submit-button">Add Note</button>
            </form>
        );
    }
}

export default NoteInput;