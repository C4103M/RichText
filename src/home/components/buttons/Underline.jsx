import { FaUnderline } from "react-icons/fa";
import styles from "./Buttons.module.css";
import React, { useState } from "react";

function Underline() {
    const [isUnderline, setIsUnderline] = useState(false);
    function changeUnderline() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText !== '') {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.textContent = selectedText;

            if (isUnderline) {
                let span2 = document.getElementsByClassName(styles.underline)[0];
                span2.classList.remove(styles.underline);
                span.className = styles.not_underline;
                console.log("not underline");
                setIsUnderline(false);
                window.getSelection().removeAllRanges();
            } else {
                span.className = styles.underline;
                setIsUnderline(true);
                window.getSelection().removeAllRanges();
            }
            
            range.surroundContents(span);
        }
    }
    return (
        <button className={styles.buttons} onClick={() => changeUnderline()}>
            <FaUnderline  className={styles.icons2} />
        </button>
    );
}

export default Underline;
