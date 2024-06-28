import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../image/짱구배너.png';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="content" id="start">
      <p>나와 닮은 짱구 캐릭터 테스트</p>
      <img src={bannerImage} alt="짱구단체" className="img1" />
      <p id="maker">제작자: 박시현</p>
      <p id="require">
        ※단순히 재미로 제작한 것이며, 오수나 훈이가 나와도 화내지 말아주세요!
      </p>
      <button className="btn btn-warning" onClick={() => navigate('/question')}>
        떡잎마을로 출발~
      </button>
    </div>
  );
}

export default Start;
