"use client"
import styles from "./floating-booking.module.css"

import BookBtn from "../BookBtn/BookBtn";
import { useTranslations } from "next-intl";
import { Provider } from "react-redux";
import { store } from "@/store/store";
export default function FloatingBooking() {
  
  const t = useTranslations("BookBtn") 

  return(
    <Provider store={store}>
      <div className={styles.floatingBooking}>
        <BookBtn />
      </div>
    </Provider>
  )
};
  
  