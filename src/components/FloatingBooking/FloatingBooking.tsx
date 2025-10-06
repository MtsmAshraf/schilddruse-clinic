import { useTranslations } from "next-intl"
import styles from "./floating-booking.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"

export default function FloatingBooking() {
  
  const t = useTranslations("BookBtn")
  
  return(
    <a href="/" className={styles.floatingBooking + " " + "book-btn"}>
      <FontAwesomeIcon icon={faCalendarDays} />
      <span>
        {
          t("Text")
        }
      </span>
    </a>
  )
};