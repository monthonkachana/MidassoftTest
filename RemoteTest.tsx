function getQuestionPart(phrases: string[]): string[] {
    const commonWordLength = Math.min(...phrases.map((phrase) => phrase.length));
    const questionParts: string[] = [];
  
    for (let i = 0; i < commonWordLength; i++) {
      const letters = new Set(phrases.map((phrase) => phrase[i]));
      if (letters.size === 1) {
        questionParts.push(Array.from(letters)[0]);
      } else {
        break;
      }
    }
  
    return questionParts;
  }
  console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"])); // ["ROOM", "SALTS", "BLOOD"]
  console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])); // ["BE", "GIRL", "SHIP"]
  

//npx tsx ./RemoteTest.tsx