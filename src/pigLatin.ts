export function toPigLatin(word: string): string {
  // Validations
  validateInput(word);

  // Normalize the input to avoid case issues, but keep accents intact
  const normalizedWord = word.toLowerCase().trim();
  const isCapitalized = word[0] === word[0].toUpperCase();
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']);

  // Check if the first letter is a vowel
  if (vowels.has(normalizedWord[0])) {
    const result = normalizedWord + 'way';
    return isCapitalized ? capitalize(result) : result;
  }

  // Find the index of the first vowel
  const firstVowelIndex = findFirstVowelIndex(normalizedWord);
  const result = normalizedWord.slice(firstVowelIndex) + normalizedWord.slice(0, firstVowelIndex) + 'ay';
  return isCapitalized ? capitalize(result) : result;
}

// Helper function to validate input
function validateInput(word: string): void {
  if (typeof word !== 'string' || !word.trim()) {
    throw new Error('Invalid input: word cannot be empty.');
  }
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚ]+$/.test(word)) {
    throw new Error('Invalid input: word contains non-letter characters.');
  }
}

// Helper function to capitalize the first letter of a string
function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Helper function to find the index of the first vowel
function findFirstVowelIndex(word: string): number {
  const firstVowelMatch = word.match(/[aeiouáéíóú]/);
  if (!firstVowelMatch) {
    return word.length;
  }
  return firstVowelMatch.index!;
}
