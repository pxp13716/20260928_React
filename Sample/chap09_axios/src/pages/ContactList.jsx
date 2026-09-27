import { useState } from "react";

function GetContactList() {
  const [contactList, setContactList] = useState(
    { pageno: '', pagesize: '', totalcount: '', contacts: [] }
  );
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
        <tbody></tbody>
      </table>
    </div>
  );
};
export default GetContactList;
