import React, { useState } from 'react';
import { MdFormatBold } from 'react-icons/md';
import styles from './Buttons.module.css';

function Bold() {
    const [isBold, setIsBold] = useState(false);
    function boldText() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText !== '') {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.textContent = selectedText;

            if (isBold) {
                span.className = styles.not_bold;
                setIsBold(false);
                window.getSelection().removeAllRanges();
            } else {
                span.className = styles.bold;
                setIsBold(true);
                window.getSelection().removeAllRanges();
            }
            range.surroundContents(span);
        }
    }

    return (
        <button className={styles.buttons} onClick={() => boldText()}>
            <MdFormatBold className={styles.icons} />
        </button>
    );
}

export default Bold;
