import { strict as assert } from 'assert';
import { toPigLatin } from '../src/pigLatin';
import { test } from 'node:test';

// Counters for test results
let passedTests = 0;
let failedTests = 0;

// Function to report test results
function reportResults() {
  console.log(`Total tests: ${passedTests + failedTests}`);
  console.log(`Tests passed: ${passedTests}`);
  console.log(`Tests failed: ${failedTests}`);
}

// Test: Convert words that start with consonants
test('converts words starting with consonants', () => {
  try {
    assert.strictEqual(toPigLatin('pig'), 'igpay');
    assert.strictEqual(toPigLatin('latin'), 'atinlay');
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: converts words starting with consonants');
  }
});

// Test: Convert words that start with vowels
test('converts words starting with vowels', () => {
  try {
    assert.strictEqual(toPigLatin('apple'), 'appleway');
    assert.strictEqual(toPigLatin('orange'), 'orangeway');
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: converts words starting with vowels');
  }
});

// Test: Convert words with mixed case
test('converts words with mixed case', () => {
  try {
    assert.strictEqual(toPigLatin('Pig'), 'igPay');
    assert.strictEqual(toPigLatin('LatIn'), 'atinLay');
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: converts words with mixed case');
  }
});

// Test: Throw error for empty input
test('throws error for empty input', () => {
  try {
    assert.throws(() => toPigLatin(''), {
      name: 'Error',
      message: 'Invalid input: word cannot be empty.',
    });
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: throws error for empty input');
  }
});

// Test: Throws error for input with spaces
test('throws error for input with spaces', () => {
  try {
    assert.throws(() => toPigLatin('hello world'), {
      name: 'Error',
      message: 'Invalid input: word contains spaces.',
    });
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: throws error for input with spaces');
  }
});

// Test: Throw error for words with numbers
test('throws error for words with numbers', () => {
  try {
    assert.throws(() => toPigLatin('pig123'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    assert.throws(() => toPigLatin('123pig'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: throws error for words with numbers');
  }
});

// Test: Throw error for words with symbols
test('throws error for words with symbols', () => {
  try {
    assert.throws(() => toPigLatin('pig@latin'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    assert.throws(() => toPigLatin('#apple'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: throws error for words with symbols');
  }
});

// Test: Throw error for words with mixed numbers and symbols
test('throws error for words with mixed numbers and symbols', () => {
  try {
    assert.throws(() => toPigLatin('123@'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    assert.throws(() => toPigLatin('appl3@'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: throws error for words with mixed numbers and symbols');
  }
});

// Test: Handle long words efficiently
test('handles long words efficiently', () => {
  try {
    const longWord = 'a'.repeat(1000);
    assert.strictEqual(toPigLatin(longWord), longWord + 'way');
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: handles long words efficiently');
  }
});

// Test: Throw error for input with multiple special characters
test('throws error for input with various special characters', () => {
  try {
    assert.throws(() => toPigLatin('pig!@#'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    assert.throws(() => toPigLatin('apple$%^'), {
      name: 'Error',
      message: 'Invalid input: word contains non-letter characters.',
    });
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: throws error for input with various special characters');
  }
});

// Test: Convert words with accented characters
test('converts words with accented characters', () => {
  try {
    assert.strictEqual(toPigLatin('école'), 'écoleway');
    assert.strictEqual(toPigLatin('fiancé'), 'ancéfay');
    passedTests++;
  } catch (error) {
    failedTests++;
    console.error('Test failed: converts words with accented characters');
  }
});

// Print the results summary after running all tests
process.on('exit', () => {
  reportResults();
});
