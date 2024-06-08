import React, { useContext } from "react";
import ItemContext from "../../store/ItemContext";

const Cart = () => {
    const ctx = useContext(ItemContext);
    const books = JSON.parse(localStorage.getItem('cart-books')) || [];

  return (
    <div>
        <div className=" h-full flex flex-wrap justify-center">
            
            {books.length > 0 && books.map((book, index) => (
                <div
                    key={index}
                    className={`m-5 p-10 rounded-lg border shadow-xl border-black w-64 max-h-60`}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                    <h1 className="font-medium">Title:</h1>
                    <p className="ps-2">{book.title}</p>
                    </div>
                    <div className="flex">
                    <h1 className="font-medium">Edition count:&nbsp;</h1>
                    <p className="ps-1">{book.edition_count}</p>
                    </div>
                    <button className="bg-red-500 p-2 rounded-xl text-white font-medium mt-2" onClick={() => ctx.removeBook(book)}>
                        remove book
                    </button>
                </div>
            ))}
            {books.length === 0 && <h1 className="text-center text-4xl font-medium mt-44 italic text-gray-700">Bookshelf is Empty</h1>}
        </div>
    </div>
  );
};

export default Cart;
