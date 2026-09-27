import { useEffect, useState } from "react";

import { product } from './data/product.jsx'
const baseURL = 'http://localhost:8000';

function SearchParams() {
  return (
    <div>
      <h3>SEARCHPARAMS</h3>

      <div className="mb-3">
        PATHNAME: <br />
        SEARCH: <br />
        HASH: <br />
      </div>

      <div className="mb-3">
        ID: <br />
        NAME: <br />
        CATEGORY: <br />
      </div>

      <div className="mb-3">
        ID: <br />
        NAME: <br />
        ADDRESS: <br />
      </div>
    </div>
  );
};
export default SearchParams;
