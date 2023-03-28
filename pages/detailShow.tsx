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
import { useEffect, useRef } from "react";

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
  const selectedData = useSelectedDataContext();
  const chipData = useTagState().filter((item) =>
    selectedData.state.card.tags.includes(item.label)
  );
  const router = useRouter();

  const data = {
    labels: ["파트너 무게 부담", "상체근력", "하체근력", "유연성", "하체근력"],
    datasets: [
      {
        label: "종합",
        data: [50, 50, 55, 41, 78],
        fill: true,
        backgroundColor: "rgba(235, 148, 235, 0.2)",
        borderColor: "rgba(59, 50, 50, 0.692)",
        pointBackgroundColor: "rgb(247, 73, 131)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "남자",
        data: [28, 48, 40, 19, 96],
        fill: true,
        backgroundColor: "rgba(198, 214, 254, 0.4)",
        borderColor: "#7B42AD",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
      {
        label: "여자",
        data: [65, 59, 90, 81, 56],
        fill: true,
        backgroundColor: "rgba(252, 226, 234, 0.2)",
        borderColor: "#F3B4C5",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const chartRef = useRef<Chart<"radar">>();
  useEffect(() => {
    chartRef.current?.hide(0);
    chartRef.current?.hide(1);
    chartRef.current?.hide(2);
    chartRef.current?.show(selectedData.state.toggledIndex);
  }, [selectedData.state]);

  const options: ChartOptions<"radar"> = {
    responsive: true,
    elements: {
      line: {
        borderWidth: 4,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        labels: {
          font: {
            size: 18,
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        ticks: {
          count: 2,
          display: false,
        },
        pointLabels: {
          font: {
            size: 18,
          },
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
          <h1> {selectedData.state.card.title} </h1>
          <i>
            <h2 style={{}}> 설명 </h2>
          </i>

          <Card
            {...selectedData.state.card}
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
          <h1>
            총점 : <span style={{ fontSize: "3em" }}>80</span>(어려움){" "}
          </h1>
          <Radar
            ref={chartRef}
            data={data}
            width={300}
            height={300}
            options={options}
          ></Radar>
          <DivideLine />
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                top: "50%",
                position: "absolute",
                zIndex: 10,
              }}
            >
              <h2>업데이트 예정</h2>
            </div>
            <div
              style={{
                opacity: "0.1",
              }}
            >
              <h1> 쾌감도 </h1>
              <h1> 총점 : 50(중간 쾌감) / 70(강한 쾌감) </h1>
              <Bar
                data={data}
                width={300}
                height={300}
                options={barOption}
              ></Bar>
              <DivideLine />
            </div>
          </div>
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
          <div style={{ display: "flex" }}>
            <div>
              <Link href="/detailShow">
                <h2 style={{ textAlign: "left", marginLeft: "30px" }}>
                  ← 이전
                </h2>
              </Link>
              <CardContainer
                cardData={[selectedData.state.card]}
              ></CardContainer>
            </div>
            <div>
              <Link href="/detailShow">
                <h2 style={{ textAlign: "right", marginRight: "40px" }}>
                  다음 →
                </h2>
              </Link>
              <CardContainer
                cardData={[selectedData.state.card]}
              ></CardContainer>
            </div>
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
