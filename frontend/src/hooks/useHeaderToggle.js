import { useEffect } from "react";

export const useHeaderToggle = () => {
  useEffect(() => {
    // GNB 서브메뉴 토글 기능
    const initGnbSubmenu = () => {
      const gnbItems = document.querySelectorAll("#theone_gnb > ul > li > ul");
      gnbItems.forEach((item) => {
        item.parentElement.classList.add("depth2");
      });

      const depth2Items = document.querySelectorAll(
        "#theone_gnb > ul > li.depth2"
      );
      depth2Items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          document.querySelector("#theone_header")?.classList.add("active");
          item.querySelector("ul")?.classList.add("on");
        });

        item.addEventListener("mouseleave", () => {
          document.querySelector("#theone_header")?.classList.remove("active");
          item.querySelector("ul")?.classList.remove("on");
        });
      });
    };

    // 모바일 메뉴 토글 기능
    const initMobileMenuToggle = () => {
      document.querySelector("#menuOpen")?.addEventListener("click", () => {
        document.querySelector("#theone_header")?.classList.add("on");
      });

      document.querySelector("#menuClose")?.addEventListener("click", () => {
        document.querySelector("#theone_header")?.classList.remove("on");
      });

      // 모바일 GNB 서브메뉴 토글
      const allGnbItems = document.querySelectorAll("#all_gnb > ul > li > ul");
      allGnbItems.forEach((item) => {
        item.parentElement.classList.add("depth2");
      });

      const allGnbDepth2Links = document.querySelectorAll(
        "#all_gnb > ul > li.depth2 > a"
      );
      allGnbDepth2Links.forEach((link) => {
        link.addEventListener("click", (e) => {
          if (window.innerWidth < 1025) {
            e.preventDefault();
            const ul = link.nextElementSibling;
            const otherUls = document.querySelectorAll(
              "#all_gnb > ul > li > ul"
            );

            otherUls.forEach((otherUl) => {
              if (otherUl !== ul) {
                otherUl.style.display = "none";
              }
            });

            if (ul) {
              ul.style.display = ul.style.display === "none" ? "block" : "none";
            }
          }
        });
      });
    };

    // 모든 토글 기능 초기화
    initGnbSubmenu();
    initMobileMenuToggle();

    // Cleanup function
    return () => {
      // 필요한 경우 이벤트 리스너 제거 로직 추가
    };
  }, []); // 컴포넌트 마운트 시 1회만 실행
};
