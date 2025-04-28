
// Corrected import path for the Item interface
export interface Item {
    id: string;
    name: string;
    price: number;
    dateAdded: string;
}

import style from "./taskList.module.css";

interface TaskListProps {
    itemList: Item[];
    totalPrice: number;
    initialAmount: number;
    message: string;
}

export const TaskList: React.FC<TaskListProps> = ({
    itemList,
    totalPrice,
    initialAmount,
    message,
}) => {
    return (
        <div className="box">
            <h2 className={style.title}>🛒 Liste de courses</h2>
            {itemList.length > 0 ? (
                <ul className={style.container}>
                    {itemList.map((item) => (
                        <li key={item.id} className={style.item}>
                            {item.name} - {item.price} € (Ajouté le: {item.dateAdded})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun article ajouté à la liste</p>
            )}

            <div className={style.actions}>
                <p>Total: {totalPrice} €</p>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};