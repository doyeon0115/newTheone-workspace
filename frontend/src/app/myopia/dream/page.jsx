"use client";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./dream.module.css";

export default function DreamPage() {
  useEffect(() => {
    const handleNavClick = (event) => {
      // Remove .on from all .s11_nav elements
      document.querySelectorAll(".s11_nav").forEach((nav) => {
        nav.classList.remove("on");
      });

      // Add .on to the clicked .s11_nav
      event.target.classList.add("on");

      // Find the index of the clicked .s11_nav
      const index = Array.from(document.querySelectorAll(".s11_nav")).indexOf(
        event.target
      );

      // Remove .on from all .s11_img elements
      document.querySelectorAll(".s11_img").forEach((img) => {
        img.classList.remove("on");
      });

      // Add .on to the .s11_img with the same index as clicked .s11_nav
      document.querySelectorAll(".s11_img")[index]?.classList.add("on");
    };

    // Add event listeners to all .s11_nav elements
    document.querySelectorAll(".s11_nav").forEach((nav) => {
      nav.addEventListener("click", handleNavClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      document.querySelectorAll(".s11_nav").forEach((nav) => {
        nav.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <>
      <div id="sub_title" className="s-inner">
        <ul className="info">
          <li>
            <Link href="/" title="메인으로">
              <i className="fal fa-home-alt"></i>
            </Link>
          </li>
          <li>근시</li>
          <li>드림 렌즈</li>
        </ul>

        <h2 className="wow fadeInUp">드림렌즈</h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          DREAM LENS
        </p>
      </div>

      <section className="sub_section s-inner pt0 img100">
        <div className="sub_top_box">
          <div className="txt_box wow fadeInUp" data-wow-delay="0.2s">
            <p>
              드림렌즈는 주간에 쓰는 렌즈와는 다르게 자는 동안 착용하는 렌즈로
              시력을 교정하는 특수 제작된 평평한 모양의 렌즈가 각막 상피 부분의
              형태를 변화시켜 근시와 난시의 진행을 억제 및 교정하는 시술
              방법입니다.
            </p>
          </div>
          <div
            className={`img_box mo_none wow fadeInUp ${styles.dream_3_img}`}
            data-wow-delay="0.4s"
          ></div>
        </div>
      </section>

      <section className={styles.dream_1}>
        <div className="sub_section s-inner pt0">
          <p className="s_txt2 mt100 wow fadeInUp">드림렌즈 대상</p>
          <p className="s_txt1 wow fadeInUp">
            드림렌즈는 근시가 진행중인 성장기 어린이나 청소년부터 시력교정술이
            불가능한 성인까지 연령 제한이 없습니다.
            <br />
            하지만 성장기 아이들의 경우 드림렌즈를 통해 인축장 성장을 억제할 수
            있기 때문에 근시진행을 더디게 하는 효과를 더욱 기대할 수 있습니다.
          </p>

          <ul className="sub_img_box4 col2 mt70">
            <li className="wow fadeInUp">
              <div className={`img_box ${styles.dream_1_img}`}></div>
            </li>
            <li className="wow fadeInUp" data-wow-delay="0.1s">
              <div className={`img_box ${styles.dream_2_img}`}></div>
            </li>
          </ul>
        </div>
      </section>

      <section className="dream_2">
        <div className="sub_section s-inner pt0">
          <p className="s_txt2 mt100 wow fadeInUp">드림렌즈 원리</p>
          <p className="s_txt1 wow fadeInUp">
            드림렌즈는 일반적인 렌즈와는 다르게 안쪽 가운데 부분이 평평하게
            디자인 되어 있어서 착용 시 각막의 볼록한 중심부를 미세한 압력으로
            눌러 평평하게 만들어 주게 됩니다.
          </p>
          <p className="s_txt1 wow fadeInUp">
            그렇게 된다면 근시와 난시를 교정할 수 있고 이어서 근시 진행을
            억제해주는 효과까지 바라 볼 수 있습니다.
          </p>
          <div className="sub_top_box">
            <div
              className={`img_box mo_none wow fadeInUp ${styles.dream_4_img}`}
              data-wow-delay="0.4s"
            ></div>
          </div>
        </div>
      </section>

      <section className="dream_1">
        <div className="sub_section s-inner pt50">
          <div className="sub_title">
            <h3 className="wow fadeInUp">드림렌즈 장점</h3>
            <p className="s_txt3 center wow fadeInUp">
              이러한 분들에게 더원서울안과의 드림렌즈를 추천드립니다!
            </p>
          </div>

          <ul className="sub_img_box4 col4 mt70">
            <li className="wow fadeInUp">
              <div className={`img_box ${styles.dream_100_img}`}></div>
              <p className="s_txt3">안경과 렌즈</p>
              <p className="s_txt1">
                안경과 렌즈를 일상생활 중 <br />
                끼고 다닐 필요가 없습니다.
              </p>
            </li>
            <li className="wow fadeInUp" data-wow-delay="0.1s">
              <div className={`img_box ${styles.dream_1_img}`}></div>
              <p className="s_txt3">어린이와 청소년</p>
              <p className="s_txt1">
                근시가 진행중인 성장기 어린이나 <br />
                청소년의 근시 진행을 억제해줍니다.
              </p>
            </li>
            <li className="wow fadeInUp">
              <div className={`img_box ${styles.dream_101_img}`}></div>
              <p className="s_txt3">부작용 없이 일상 복귀</p>
              <p className="s_txt1">수술과 다르게 부작용이 없습니다.</p>
            </li>
            <li className="wow fadeInUp" data-wow-delay="0.1s">
              <div className={`img_box ${styles.dream_102_img}`}></div>
              <p className="s_txt3">수면시 착용</p>
              <p className="s_txt1">
                잠을 잘 때 착용하기 때문에 다음 날 <br />
                안경을 낀 것처럼 선명해집니다.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="dream_1" style={{ background: "#fff" }}>
        <div className="sub_section s-inner pt50">
          <div className="sub_title">
            <h3 className="wow fadeInUp">
              <span style={{ color: "#33bdff" }}>더원서울안과 </span>드림렌즈
              진행방식
            </h3>
          </div>

          <ul className="sub_img_box4 col4 mt70">
            <li className="new_layout wow fadeInUp">
              <div className={`img_box ${styles.dream_8_img}`}></div>
              <div className={styles.dream_text_box}>
                <p className={`${styles.dream_text_box} ${styles.s_txt3}`}>
                  STEP 01
                </p>
                <p className={`${styles.dream_text_box} ${styles.s_txt1}`}>
                  철저하게 정밀 검사를 합니다.
                  <br />
                  &nbsp;
                </p>
              </div>
            </li>
            <li className="new_layout wow fadeInUp">
              <div className={`img_box ${styles.dream_103_img}`}></div>
              <div className={styles.dream_text_box}>
                <p className={`${styles.dream_text_box} ${styles.s_txt3}`}>
                  STEP 02
                </p>
                <p className={`${styles.dream_text_box} ${styles.s_txt1}`}>
                  이후 렌즈 관리 및 착용 방법에 관한 교육을 받습니다.
                </p>
              </div>
            </li>
            <li className="new_layout wow fadeInUp">
              <div className={`img_box ${styles.dream_104_img}`}></div>
              <div className={styles.dream_text_box}>
                <p className={`${styles.dream_text_box} ${styles.s_txt3}`}>
                  STEP 03
                </p>
                <p className={`${styles.dream_text_box} ${styles.s_txt1}`}>
                  일주일간 시험 착용을 가집니다.
                  <br />
                  &nbsp;
                </p>
              </div>
            </li>
            <li className="new_layout wow fadeInUp">
              <div className={`img_box ${styles.dream_11_img}`}></div>
              <div className={styles.dream_text_box}>
                <p className={`${styles.dream_text_box} ${styles.s_txt3}`}>
                  STEP 04
                </p>
                <p className={`${styles.dream_text_box} ${styles.s_txt1}`}>
                  시험 착용 이후 적합한 개인 맞춤 렌즈를 처방 받아 착용합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
