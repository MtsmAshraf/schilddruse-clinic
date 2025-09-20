"use client"
import React, { useEffect, useState } from 'react'
import styles from "./floating-booking.module.css"
import { PopupButton } from 'react-calendly'
import { useTranslations } from 'next-intl'


const FloatingBooking = () => {
    const t = useTranslations
    ("HomePage")

    const [rootElement, setRootElement] = useState<HTMLElement>();

    useEffect(() => {
    // Runs only on client
    const el: HTMLElement = document.body;
    if (el) {
        setRootElement(el);
    }
    }, []); 
    return (
        <PopupButton
            className={styles.floatingBooking}
            url="https://calendly.com/mo32000a/schilddruse"
            /*
            * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
            * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
            */
            rootElement={rootElement!}
            text={`${t("Hero.btns.b1")}`}
        />
)
}

export default FloatingBooking