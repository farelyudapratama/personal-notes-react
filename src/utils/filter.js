function filterNotes(notes, archived, searchQuery = '') {
    let filteredNotes = notes.filter((note) => note.archived === archived);
    
    if (searchQuery) {
        filteredNotes = filteredNotes.filter(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    return filteredNotes.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
}

const getActiveNotes = (notes, searchQuery = '') => filterNotes(notes, false, searchQuery);
const getArchivedNotes = (notes, searchQuery = '') => filterNotes(notes, true, searchQuery);

export { filterNotes, getActiveNotes, getArchivedNotes };