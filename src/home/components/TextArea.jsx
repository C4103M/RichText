import styles from "./TextArea.module.css";
import Title from "./buttons/Title";
import Bold from "./buttons/Bold";
import Italic from "./buttons/Italic";
import UpperCase from "./buttons/UpperCase";
import Underline from  "./buttons/Underline";
import Marks from  "./buttons/Marks";
import React from "react";

function Home() {


    return (
        <div className={styles.container}>
            <div className={styles.container_buttons}>
                <Title  />
                <Bold />
                <Italic />
                <UpperCase />
                <Underline/>
                <Marks/>
            </div>
            <div contentEditable="true" name="areaTexto" id="txtArea" className={styles.textarea} ></div>
        </div>
    )
}

export default  Home;