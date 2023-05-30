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
  useSelectedSetAction,
  useDataContext,
  useSearchDataState,
} from "../../context/DataContext";
import styles from "../../styles/Home.module.css";
import { Bar, Radar } from "react-chartjs-2";
import { useEffect, useRef } from "react";
import { CustomLink } from "../../components/CustomLink";
import Image from "next/image";

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
import { Carousel } from "../../components/Carousel";

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

const SetDetail: NextPage = () => {
  const { getSelectedSetData, getPreviousSetData, getNextSetData } =
    useSelectedSetAction();
  const router = useRouter();
  const id = Number(router.query.id);
  const selectedData = getSelectedSetData(id);
  const dataState = useDataContext().state;
  const chipData = useTagState().filter((item) =>
    selectedData?.tags.includes(item.chipId)
  );
  const searchData = useSearchDataState();

  const data = {
    labels: ["난이도", "리드비율"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#FF547F", "#7B42AD"],
        barThickness: 25,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: [false, "end"],
        grouped: false,
        stack: "stack1",
      },
      {
        data: [, 80],
        backgroundColor: ["#FF547F", "#FF90AD"],
        barThickness: 25,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        grouped: false,
        stack: "stack1",
      },
      {
        data: [
          [-3, 103],
          [-3, 103],
        ],
        backgroundColor: ["#EDEDED", "#EDEDED"],
        barThickness: 35,
        borderColor: "red",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        grouped: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    layout: {
      padding: 40,
    },
    indexAxis: "x",
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      customCanvasBackgroundColor: {
        color: "lightGreen",
      },
      title: {
        display: false,
      },
      legend: {
        labels: {
          filter: function (legendItem, chartData) {
            return false;
          },
          font: {
            size: 18,
            family: "Nanum Square Neo",
          },
        },
        maxHeight: 30,
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
    events: [],
  };

  const previousData = getPreviousSetData(id);
  const previousCard: CardProps = {
    name: previousData?.name,
    tags: previousData?.tags,
    id: previousData?.id,
  };
  const nextData = getNextSetData(id);
  const nextCard: CardProps = {
    name: nextData?.name,
    tags: nextData?.tags,
    id: nextData?.id,
  };

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div
            style={{
              cursor: "pointer",
              alignSelf: "start",
              marginLeft: "20px",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            <Image src="/assets/main.svg" alt="" width={60} height={60}></Image>
          </div>
          <h1 style={{ margin: "2rem 0rem" }}> {selectedData?.name} </h1>

          <h2 style={{ margin: "2rem 0rem" }}> 이런 분들에게 추천! </h2>
          <ul style={{ lineHeight: "110%", wordSpacing: "2px" }}>
            {selectedData?.content?.map((v) => {
              return (
                <li key={v} style={{ textAlign: "justify", margin: "0.5rem" }}>
                  {v}
                </li>
              );
            })}
          </ul>

          <h2 style={{ margin: "2rem 0rem" }}> 섹스 플로우 </h2>
          <h2 style={{ margin: "2rem 0rem" }}> 태그 </h2>
          <Chips chipData={chipData} isReadonly={true}></Chips>
          <Carousel width="450px" height="80px" />
          <h1> Tips </h1>
          <ul style={{ lineHeight: "110%", wordSpacing: "2px" }}>
            {selectedData?.content?.map((v) => {
              return (
                <li key={v} style={{ textAlign: "justify", margin: "0.5rem" }}>
                  {v}
                </li>
              );
            })}
          </ul>
          <h2 style={{ margin: "2rem 0rem" }}> 세트 점수 </h2>
          <Bar data={data} options={options} width={200} height={200}></Bar>
          <h2 style={{ margin: "2rem 0rem" }}> 이 세트에서 쓰인 체위 목록 </h2>

          <Carousel width="450px" height="80px" />
          <div style={{ marginBottom: "0.5rem" }}></div>

          <Button
            labelText="공유하기"
            height={80}
            maxWidth={250}
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
            height={80}
            maxWidth={250}
            padding={20}
            backgroundColor="#7B42AD"
            color="white"
            onClick={() => {
              var randomId = parseInt((Math.random() * 146).toString());
              randomId = dataState.some((v) => v.id == randomId) ? randomId : 1;
              router.push("/detail/" + randomId);
            }}
          ></Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <CustomLink href={"/detail/" + previousCard.id}>
              <h2
                style={{
                  textAlign: "left",
                  marginLeft: "30px",
                  textDecorationLine: "underline",
                  textUnderlineOffset: "5px",
                }}
              >
                ← 이전
              </h2>
              <CardContainer cardData={[previousCard]}></CardContainer>
            </CustomLink>
            <CustomLink href={"/detail/" + nextCard.id}>
              <h2
                style={{
                  textAlign: "right",
                  paddingRight: "20px",
                  textDecorationLine: "underline",
                  textUnderlineOffset: "5px",
                }}
              >
                다음 →
              </h2>
              <CardContainer cardData={[nextCard]}></CardContainer>
            </CustomLink>
          </div>

          <Button
            labelText="메인 화면으로 "
            height={80}
            maxWidth={250}
            padding={20}
            backgroundColor="#32154B"
            color="white"
            onClick={() => router.push("/")}
          ></Button>
        </main>
      </div>
    </>
  );
};

export default SetDetail;
