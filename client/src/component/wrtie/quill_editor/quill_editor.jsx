import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styles from './quill_editor.module.css';

const QuillEditor = ({title, body, onChangeField}) => {
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
            ['blockquote', 'code-block', 'link', 'image'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ],
        },
      });
      //quill에 text-change 이벤트 핸들러 등록
      const quill = quillInstance.current;
      quill.on('text-change', (delta, oldDelta, source) => {
          onChangeField({key: 'body', value: quill.root.innerHTML})
      });
    }, [onChangeField]);

    const onChangeTitle = e => {
      onChangeField({key: 'title', value: e.target.value});
    }
  
    return (
        <div className={styles.editor_block}>
            <input className={styles.title} type="text" placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title} />
            <div className={`${styles.ql_editor} ${styles.ql_blank}`}>
              <div ref={quillElement} />
            </div>
        </div>
    );
};

export default QuillEditor;