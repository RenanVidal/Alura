import Banner from 'components/Banner';
import Baseboard from 'components/Baseboard';
import Gallery from 'components/Gallery';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Popular from 'components/Popular';

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
                <div className={styles.gallery}>
                    <Gallery />
                    <Popular />
                </div>
            </main>
            <Baseboard />
        </Fragment>
    );
}