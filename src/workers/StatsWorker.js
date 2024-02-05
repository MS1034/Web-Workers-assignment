// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  function calculateStatistics(paragraph) {
    const stats = {
      Characters: paragraph.length,
      Words: countWords(paragraph),
      Paragraphs: countParagraphs(paragraph),
      repeated_char: findMostRepeatedCharacter(paragraph),
      repeated_Word: findMostRepeatedWord(paragraph),
      awl: calculateAverageWordLength(paragraph),
      longest_word: findLongestWord(paragraph),
    };

    return stats;
  }
  function countWords(paragraph) {
    const words = paragraph.split(/\s+/);
    return words.length;
  }

  function countParagraphs(paragraph) {
    const paragraphs = paragraph.split(/\n\s*\n/);
    return paragraphs.length;
  }

  function findMostRepeatedCharacter(paragraph) {
    // Remove non-alphabetic characters and convert to lowercase for case-insensitive comparison
    const cleanedParagraph = paragraph.replace(/[^a-zA-Z]/g, "").toLowerCase();

    const charCount = {};
    for (const char of cleanedParagraph) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    let mostRepeatedChar = "";
    let maxCount = 0;

    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        mostRepeatedChar = char;
      }
    }

    return mostRepeatedChar;
  }
  function findMostRepeatedWord(paragraph) {
    const words = paragraph.split(/\s+/);

    const wordCount = {};
    for (const word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }

    let mostRepeatedWord = "";
    let maxCount = 0;

    for (const word in wordCount) {
      if (wordCount[word] > maxCount) {
        maxCount = wordCount[word];
        mostRepeatedWord = word;
      }
    }

    return mostRepeatedWord;
  }

  function calculateAverageWordLength(paragraph) {
    const words = paragraph.split(/\s+/);
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    return Math.round(totalLength / words.length) || 0;
  }

  function findLongestWord(paragraph) {
    const words = paragraph.split(/\s+/);
    return words.reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
  }

  function calculateAlphabetFrequency(paragraph) {
    const cleanedParagraph = paragraph.replace(/[^a-zA-Z]/g, "").toLowerCase();

    const alphabetCount = {};

    // Initialize counts for all alphabets
    for (
      let charCode = "a".charCodeAt(0);
      charCode <= "z".charCodeAt(0);
      charCode++
    ) {
      const char = String.fromCharCode(charCode);
      alphabetCount[char] = 0;
    }

    // Update counts based on characters in the cleaned paragraph
    for (const char of cleanedParagraph) {
      if (/[a-z]/.test(char)) {
        alphabetCount[char]++;
      }
    }

    // Convert to the desired format
    const resultArray = Object.entries(alphabetCount).map(
      ([name, frequency]) => ({
        name,
        frequency,
      })
    );

    return resultArray;
  }

  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (e) => {
    const { text } = e.data;

    const startTime = new Date().getTime();
    const result = calculateStatistics(text);
    const freq = calculateAlphabetFrequency(text);

    postMessage({
      result,
      freq,
      time: new Date().getTime() - startTime,
    });
  };
};

// statsCalculator.js
