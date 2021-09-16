const initialState = {
  products: {
    items: {},

    filter: '',
  },
  comments: {
    items: [],
    changeComments: false,
  },
  helpers: {
    areYouSureModal: false,
    delElement: null,
  },
  Comment: {
    id: 3,
    productId: 1,
    description: 'some text here',
    date: '14:00 22.08.2021',
  },
};

export default initialState;
