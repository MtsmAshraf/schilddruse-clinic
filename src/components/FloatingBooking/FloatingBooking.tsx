"use client"
import styles from "./floating-booking.module.css"

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function FloatingBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"first-visit"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#1197f0"},"dark":{"cal-brand":"#1197f0"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"follow-up"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#1197f0"},"dark":{"cal-brand":"#1197f0"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  return(
    <div className={styles.floatingBooking}>
        <button data-cal-namespace="first-visit"
            data-cal-link="moatasim-ashraf-jez60p/first-visit"
            
            data-cal-config='{"layout":"month_view","theme":"light"}'
        >
            Book Appiontment
        </button>
        <button data-cal-namespace="follow-up"
            data-cal-link="moatasim-ashraf-jez60p/follow-up"
            
            data-cal-config='{"layout":"month_view","theme":"light"}'
        >
            Book Follow-up
        </button>
    </div>
  )
};
  
  