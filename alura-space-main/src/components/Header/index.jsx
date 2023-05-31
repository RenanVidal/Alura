import logo from './logo.png';
import search from './search.png'; 
import styles from './Header.module.scss';

export default function Header () {
    return (
        <header className={styles.Header}>
            <img src={logo} alt="Logo da Alura Space" srcset="" />
            <div className={styles.Header__container}>
                <input 
                    className={styles.Header__input}
                    type="text" 
                    placeholder="O que você procura?" 
                />
                <img src={search} alt="Icone de lupa" />
            </div>
        </header>
    )
}