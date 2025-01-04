import { useState } from 'react';

const useSpeechRecognition = (onTextChange: (text: string) => void) => {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onTextChange(transcript);
    };

    recognition.start();
  };

  return { startListening, isListening };
};

export default useSpeechRecognition;