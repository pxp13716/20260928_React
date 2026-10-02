import { useEffect, useState } from "react";
import ContactItem from '@components/contacts/ContactItem'
import { BeatLoader } from 'react-spinners'
// api
import { getContactListAction } from '@api/contacts'

function GetContactList() {
  const [contactList, setContactList] = useState(
    { pageno: '', pagesize: '', totalcount: '', contacts: [] }
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getContactList = async () => {
    setLoading(true);
    try {
      // axios 내부 속성 => create => default 
      const resp = await getContactListAction(1, 5);
      setContactList(resp.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint 경고를 회피할 목적
    const fetchContact = async () => {
      await getContactList(1, 5);
    }
    fetchContact();
  }, []);

  if (loading) return <BeatLoader color="red" />
  if (error) return <h3>점검중... {error.message}</h3>
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {contactList.contacts.map((contact) => <ContactItem key={contact.no} contact={contact}></ContactItem>)}
        </tbody>
      </table>
    </div>
  );
};
export default GetContactList;
