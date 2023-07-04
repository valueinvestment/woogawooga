import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../../components/Button/Button";
import { Toggle } from "../../components/Button/ToggleButton";
import { Card } from "../../components/Card";
import { CardContainer } from "../../components/CardContainer";
import { Chips } from "../../components/ChipContainer";
import DivideLine from "../../components/DivideLine";
import { DetailProps, useTagState, useSelectedSetAction, useDataContext, useSearchDataState, useSelectedAction, SetProps } from "../../context/DataContext";
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
  ChartData,
} from "chart.js";
import { DivideCarousel } from "../../components/DivideCarousel";
import { ImageButton } from "../../components/Button/ImageButton";

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
  // ChartDataLabels
);
const SetDetail: NextPage = () => {
  const { getSelectedSetData, getPreviousSetData, getNextSetData } = useSelectedSetAction();
  const { getSelectedData } = useSelectedAction();
  const router = useRouter();
  const id = Number(router.query.id);
  const selectedData = getSelectedSetData(id);
  const dataState = useDataContext().state;
  const chipData = useTagState().filter((item) => selectedData?.tags?.includes(item.chipId));
  const searchData = useSearchDataState();

  const data: ChartData<"bar"> = {
    labels: [
      ["쾌감도", selectedData?.쾌감도 ?? 0],
      ["리드비율(남/여)", "(" + (selectedData?.["리드(남)"] ?? 0) + "/" + (100 - (selectedData?.["리드(남)"] ?? 0)) + ")"],
    ],
    datasets: [
      {
        data: [selectedData?.쾌감도 ?? 0, selectedData?.["리드(남)"] ?? 0],

        backgroundColor: ["#FF547F", "#7B42AD"],
        barThickness: 30,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: [false, "end"],
        grouped: false,
        stack: "stack1",
      },
      {
        data: [null, 100],
        backgroundColor: ["#FF547F", "#FF90AD"],
        barThickness: 30,
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
        barThickness: 40,
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
      title: {
        display: false,
      },
      legend: {
        labels: {
          filter: function (legendItem, chartData) {
            return false;
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
        grid: { display: false },
        border: { display: false },
        ticks: {
          font: {
            size: 15,
            family: "Nanum Square Neo",
          },
        },
      },
      y: {
        min: -5,
        max: 105,
        display: false,
        stacked: false,
      },
    },
    events: [],
  };

  const previousData = getPreviousSetData(id);
  const previousCard: SetProps = {
    name: previousData?.name,
    id: previousData?.id,
  };
  const nextData = getNextSetData(id);
  const nextCard: SetProps = {
    name: nextData?.name,
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
            {selectedData?.subTitle?.map((v) => {
              return (
                <li key={v} style={{ textAlign: "justify", margin: "0.5rem" }}>
                  {v}
                </li>
              );
            })}
          </ul>

          <h2 style={{ margin: "2rem 0rem" }}> 섹스 플로우 </h2>
          {selectedData?.details?.map((id) => {
            return (
              <ImageButton
                key={id}
                imgUrl={"/assets/images/" + id + ".png"}
                width={400}
                height={100}
                padding={0}
                borderColor={"transparent"}
                borderRadius={2}
                boxShadow={"1px 3px lightgray"}
                title={getSelectedData(id)?.name}
                onClick={() => {
                  router.push("/detail/" + id);
                }}
              ></ImageButton>
            );
          })}
          <h2 style={{ margin: "2rem 0rem" }}> 태그 </h2>
          <Chips chipData={chipData} isReadonly={true}></Chips>
          <DivideCarousel width="450px" height="80px" />
          <h1> Tips </h1>
          <ul style={{ lineHeight: "110%", wordSpacing: "2px" }}>
            {selectedData?.tips?.map((v) => {
              return (
                <li key={v} style={{ textAlign: "justify", margin: "0.5rem" }}>
                  {v}
                </li>
              );
            })}
          </ul>
          <h1 style={{ marginBottom: "-10px" }}>
            난이도 :{"  "}
            <span style={{ fontSize: "1.5em" }}>{selectedData?.난이도 ?? "보통"}</span>
          </h1>
          <h2 style={{ margin: "2rem 0rem -1rem 0rem" }}> 세트 점수 </h2>
          <Bar data={data} options={options} width={200} height={200}></Bar>
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
            labelText="이거 가능?"
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
            <CustomLink href={"/setDetail/" + previousCard.id}>
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
              <Card id={previousCard.id} name={previousCard.name} src="/assets/setImages/"></Card>
            </CustomLink>
            <CustomLink href={"/setDetail/" + nextCard.id}>
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
              <Card id={nextCard.id} name={nextCard.name} src="/assets/setImages/"></Card>
            </CustomLink>
          </div>

          <Button labelText="메인 화면으로 " height={80} maxWidth={250} padding={20} backgroundColor="#32154B" color="white" onClick={() => router.push("/")}></Button>
        </main>
      </div>
    </>
  );
};

export default SetDetail;
