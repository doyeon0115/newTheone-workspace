import Image from "next/image";
import Link from "next/link";

export default function Quick() {
  return (
    <>
      <div id="Quick">
        <a href="tel:02-585-0202" title="전화상담" className="tel">
          <div>
            <i className="fas fa-phone-alt"></i>
            <p>전화상담</p>
          </div>
        </a>
        <Link href={"/community/inquiry"} title="진료예약" className="online">
          <div>
            <i className="fal fa-calendar-alt"></i>
            <p>진료예약</p>
          </div>
        </Link>
        <a
          href="https://pf.kakao.com/_zhNxgxb/chat"
          target="_blank"
          title="온라인상담"
          className="kakao"
        >
          <Image
            src="/images/icon_kakao.png"
            alt="카카오톡"
            width={31}
            height={29}
            priority
          />
          <p>온라인상담</p>
        </a>
        <a
          href="https://the1eye.com/kor/index.php"
          target="_blank"
          title="녹백센터"
          className="nocbak"
        >
          <Image
            src="/img/nav_logo.png"
            alt="녹백센터"
            width={31}
            height={22}
            priority
          />
          <p>녹백센터</p>
        </a>
      </div>
    </>
  );
}
