import React from "react";
import open from "./open.png";
import like from "./favorito.png";

export default function Card({ item, style }) {
    return (
        <li className={style.gallery__card}>
            <img
                className={style.gallery__image}
                src={item.imagem}
                alt={item.titulo}
            />
            <p className={style.gallery__description}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={open} alt="icone de expandir" />
                    <img src={like} alt="ícone de coração ou favoritar" />
                </span>
            </div>
        </li>
    );
}