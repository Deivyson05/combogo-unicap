import React from 'react';
import styles from "./styles.module.css";
import { InstagramLogo, YoutubeLogo, Envelope, LinkedinLogo } from 'phosphor-react';
import { useTranslation } from "react-i18next";
import "../../i18n";
import Logo from "../../assets/logo.png";

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            
            <img src={Logo} alt="logo Combogó" />

            <nav className={styles.nav}>
                <a href="#sobre" className={styles.navLink}>{t("header.nav.about")}</a>
                <a href="#projetos" className={styles.navLink}>{t("header.nav.projects")}</a>
                <a href="https://maps.app.goo.gl/XCBGHneTdD1Zgqom8" target='_blank' className={`${styles.navLink}`}>Endereço</a>
            </nav>

            

            <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/combogounicap/" target="_blank">
                    <InstagramLogo size={32} />
                </a>
                <a href="https://www.youtube.com/@combogounicap" target="_blank">
                    <YoutubeLogo size={32} />
                </a>
                <a href="mailto:combogo.unicap@unicap.br" >
                    <Envelope size={32} />
                </a>
                <a href="https://www.linkedin.com/company/combog%C3%B3-unicap" target="_blank">
                    <LinkedinLogo size={32} />
                </a>
            </div>

            
        </footer>
    );
}

//Universidade Catolica de Pernambuco - Rua do Principe, 526 - Boa Vista - Recife, PE - Cep: 50050-900 - Telefone (+55) 81 2119-4016 Sala 117