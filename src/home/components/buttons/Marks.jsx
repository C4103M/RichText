import { FaQuoteRight } from "react-icons/fa";
import styles from "./Buttons.module.css";
// import changeText from "./ActionButton";
import React, { useState } from "react";
import img1 from  "../../../assets/aspas.svg";

function Marks() {
    const [isMark, setIsMark] = useState();
    function changeText() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText !== "") {
            const range = selection.getRangeAt(0);
            const div1 = document.createElement("div");
            div1.textContent = selectedText;

            const img = document.createElement("img");
            img.src = img1;
            img.className = styles.mark_img;

            if (isMark) {
                div1.className = styles.not_mark;
                setIsMark(false);
                window.getSelection().removeAllRanges();
            } else {
                div1.className = styles.mark;
                setIsMark(true);
                window.getSelection().removeAllRanges();
            }
            range.surroundContents(div1);
            div1.appendChild(img);

        }
    }
    return (
        <button className={styles.buttons} onClick={() => changeText()}>
            <FaQuoteRight className={styles.icons2} />
        </button>
    );
}

export default Marks;
