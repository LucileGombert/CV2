import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Lucile Gombert</h1>
                    <h2>Développeuse web Fullstack JS</h2>
                    <div className="pdf">
                        <a href="./images/CV.pdf" target="_blank">Télécharger le CV </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;