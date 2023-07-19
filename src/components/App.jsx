import React from 'react';
import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div className={s.container}>
      <section title="Phonebook" className={s.section}>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>

      <section title="Contacts" className={s.section}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
};

export default App;