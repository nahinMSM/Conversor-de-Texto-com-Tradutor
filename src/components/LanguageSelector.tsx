import React from 'react';
import { TranslateButton } from './Controls';

interface Props {
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
  translate: (text: string, onTranslated: (translatedText: string) => void) => void;
  isProcessing: boolean;
  text: string;
  setText: (text: string) => void;
}

const LanguageSelector: React.FC<Props> = ({
  selectedLanguage,
  onSelectLanguage,
  translate,
  isProcessing,
  text,
  setText,
}) => {
  const handleTranslate = () => {
    translate(text, (translatedText) => {
      setText(translatedText);
      onSelectLanguage(selectedLanguage === 'en' ? 'pt' : 'en');
    });
  };

  return (
    <div className='controls'>
      <TranslateButton onTranslate={handleTranslate} isProcessing={isProcessing} />
      <select
        className="language-selector"
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
      >
        <option value="en">Inglês</option>
        <option value="pt">Português</option>
      </select>

    </div>
  );
};

export default LanguageSelector;