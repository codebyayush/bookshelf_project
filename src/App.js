import React, { useContext, useEffect } from 'react'
import Nav from './components/navbar/Nav';
import Home from './components/homepage/Home';
import ItemContext from './store/ItemContext';
import Cart from './components/cart/Cart';


function App() {

  const ctx = useContext(ItemContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(
          "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1"
        );
        if (resp.ok) {
          const data = await resp.json(); 
  
          ctx.addBooks(data.docs);
        } else {
          const error = await resp.json();
          console.log("Error fetching data: ", error);
        }
      } catch (error) {
        console.log('Network error:', error);
      } 
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav/>
      {!ctx.toggle ? <Home/> : <Cart/>}
    </>
  );
}

export default App;