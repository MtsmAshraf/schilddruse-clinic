"use client"
import { getCalApi } from "@calcom/embed-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
export default function BookBtn() {

  const t = useTranslations("BookBtn")

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"first-visit"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#1197f0"},"dark":{"cal-brand":"#1197f0"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="first-visit"
    data-cal-link="moatasim-ashraf-jez60p/first-visit"
    className={"book-btn main"}
    data-cal-config='{"layout":"month_view","theme":"light"}'
  >
    {
      t("Text")
    }
  </button>;
};
  
  