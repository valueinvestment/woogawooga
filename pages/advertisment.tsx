import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import DivideLine from "../components/DivideLine";
import styles from "../styles/Home.module.css";

const Advertisment: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main} style={{ textAlign: "left" }}>
          <Image
            src="/assets/main.svg"
            width="284px"
            height="284px"
            alt="title"
          />
          <Link href="/">
            <h2 style={{ cursor: "pointer", alignSelf: "start" }}>
              이전 페이지로
            </h2>
          </Link>
          <h1> 광고문의 </h1>
          <DivideLine />
          <h2> 단가 및 사이즈 안내 </h2>
          <ul style={{ alignSelf: "start" }}>
            <li>
              배너 광고(하단): 10만원/Day
              <br /> - Size: 500x400px
            </li>
            <li>
              배너 광고(측면): 5만원/Day
              <br /> - Size: 300x600px
            </li>
            <li>
              배너 광고(패키지): 12만원/Day
              <br />- Size: 위 사이즈 준수
            </li>
            <li>
              팝업 광고: 10만원/Day
              <br />- Size: 400x300px
            </li>
            <li>
              로딩 광고: 15만원/Day
              <br />- Size: 368x368px
            </li>
          </ul>
          <DivideLine />

          <h2> 광고 문의 방법</h2>
          <ul>
            <li>
              송출하고 싶은 광고 이미지를 광고 유형에 맞는 사이즈로 제작합니다.
            </li>
            <li>
              oogaooga.net@gmail.com으로 광고 유형과 희망 송출 일수 및 연락처를
              적어서 송부해주시기 바랍니다.
            </li>
            <li>
              광고 심사가 완료되면 담당자가 개별 연락을 드립니다. 심사에 통과한
              광고는 지정 일부터 게재됩니다.
            </li>
          </ul>
          <DivideLine />

          <h2>주의 사항</h2>
          <ul>
            <li>
              우가?우가!는 음란물 및 기타 불법 컨텐츠(몰카, 미성년자, 성매매
              등)를 제작/공유/배포하는 사이트가 아니며, 향후에도 그럴 계획이
              없습니다.
            </li>
            <li>
              우가?우가!는 불법적인 컨텐츠(불법 도박, 불법 판매 등)로 수익을
              창출할 생각이 없으며, 마찬가지로 향후에도 그럴 계획이 없습니다.
            </li>
            <li>
              {" "}
              우가?우가!는 사람들의 섹스 라이프를 개선하여 궁극적으로 삶의 질을
              높이는 데 기여하겠다는 건전한 미션 하에 기획 되었습니다.
            </li>
            <li>
              따라서, 섹스를 컨텐츠로 삼는다는 점만 단편적으로 보고 기획 취지를
              오해하여 접근하는 사람이 없길 바랍니다.
            </li>
            <li>
              그럼에도 불구하고 음란물, 불법 컨텐츠를 통한 수익을 목적으로
              접근하는 경우, 혹은 단순히 조롱이나 비아냥을 목적으로 연락하는
              경우에는 별다른 대응을 하지 않을 계획이니 이 점 양지하여 주시기
              바랍니다.
            </li>
          </ul>
          <DivideLine />

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

export default Advertisment;
