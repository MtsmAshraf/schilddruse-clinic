"use client"
import styles from "./floating-booking.module.css"

import BookBtn from "../BookBtn/BookBtn";
import { Provider } from "react-redux";
import { store } from "@/store/store";
export default function FloatingBooking() {
  
  return(
    <Provider store={store}>
      <div className={styles.floatingBooking}>
        <BookBtn />
      </div>
    </Provider>
  )
};
  
  