import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<Props> = ({ value, onChange }) => (
  <textarea
    placeholder="Digite ou fale algo..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="textarea"
  />
);

export default TextArea;