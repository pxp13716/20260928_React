import { memo } from 'react'
import { Link } from 'react-router'
function ContactItem({ contact }) {
  return (
    <tr>
      <td>{contact.no}</td>
      <td><Link to={`/contact/${contact.no}`}>{contact.name}</Link></td>
      <td>{contact.tel}</td>
      <td>{contact.address}</td>
    </tr>
  )
}

export default memo(ContactItem)
