import React, { Suspense, useState } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import DeleteModal from './DeleteModal/DeleteModal';
import 'react-toastify/dist/ReactToastify.css';
import { isOpenAskModal } from '../Redux/helpers/helpers-selectors';
import AddProductModal from './AddProductModal/AddProductModal';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const Header = React.lazy(() => import('./Header/Header.js'));

const DetailView = React.lazy(() =>
  import('../Views/DetailView/DetailView.js'),
);
const ListView = React.lazy(() => import('../Views/Listview/ListView.js'));

function App() {
  //* opn modal for add new product
  const [isOpenModal, setIsOpenModal] = useState(false);

  //* opened modal and ask delete or no
  const isOpenASkModalOrNo = useSelector(isOpenAskModal);

  function addButtonClick(e) {
    setIsOpenModal(true);
  }
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
          </div>
        }
      >
        <Header addButtonClick={addButtonClick} />
        <Switch>
          <Route path="/list" exact>
            <ListView />
          </Route>
          <Route path="/info/:productId">
            <DetailView />
          </Route>
          <Redirect strict from="/" to="/list" />
        </Switch>
      </Suspense>
      <AddProductModal setShow={setIsOpenModal} show={isOpenModal} />
      {isOpenASkModalOrNo && <DeleteModal showModal={isOpenASkModalOrNo} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
