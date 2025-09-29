"use client"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowPopupModal } from '@/store/showPopupModalSlice';

export default function BookBtn() {

  const t = useTranslations("BookBtn")

    const showModal = useSelector((state: any) => state.showPopupModal.showPopupModal);
    const dispatch = useDispatch();

  return <button
    className={"book-btn main"}
    onClick={() => dispatch(toggleShowPopupModal())}
  >
    <FontAwesomeIcon icon={faCalendarDays} />
    <span>
      {
        t("Text")
      }
    </span>
  </button>;
};
  
  