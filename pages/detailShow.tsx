import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../components/Button/Button";
import { ImageButton } from "../components/Button/ImageButton";
import { Card } from "../components/Card";
import { CardContainer } from "../components/CardContainer";
import { Chips } from "../components/ChipContainer";
import DivideLine from "../components/DivideLine";
import { SearchInput } from "../components/Input/SearchInput";
import {
  useDataState,
  useSelectedDataContext,
  useTagState,
} from "../context/DataContext";
import styles from "../styles/Home.module.css";

const DetailShow: NextPage = () => {
  const cardData = useSelectedDataContext();
  const chipData = useTagState().filter((item) =>
    cardData.state.tags.includes(item.label)
  );
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/">
            <h2
              style={{ cursor: "pointer", alignSelf: "start" }}
              onClick={() => {
                router.back();
              }}
            >
              이전 페이지로
            </h2>
          </Link>
          <Card
            {...cardData.state}
            width="320px"
            height="320px"
            title=""
          ></Card>

          <h1> {cardData.state.title} </h1>
          <h2> 설명 </h2>
          <DivideLine />
          <Chips chipData={chipData} isReadonly={true}></Chips>
          <DivideLine />
          <h1> 난이도 </h1>
          <h3>... 기획중 ...</h3>
          <DivideLine />
          <h1> Tips </h1>
          <h3> ... 기획중 ... </h3>
          <CardContainer cardData={[cardData.state]}></CardContainer>
          <Link href="/">
            <Button
              labelText="공유하기"
              height={120}
              width={368}
              padding={20}
              backgroundColor="#FF90AD"
              borderColor="#7B42AD"
              color="white"
            ></Button>
          </Link>
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

export default DetailShow;
