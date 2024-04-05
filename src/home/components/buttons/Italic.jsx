import { MdFormatItalic } from "react-icons/md";
import styles from "./Buttons.module.css";
import React, {useState} from "react";

function Italic () {
    const [isItalic, setIsItalic] = useState(false)
    function changeItalic() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText !== '') {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.textContent = selectedText;

            if (isItalic) {
                span.className = styles.not_italic;
                setIsItalic(false);
                window.getSelection().removeAllRanges();
            } else {
                span.className = styles.italic;
                setIsItalic(true);
                window.getSelection().removeAllRanges();
            }
            range.surroundContents(span);
        }

    }
    return (
        <button className={styles.buttons} onClick={() => changeItalic()}>
            <MdFormatItalic className={styles.icons}/>
        </button>
    )
}

export default Italic;