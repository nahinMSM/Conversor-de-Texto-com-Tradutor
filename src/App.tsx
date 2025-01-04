import React, { useState } from 'react';
import Header from './components/Header';
import TextArea from './components/TextArea';
import LanguageSelector from './components/LanguageSelector';
import Voice from './components/Voice';
import useVoices from './hooks/useVoices';
import useSpeechActions from './hooks/useSpeechActions';
import './styles/App.css';
import './styles/Components.css';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');
  const { voices, selectedVoice, setSelectedVoice } = useVoices();
  const { translate, isProcessing, toHear, isSpeaking } = useSpeechActions(language, selectedVoice);

  return (
    <div className="App">
      <Header />
      <Voice
        voices={voices}
        selectedVoice={selectedVoice}
        onSelectVoice={setSelectedVoice}
        onTextChange={setText}
        toHear={() => toHear(text)}
        isListening={isSpeaking}
      />
      <TextArea value={text} onChange={setText} />
      <LanguageSelector
        selectedLanguage={language}
        onSelectLanguage={setLanguage}
        translate={translate}
        isProcessing={isProcessing}
        text={text}
        setText={setText}
      />
    </div>
  );
};

export default App;