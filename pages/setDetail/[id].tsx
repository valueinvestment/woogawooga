import { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { Chips } from "../../components/ChipContainer";
import {
  useTagState,
  useSelectedSetAction,
  useDataContext,
  useSearchDataState,
  useSelectedAction,
  SetProps,
} from "../../context/DataContext";
import styles from "../../styles/Home.module.css";
import { Bar } from "react-chartjs-2";
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
);
const SetDetail: NextPage = () => {
  const { getSelectedSetData, getPreviousSetData, getNextSetData } =
    useSelectedSetAction();
  const { getSelectedData } = useSelectedAction();
  const router = useRouter();
  const id = Number(router.query.id);
  const selectedData = getSelectedSetData(id);
  const dataState = useDataContext().state;
  const chipData = useTagState().filter((item) =>
    selectedData?.tags?.includes(item.chipId)
  );
  const score =
    selectedData?.난이도 == "쉬움"
      ? 20
      : selectedData?.난이도 == "보통"
      ? 40
      : selectedData?.난이도 == "어려움"
      ? 60
      : selectedData?.난이도 == "전문가"
      ? 80
      : selectedData?.난이도 == "이거 가능?"
      ? 100
      : 0;

  const data: ChartData<"bar"> = {
    labels: [
      ["난이도", selectedData?.난이도],
      ["쾌감도", selectedData?.쾌감도 ?? 0],
      [
        "리드 비율",
        "(" +
          (selectedData?.["리드(남)"] ?? 0) +
          "/" +
          (100 - (selectedData?.["리드(남)"] ?? 0)) +
          ")",
        "(남/여)",
      ],
    ],
    datasets: [
      {
        data: [
          score,
          selectedData?.쾌감도 ?? 0,
          selectedData?.["리드(남)"] ?? 0,
        ],

        backgroundColor: ["#FF90AD", "#FF547F", "#7B42AD"],
        barThickness: 30,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: [false, false, "end"],
        grouped: false,
        stack: "stack1",
      },
      {
        data: [null, null, 100],
        backgroundColor: ["#FF547F", "#FF90AD", "#FF90AD"],
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
          [-3, 103],
        ],
        backgroundColor: ["#EDEDED", "#EDEDED", "#EDEDED"],
        barThickness: 40,
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
          <Image
            src={"/assets/setImages/wide/" + id + ".png"}
            width={1456}
            height={816}
            alt="title"
          />
          <h1 style={{ margin: "1.5rem 0rem" }}> {selectedData?.name} </h1>

          <h2 style={{ margin: "1rem 0rem" }}> 이런 분들에게 추천! </h2>
          <ul style={{ lineHeight: "110%", wordSpacing: "2px" }}>
            {selectedData?.subTitle?.map((v) => {
              return (
                <li
                  key={v}
                  style={{
                    textAlign: "justify",
                    margin: "0.5rem 2.2rem 0.5rem 0.5rem ",
                  }}
                >
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
          <h5>※ 컨텐츠는 지속적으로 추가될 예정입니다.</h5>
          <h2 style={{ margin: "2rem 0rem" }}> 태그 </h2>
          <Chips
            chipData={chipData}
            isReadonly={true}
            justifyContent={"center"}
          ></Chips>
          <h1 style={{ marginTop: "35px" }}> Tips </h1>
          <ul style={{ lineHeight: "110%", wordSpacing: "2px" }}>
            {selectedData?.tips?.map((v) => {
              return (
                <li
                  key={v}
                  style={{
                    textAlign: "justify",
                    margin: "0.5rem 2.2rem 0.5rem 0.5rem ",
                  }}
                >
                  {v}
                </li>
              );
            })}
          </ul>
          <h1 style={{ marginBottom: "-10px" }}>
            난이도 :{"  "}
            <span style={{ fontSize: "1.5em" }}>
              {selectedData?.난이도 ?? "보통"}
            </span>
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
              var randomId = parseInt((Math.random() * 55).toString());
              randomId = dataState.some((v) => v.id == randomId) ? randomId : 1;
              router.push("/setDetail/" + randomId);
            }}
          ></Button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            {previousData ? (
              <CustomLink href={"/setDetail/" + previousCard?.id}>
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
                <Card
                  id={previousCard.id}
                  name={previousCard.name}
                  src="/assets/setImages/"
                ></Card>
              </CustomLink>
            ) : (
              <div
                style={{
                  opacity: 0.5,
                }}
              >
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
                <Card
                  id={0}
                  name={"컨텐츠가 없습니다."}
                  src="/assets/setImages/"
                ></Card>
              </div>
            )}
            {nextData ? (
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
                <Card
                  id={nextCard.id}
                  name={nextCard.name}
                  src="/assets/setImages/"
                ></Card>
              </CustomLink>
            ) : (
              <div
                style={{
                  opacity: 0.5,
                }}
              >
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
                <Card
                  id={0}
                  name={"컨텐츠가 없습니다."}
                  src="/assets/setImages/"
                ></Card>
              </div>
            )}
          </div>

          <Button
            labelText="목록 보기 "
            height={80}
            maxWidth={250}
            padding={20}
            backgroundColor="purple"
            color="white"
            onClick={() => router.push("/sets")}
          ></Button>
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
