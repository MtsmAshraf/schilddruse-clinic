import { useTranslations } from "next-intl"
import styles from "./floating-booking.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { Link } from "@/i18n/navigation"

export default function FloatingBooking() {
  
  const t = useTranslations("BookBtn")
  
  return(
    <Link href="https://www.meinarztonline.at/app/api/onlineBookingFrame/320506" target="_blank" className={styles.floatingBooking + " " + "book-btn"}>
      <FontAwesomeIcon icon={faCalendarDays} />
      <span>
        {
          t("Text")
        }
      </span>
    </Link>
  )
};