import React from 'react';
import AskModal from '../common/askModal/ask_modal';

const AskRemoveModal = ({visible, onConfirm, onCancel}) => {
    return (
        <div>
            <AskModal 
                visible={visible}
                title="포스트 삭제"
                description="포스트를 정말 삭제하시겠습니까?"
                confirmText="삭제"
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </div>
    );
};

export default AskRemoveModal;