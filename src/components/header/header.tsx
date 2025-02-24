import style from "./header.module.css";
import reactLogo from"../../assets/react.svg";


export const Header= () => {

    return(
        <div className={style.container}>
            <div className={style.titleContainer}>
                <img src={reactLogo} alt="logo" width={50} height={50}/>
                <div>
                    <h1>TaskFlow</h1>
                    <div className="color-gray">
                        <code>eliminer ls choa, suiver le flux</code>
                    </div>
                </div>
            </div>

            <code className="color-primary">
                v.1.0
            </code>

        </div>
    );
 };