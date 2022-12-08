import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../components/Button/Button";
import { Toggle } from "../components/Button/ToggleButton";
import { Card } from "../components/Card";
import { CardContainer } from "../components/CardContainer";
import { Chips } from "../components/ChipContainer";
import DivideLine from "../components/DivideLine";
import { useSelectedDataContext, useTagState } from "../context/DataContext";
import styles from "../styles/Home.module.css";
import { Bar, Radar } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  ChartOptions,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);
const DetailShow: NextPage = () => {
  const cardData = useSelectedDataContext();
  const chipData = useTagState().filter((item) =>
    cardData.state.card.tags.includes(item.label)
  );
  const router = useRouter();

  const data = {
    labels: ["파트너 무게 부담", "상체근력", "하체근력", "유연성", "하체근력"],
    datasets: [
      {
        label: "여자",
        data: [65, 59, 90, 81, 56],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "남자",
        data: [28, 48, 40, 19, 96],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    responsive: true,
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        pointStyle: "star",
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Chart.js Radar Skip Points Chart",
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 10,
        suggestedMax: 100,
      },
    },
  };

  const barOption: ChartOptions<"bar"> = {
    indexAxis: "y",
  };

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/">
            <h2
              style={{ cursor: "pointer", alignSelf: "start" }}
              onClick={() => {
                router.back();
              }}
            >
              이전 페이지로
            </h2>
          </Link>
          <h1> {cardData.state.card.title} </h1>
          <i>
            <h2 style={{}}> 설명 </h2>
          </i>

          <Card
            {...cardData.state.card}
            width="320px"
            height="320px"
            title=""
          ></Card>

          <Chips chipData={chipData} isReadonly={true}></Chips>
          <h1> Tips </h1>
          <h3>
            <li>설명 1</li>
          </h3>
          <h3>
            <li>설명 2</li>
          </h3>
          <DivideLine />
          <h1> 성별 선택 </h1>
          <Toggle></Toggle>
          <DivideLine />
          <h1> 난이도 </h1>
          <h1> 총점 : 100(매우 어려움) </h1>
          <Radar data={data} width={300} height={300} options={options}></Radar>
          <DivideLine />
          <h1> 쾌감도 </h1>
          <h1> 총점 : 100(매우 어려움) </h1>
          <Bar data={data} width={300} height={300} options={barOption}></Bar>
          <DivideLine />
          <div></div>

          <Link href="/">
            <Button
              labelText="공유하기"
              height={120}
              width={368}
              padding={20}
              backgroundColor="#FF90AD"
              borderColor="#7B42AD"
              color="white"
            ></Button>
          </Link>
          <Link href="/">
            <Button
              labelText="랜덤 뽑기"
              height={120}
              width={368}
              padding={20}
              backgroundColor="#7B42AD"
              color="white"
            ></Button>
          </Link>
          <div>
            <CardContainer cardData={[cardData.state.card]}></CardContainer>
            <CardContainer cardData={[cardData.state.card]}></CardContainer>
          </div>

          <Link href="/">
            <Button
              labelText="메인 화면으로 "
              height={120}
              width={368}
              padding={20}
              backgroundColor="#32154B"
              color="white"
            ></Button>
          </Link>
        </main>

        <footer className={styles.footer}>Footer 공간</footer>
      </div>
    </>
  );
};

export default DetailShow;
