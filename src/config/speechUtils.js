import { toast } from 'react-toastify';

export function speak(text) {
    if (!('speechSynthesis' in window)) {
        toast.error("Trình duyệt của bạn không hỗ trợ chức năng chuyển văn bản thành giọng nói.");
        
        return;
    }

    try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        speechSynthesis.speak(utterance);
    } catch (err) {
        toast.error("Không thể phát âm thanh. Vui lòng thử lại.");
    }
}