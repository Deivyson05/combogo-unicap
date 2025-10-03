import { useTranslation } from "react-i18next";
import "../../i18n";
import styles from "./styles.module.css";
import { useState } from "react";

import En from "../../assets/en-lang.png";
import Pt from "../../assets/pt-lang.png";

export function Idioma({ onSendData, initialLanguage }) {
    const [language, setLanguage] = useState(initialLanguage || 'pt');
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const handleLanguageChange = () => {
        const newLanguage = language === 'pt' ? 'en' : 'pt';
        changeLanguage(newLanguage);
        setLanguage(newLanguage);

        if (onSendData) {
            onSendData(newLanguage);
        }
    };

    return (
        <button className={styles.container} onClick={handleLanguageChange}>
            {language === 'pt' ? <img src={Pt} alt="Pt" /> : <img src={En} alt="En" />}
        </button>
    );
}