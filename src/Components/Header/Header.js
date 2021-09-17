import Dropdown from '@restart/ui/esm/Dropdown';
import React, { useEffect, useState } from 'react';
import { Button, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { productActions } from '../../Redux/products';
import EditProductModal from '../EdipProductInfoModal/EditProductInfoModal';

function Header({ addButtonClick }) {
  const location = useLocation();
  const history = useHistory();
  const [isList, setIsList] = useState(true);
  const [value, setValue] = useState('');

  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();
  function addSortBy(e, sort) {
    e.preventDefault();
    if (sort === 'default') {
      history.push({
        ...location,
        search: ``,
      });
      return;
    }
    history.push({
      ...location,
      search: `sort=${sort}`,
    });
  }
  useEffect(() => {
    if (location.pathname !== '/list') {
      setIsList(false);
    } else {
      setIsList(true);
    }
    dispatch(productActions.filterAction(value.trim()));
  }, [value, dispatch, location]);

  return (
    <>
      <header className="Searchbar">
        {isList && (
          <>
            <form className="SearchForm">
              <span className="SearchForm-button-label">Search</span>
              <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search product"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </form>
            <DropdownButton
              className="DropDownButton"
              id="dropdown-basic-button"
              title="Sort by"
            >
              <Dropdown.Item
                onClick={e => addSortBy(e, 'a_z')}
                className="DropDownButton__item"
                href="#"
              >
                A-Z
              </Dropdown.Item>
              <Dropdown.Item
                onClick={e => addSortBy(e, 'minmax')}
                className="DropDownButton__item"
                href="#"
              >
                From min to max
              </Dropdown.Item>
              <Dropdown.Item
                onClick={e => addSortBy(e, 'maxmin')}
                className="DropDownButton__item"
                href="#"
              >
                From max to min
              </Dropdown.Item>
              <Dropdown.Item
                onClick={e => addSortBy(e, 'default')}
                className="DropDownButton__item"
                href="#"
              >
                Default
              </Dropdown.Item>
            </DropdownButton>
            <Button
              as="button"
              variant="primary"
              type="button"
              className="Searchbar__button-add"
              onClick={addButtonClick}
            >
              Add new product
            </Button>
          </>
        )}
        {!isList && (
          <Button
            as="button"
            variant="primary"
            type="button"
            className="Searchbar__button-add"
            onClick={() => setOpenEditModal(true)}
          >
            Edit product info
          </Button>
        )}
      </header>
      {openEditModal && (
        <EditProductModal show={openEditModal} setShow={setOpenEditModal} />
      )}
    </>
  );
}

export default Header;
