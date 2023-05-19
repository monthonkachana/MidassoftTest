function getHandScore(input: string): number {
  const cards = input.split(" "); // แยก input
  const suits: { [key: string]: number } = {
    S: 0, // Spades
    C: 0, // Clubs
    H: 0, // Hearts
    D: 0, // Diamonds
  };

  let rankScore = 0;  
  let maxSuitScore = 0; // score สูงสุด

  for (const card of cards) {
    const suit = card.charAt(0); 
    const rank = card.slice(1); // แยกrank (หลัง suit )

  //rank
    if (rank === "A") {
      rankScore = 35; // A-A-A is  35 
    } else if (isNaN(Number(rank))) {
      rankScore = 32.5; //  (ไม่รวม A-A-A)
    }

 //suits
    if (rank !== "A") {
      suits[suit] += isNaN(Number(rank)) ? 10 : Number(rank); //(J, Q, K) มีค่าเท่ากับ 10 ส่วนไพ่ใบอื่นมีค่าตามจำนวน
    }
  }

  // ค้นหาคะแนนสูงสุด
  maxSuitScore = Math.max(...Object.values(suits));


  return Math.max(rankScore, maxSuitScore);
}

console.log(getHandScore("S8 S10 CA")); 
