import React from 'react';
import { SpeakButton, ToHearButton } from './Controls';

interface Props {
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  onSelectVoice: (voice: SpeechSynthesisVoice | null) => void;
  onTextChange: (text: string) => void;
  toHear: () => void;
  isListening: boolean;
}

const Voices: React.FC<Props> = ({ voices, selectedVoice, onSelectVoice, onTextChange, toHear, isListening }) => {
  return (
    <div className="controls">
      <select
        className="select-voice"
        value={selectedVoice?.name || ''}
        onChange={(e) =>
          onSelectVoice(voices.find((voice) => voice.name === e.target.value) || null)
        }
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
      <SpeakButton onTextChange={onTextChange} />
      <ToHearButton toHear={toHear} isListening={isListening} />
    </div>
  );
};

export default Voices;