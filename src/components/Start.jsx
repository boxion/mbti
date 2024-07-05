import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bannerImage from '../image/지하철프사.png';
import subwayBackground from '../image/지하철.jpg';

const StartContainer = styled.div`
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
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 2rem;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px 1px #ffffff;
  background-color: rgba(255, 193, 7);
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  border: 2px solid #333;
`;

const BannerImage = styled.img`
  width: 60%;
  max-width: 500px;
  height: auto;
  border-radius: 50%;
`;

const StartButton = styled.button`
  background-color: #ffcc00; 
  color: #333;
  margin: 5px;
  border: 2px solid #333;
  padding: 10px 30px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff9900; 
    transform: scale(1.05);
  }
`;

const Maker = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-top: 20px;
`;

function Start() {
  const navigate = useNavigate();

  return (
    <StartContainer>
      <Box>
        <Title>지하철역 성격 테스트</Title>
        <BannerImage src={bannerImage} alt="지하철프사" />
        <StartButton onClick={() => navigate('/question')}>
          테스트 시작하기
        </StartButton>
        <Maker>제작자: 박시현</Maker>
      </Box>
    </StartContainer>
  );
}

export default Start;
