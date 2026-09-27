// https://www.npmjs.com/package/react-paginate

const GetContactList = () => {
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