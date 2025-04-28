import React from 'react';
import { Link } from 'react-router-dom'; // Utilisation de react-router pour la navigation
import './HomePage.module.css'; // Importation du fichier CSS pour le style

const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bienvenue sur Machet List</h1>
                <p>Gérez vos achats facilement et efficacement. Entrez votre budget, ajoutez vos articles, et suivez vos dépenses !</p>
                <Link to="/taskcontainer" className="start-button">
                    Commencer
                </Link>
            </header>
        </div>
    );
};

export default HomePage;
