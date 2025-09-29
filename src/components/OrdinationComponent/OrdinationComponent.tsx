import React from 'react'
import styles from "./ordination-component.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import Image from 'next/image'

import clinic1 from "../../../public/images/clinic-1.webp"
import clinic2 from "../../../public/images/clinic-2.webp"
import clinic3 from "../../../public/images/clinic-3.webp"
import clinic4 from "../../../public/images/clinic-4.webp"
import clinic5 from "../../../public/images/clinic-5.webp"
import { useTranslations } from 'next-intl'


const OrdinationComponent = () => {
  const t = useTranslations("DieOrdination")
  return (
    <section className={styles.ordinationComponent}>
        <MainHeading>
        {
            t("Heading")
        }
        </MainHeading>
        <div className={styles.imgsContainer + " " + "container"}>
        <Image src={clinic2} alt='clinic'></Image>
        <Image src={clinic3} alt='clinic'></Image>
        <Image src={clinic4} alt='clinic'></Image>
        <Image src={clinic5} alt='clinic'></Image>
        <Image src={clinic1} alt='clinic'></Image>
        </div>
    </section>
  )
}

export default OrdinationComponent