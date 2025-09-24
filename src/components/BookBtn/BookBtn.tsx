"use client"
// import { useTranslations } from 'next-intl';
// import React, { useEffect, useState } from 'react'
// import { PopupButton } from 'react-calendly';

// const BookBtn = () => {
//     const t = useTranslations("HomePage")

//   // getting root element on the client side
  
//   const [rootElement, setRootElement] = useState<HTMLElement>();

//   useEffect(() => {
//   // Runs only on client
//   const el: HTMLElement = document.body;
//   if (el) {
//       setRootElement(el);
//   }
//   }, []); 
//   return (
//     <PopupButton
//         className='book-btn main'
//         url="https://calendly.com/mo32000a/schilddruse"
//         /*
//         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
//         */
//         rootElement={rootElement!}
//         text={`${t("Hero.btns.b1")}`}
//     />
//   )
// }

// export default BookBtn
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  /* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookBtn() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"first-visit"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#1197f0"},"dark":{"cal-brand":"#1197f0"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"follow-up"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#1197f0"},"dark":{"cal-brand":"#1197f0"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  return (
    <>
      
    <Cal namespace="first-visit"
      calLink="moatasim-ashraf-jez60p/first-visit"
      style={{width:"100%",height:"100%",overflow:"scroll"}}
      config={{"layout":"month_view","theme":"light"}}
      />
      <Cal namespace="follow-up"
      calLink="moatasim-ashraf-jez60p/follow-up"
      style={{width:"100%",height:"100%",overflow:"scroll"}}
      config={{"layout":"month_view","theme":"dark"}}
      
      
    />;
    </>
  )
};
  