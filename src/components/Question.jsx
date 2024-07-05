import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #d0d0d0, #ffffff);
`;

const ProgressBarContainer = styled.div`
  width: 70%;
  height: 20px;
  background-color: #c0c0c0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => `calc(100/12*${props.num}%)`};
  background-color: #4caf50;
  transition: width 0.3s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

const TrainEmoji = styled.span`
  font-size: 1.2rem;
`;

const QuestionTitle = styled.p`
  font-size: 1.5rem;
  margin: 50px 10px;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid #4caf50;
  display: inline-block;
`;

const AnswerButton = styled.button`
  background-color: #ffcc00; 
  color: #333;
  border: 2px solid #333;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
  text-transform: uppercase;

  &:hover {
    background-color: #ff9900;
  }
`;

const ProgressNumber = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #333;
`;

const questions = {
  1: {
    title: '지하철역에서 일주일간 봉사활동을 하기로 한 나, 일을 알려주는 분이 엄청 낯을 가리는 것 같다.',
    type: 'EI',
    A: '어색한 분위기가 싫어서 먼저 말을 건다.',
    B: '나도 낯을 가리기 때문에 조용히 있는다.',
  },
  2: {
    title: '내가 하는 일은 승객들이 안전하게 탑승하는지 확인하는 일이다. 1시간째 가만히 서서 봉사중인 나는...',
    type: 'SN',
    A: '아무 생각이 없이 멍 때릴 뿐',
    B: '일어나지도 않을 일을 상상 중',
  },
  3: {
    title: '저 멀리서부터 열심히 달려왔는데 아깝게 지하철을 놓친 사람을 봤다.',
    type: 'TF',
    A: '열심히 달려오던데 짜증나고 힘들겠다..',
    B: '아깝다. 조금만 더 빨리 오시지',
  },
  4: {
    title: '피곤한 하루가 끝나고 집에 도착한 나, 진짜 잠이 쏟아지기 직전인데 챙겨야 할 물건들이 있다.',
    type: 'PJ',
    A: '졸려죽겠으니 내일 챙기자 귀찮아..',
    B: '귀찮지만 미리 가방에 넣어두자!',
  },
  5: {
    title: '다음날 봉사활동을 하러 온 나, 오늘은 한산한 것 같다고 말하자 직원분이 그 말을 하면 꼭 사고가 터진다고 말했다.',
    type: 'SN',
    A: '에이 설마~ 현실적으로 말이 안되니 그냥 넘긴다.',
    B: '아 괜히 말했나? 여러가지 불안한 상황이 떠오른다.',
  },
  6: {
    title: '어제와 똑같이 탑승하는 걸 지켜보고 있는데 학창시절 조금 친했던 친구가 지하철 계단을 내려오고 있다.',
    type: 'EI',
    A: '반가운 마음에 먼저 인사를 한다.',
    B: '친구가 먼저 인사하면 인사한다.',
  },
  7: {
    title: '이번엔 간단한 사무업무를 돕기로 한 나, 누구한테 일을 배울까?',
    type: 'FT',
    A: '자식처럼 오구오구 따뜻하게 대해주지만 일은 꼼꼼히 안 알려주는 분',
    B: '내 인사도 무시하며 까칠하게 굴지만 일은 확실히 알려주는 분',
  },
  8: {
    title: '사무업무 일이 생각보다 많다.',
    type: 'PJ',
    A: '내가 하고 싶은 거 먼저 시작해야겠다!',
    B: '뭐부터 할지 순서를 정해야겠다.',
  },
  9: {
    title: '직원분이 고생했다며 같이 밥을 먹자고 한다. 딱히 약속은 없다.',
    type: 'EI',
    A: '약속도 없는데 같이 먹지 뭐',
    B: '너무 어색한 사이라 약속있다고 둘러댄다.',
  },
  10: {
    title: '어느덧 봉사활동 마지막 날! 그동안 날 못마땅해했던 분이 힘들었을 텐데 고생했다고 말한다.',
    type: 'FT',
    A: '안 좋았던 감정이 싹 날아가고 기분이 좋아진다',
    B: '왜 날 못마땅해했는지 궁금하다',
  },
  11: {
    title: '드디어 봉사활동이 끝났다ㅠ 마지막 날이라 그런지 피로가 쏟아지는 상태.. 집에 어떻게 갈까?',
    type: 'PJ',
    A: '버스 한 번만 타면 되는데 1시간',
    B: '지하철 2번 환승하는데 40분',
  },
  12: {
    title: '모든 하루 일과가 끝나고 잠자리에 누운 나, 일주일간 했던 봉사활동에 대해 생각해 본다.',
    type: 'SN',
    A: '봉사시간을 채운 거에 뿌듯함을 느낀다.',
    B: '일주일간 지하철에서 있었던 일을 떠올리며 생각에 빠진다.',
  },
};

function Question({ num, setNum, updateScore }) {
  const navigate = useNavigate();

  const handleAnswer = (type, value) => {
    updateScore(type, value);

    if (num < 12) {
      setNum(num + 1);
    } else {
      navigate('/result');
    }
  };

  const currentQuestion = questions[num];

  return (
    <QuestionContainer>
      <ProgressNumber>{num}/12</ProgressNumber>
      <ProgressBarContainer>
        <ProgressBar num={num}>
          <TrainEmoji>🚇</TrainEmoji>
        </ProgressBar>
      </ProgressBarContainer>
      <QuestionTitle>{currentQuestion.title}</QuestionTitle>
      <AnswerButton onClick={() => handleAnswer(currentQuestion.type, 1)}>
        {currentQuestion.A}
      </AnswerButton>
      <AnswerButton onClick={() => handleAnswer(currentQuestion.type, 0)}>
        {currentQuestion.B}
      </AnswerButton>
    </QuestionContainer>
  );
}

export default Question;
