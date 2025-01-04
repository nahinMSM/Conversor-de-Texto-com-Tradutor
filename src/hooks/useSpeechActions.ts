import { useState } from 'react';
import { translateText } from '../utils';

const useSpeechActions = (language: string, selectedVoice: SpeechSynthesisVoice | null) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toHear = (text: string) => {
    if (!text.trim()) {
      alert('Por favor, insira algum texto para ouvir.');
      return;
    }

    if (selectedVoice) {
      setIsSpeaking(true);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      utterance.lang = language;

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Por favor, selecione uma voz.');
    }
  };

  const translate = async (text: string, onTranslated: (translatedText: string) => void) => {
    if (!text.trim()) {
      alert('Por favor, insira algum texto para traduzir.');
      return;
    }

    setIsProcessing(true);
    try {
      const targetLanguage = language === 'pt' ? 'en' : 'pt';
      const translatedText = await translateText(text, targetLanguage);
      onTranslated(translatedText);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Ocorreu um erro desconhecido.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return { toHear, translate, isProcessing, isSpeaking };
};

export default useSpeechActions;