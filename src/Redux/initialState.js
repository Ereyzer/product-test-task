const initialState = {
  products: {
    items: [],
    Comments: [],
    filter: '',
  },
  helpers: {
    areYouSureModal: false,
    deleteProduct: {
      name: null,
      id: null,
    },
  },
  Comment: {
    id: 3,
    productId: 1,
    description: 'some text here',
    date: '14:00 22.08.2021',
  },
};

export default initialState;
