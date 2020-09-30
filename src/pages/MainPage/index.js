import React from 'react';
import './index.css';
import { GrCode, GrGithub, GrLinkedin } from 'react-icons/gr';

const MainPage = () => {

    return (
        <>
            <main className="main">
                <section className="main-about">
                    <div>
                        <h1>JOEL S. MBENGUI</h1>
                        <p>Software Developer</p>
                    </div>
                    <div className="service">
                        <p style={{ color: "#530082" }}><GrCode size={'12rem'} /></p>
                    </div>
                </section>
            </main>
            <footer>
                <ul className="d-flex-center">
                    <li><a href="https://github.com/JSMbengui" target="_blank"  rel="noopener noreferrer"><GrGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/joel-sebasti%C3%A3o-mbengui/" target="_blank"  rel="noopener noreferrer"><GrLinkedin /></a></li>
                </ul>
            </footer>
        </>
    )
}

export default MainPage;