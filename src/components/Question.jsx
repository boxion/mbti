import qs1 from '../image/qs1.png';
import qs2 from '../image/qs2.png';
import qs3 from '../image/qs3.png';
import qs4 from '../image/qs4.png';
import qs5 from '../image/qs5.png';
import qs6 from '../image/qs6.png';
import qs7 from '../image/qs7.png';
import qs8 from '../image/qs8.png';
import qs9 from '../image/qs9.png';
import qs10 from '../image/qs10.png';
import qs11 from '../image/qs11.png';
import qs12 from '../image/qs12.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const questions = {
  1: {
    title: '아무일도 없는 나른한 오후, 친구가 놀자며 카톡을 보냈다.',
    image: qs1,
    type: 'EI',
    A: '빠르게 준비를 마치고 친구를 만나러 나간다.',
    B: '얼마만의 휴일인데... 집에서 휴식을 취한다.',
  },
  2: {
    title: '소개팅을 갔는데 분위기가 너무 어색하다.',
    image: qs2,
    type: 'EI',
    A: '어색함을 견디지 못하고 말을 먼저 꺼낸다.',
    B: '너무 어색해 미치겠지만 가만히 있는다.',
  },
  3: {
    title: '자취를 하려고 집을 구하러 다닌다.',
    image: qs3,
    type: 'SN',
    A: '방 구조, 수압, 방음 등을 꼼꼼하게 체크한다.',
    B: '방이 화사한지, 넓은지, 포근한지 등을 본다.',
  },
  4: {
    title: '바로 당장 내일이 시험인데 공부하기가 너무 싫다.',
    image: qs4,
    type: 'SN',
    A: '범위가 줄었으면 좋겠다. 이번 시험 잘 봐야 하는데..',
    B: '시험은 왜 봐야 하는거지..? 시험이 사라지는 시대도 올까?',
  },
  5: {
    title: '화났을 때 나는?',
    image: qs5,
    type: 'TF',
    A: '논리적으로 잘 말하면서 따진다.',
    B: '할말이 많지만 너무 분해서 눈물부터 난다.',
  },
  6: {
    title: '고민을 얘기하는 친구, 듣다보니 친구의 잘못인 것 같다.',
    image: qs6,
    type: 'TF',
    A: '친구의 잘못된 점을 말해준다.',
    B: '직접적으로 말하면 친구가 상처받을까봐 돌려 말한다.',
  },
  7: {
    title: '준비물을 챙겨야할 때 나는?',
    image: qs7,
    type: 'PJ',
    A: '굳이 하루전에...? 당일날 챙기면 충분하다!',
    B: '며칠 전에 미리 챙겨 준비해둔다!',
  },
  8: {
    title: '여행 계획을 짤 때 나는?',
    image: qs8,
    type: 'PJ',
    A: '그때 그때 가고 싶은 곳 가고 먹고 싶은 것 먹는 것이 낭만이지!',
    B: '버스 시간, 가격, 메뉴까지 미리 다 정해서 계획을 짜둔다.',
  },
  9: {
    title: '곧 워터밤 페스티벌이 열린다고 한다.',
    image: qs9,
    type: 'EI',
    A: '아껴뒀던 수영복과 물총을 꺼내 페스티벌을 즐기러 간다.',
    B: '집에서도 충분히 즐길 수 있어! 유튜브로 시청한다.',
  },
  10: {
    title: '비행기를 탔는데 갑자기 흔들린다.',
    image: qs10,
    type: 'SN',
    A: '최대한 침착하며 안전벨트를 꽉 매고 주위를 살핀다.',
    B: '비행기가 갑자기 추락하면 어쩌지?? 혹시 누가 테러를 일으킨 건 아닐까??',
  },
  11: {
    title: '친구가 갑자기 차 사고가 났다고 한다.',
    image: qs11,
    type: 'TF',
    A: '헐 보험은 들어놨지?? 보험사에서는 뭐래??',
    B: '헐 몸은 괜찮아?? 다친데는 없고...?',
  },
  12: {
    title: '오랜만에 밖에서 외식을 하려고 한다.',
    image: qs12,
    type: 'PJ',
    A: '같은 곳은 지겨워! 새로운 곳을 탐방한다!',
    B: '매번 가던 곳으로! 편안하고 맛있어서 좋다.',
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
    <div className="content" id="question">
      <p id="pgrNum">{num}/12</p>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: `calc(100/12*${num}%)` }}
        ></div>
      </div>
      <p id="title">{currentQuestion.title}</p>
      <div className="question-image-container">
        {currentQuestion.image && (
          <img src={currentQuestion.image} className="question-image" />
        )}
      </div>
      <button
        className="btn btn-warning"
        onClick={() => handleAnswer(currentQuestion.type, 1)}
      >
        {currentQuestion.A}
      </button>
      <button
        className="btn btn-warning mt-3"
        onClick={() => handleAnswer(currentQuestion.type, 0)}
      >
        {currentQuestion.A}
      </button>
    </div>
  );
}

export default Question;