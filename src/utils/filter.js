function filterNotes(notes, archived) {
    return notes.filter((note) => note.archived === archived);
}
const getActiveNotes = (notes) => filterNotes(notes, false);
const getArchivedNotes = (notes) => filterNotes(notes, true);

export { filterNotes, getActiveNotes, getArchivedNotes };