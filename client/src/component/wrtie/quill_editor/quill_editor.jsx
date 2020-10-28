import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styles from './quill_editor.module.css';

const QuillEditor = () => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정
  
    useEffect(() => {
      quillInstance.current = new Quill(quillElement.current, {
        theme: 'bubble',
        placeholder: '내용을 작성하세요...',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ],
        },
      });
    }, []);
  
    return (
        <div className={styles.editor_block}>
            <input className={styles.title} type="text" placeholder="제목을 입력하세요" />
            <div className={`${styles.ql_editor} ${styles.ql_blank}`}>
              <div ref={quillElement} />
            </div>
        </div>
    );
};

export default QuillEditor;