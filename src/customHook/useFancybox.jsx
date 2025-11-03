import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export function useFancybox(selector = "[data-fancybox]", options = {}) {
  useEffect(() => {
    Fancybox.bind(selector, {
      Toolbar: {
        display: ["close"],
      },
      dragToClose: true,
      ...options, 
    });

    return () => {
      Fancybox.destroy();
    };
  }, [selector, options]);
}