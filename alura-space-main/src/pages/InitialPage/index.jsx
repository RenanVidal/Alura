import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import styles from './InitialPage.module.scss';
import { Fragment } from "react";

export default function InitialPage () {
    return (
        <Fragment>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}