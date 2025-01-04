import React from 'react';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

interface SpeakButtonProps {
  onTextChange: (text: string) => void;
}

export const SpeakButton: React.FC<SpeakButtonProps> = ({ onTextChange }) => {
  const { startListening, isListening } = useSpeechRecognition(onTextChange);

  return (
    <button onClick={startListening} disabled={isListening}>
      {isListening ? '🎤 ...' : '🎤 Fala'}
    </button>
  );
};

interface ToHearButtonProps {
  toHear: () => void;
  isListening: boolean;
}

export const ToHearButton: React.FC<ToHearButtonProps> = ({ toHear, isListening }) => (
  <button onClick={toHear} disabled={isListening}>
    {isListening ? '👂🏻 ...' : '👂🏻 Ouvir'}
  </button>
);

interface TranslateButtonProps {
  onTranslate: () => void;
  isProcessing: boolean;
}

export const TranslateButton: React.FC<TranslateButtonProps> = ({ onTranslate, isProcessing }) => (
  <button onClick={onTranslate} disabled={isProcessing}>
    {isProcessing ? 'Traduzindo...' : 'Traduzir para'}
  </button>
);