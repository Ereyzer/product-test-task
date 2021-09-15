import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const DetailView = React.lazy(() =>
  import('../views/DetailView/DetailView.js'),
);
const ListView = React.lazy(() => import('../views/ListView/ListView.js'));

function App() {
  return <div></div>;
}

export default App;
