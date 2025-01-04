export const textToSpeech = (text: string, voice: SpeechSynthesisVoice | null, language: string) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  if (voice) utterance.voice = voice;
  utterance.lang = language;
  synth.speak(utterance);
};