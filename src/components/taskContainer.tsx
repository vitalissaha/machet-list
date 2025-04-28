import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskinput/taskinput";
import { TaskList } from "./taskList/taskList";
import HomePage from "./page-acceuil/HomePage";
import { Item } from "./taskList/taskList";

// Removed local declaration of Item to avoid conflict with the imported one

export const TaskContainer = () => {
    const [itemList, setItemList] = useState<Item[]>([]); // Liste des articles
    const [totalPrice, setTotalPrice] = useState<number>(0); // Total des prix des articles
    const [initialAmount, setInitialAmount] = useState<number>(0); // Montant initial que l'utilisateur a
    const [message, setMessage] = useState<string>(''); // Message pour afficher si la somme est atteinte

    // Fonction pour ajouter un article à la liste
    const addItem = (name: string, price: number) => {
        const currentDate = new Date().toLocaleDateString(); // Récupérer la date du jour
        // Vérifie si le prix total n'excède pas le budget
        if (totalPrice + price > initialAmount) {
            setMessage("Vous avez épuisé votre budget.");
        } else {
            const newItem = {
                id: (itemList.length + 1).toString(),
                name,
                price,
                dateAdded: currentDate, // Ajouter la date
            };
            setItemList((prevList) => [...prevList, newItem]);
            setTotalPrice((prevTotal) => prevTotal + price);
        }
    };

    // Fonction pour définir la somme initiale
    const setAmount = (amount: number) => {
        setInitialAmount(amount);
        setTotalPrice(0); // Réinitialiser le total des prix si on entre une nouvelle somme
        setItemList([]); // Réinitialiser la liste des articles
        setMessage(''); // Réinitialiser le message
    };

    return (
        <main>
            <Header />
            <HomePage/>
            <div>
                <label>Entrez votre budget initial: </label>
                <input
                    type="number"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    value={initialAmount}
                    placeholder="Entrez le budget"
                />
            </div>
            <TaskInput addItem={addItem} />
            <TaskList
                itemList={itemList}
                totalPrice={totalPrice}
                initialAmount={initialAmount}
                message={message}
            />
            <Footer />
        </main>
    );
};