import { useCallback, useState } from 'react'

function A04Event() {
  const [data, setData] = useState({
    name: 'Adam',
    sports: 'baseball',
    isChecked: true,
    language: ['React'],
    baseball: '한화',
  });

  const changeName = useCallback((evt) => {
    const newData = { ...data, name: evt.target.value };
    setData(newData);
  }, [data]);     // data 의존관계 때문에 useCallback을 기술하나 마나.

  const changeRadio = (evt) => {
    const newData = { ...data, sports: evt.target.value }
    setData(newData);
  }
  const changeCheck = () => setData({ ...data, isChecked: !data.isChecked });

  const changeLanguage = (evt) => {
    const value = evt.target.value;

    if (!data.language.includes(value)) {
      const newLang = [...data.language];
      newLang.push(value);
      const newData = { ...data, language: newLang };
      setData(newData);
    } else {
      const newLang = data.language.filter((item) => {
        if (item !== value) return true;       // newLang에 item을 추가
        else return false;                    // newLang에 item을 반환하지 않고 skip
      })
      const newData = { ...data, language: newLang };
      setData(newData);
    }
  }

  const changeSelect = (evt) => setData({ ...data, baseball: evt.target.value });

  const sendData = (evt) => {
    // 빌드시 추가되는 내장 자바스크립트를 실행하지 않도록 처리
    evt.preventDefault();

    // 서버로 전송 로직 구현
    // client => server로 전송. 직렬화(JSON Data)
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // server => click. JSON Data => JavaScript 객체로 변환
    const jsData = JSON.parse(jsonData);
    console.log(jsData)
  };

  return (
    <div className="mb-5">
      <h3>A04Form / Event</h3>

      {/* 
        React 19 버전의 useFormStatus() 을 이용하면 일괄 데이터를 뽑아올 수 있다 
        react-hook-form 라이브러리를 이용하면 제약조건에 따른 표시, validate, 전송을 한번에 구현 가능
      */}
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: {data.name}</label>
          <input type="text" id="name" name="name" className="form-control" minLength={3} maxLength={10}
            value={data.name} onChange={changeName} />
        </div>

        <div className="mb-3">
          RadioButton: {data.sports}<br />
          <div className="form-check">
            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
              onChange={changeRadio} defaultChecked={data.sports === 'baseball'} />
            <label htmlFor="baseball" className="form-check-label">야구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
              onChange={changeRadio} defaultChecked={data.sports === 'soccer'} />
            <label htmlFor="soccer" className="form-check-label">축구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
              onChange={changeRadio} defaultChecked={data.sports === 'basketball'} />
            <label htmlFor="basketball" className="form-check-label">농구</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
          <div className="form-check">
            <input type="checkbox" id="isChecked" name="isChecked" className="form-check-input"
              onChange={changeCheck} defaultChecked={data.isChecked} />
            <label htmlFor="isChecked" className="form-check-label">동의</label>
          </div>
        </div>

        <div className="mb-3">
          CheckBox: {data.language}<br />
          <div className="form-check">
            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
              onChange={changeLanguage} defaultChecked={data.language.includes('Angular')} />
            <label htmlFor="angular" className="form-check-label">앵귤러</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
              onChange={changeLanguage} defaultChecked={data.language.includes('React')} />
            <label htmlFor="react" className="form-check-label">리엑트</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
              onChange={changeLanguage} defaultChecked={data.language.includes('Vue')} />
            <label htmlFor="vue" className="form-check-label">뷰</label>
          </div>
        </div>

        <div className="mb-3">
          SelectBox: {data.baseball}<br />
          <select name="baseball" className="form-control mb-2"
            onChange={changeSelect} value={data.baseball}>
            <option>NC</option>
            <option>두산</option>
            <option>한화</option>
            <option>엘지</option>
            <option>기아</option>
            <option>삼성</option>
            <option>SSG</option>
          </select>
        </div>

        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

export default A04Event;
