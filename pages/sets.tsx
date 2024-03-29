import { useRouter } from "next/router";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Chips } from "../components/ChipContainer";
import { SetContainer } from "../components/SetContainer";
import { useSearchAction, useSearchDataState, useSetDataState, useTagActions, useTagState } from "../context/DataContext";
import styles from "../styles/Home.module.css";
import { DivideCarousel } from "../components/DivideCarousel";

const Sets: NextPage = () => {
  const router = useRouter();
  const chipData = useTagState();
  const setData = useSetDataState();
  const searchData = useSearchDataState();
  const [showTag, setShowTag] = useState(true);
  const { addSearchCountAction } = useSearchAction();
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
            초기화 <Image src="/assets/icon/refresh.png" width="20px" height="20px" alt="refresh" />
          </h3>
          <div style={{ display: showTag ? "flex" : "none" }}>
            <Chips chipData={chipData}></Chips>
          </div>
          <DivideCarousel width="412px" height="80px" />
          <h2 style={{ textAlign: "left", marginLeft: "10px" }}>추천 세트 전체 보기</h2>
          <h3 style={{ textAlign: "left", marginLeft: "15px" }}>Set {setData.length}개 결과 값</h3>

          {setData.length == 0 ? <h3>표시할 내용이 없습니다</h3> : ``}

          <SetContainer setData={setData}></SetContainer>

          {setData.length == 0 || searchData.count > setData.length ? (
            ``
          ) : (
            <h3
              style={{
                alignSelf: "center",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
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
              randomId = setData.some((v) => v.id == randomId) ? randomId : 1;
              router.push("/setDetail/" + randomId);
            }}
          ></Button>
          {/* <Link href="/">
            <Button
              labelText="메인 화면으로"
              height={80}
              maxWidth={250}
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

export default Sets;
