import React from 'react'
import { Link } from 'react-router'

function ContactItem({ contact }) {
  return (
    <tr>
      <td>{contact.no}</td>
      <td>
        <Link to={`/contact/${contact.no}`}>{contact.name}</Link>
      </td>
      <td>{contact.tel}</td>
      <td>{contact.address}</td>
      <td>
        <img src={contact.photo} alt='photo' width="70" />
      </td>
    </tr>
  )
}

export default React.memo(ContactItem)