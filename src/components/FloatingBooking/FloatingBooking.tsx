"use client"
// import React, { useEffect, useState } from 'react'
import styles from "./floating-booking.module.css"
// import { PopupButton } from 'react-calendly'
// import { useTranslations } from 'next-intl'


// const FloatingBooking = () => {
//     const t = useTranslations
//     ("HomePage")

//     const [rootElement, setRootElement] = useState<HTMLElement>();

//     useEffect(() => {
//     // Runs only on client
//     const el: HTMLElement = document.body;
//     if (el) {
//         setRootElement(el);
//     }
//     }, []); 
//     return (
//         <PopupButton
//             className={styles.floatingBooking}
//             url="https://calendly.com/mo32000a/schilddruse"
//             /*
//             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
//             */
//             rootElement={rootElement!}
//             text={`${t("Hero.btns.b1")}`}
//         />
// )
// }

// export default FloatingBooking


import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function FloatingBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"first-visit"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#1197f0"},"dark":{"cal-brand":"#1197f0"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="first-visit"
    data-cal-link="moatasim-ashraf-jez60p/first-visit"
    className={styles.floatingBooking}
    data-cal-config='{"layout":"month_view","theme":"light"}'
  >
    Book Appiontment
  </button>;
};
  
  