import React, { useEffect, useState} from 'react';
import doSeach from '../../API/Search';
import Post from '../../Components/Photo/Post';
import style from './Search.module.scss'
import styleMain from '../MainView/MainView.module.scss'

const Search = ({}) => {
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            setResults([])
            let results = await doSeach(searchInput, page)
            setLoading(false)
            setResults(results.results)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const nextPhoto = () => {
        const t = page + 1
        setLoading(true)
        setPage(t)
    }

    useEffect(() => {
        async function f() {
            let results = await doSeach(searchInput, page)
            setResults(results.results)
            setLoading(false);
        }

        f()
    }, [page])

    const prevPhoto = () => {
        const t = page - 1
        if (page >= 1) {
            setLoading(true)
            setPage(t)
        }
    }

    const handleSearchChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    return (
        <div className={style.searchContainer}>
            <form onSubmit={handleSearchSubmit}>
                <input placeholder={'Type and hit enter'} className={style.searchInput} autoFocus={true}
                       onChange={handleSearchChange} value={searchInput} type="text"/>
            </form>
            {loading && <p>Searching...</p>}
            <div>
                {results.length > 0 && results.map((item, i) => {
                    return <Post
                        key={i}
                        item={item}/>
                })}
            </div>
            {results.length ? <div className={styleMain.pagination}>
                <button disabled={page === 1} onClick={prevPhoto}>Previous</button>
                <span>{page}</span>
                <button onClick={nextPhoto}>Next</button>
            </div> : ''}
        </div>
    )
}


export default Search;