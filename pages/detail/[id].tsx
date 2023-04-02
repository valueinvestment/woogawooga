import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../../components/Button/Button";
import { Toggle } from "../../components/Button/ToggleButton";
import { Card } from "../../components/Card";
import { CardContainer } from "../../components/CardContainer";
import { Chips } from "../../components/ChipContainer";
import DivideLine from "../../components/DivideLine";
import {
  CardProps,
  useTagState,
  useSelectedAction,
  useDataContext,
  useSearchDataState,
} from "../../context/DataContext";
import styles from "../../styles/Home.module.css";
import { Bar, Radar } from "react-chartjs-2";
import { useEffect, useRef } from "react";
import { CustomLink } from "../../components/CustomLink";

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
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";

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

const Detail: NextPage = () => {
  const { getSelectedData, getPreviousData, getNextData } = useSelectedAction();
  const router = useRouter();
  const id = Number(router.query.id);
  const selectedData = getSelectedData(id);
  const dataState = useDataContext().state;
  const chipData = useTagState().filter((item) =>
    selectedData?.tags.includes(item.chipId)
  );
  const searchData = useSearchDataState();

  const data = {
    labels: ["파트너 무게 부담", "상체근력", "하체근력", "유연성", "균형감각"],
    datasets: [
      {
        label: "남자",
        data: [
          selectedData?.["무게부담(남)"],
          selectedData?.["상체힘(남)"],
          selectedData?.["하체힘(남)"],
          selectedData?.["유연성(남)"],
          selectedData?.["균형감각(남)"],
        ],
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
        data: [
          selectedData?.["무게부담(여)"],
          selectedData?.["상체힘(여)"],
          selectedData?.["하체힘(여)"],
          selectedData?.["유연성(여)"],
          selectedData?.["균형감각(여)"],
        ],
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

  const chartRef =
    useRef<ChartJSOrUndefined<"radar", (number | undefined)[], unknown>>();
  useEffect(() => {
    if (searchData.toggledIndex == 0) {
      chartRef.current?.show(0);
      chartRef.current?.show(1);
    } else if (searchData.toggledIndex == 1) {
      chartRef.current?.show(0);
      chartRef.current?.hide(1);
    } else {
      chartRef.current?.hide(0);
      chartRef.current?.show(1);
    }
  }, [searchData.toggledIndex]);

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

  const previousData = getPreviousData(id);
  const previousCard: CardProps = {
    name: previousData?.name,
    tags: previousData?.tags,
    id: previousData?.id,
  };
  const nextData = getNextData(id);
  const nextCard: CardProps = {
    name: nextData?.name,
    tags: nextData?.tags,
    id: nextData?.id,
  };

  let score =
    (searchData.toggledIndex == 0
      ? selectedData?.["종합난이도"]
      : searchData.toggledIndex == 1
      ? selectedData?.["난이도(남)"]
      : selectedData?.["난이도(여)"]) ?? 0;

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2
            style={{ cursor: "pointer", alignSelf: "start" }}
            onClick={() => {
              router.back();
            }}
          >
            이전 페이지로
          </h2>
          <h1 style={{ margin: "0.4rem 0rem" }}> {selectedData?.name} </h1>
          <p style={{}}> {selectedData?.type == 0 ? "기본형" : "파생형"} </p>

          <Card
            {...selectedData}
            tags={selectedData?.tags}
            width="320px"
            height="320px"
            name=""
          ></Card>

          <Chips chipData={chipData} isReadonly={true}></Chips>
          <h1> Tips </h1>
          {selectedData?.["텍스트"].map((v) => {
            return (
              <li key={v} style={{ textAlign: "justify", margin: "0.5rem" }}>
                {v}
              </li>
            );
          })}

          <DivideLine />
          <h1> 성별 선택 </h1>
          <Toggle></Toggle>
          <DivideLine />
          <h1> 난이도 </h1>
          <h1>
            총점 : <span style={{ fontSize: "3em" }}>{score}</span>(
            {score > 90
              ? "이거 가능?"
              : score > 70
              ? "전문가"
              : score > 50
              ? "어려움"
              : score > 20
              ? "보통"
              : "쉬움"}
            )
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
                height: "100px",
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
              <Bar data={data} options={barOption}></Bar>
              <DivideLine />
            </div>
          </div>
          <div></div>

          <Button
            labelText="공유하기"
            height={120}
            width={368}
            padding={20}
            backgroundColor="#FF90AD"
            borderColor="#7B42AD"
            color="white"
            onClick={() => {
              const links = "oogaooga.app" + router.asPath;
              alert("주소 (" + links + ")가 클립보드에 복사되었습니다!");
              navigator.clipboard.writeText(links);
            }}
          ></Button>
          <Button
            labelText="랜덤 뽑기"
            height={120}
            width={368}
            padding={20}
            backgroundColor="#7B42AD"
            color="white"
            onClick={() =>
              router.push(
                "/detail/" + parseInt((Math.random() * 146).toString())
              )
            }
          ></Button>
          <div style={{ display: "flex" }}>
            <div>
              <h2 style={{ textAlign: "left", marginLeft: "30px" }}>← 이전</h2>
              <CardContainer cardData={[previousCard]}></CardContainer>
            </div>
            <div>
              <h2
                style={{
                  textAlign: "right",
                  marginRight: "30px",
                  width: "100%",
                }}
              >
                다음 →
              </h2>
              <CardContainer cardData={[nextCard]}></CardContainer>
            </div>
          </div>

          <CustomLink href="/">
            <Button
              labelText="메인 화면으로 "
              height={120}
              width={368}
              padding={20}
              backgroundColor="#32154B"
              color="white"
            ></Button>
          </CustomLink>
        </main>

        <footer className={styles.footer}>Footer 공간</footer>
      </div>
    </>
  );
};

export default Detail;
