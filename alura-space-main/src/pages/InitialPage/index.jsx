import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import banner from './banner.png';
import styles from './InitialPage.module.scss';

export default function InitialPage () {
    return (
        <fragments>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
        </fragments>
    );
}