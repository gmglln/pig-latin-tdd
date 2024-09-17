export function toPigLatin(word: string): string {
  // Validate that the input is a non-empty string
  if (typeof word !== 'string' || !word.trim()) {
    throw new Error('Invalid input: word cannot be empty.');
  }

  // Normalize the input to avoid case issues
  const normalizedWord = word.toLowerCase().trim();
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Check if the first letter is a vowel
  if (vowels.has(normalizedWord[0])) {
    return normalizedWord + 'way';
  } else {
    // Find the index of the first vowel using regular expression
    const firstVowelMatch = normalizedWord.match(/[aeiou]/);
    if (!firstVowelMatch) {
      // No vowel found
      return normalizedWord + 'ay';
    }

    const firstVowelIndex = firstVowelMatch.index!;
    return normalizedWord.slice(firstVowelIndex) + normalizedWord.slice(0, firstVowelIndex) + 'ay';
  }
}
