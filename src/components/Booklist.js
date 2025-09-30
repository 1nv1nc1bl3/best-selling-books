import React from 'react';
import Book from './Book.js';
import { books } from '../books.js';

import '../index.css';

export default function BookList() {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    };
    return (
        <React.Fragment>
            <h1>Best selling Books this week</h1>
            <section className='bookList'>
                {books.map((book, index) => {
                    return (
                        <Book
                            key={book.index}
                            {...book}
                            index={index}
                            getBook={getBook}
                        ></Book>
                    );
                })}
            </section>
        </React.Fragment>
    );
}
