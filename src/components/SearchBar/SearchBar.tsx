import { FormEvent } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import { Props } from './SearchBar.types';
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }: Props) => {

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget; 
    const query = (form.elements.namedItem('query') as HTMLInputElement).value;
    
    if (query.trim() === '') {
      toast.error('Please enter a search term', {
        position: 'top-right',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
      
      return;
    };

    onSubmit(query);
    form.reset();
  };
 
  return (
    <div>
      <header className={styles.header}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <FaSearch className={styles.icon} />
            <input
              className={styles.search}
              type="text"
              name='query'
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div>
          <button className={styles.button} type="submit">Search</button>
        </form>
      </header>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{
          top: 5,
        }}
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  );
};

export default SearchBar;