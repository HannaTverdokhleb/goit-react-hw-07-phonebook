import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice'
import style from 'components/SearchFilter/SearchFilter.module.css';
import { selectFilterValue } from 'redux/selectors';

const SearchFilter = () => {
    let dispatch = useDispatch();
    const searchValue = useSelector(selectFilterValue);

    const handleChange = e => {
        const { value } = e.target;
        dispatch(filterContacts(value));
    }
    
    return (
        <>
            <h3>Find contact by name</h3>
            <label>
                <input type="text" value={searchValue} onChange={handleChange} placeholder="Search..." className={style.searchInput}/>
            </label>
        </>
    )
}

export default SearchFilter;
