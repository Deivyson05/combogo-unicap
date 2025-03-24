import React from 'react';
import styles from "./styles.module.css";
import {InstagramLogo, YoutubeLogo, Envelope, LinkedinLogo} from 'phosphor-react';
import { useEffect, useState } from 'react';

import Logo from "../../assets/logo.png";

import { useTranslation } from "react-i18next";
import "../../i18n";

export function Header() {
    const {t, i18n} = useTranslation();

    const [activeSection, setActiveSection] = useState(null);

  useEffect(()=> {
        const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= (sectionTop + sectionHeight)) {
            currentSection = section.id;
            }
        });

        setActiveSection(currentSection);
        }

        window.addEventListener('scroll', handleScroll);

        return ()=> {
        window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    

    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo Combogó" />

            <nav>
                <a href="#home" style={{borderColor: activeSection === 'home' ? '#F5821F' : 'gray'}}>{t("header.nav.home")}</a>
                <a href="#sobre" style={{borderColor: activeSection === 'sobre' ? '#F5821F' : 'gray'}}>{t("header.nav.about")}</a>
                <a href="#projetos" style={{borderColor: activeSection === 'projetos' ? '#F5821F' : 'gray'}}>{t("header.nav.projects")}</a>
            </nav>

            <div>
                <a href="https://www.instagram.com/combogounicap/" target="_blank">
                    <InstagramLogo size={32}/>
                </a>

                <a href="https://www.youtube.com/@combogounicap" target="_blank">
                    <YoutubeLogo size={32}/>
                </a>
                
                <a href="mailto:combogo.unicap@unicap.br" target="_blank"> <Envelope size={32}/>
                </a>
                
                <a href="https://www.linkedin.com/company/combog%C3%B3-unicap" target="_blank">
                    <LinkedinLogo size={32}/>
                </a>
            </div>
        </header>
    );
    
}