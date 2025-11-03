import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useAos(options = {}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian chạy animation (ms)
      offset: 120, // khoảng cách từ đáy viewport để kích hoạt
      easing: "ease-in-out", // kiểu chuyển động
      once: true, // chỉ chạy 1 lần
      ...options, // ghi đè hoặc bổ sung nếu cần
    });
  }, [options]);

  // Có thể return AOS để dùng refresh() hoặc refreshHard() bên ngoài
  return AOS;
}
