function filterNotes(notes, archived) {
    return notes
        .filter((note) => note.archived === archived)
        .sort((a, b) => {
            // Sort pinned notes first, then by creation date (newest first)
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            // If both are pinned or both not pinned, sort by creation date (newest first)
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
}
const getActiveNotes = (notes) => filterNotes(notes, false);
const getArchivedNotes = (notes) => filterNotes(notes, true);

export { filterNotes, getActiveNotes, getArchivedNotes };