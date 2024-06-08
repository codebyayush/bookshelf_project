import React from 'react'

const ItemContext = React.createContext({
    filteredBooks: [],
    addFiltered: (books) => {},
    toggle: false,
    bookshelfToggle: false,
    arr: [],
    addBooks: (books) => {},
    toggleHandler: () => {},
    addABook: (index, book) => {},
    removeBook: (book) => {}
})

export default ItemContext;