import { MdTitle } from "react-icons/md";
import styles from "./Buttons.module.css";
// import changeText from "./ActionButton";
import React, { useState } from "react";

function Title() {
    const [isTitle, setIsTitle] = useState()
    function changeText() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText !== '') {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.textContent = selectedText;

            if (isTitle) {
                span.className = styles.not_title;
                setIsTitle(false);
                window.getSelection().removeAllRanges();
            } else {
                span.className = styles.title;
                setIsTitle(true);
                window.getSelection().removeAllRanges();
            }
            range.surroundContents(span);
        }
    }
    return (
        <button className={styles.buttons} onClick={() => changeText()}>
            <MdTitle className={styles.icons} />
        </button>
    );
}

export default Title;
