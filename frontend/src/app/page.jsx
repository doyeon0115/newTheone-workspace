"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Check if popup was shown today
    const popupShown = localStorage.getItem("popupShown");
    const today = new Date().toDateString();

    if (popupShown !== today) {
      setIsPopupVisible(true);
      localStorage.setItem("popupShown", today);
    }
  }, []);

  return <></>;
}
