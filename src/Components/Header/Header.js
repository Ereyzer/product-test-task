import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { productActions } from '../../Redux/products';
function Header({ addButtonClick }) {
  const [value, setValue] = useState('');
  const location = useLocation();
  const [isList, setIsList] = useState(true);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const sendValue = value.trim();

    // onSubmit(sendValue);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsList(false);
    }
    if (value.trim() === '') return;
    dispatch(productActions.filterAction(value.trim()));
  }, [value, dispatch, location]);

  return (
    <header className="Searchbar">
      {isList && (
        <>
          <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

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
          <Button
            as="button"
            variant="primary"
            type="button"
            value="Add new product"
            type="button"
            className="Searchbar__button-add"
            onClick={addButtonClick}
          >
            Add new product
          </Button>
        </>
      )}
    </header>
  );
}

export default Header;
