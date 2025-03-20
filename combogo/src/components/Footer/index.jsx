import React from 'react';
import styles from "./styles.module.css";
import { InstagramLogo, YoutubeLogo, Envelope, LinkedinLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';

import Logo from "../../assets/logo.png";

export function Footer() {

    return (
        <footer>
            <img src={Logo} alt="logo Combogó" />


            <nav>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
            </nav>

            <div>
            <a href="https://www.instagram.com/combogounicap/" target="_blank">
                    <InstagramLogo size={32}/>
                </a>

                <a href="https://www.youtube.com/@combogounicap" target="_blank">
                    <YoutubeLogo size={32}/>
                </a>
                
                <a href="mailto:combogo.unicap@unicap.br"> <Envelope size={32}/>
                </a>
                
                <a href="https://www.linkedin.com/company/combog%C3%B3-unicap" target="_blank">
                    <LinkedinLogo size={32}/>
                </a>
            </div>
        </footer>


    );



}