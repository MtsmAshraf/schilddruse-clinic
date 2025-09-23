"use client"
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly';

const BookBtn = () => {
    const t = useTranslations("HomePage")

  // getting root element on the client side
  
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
        className='book-btn main'
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

export default BookBtn