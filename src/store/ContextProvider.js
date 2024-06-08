import React, { useState } from "react";
import ItemContext from "./ItemContext";

const ContextProvider = (props) => {
  const [arr, setArr] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(arr);
  const [toggle, setToggle] = useState(false);

  const addItemHandler = (items) => {
    setArr([...items]);
  };

  const addFiltered = (books) => {
    setFilteredBooks(books);
  };

  const bookshelfToggle = () => {
    setToggle(false);
  }

  const toggleHandler = () => {
      setToggle((prev) => !prev)
  }

  const addABookToCart = (book) => {

    const existingBookInArray = arr.findIndex((item) => item.edition_key[0] === book.edition_key[0])
    
    setArr((prev) => {
        const newList = [...prev];
        let newBookFulltext = newList[existingBookInArray].has_fulltext;
        const newFullText = !newBookFulltext;
        newList[existingBookInArray].has_fulltext = newFullText;
        return newList;
    })

    const existingBooks = JSON.parse(localStorage.getItem('cart-books')) || [];
    const isDuplicate = existingBooks.some(existingBook => existingBook.edition_key[0] === book.edition_key[0]);

    if (!isDuplicate) {
        existingBooks.push(book);
    }
    
    localStorage.setItem('cart-books', JSON.stringify(existingBooks));
  }

  const removeBook = (book) => {
    const existingBookInArray = arr.findIndex((item) => item.edition_key[0] === book.edition_key[0])
    
    setArr((prev) => {
        const newList = [...prev];
        let newBookFulltext = newList[existingBookInArray].has_fulltext;
        const newFullText = !newBookFulltext;
        newList[existingBookInArray].has_fulltext = newFullText;
        return newList;
    })

    const cartArr = JSON.parse(localStorage.getItem('cart-books'));

    const newCart = cartArr.filter((item) => item.edition_key[0] !== book.edition_key[0]);

    localStorage.setItem('cart-books', JSON.stringify(newCart))

  }

  const context = {
    arr: arr,
    filteredBooks: filteredBooks,
    addFiltered: addFiltered,
    addBooks: addItemHandler,
    toggle: toggle,
    bookshelfToggle: bookshelfToggle,
    toggleHandler: toggleHandler,
    addABook: addABookToCart,
    removeBook: removeBook,
  };

  return (
    <ItemContext.Provider value={context}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ContextProvider;
