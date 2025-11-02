import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { showFormattedDate } from '../utils';
import { getNote } from '../utils/network-data';

function NoteDetail({ onDelete }) {
    const [note, setNote] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const { id } = useParams();
    
    React.useEffect(() => {
        async function fetchNote() {
            try {
                const result = await getNote(id);
                
                if (result.error || !result.data) {
                    setError(true);
                    return;
                }
                
                setNote(result.data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        
        if (id) {
            fetchNote();
        }
    }, [id]);

    const handleDelete = () => {
        if (note) {
            onDelete(note.id);
        }
    };

    if (error) {
        return <Navigate to="/not-found" replace />;
    }
    
    if (loading) {
        return <div className="note-detail">Loading...</div>;
    }
    
    if (!note) {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <div className="note-detail">
            <div 
                className="note-detail__content"
            >
                <div className="note-detail__header">
                    <h1 className="note-detail__title">{note.title}</h1>
                    <p className="note-detail__date">{showFormattedDate(note.createdAt)}</p>
                </div>
                <div className="note-detail__body">
                    <p>{note.body}</p>
                </div>
                <div className="note-detail__meta">
                    <p>Archived: {note.archived ? 'Yes' : 'No'}</p>
                </div>
                <div className="note-detail__actions">
                    <button className="btn-back" onClick={() => window.history.back()}>Back to Notes</button>
                    <button className="btn-delete" onClick={handleDelete}>Delete Note</button>
                </div>
            </div>
        </div>
    );
}

export default NoteDetail;