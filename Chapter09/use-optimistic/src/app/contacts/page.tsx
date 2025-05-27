import { ContactItem } from '@/components/ContactItem';
import { getContacts } from '@/data/getContacts';

export default async function Posts() {
  const contacts = await getContacts();

  return (
    <main>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(
          ({
            id,
            name,
            email,
            reason,
            notes,
            done,
          }) => (
            <li key={id}>
              <ContactItem
                id={id}
                name={name}
                email={email}
                reason={reason}
                notes={notes}
                done={done ? true : false}
              />
            </li>
          ),
        )}
      </ul>
    </main>
  );
}
