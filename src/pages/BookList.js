import { useState, useEffect } from 'react';
import Book from '../components/Book.js';
import DropDown from '../components/DropDown.js';
import Spinner from '../components/Spinner.js';
import '../index.css';
// import '../fonts/Lodeh-VGLD6.ttf';
// import '../fonts/FranklinGothic.woff';

const API = 'vNARGDYNWidjIRP8Vb1QrrpQa2w885xG';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [lists, setLists] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    const handlePickCategory = (id) => {
        const pickedCat = lists.find((list) => list.list_id === id);
        setSelectedCategory(pickedCat);
        // console.log(pickedCat);
    };

    const fetchBooks = async () => {
        try {
            const res = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API}`
            );
            if (!res.ok) {
                setIsError(true);
            }
            const data = await res.json();
            setLists(data.results.lists);

            // setBooks(data.results.lists[4].books);
            // console.log(data.results);
        } catch (err) {
            console.log('Error fetching books', err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchBooks();
    }, []);

    // assigns selected category to books
    useEffect(() => {
        if (selectedCategory) setBooks(selectedCategory.books);
    }, [selectedCategory]);

    // change <body> class & store theme in localStorage
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // load theme from localStorage
    useEffect(() => {
        if (localStorage.getItem('theme'))
            setTheme(localStorage.getItem('theme'));
    }, []);

    /* CONDITIONAL RENDERING */
    // When loading -> render Spinner
    if (loading) {
        return (
            <main className={`app ${theme}`}>
                {/* <Header theme={theme} setTheme={setTheme} /> */}

                <div className='container'>
                    <Spinner loading={loading} />
                </div>
            </main>
        );
    }

    // If Error after finished loading -> render message
    if (isError) {
        return (
            <main className={`app ${theme}`}>
                {/* <Header theme={theme} setTheme={setTheme} /> */}
                <div className='container'>
                    <p>Sorry, there was an error!</p>
                </div>
            </main>
        );
    }

    // No loading & No Errors -> render books
    return (
        <main className='app'>
            {/* <Header theme={theme} setTheme={setTheme} /> */}
            <div className='container'>
                <div className='app-heading'>
                    <h1 className='main-title'>
                        The New York Times Best Sellers
                    </h1>
                    <h4 className='sub-title'>
                        Authoritatively ranked lists of books sold in the United
                        States, sorted by format and genre.
                    </h4>
                </div>
                <DropDown
                    handlePickCategory={handlePickCategory}
                    lists={lists}
                    selectedCategory={selectedCategory}
                />

                <h2 className='category-title'>
                    {selectedCategory?.display_name}
                </h2>

                <section className='books-list'>
                    {!selectedCategory ? (
                        <p className='not-selected'>No category selected yet</p>
                    ) : (
                        books.map((book) => {
                            return (
                                <Book
                                    key={
                                        book.primary_isbn13 ||
                                        book.primary_isbn11
                                    }
                                    {...book}
                                />
                            );
                        })
                    )}
                </section>
            </div>
        </main>
    );
}
