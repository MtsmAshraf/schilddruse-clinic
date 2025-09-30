"use client"
import React, { useEffect } from 'react'
import styles from "./popup-modal.module.css"
import { useTranslations } from 'next-intl'
import { getCalApi } from '@calcom/embed-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowPopupModal } from '@/store/showPopupModalSlice'

const PopupModal = () => {
    const t = useTranslations("BookBtn") 

    const showPopupModal = useSelector((state: any) => state.showPopupModal.showPopupModal);
    const dispatch = useDispatch();


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
  return (
        <div className={showPopupModal ? styles.popupModal + " " + styles.shown : styles.popupModal} >
            <div 
                className={styles.overlay}
                onClick={() => {
                    dispatch(toggleShowPopupModal());
                    console.log("CLICKED", showPopupModal)

                }}
            ></div>
            <button 
                className={styles.closeModal}
                onClick={() => {
                    dispatch(toggleShowPopupModal());
                    console.log("CLICKED", showPopupModal)

                }}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className={styles.content}>
                <h3>
                    {
                        t("Modal.Heading")
                    }
                </h3>
                <div className={styles.modalBtns}>
                    <button data-cal-namespace="first-visit"
                        data-cal-link="moatasim-ashraf-jez60p/first-visit"
                        
                        data-cal-config='{"layout":"month_view","theme":"light"}'
                    >
                        <span>
                            {
                            t("Modal.First")
                            }
                        </span>
                    </button>
                    <button data-cal-namespace="follow-up"
                        data-cal-link="moatasim-ashraf-jez60p/follow-up"
                        
                        data-cal-config='{"layout":"month_view","theme":"light"}'
                    >
                        <span>
                            {
                            t("Modal.FollowUp")
                            }
                        </span>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default PopupModal