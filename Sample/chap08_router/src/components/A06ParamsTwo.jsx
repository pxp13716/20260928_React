import { useEffect, useMemo, useState } from "react";

import { product } from './data/product.jsx'
const baseURL = 'http://localhost:8000';

function ParamsTwo() {
  return (
    <div className="mb-3">
      <h3>PARAMETER TWO</h3>

      <div className="mb-3">
        ID: <br />
        NAME: <br />
        LOCATION: <br />
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
export default ParamsTwo;
