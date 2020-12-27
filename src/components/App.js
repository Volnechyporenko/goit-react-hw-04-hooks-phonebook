import Section from './Section/Section';
import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Search from './Search/Search';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const parseContacts = JSON.parse(contacts);
      setContacts(parseContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = newContact => {
    const existedContact = contacts.find(
      contact => contact.name === newContact.name,
    );
    if (existedContact) {
      alert(`${existedContact.name} is already in contacts`);
      return;
    }
    setContacts(contacts.concat([newContact]));
  };

  const onSearch = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () =>
    contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });

  const onDelete = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <Section title="Phonebook">
        <Form onSubmit={onSubmit} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Search onChange={onSearch} filter={filter} />
            {filteredContacts.length > 0 ? (
              <ContactList contacts={filteredContacts} onDelete={onDelete} />
            ) : (
              <span>Contacts is not found</span>
            )}
          </>
        )}
        {!contacts.length && <span>No contacts yet. Add contacts</span>}
      </Section>
    </div>
  );
};

export default App;
