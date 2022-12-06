import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { Button } from "../components/Button/Button";
import { ImageButton } from "../components/Button/ImageButton";
import { CardContainer } from "../components/CardContainer";
import { Chips } from "../components/ChipContainer";
import { SearchInput } from "../components/Input/SearchInput";
import {
  useDataState,
  useSearchAction,
  useTagState,
} from "../context/DataContext";
import styles from "../styles/Home.module.css";

const TotalShow: NextPage = () => {
  const chipData = useTagState();
  const cardData = useDataState();
  const [showTag, setShowTag] = useState(true);
  const { addSearchCountAction } = useSearchAction();

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main} style={{ alignItems: "normal" }}>
          <Image
            src="/assets/main.svg"
            width="284px"
            height="284px"
            alt="title"
          />
          <div style={{ alignSelf: "center" }}>
            <SearchInput></SearchInput>
          </div>
          <div style={{ display: "flex", whiteSpace: "pre-wrap" }}>
            <h1 style={{ textAlign: "left" }}> 태그 </h1>
            <h3
              style={{
                alignSelf: "self-end",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                setShowTag(!showTag);
              }}
            >
              태그 {showTag ? "접기" : "펼치기"}
            </h3>
          </div>
          <div style={{ display: showTag ? "flex" : "none" }}>
            <Chips chipData={chipData}></Chips>
          </div>

          <h1 style={{ textAlign: "left" }}> 체위 전체 보기 </h1>
          <h2 style={{ textAlign: "left" }}>
            체위 {cardData.state.length}개 결과 값
          </h2>
          <CardContainer cardData={cardData.state}></CardContainer>
          <h3
            style={{
              alignSelf: "center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              addSearchCountAction();
            }}
          >
            더보기
          </h3>
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
          <Link href="/">
            <Button
              labelText="메인 화면으로"
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

export default TotalShow;
