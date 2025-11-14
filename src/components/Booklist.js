import React from 'react';
import Book from './Book.js';
import { books } from '../books.js';
import { useState } from 'react';
import '../index.css';

const API = 'vNARGDYNWidjIRP8Vb1QrrpQa2w885xG';

export default function BookList() {
    useState(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch(
                    `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API}`
                );
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.log('Error fetching books', error);
            }
        };
        fetchBooks();
    }, []);

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
