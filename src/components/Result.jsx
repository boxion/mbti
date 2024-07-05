import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import isfjImg from '../image/노원.png';
import isfpImg from '../image/송파.png';
import istjImg from '../image/광화문.png';
import istpImg from '../image/압구정.png';
import infjImg from '../image/용산.png';
import infpImg from '../image/합정.png';
import intjImg from '../image/논현.png';
import intpImg from '../image/잠실.png';
import esfjImg from '../image/혜화.png';
import esfpImg from '../image/명동.png';
import estjImg from '../image/노량진.png';
import estpImg from '../image/충무로.png';
import enfjImg from '../image/성수.png';
import enfpImg from '../image/시청.png';
import entjImg from '../image/서울역.png';
import entpImg from '../image/여의도.png';
import subwayBackground from '../image/지하철.jpg'; // 지하철 배경 이미지

const results = {
  ISFJ: {
    mbti: '7호선 노원',
    img: isfjImg,
  }, 
  ISFP: {
    mbti: '8호선 송파',
    img: isfpImg,
  },
  ISTJ: {
    mbti: '광화문',
    img: istjImg,
  },
  ISTP: {
    mbti: '3호선 압구정',
    img: istpImg,
  },
  INFJ: {
    mbti: '1호선 용산',
    img: infjImg,
  },
  INFP: {
    mbti: '6호선 합정',
    img: infpImg,
  },
  INTJ: {
    mbti: '7호선 논현',
    img: intjImg,
  },
  INTP: {
    mbti: '8호선 잠실',
    img: intpImg,
  },
  ESFJ: {
    mbti: '4호선 혜화',
    img: esfjImg,
  },
  ESFP: {
    mbti: '4호선 명동',
    img: esfpImg,
  },
  ESTJ: {
    mbti: '9호선 노량진',
    img: estjImg,
  },
  ESTP: {
    mbti: '3호선 충무로',
    img: estpImg,
  },
  ENFJ: {
    mbti: '2호선 성수',
    img: enfjImg,
  },
  ENFP: {
    mbti: '2호선 시청',
    img: enfpImg,
  },
  ENTJ: {
    mbti: '1호선 서울역',
    img: entjImg,
  },
  ENTP: {
    mbti: '5호선 여의도',
    img: entpImg,
  },
};

const Button = styled.button`
  background-color: #ffcc00; /* 지하철 안내판 색상 */
  color: #333;
  border: 2px solid #333;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff9900; 
    transform: scale(1.05);
  }
`;

const ResultContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url(${subwayBackground}); 
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff; 
`;

const ResultImage = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
  border: 8px solid #333; 
  border-radius: 10px; 
`;

const MbtiText = styled.p`
  font-size: 2rem;
  color: #ffcc00;
  font-weight: bold;
  text-shadow: 2px 2px #000;
`;

const ResultText = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

function Result({ score, resetState }) {
  const navigate = useNavigate();

  const getResult = () => {
    let result = '';
    result += score.EI < 2 ? 'I' : 'E';
    result += score.SN < 2 ? 'N' : 'S';
    result += score.TF < 2 ? 'F' : 'T';
    result += score.PJ < 2 ? 'J' : 'P';

    return results[result];
  };

  const result = getResult();

  const handleRestart = () => {
    resetState();
    navigate('/question');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('링크가 복사되었습니다.');
    });
  };

  return (
    <ResultContainer id="result">
       <ResultImage id="img" src={result.img} alt="결과 이미지" />
      <ResultText id="qu">결과</ResultText>
      <MbtiText id="mbti">🚇{result.mbti}🚇</MbtiText>
      <ButtonContainer className="result-btn">
        <Button onClick={handleRestart}>다시하기</Button>
        <Button onClick={handleCopyLink}>링크복사</Button>
      </ButtonContainer>
    </ResultContainer>
  );
}

export default Result;
