// composant permet d'afficher le chant de saisie des tache
import { useState } from "react";
import style from "./taskinput.module.css";

interface TaskInputProps {
    addItem: (name: string, price: number) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ addItem }) => {
    const [name, setName] = useState<string>(''); // Nom de l'article
    const [price, setPrice] = useState<number>(0); // Prix de l'article

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ajouter l'article uniquement si le nom et le prix sont valides
        if (name.trim() && price > 0) {
            addItem(name, price);
            setName(''); // Réinitialiser le nom
            setPrice(0); // Réinitialiser le prix
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Nom de l'article"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Prix de l'article"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
            </div>
            <button type="submit">Ajouter l'article</button>
        </form>
    );
};