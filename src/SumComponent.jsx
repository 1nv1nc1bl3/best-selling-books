// import { useState, useEffect } from 'react';
// import './index.css';
// // import Book from './components/Book.js';
// // import List from './components/List.jsx';

// const API = 'vNARGDYNWidjIRP8Vb1QrrpQa2w885xG';

// export default function SumComponent() {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [IsError, setIsError] = useState(false);
//     const [lists, setLists] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const handlePickCategory = (id) => {
//         const pickedCat = lists.find((list) => list.list_id === id);
//         setSelectedCategory(pickedCat);
//         // console.log(pickedCat);
//     };

//     const fetchBooks = async () => {
//         try {
//             const res = await fetch(
//                 `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API}`
//             );
//             if (!res.ok) {
//                 setIsError(true);
//             }
//             const data = await res.json();
//             setLists(data.results.lists);
//             setBooks(data.results.lists[4].books);
//             // console.log(data.results);
//         } catch (err) {
//             console.log('Error fetching books', err);
//         } finally {
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchBooks();
//     }, []);

//     useEffect(() => {
//         if (selectedCategory) setBooks(selectedCategory.books);
//     }, [selectedCategory]);

//     return (
//         <main>
//             <h1>The New York Times Best Sellers</h1>
//             <div className='container'>
//                 {loading ? (
//                     <h3>Loading...</h3>
//                 ) : (
//                     <>
//                         <section className='categories-list'>
//                             <select
//                                 value={
//                                     !selectedCategory
//                                         ? ''
//                                         : selectedCategory.list_id
//                                 }
//                                 className='list-container'
//                                 onChange={(e) => {
//                                     handlePickCategory(Number(e.target.value));
//                                 }}
//                             >
//                                 <option value='' disabled>
//                                     Select a category
//                                 </option>
//                                 {lists.map((list) => {
//                                     return (
//                                         <List
//                                             selectedCategory={selectedCategory}
//                                             key={list.list_id}
//                                             list={list}
//                                         />
//                                     );
//                                 })}
//                             </select>
//                         </section>
//                         <section className='books-list'>
//                             {!selectedCategory
//                                 ? 'No category selected yet'
//                                 : books.map((book) => {
//                                       return (
//                                           <Book
//                                               key={
//                                                   book.primary_isbn13 ||
//                                                   book.primary_isbn11
//                                               }
//                                               {...book}
//                                           ></Book>
//                                       );
//                                   })}
//                         </section>
//                     </>
//                 )}
//             </div>
//         </main>
//     );
// }

// function List({ list }) {
//     const { display_name, list_id } = list;
//     return (
//         <option value={list_id}>
//             {list_id} - {display_name}
//         </option>
//     );
// }

// function Book(book) {
//     const {
//         rank,
//         title,
//         description,
//         author,
//         book_image,
//         publisher,
//         primary_isbn13,
//     } = book;
//     return (
//         <article className='book'>
//             <img src={book_image} alt={title} />
//             <h2 className='book-title'>{title}</h2>
//             {/* <button onClick={() => getBook(id)}>Get Book ID</button> */}
//             <h4>by {author}</h4>
//             <p className='book-description'>{description}</p>
//             <p>Publisher: {publisher}</p>
//             <p>ISBN: {primary_isbn13}</p>
//             <p className='bookID'>{`#${rank}`}</p>
//         </article>
//     );
// }
