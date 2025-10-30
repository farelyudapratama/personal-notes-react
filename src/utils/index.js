let notes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: "yellow",
    pinned: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: "blue",
    pinned: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: "green",
    pinned: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: "pink",
    pinned: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: "purple",
    pinned: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: "pink",
    pinned: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

const presetColors = [
  { name: 'yellow', from: '#e3f02954', to: '#ffc40070', border: '#ffaa00', glow: 'rgba(255, 214, 10, 0.4)' },
  { name: 'blue', from: '#00d9ff54', to: '#0099ff70', border: '#0077ff', glow: 'rgba(0, 217, 255, 0.4)' },
  { name: 'green', from: '#00ff8854', to: '#00cc6670', border: '#00ff66', glow: 'rgba(0, 255, 136, 0.4)' },
  { name: 'pink', from: '#ff006e54', to: '#ff529970', border: '#ff0080', glow: 'rgba(255, 0, 110, 0.4)' },
  { name: 'purple', from: '#b537f254', to: '#9d4edd70', border: '#7b29cf', glow: 'rgba(181, 55, 242, 0.4)' },
];

function getAllNotes() {
  return notes;
}

function getNote(id) {
  return notes.find((note) => String(note.id) === String(id)) || null;
}

function getActiveNotes() {
  return notes.filter((note) => !note.archived);
}

function getArchivedNotes() {
  return notes.filter((note) => note.archived);
}

function addNote({ title, body, color }) {
  const newNote = {
    id: +new Date(),
    title: title || '(untitled)',
    body: body || '',
    createdAt: new Date().toISOString(),
    archived: false,
    color: color || 'yellow',
    pinned: false,
  };
  notes = [...notes, newNote];
  return newNote;
}

function deleteNote(id) {
  notes = notes.filter((note) => String(note.id) !== String(id));
}

function archiveNote(id) {
  notes = notes.map((note) => (String(note.id) === String(id) ? { ...note, archived: true } : note));
}

function unarchiveNote(id) {
  notes = notes.map((note) => (String(note.id) === String(id) ? { ...note, archived: false } : note));
}

function toggleArchive(id) {
  notes = notes.map((note) => (String(note.id) === String(id) ? { ...note, archived: !note.archived } : note));
}

function togglePin(id) {
  notes = notes.map((note) => (String(note.id) === String(id) ? { ...note, pinned: !note.pinned } : note));
}

function editNote({ id, title, body }) {
  notes = notes.map((note) => (String(note.id) === String(id) ? { ...note, title, body } : note));
}

export {
  showFormattedDate,
  presetColors,
  getAllNotes,
  getNote,
  getActiveNotes,
  getArchivedNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  toggleArchive,
  togglePin,
  editNote,
};
