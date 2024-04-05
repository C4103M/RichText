import { CgFormatUppercase } from "react-icons/cg";
import styles from "./Buttons.module.css";
import React, { useState } from "react";

function UpperCase() {
    const [isUpperCase, setIsUpperCase] = useState()
    function changeText() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText !== '') {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.textContent = selectedText;

            if (isUpperCase) {
                span.className = styles.not_upper_case;
                setIsUpperCase(false);
                window.getSelection().removeAllRanges();
            } else {
                span.className = styles.upper_case;
                setIsUpperCase(true);
                window.getSelection().removeAllRanges();
            }
            range.surroundContents(span);
        }
    }
    return (
        <button className={styles.buttons} onClick={() => changeText()}>
            <CgFormatUppercase className={styles.icons3} />
        </button>
    );
}

export default UpperCase;
