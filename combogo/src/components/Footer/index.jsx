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
            <div className={styles.divlogo}>
                <img src={Logo} alt="logo" />
                <nav>
                    <a href="#home">{t("header.nav.home")}</a>
                    <span>/</span>
                    <a href="#sobre">{t("header.nav.about")}</a>
                    <span>/</span>
                    <a href="#projetos">{t("header.nav.projects")}</a>
                </nav>
            </div>
            <div className={styles.div2}>
                <div className={styles.div1}>
                    <div>
                        <strong>{t("footer.contact")}</strong>
                        <span>(+55) 81 2119-4016</span>
                    </div>

                    <div>
                        <strong>{t("footer.email")}</strong>
                        <span>combogo.unicap@unicap.br</span>
                    </div>
                </div>
                <div className={styles.div1}>
                    <div>
                        <strong>{t("footer.address")}</strong>
                        <span>R. do Principe, 526 - Boa Vista - Recife, PE - Cep: 50050-900 - Bloco R, Sala 117.</span>
                    </div>

                    <div>
                        <strong>{t("footer.open")}</strong>
                        <span>9am - 6pm</span>
                    </div>
                </div>
            </div>

            <div className={styles.div1}>
                <span className={styles.copy}>
                    © 2025 - Copyright
                </span>
            </div>

        </footer>
    );
}

//Universidade Catolica de Pernambuco - Rua do Principe, 526 - Boa Vista - Recife, PE - Cep: 50050-900 - Telefone (+55) 81 2119-4016 Sala 117