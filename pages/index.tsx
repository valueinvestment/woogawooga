import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { ImageButton } from "../components/Button/ImageButton";
import { CardContainer } from "../components/CardContainer";
import { Chips } from "../components/ChipContainer";
import { CustomLink } from "../components/CustomLink";
import DivideLine from "../components/DivideLine";
import { SearchInput } from "../components/Input/SearchInput";
import {
  useDataState,
  useSearchAction,
  useSearchDataState,
  useTagActions,
  useTagState,
} from "../context/DataContext";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";

const TotalShow: NextPage = () => {
  const router = useRouter();
  const chipData = useTagState();
  const cardData = useDataState();
  const searchData = useSearchDataState();
  const [showTag, setShowTag] = useState(true);
  const { addSearchCountAction, changeSearchTypeAction } = useSearchAction();
  const { initializeTag } = useTagActions();

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
          {/* <div style={{ alignSelf: "center" }}>
            <SearchInput></SearchInput>
          </div> */}
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
          <h3
            style={{
              display: showTag ? "block" : "none",
              alignSelf: "self-start",
              cursor: "pointer",
              margin: "0.5rem 1rem",
            }}
            onClick={() => {
              initializeTag();
            }}
          >
            초기화{" "}
            <Image
              src="/assets/icon/refresh.png"
              width="20px"
              height="20px"
              alt="refresh"
            />
          </h3>
          <div style={{ display: showTag ? "flex" : "none" }}>
            <Chips chipData={chipData}></Chips>
          </div>
          <div
            style={{
              alignSelf: "start",
              margin: "0.5rem",
            }}
          >
            <input
              type="checkbox"
              id="basic"
              checked={searchData.type.includes(0)}
              onChange={() => changeSearchTypeAction(0)}
            ></input>
            <label>기본형</label>{" "}
            <input
              type="checkbox"
              id="side"
              checked={searchData.type.includes(1)}
              onChange={() => changeSearchTypeAction(1)}
            ></input>
            <label>파생형</label>
          </div>
          <DivideLine></DivideLine>
          <h1 style={{ textAlign: "left" }}> 체위 요소 전체 보기 </h1>
          <h2 style={{ textAlign: "left" }}>
            {Math.min(searchData.count, cardData.length)}개 결과 값
          </h2>
          {cardData.length == 0 ? <h3>표시할 내용이 없습니다</h3> : ``}
          <CardContainer cardData={cardData}></CardContainer>
          {cardData.length == 0 || searchData.count > cardData.length ? (
            ``
          ) : (
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
          )}

          <Button
            labelText="이거 가능?"
            height={100}
            maxWidth={330}
            padding={20}
            backgroundColor="#7B42AD"
            color="white"
            onClick={() => {
              var randomId = parseInt((Math.random() * 146).toString());
              randomId = cardData.some((v) => v.id == randomId) ? randomId : 1;
              router.push("/detail/" + randomId);
            }}
          ></Button>
          {/* <Link href="/">
            <Button
              labelText="메인 화면으로"
              height={100}
              padding={20}
              backgroundColor="#32154B"
              color="white"
            ></Button>
          </Link> */}
        </main>
      </div>
    </>
  );
};

export default TotalShow;
