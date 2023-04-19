import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ImageButton } from "../components/Button/ImageButton";
import { Carousel } from "../components/Carousel";
import { SearchInput } from "../components/Input/SearchInput";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/assets/main.svg"
          width="284px"
          height="284px"
          alt="title"
        />
        <Carousel width="100%" height="300px" />
        <SearchInput></SearchInput>
        <Link href="/">
          <ImageButton
            title="전체 체위 보기"
            imgUrl="/assets/typicalPosition.svg"
            padding={20}
          ></ImageButton>
        </Link>
        <Link href="/totalRecommendSet">
          <ImageButton
            title="추천 체위 세트"
            imgUrl="/assets/recommendPosition.svg"
            padding={20}
            borderColor="#7B42AD"
          ></ImageButton>
        </Link>
        <Link href="/advertisment">
          <ImageButton
            title="광고 문의"
            imgUrl="/assets/advertisingInquiry.svg"
            padding={20}
          ></ImageButton>
        </Link>
      </main>
    </div>
  );
};

export default Home;
