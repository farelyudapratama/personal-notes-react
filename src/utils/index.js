const getInitialData = () => ([
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: "yellow",
    pinned: true,
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
]);

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
{ name: 'yellow', from: '#ffd60a', to: '#ffc300', border: '#ffaa00', glow: 'rgba(255, 214, 10, 0.4)' },
    { name: 'blue', from: '#00d9ff', to: '#0099ff', border: '#0077ff', glow: 'rgba(0, 217, 255, 0.4)' },
    { name: 'green', from: '#00ff88', to: '#00cc66', border: '#00ff66', glow: 'rgba(0, 255, 136, 0.4)' },
    { name: 'pink', from: '#ff006e', to: '#ff5299', border: '#ff0080', glow: 'rgba(255, 0, 110, 0.4)' },
    { name: 'purple', from: '#b537f2', to: '#9d4edd', border: '#7b2cbf', glow: 'rgba(181, 55, 242, 0.4)' },
];

export { getInitialData, showFormattedDate, presetColors };
