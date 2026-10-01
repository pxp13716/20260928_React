/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { product } from './data/product.jsx'
import { useLocation, useSearchParams } from "react-router";
import { useMemo } from "react";
const baseURL = 'http://localhost:8000';

function SearchParams() {
  const [search, setSearch] = useSearchParams();
  const { pathname, search: locSearch, hash } = useLocation();
  // console.log(search);

  /*
  useEffect(() => {
    setSearch({ id: 1006, name: '홍길동', no: 50 })
  }, [setSearch])
  */

  const data = useMemo(() => {
    if (!search.get('id')) return null;
    return product.find((item) => item.id === Number(search.get('id')));
  }, [search]);

  const [contact, setContact] = useState({ id: '', name: '', tel: '', address: '', photo: '' });
  useEffect(() => {
    if (!search.get('no')) return;

    fetch(`${baseURL}/contacts/${search.get('no')}`)
      .then((resp) => {
        if (!resp.ok) throw new Error('네트워크 응답 오류 발생...');
        return resp.json();
      })
      .then((data) => {
        setContact(data);
      })
      .catch((err) => console.error(err))

    return () => {
      setContact({ id: '', name: '', tel: '', address: '', photo: '' })
    }
  }, [search])


  return (
    <div>
      <h3>SEARCHPARAMS</h3>

      <div className="mb-3">
        PATHNAME: {decodeURIComponent(pathname)} <br />
        SEARCH: {decodeURIComponent(locSearch)} <br />
        HASH: {decodeURIComponent(hash)} <br />
      </div>

      <div className="mb-3">
        ID: {data?.id}<br />
        NAME: {data?.name} <br />
        CATEGORY: {data?.category} <br />
      </div>

      <div className="mb-3">
        NO: {contact?.no} <br />
        NAME: {contact?.name} <br />
        ADDRESS: {contact?.address} <br />
      </div>
    </div>
  );
};
export default SearchParams;
