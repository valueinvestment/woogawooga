import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button/Button";
import { MainCarousel } from "../components/MainCarousel";
import { data, setData } from "../context/DataContext";

const Home: NextPage = () => {
  const router = useRouter();
  const sets = setData;
  const positions = data;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/assets/main.svg"
          width="284px"
          height="284px"
          alt="title"
        />
        <MainCarousel width="100%" height="400px" />
        {/* <div style={{ margin: "10px" }}></div> */}
        {/* <div style={{ textAlign: "left", width: "100%", paddingLeft: "15px" }}> */}
        {/* <span style={{ fontSize: "2rem", fontWeight: "bold" }}>추천 컨탠츠</span> Recommended Contents */}
        {/* <p style={{ textAlign: "left" }}>처음 방문한 사람들을 위한 추천 체위 모음</p> */}
        {/* </div> */}
        <div style={{ textAlign: "left", width: "100%", paddingLeft: "15px" }}>
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>체위</span> Sex
          Position
          <p style={{ textAlign: "left" }}>
            {sets.length}개의 체위와 설명이 준비되어 있습니다.
          </p>
        </div>
        <Button
          labelText="체위 전체 보기"
          backgroundUrl="/assets/setbutton.png"
          borderColor="transparent"
          height={200}
          padding={20}
          backgroundOpacity={0.4}
          onClick={() => {
            router.push("/sets");
          }}
        ></Button>
        <div
          style={{
            textAlign: "left",
            width: "100%",
            paddingLeft: "15px",
            marginTop: "10px",
          }}
        >
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
            체위 요소
          </span>{" "}
          Sex Position Piece
          <p style={{ textAlign: "left" }}>
            {data.length}개의 체위 요소들이 준비되어 있습니다.
          </p>
        </div>
        <Button
          labelText="체위 요소 보기"
          backgroundUrl="/assets/positionbutton.png"
          borderColor="transparent"
          height={200}
          padding={20}
          backgroundOpacity={0.4}
          onClick={() => {
            router.push("/details");
          }}
        ></Button>
      </main>
    </div>
  );
};

export default Home;
