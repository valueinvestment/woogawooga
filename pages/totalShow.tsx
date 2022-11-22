import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "../components/Button/Button";
import { ImageButton } from "../components/Button/ImageButton";
import { CardContainer } from "../components/CardContainer";
import { Chips } from "../components/ChipContainer";
import { SearchInput } from "../components/Input/SearchInput";
import { useDataState, useTagState } from "../context/DataContext";
import styles from "../styles/Home.module.css";

const TotalShow: NextPage = () => {
  const chipData = useTagState();
  const cardData = useDataState();

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image
            src="/assets/main.svg"
            width="284px"
            height="284px"
            alt="title"
          />
          <SearchInput></SearchInput>
          <h1> 태그 </h1>
          <Chips chipData={chipData}></Chips>
          <h1> 난이도 </h1>
          <h3>... 기획중 ...</h3>
          <h1> 체위 전체 보기 </h1>
          <h2> 체위 {cardData.state.length}개 결과 값 </h2>
          <CardContainer cardData={cardData.state}></CardContainer>

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

export default TotalShow;
