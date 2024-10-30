import { useEffect, useState } from "react";

import contactsData from "./data/contactsData.json";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(stringifiedUsers) ?? contactsData;

    return parsedUsers;
  }); 
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const stringifiedUsers = JSON.stringify(users);
    localStorage.setItem("users", stringifiedUsers);
  }, [users]);

  const onAddProfile = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeleteProfile = (profileId) => {
    const updatedUsers = users.filter((user) => user.id !== profileId);
    setUsers(updatedUsers);
  };


  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      <h1 style={{marginLeft: "40px"}}>Phonebook</h1>
      <ContactForm onAddProfile={onAddProfile} />
      <SearchBox filter={filter}
        setFilter={setFilter} />
      <ContactList filteredUsers={filteredUsers}
        onDeleteProfile={onDeleteProfile}
      />
    </div>
  );
}


export default App