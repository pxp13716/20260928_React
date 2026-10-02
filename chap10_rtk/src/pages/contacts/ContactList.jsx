// https://www.npmjs.com/package/react-paginate

import { useDispatch, useSelector } from "react-redux"
import { DNA } from 'react-loader-spinner'

import ContactItem from '@components/contact/ContactItem'
import { fetchContactListAction } from '@stores/contextSlice'
import { useEffect } from "react"

const GetContactList = () => {
  const { contactList, loading, error } = useSelector((store) => store.contactStore);
  const dispatch = useDispatch();

  /*
    1. 상태값을 store로 부터 가져온다 
    2. 가져온 상태값으로 View 완성
    3. 상태를 변경하기 위해 Action 호출
    4. 변경된 상태값 참조 => 화면 갱신
  */
  useEffect(() => {
    dispatch(fetchContactListAction({ pageno: 1, pagesize: 5 }))
  }, [dispatch])

  if (loading) return <DNA></DNA>
  if (error) return <h3>점검중... {error}</h3>
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {contactList.contacts.map((contact) => <ContactItem key={contact.no} contact={contact}></ContactItem>)}
        </tbody>
      </table>

      <div className="d-flex justify-content-center mt-3">

      </div>

      <button className="btn btn-outline-primary btn-sm">ADD</button>
    </div>
  )
}

export default GetContactList

/*
<div className="d-flex justify-content-center mt-3">
  {Number(contactList.totalcount) > 0 && (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPage}
      forcePage={Number(contactList.pageno || 1) - 1}
      renderOnZeroPageCount={null}

      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"

    // containerClassName="custom-pagination"
    // pageClassName="custom-page-item"
    // pageLinkClassName="custom-page-link"
    // previousClassName="custom-page-item"
    // previousLinkClassName="custom-page-link"
    // nextClassName="custom-page-item"
    // nextLinkClassName="custom-page-link"
    // breakClassName="custom-page-item"
    // breakLinkClassName="custom-page-link custom-break-link"
    // activeClassName="custom-active"
    />
  )}
</div>
*/