import i18n from './i18n';

export function speak(text) {
    if (!('speechSynthesis' in window)) {
        alert(i18n.t('error.speech.notSupported'));
        return;
    }

    try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        speechSynthesis.speak(utterance);
    } catch (err) {
        alert(i18n.t('error.speech.playError'));
    }
}