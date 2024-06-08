import React, { useContext } from "react";
import ItemContext from "../../store/ItemContext";

const Home = () => {
  const ctx = useContext(ItemContext);

  return (
    <>
      <div className="flex justify-center items-center w-screen mx-auto">
        <div className=" h-full flex flex-wrap justify-center">
          {ctx.filteredBooks.map((book, index) => (
            <>
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
                {!book.has_fulltext && <button className="bg-green-600 p-2 rounded-xl text-white font-medium mt-2" onClick={() => ctx.addABook(book)}>
                  Add to bookshelf
                </button>}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;