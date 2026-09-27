import { useState } from "react";

function A09Immer() {
  const [data, setData] = useState({
    name: '',
    num: 0,
    info: {
      address: '',
      arr: [10, 20, 30],
      etc: { one: '', two: '' },
    },
  });

  return (
    <div className="mb-5">
      <h3>A09 Immer</h3>

      <div className="mb-3">
        Name: {data.name}<br />
        Address: {data.info.address}<br />
        One: {data.info.etc.one}<br />

        Ary:{' '}
        {data.info.arr.map((item, i) => (
          <span key={i}>{item} </span>
        ))}
      </div>

      <div className="mb-3">
        <div>
          <button>Name</button>
          <button>Address</button>
          <button>One</button>
          <button>ADD</button>
        </div>

        <div>
          <button>Name</button>
          <button>Address</button>
          <button>One</button>

          <button>ADD</button>
          <button>UPDATE</button>
          <button>DELETE</button>
        </div>
      </div>
    </div>
  );
}
export default A09Immer;
