export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  if (!text.trim()) {
    throw new Error('O texto está vazio.');
  }

  const langpair = targetLanguage === 'pt' ? 'pt|en' : 'en|pt';

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`
    );

    const data = await response.json();

    if (data.responseData.translatedText) {
      return data.responseData.translatedText;
    } else {
      throw new Error('Não foi possível traduzir o texto.');
    }
  } catch (error) {
    console.error('Erro ao traduzir:', error);
    throw new Error('Houve um problema ao tentar traduzir o texto.');
  }
};