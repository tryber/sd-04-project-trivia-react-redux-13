const d = () => {}; // Função sem uso, só para eliminar a escrita de vários 'exports'

const getElt = (id) => document.querySelector(id);

const getLS = (key) => JSON.parse(localStorage.getItem(key));

const setLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export { d as default, getElt, getLS, setLS };
