import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { CardContainer } from "../components/CardContainer";
import { Chips } from "../components/ChipContainer";
import { useDataState, useSearchAction, useSearchDataState, useTagActions, useTagState } from "../context/DataContext";
import styles from "../styles/Home.module.css";
import { DivideCarousel } from "../components/DivideCarousel";

const Positions: NextPage = () => {
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
          <div style={{ alignSelf: "center", padding: "50px" }}>
            <Image
              src="/assets/mainlogo.png"
              width={512}
              height={360}
              alt="title"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          <div style={{ display: "flex", whiteSpace: "pre-wrap" }}>
            <h1
              style={{
                textAlign: "left",
                margin: "0.5rem",
              }}
            >
              태그
            </h1>
            <h3
              style={{
                alignSelf: "self-end",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
                cursor: "pointer",
              }}
              onClick={() => {
                setShowTag(!showTag);
              }}
            >
              {showTag ? "접기" : "펼치기"}
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
            초기화 <Image src="/assets/icon/refresh.png" width="20px" height="20px" alt="refresh" />
          </h3>
          <div style={{ display: showTag ? "flex" : "none" }}>
            <Chips chipData={chipData}></Chips>
          </div>

          <DivideCarousel width="412px" height="80px" />
          <h2 style={{ textAlign: "left", marginLeft: "10px" }}>체위 요소 전체 보기</h2>
          <h3 style={{ textAlign: "left", marginLeft: "15px" }}>{cardData.length}개 결과 값</h3>
          <div
            style={{
              alignSelf: "start",
              margin: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            <input type="checkbox" id="basic" checked={searchData.type.includes(0)} onChange={() => changeSearchTypeAction(0)}></input>
            <label>기본형</label> <input type="checkbox" id="side" checked={searchData.type.includes(1)} onChange={() => changeSearchTypeAction(1)}></input>
            <label>파생형</label>
          </div>

          {cardData.length == 0 ? <h3>표시할 내용이 없습니다</h3> : ``}
          <CardContainer ids={cardData.map((v) => v.id ?? 0)} names={cardData.map((v) => v.name ?? "")}></CardContainer>
          {cardData.length == 0 || searchData.count > cardData.length ? (
            ``
          ) : (
            <h3
              style={{
                alignSelf: "center",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
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
            height={80}
            maxWidth={250}
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

export default Positions;
