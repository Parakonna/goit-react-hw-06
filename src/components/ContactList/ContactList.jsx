import Contact from "../Contact/Contact";
import css from './ContactList.module.css'


const ContactList = ({filteredUsers, onDeleteProfile}) => {
  return (
  <ul className={css.list}>{filteredUsers.map((profileItem) => {
    return (
      <li key={profileItem.id} className={css.item}>
        <Contact 
              id={profileItem.id}
              name={profileItem.name}
              number={profileItem.number}
              onDeleteProfile={onDeleteProfile}
        />
      </li>
      );
  })}
      </ul>
  );
}

export default ContactList