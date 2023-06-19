import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImageButton } from "../components/Button/ImageButton";
import { Carousel } from "../components/Carousel";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button/Button";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src="/assets/main.svg" width="284px" height="284px" alt="title" />
        <Carousel width="100%" height="300px" />
        <div></div>
        <div style={{ textAlign: "left", width: "100%", paddingLeft: "15px" }}>
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>추천 컨탠츠</span> Recommended Contents
          <p style={{ textAlign: "left" }}>처음 방문한 사람들을 위한 추천 체위 모음</p>
        </div>
        <div style={{ textAlign: "left", width: "100%", paddingLeft: "15px" }}>
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>체위</span> Sex Position
          <p style={{ textAlign: "left" }}>40개의 체위와 설명이 준비되어 있습니다.</p>
        </div>
        <Button
          labelText="체위 전체 보기"
          backgroundUrl="/assets/typicalPosition.svg"
          borderColor="transparent"
          height={200}
          padding={20}
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
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>체위 요소</span> Sex Position Piece
          <p style={{ textAlign: "left" }}>200여개의 체위 요소들이 준비되어 있습니다.</p>
        </div>
        <Button
          labelText="체위 요소 보기"
          backgroundUrl="/assets/recommendPosition.svg"
          borderColor="transparent"
          height={200}
          padding={20}
          onClick={() => {
            router.push("/position");
          }}
        ></Button>
      </main>
    </div>
  );
};

export default Home;
