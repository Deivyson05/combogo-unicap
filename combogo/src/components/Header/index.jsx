import React from 'react';
import styles from "./styles.module.css";
import {InstagramLogo, YoutubeLogo, Envelope, LinkedinLogo} from 'phosphor-react';

import Logo from "../../assets/logo.png";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo Combogó" />

            <nav>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
            </nav>

            <div>
                <a href="#">
                    <InstagramLogo size={32}/>
                </a>

                <a href="#">
                    <YoutubeLogo size={32}/>
                </a>
                
                <a href="#"> <Envelope size={32}/>
                </a>
                
                <a href="#">
                    <LinkedinLogo size={32}/>
                </a>
            </div>
        </header>
    );
    
}