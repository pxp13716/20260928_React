import React from 'react';
import { useNavigate } from 'react-router';

const ALLOWED_EXTENSIONS = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB 제한

function PhotoUpdate() {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ width: '50rem' }}>
      <div className="card-body">
        <h3 className="heading">사진 변경</h3>
        <p className="card-text">변경 할 사진을 선택해 주세요</p>

        <form method="post" encType="multipart/form-data">
          <div>
            현재 사진: <br />
            <img className="thumb" width="100" alt="현재 사진" />
          </div>
          <br />

          <div>
            사진 파일 선택: <br />
            <input type="file" name="photo" className="form-control" />
          </div>
          <div>
            <div>&nbsp;</div>
            <input type="button" className="btn btn-outline-primary" value="취소" onClick={() => navigate('/list')} />{' '}
            <input type="submit" className="btn btn-outline-danger" value="변경" />{' '}
          </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(PhotoUpdate);
