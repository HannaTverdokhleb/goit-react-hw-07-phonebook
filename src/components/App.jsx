import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "redux/selectors";


const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="main-title">Phonebook</h1>
      <AddContactForm />
      <h2 className="title">Contacts</h2>
      <SearchFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  )
}


export default App;
