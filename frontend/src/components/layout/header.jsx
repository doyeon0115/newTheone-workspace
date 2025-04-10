"use client";

import Link from "next/link";
import "@/styles/globals.css";
import { useHeaderToggle } from "@/hooks/useHeaderToggle";

export default function Header() {
  useHeaderToggle();

  return (
    <header id="theone_header">
      <div className="s-inner" id="new_linner">
        <h1 id="theone_logo">
          <Link href={"/"} title="메인으로">
            <span className="text_hidden">
              강남 더원서울안과 - 강남안과,강남역안과,강남 망막안과
            </span>
          </Link>
        </h1>

        <nav id="theone_gnb">
          <ul>
            <li>
              <Link href={"/theone/company"} title="더원서울안과">
                <span>더원서울안과</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/theone/company"} title="병원소개">
                    병원소개
                  </Link>
                </li>
                <li>
                  <Link href={"/theone/medical-team"} title="의료진소개">
                    의료진소개
                  </Link>
                </li>
                <li>
                  {/* 기존 내용 */}
                  {/* <li><a href="/bbs/board.php?bo_table=academic_presentatio" alt="학술발표">학술발표</a></li> */}
                  <Link href={"/theone/academic_presentation"} title="학술발표">
                    학술발표
                  </Link>
                </li>
                <li>
                  <Link href={"/theone/product"} title="첨단보유장비">
                    첨단보유장비
                  </Link>
                </li>
                <li>
                  <Link href={"/theone/location"} title="오시는길">
                    오시는길
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={"/retinal"} title="망막 클리닉">
                <span>망막 클리닉</span>
              </Link>
            </li>

            <li>
              <Link href={"/glaucoma"} title="녹내장 클리닉">
                <span>녹내장 클리닉</span>
              </Link>
            </li>

            <li>
              <Link href={"/cataract/clinic"} title="백내장 클리닉">
                <span>백내장 클리닉</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/cataract/clinic"} title="백내장">
                    백내장
                  </Link>
                </li>
                <li>
                  <Link href={"/cataract/dislocation"} title="인공수정체 탈구">
                    인공수정체 탈구
                  </Link>
                </li>
                <li>
                  <Link href={"/cataract/dry-eye"} title="안구건조증">
                    안구건조증
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={"/lasek/today"} title="시력교정술">
                <span>시력교정술</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/lasek/today"} title="투데이 라섹">
                    <span>투데이 라섹</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/lasek/lens-implantation"}
                    title="안내렌즈삽입술"
                  >
                    <span>안내렌즈삽입술</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={"/myopia/dream"} title="근시 클리닉">
                <span>근시 클리닉</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/myopia/dream"} title="드림 렌즈">
                    <span>드림 렌즈</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/myopia/mysite"} title="마이사이트 렌즈">
                    <span>마이사이트 렌즈</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={"/examination"} title="안종합검진">
                <span>안종합검진</span>
              </Link>
            </li>

            <li>
              <Link href={"/community/news"} title="고객지원">
                <span>고객지원</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/community/news"} title="병원소식">
                    병원소식
                  </Link>
                </li>
                <li>
                  <Link href={"/community/review"} title="수술체험기">
                    수술체험기
                  </Link>
                </li>
                <li>
                  <Link href={"/community/inquiry"} title="예약문의">
                    예약문의
                  </Link>
                </li>
                <li>
                  <Link href={"/community/notice"} title="공지사항/이벤트">
                    공지사항/이벤트
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="login_btn_list_2_box">
          <a href="https://the1seoul.com/" className="english pc_btn">
            KR
          </a>
          <a href="https://the1seouloph.com" className="english pc_btn">
            EN
          </a>
          <button id="menuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="login_btn_list_2">
            <li>
              <Link href={"/logout.php"} title="로그아웃" className="f_member">
                로그아웃
              </Link>
            </li>

            <li>
              <Link href={"/(auth)/login"}>로그인</Link>
            </li>
            <li>
              <Link href={"/(auth)/register"}> 회원가입</Link>
            </li>
          </ul>
        </div>

        <div id="all_gnb">
          <div className="mo_login_btn">
            <div>
              <Link href={""} title="로그아웃" className="f_member">
                로그아웃
              </Link>
              <Link href={"/(auth)/login"}>로그인</Link>
            </div>
            <div>
              <Link href={"/(auth)/register"}>회원가입</Link>
            </div>
          </div>
          <button id="menuClose"></button>
          <ul>
            <li>
              <Link href={"/theone/company"} title="더원서울안과">
                <span>더원서울안과</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/theone/company"} title="병원소개">
                    병원소개
                  </Link>
                </li>
                <li>
                  <Link href={"/theone/medical-team"} title="의료진소개">
                    의료진소개
                  </Link>
                </li>
                <li>
                  <Link href={"/theone/academic_presentation"} title="학술발표">
                    학술발표
                  </Link>
                </li>
                <li>
                  <Link href={"/theone/product"} title="첨단보유장비">
                    첨단보유장비
                  </Link>
                </li>
                <li>
                  <Link href={"/theone/location"} title="오시는길">
                    오시는길
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/retinal"} title="망막 클리닉">
                <span>망막 클리닉</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/retinal/macular-degeneration"} title="황반변성">
                    황반변성
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/retinal/diabetic-retinopathy"}
                    title="당뇨망막병증"
                  >
                    당뇨망막병증
                  </Link>
                </li>
                <li>
                  <Link href={"/retinal/uveitis"} title="포도막염">
                    포도막염
                  </Link>
                </li>
                <li>
                  <Link href={"/retinal/vascular-disease"} title="망막혈관질환">
                    망막혈관질환
                  </Link>
                </li>
                <li>
                  <Link href={"/retinal/detachment"} title="망막박리">
                    망막박리
                  </Link>
                </li>
                <li>
                  <Link href={"/retinal/myiodesopsia"} title="비문증">
                    비문증
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/glaucoma"} title="녹내장 클리닉">
                <span>녹내장 클리닉</span>
              </Link>
            </li>
            <li>
              <Link href={"/cataract/clinic"} title="백내장 클리닉">
                <span>백내장 클리닉</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/cataract/clinic"} title="백내장">
                    백내장
                  </Link>
                </li>
                <li>
                  <Link href={"/cataract/dislocation"} title="인공수정체 탈구">
                    인공수정체 탈구
                  </Link>
                </li>
                <li>
                  <Link href={"/cataract/dry-eye"} title="안구건조증">
                    안구건조증
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/lasek/today"} title="시력교정술">
                <span>시력교정술</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/lasek/today"} title="투데이 라섹">
                    <span>투데이 라섹</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/lasek/lens-implantation"}
                    title="안내렌즈삽입술"
                  >
                    <span>안내렌즈삽입술</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={"/myopia/dream"} title="근시 클리닉">
                <span>근시 클리닉</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/myopia/dream"} title="드림 렌즈">
                    <span>드림 렌즈</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/myopia/mysite"} title="마이사이트 렌즈">
                    <span>마이사이트 렌즈</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={"/examination"} title="안종합검진">
                <span>안종합검진</span>
              </Link>
            </li>
            <li>
              <Link href={"/community/news"} title="고객지원">
                <span>고객지원</span>
              </Link>
              <ul>
                <li>
                  <Link href={"/community/news"} title="병원소식">
                    병원소식
                  </Link>
                </li>
                <li>
                  <Link href={"/community/review"} title="수술체험기">
                    수술체험기
                  </Link>
                </li>
                <li>
                  <Link href={"/community/inquiry"} title="예약문의">
                    예약문의
                  </Link>
                </li>
                <li>
                  <Link href={"/community/notice"} title="공지사항/이벤트">
                    공지사항/이벤트
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
