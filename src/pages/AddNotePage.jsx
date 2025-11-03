import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";

function AddNotePage({ addNote }) {
    const navigate = useNavigate();

    const handleAddNote = async (note) => {
        if (typeof addNote !== 'function') return;

        try {
            const result = await addNote(note);
            if (!result || !result.error) {
                navigate('/');
            }
        } catch (err) {
            console.error('Add note failed', err);
        }
    };

    return (
        <div className="add-note-page">
            <HeaderApp showControls={false} />
            <div className="add-note-page__header">
                <button onClick={() => navigate('/')}>Back</button>
                <h2>Add a New Note</h2>
            </div>
            <NoteInput addNote={handleAddNote} />
        </div>
    );
}

export default AddNotePage;