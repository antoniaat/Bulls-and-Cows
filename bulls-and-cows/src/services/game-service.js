import handleResponse from "../utils/handle-response";

const gameService = {
  getBullsAndCows: function(guessedNumber, secretNumber) {
    const secretSeq = secretNumber.split("");
    const guessedSeq = guessedNumber.split("");
    const bullMatch = "X";
    const cowMatch = "Z";
    let result = {
      bulls: 0,
      cows: 0
    };

    secretSeq.forEach(function(_, i) {
      if (secretSeq[i] === guessedSeq[i]) {
        result.bulls = ++result.bulls;
        secretSeq[i] = bullMatch;
        guessedSeq[i] = cowMatch;
      } else if (secretSeq.indexOf(guessedSeq[i]) >= 0) {
        result.cows = ++result.cows;
      }
    });

    return { ...result };
  },

  generateSecretNumber: function() {
    let arr = [];

    while (arr.length < 4) {
      let num = Math.floor(Math.random() * 10);

      if (num === 0 && arr.length === 0) continue;
      if (arr.indexOf(num) === -1) arr.push(num);
    }

    return arr.join("");
  },

  createAttempt: function(guessedNumber, bulls, cows, attemptCount) {
    return {
      guessedNumber: "" || guessedNumber,
      bulls: 0 || bulls,
      cows: 0 || cows,
      attemptCount: 0 || attemptCount
    };
  },

  updateUserPoints: function(user) {
    const id = user._id;

    return fetch(`http://localhost:9999/api/user/${id}`, {
      body: JSON.stringify(user),
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      credentials: "include"
    }).then(handleResponse);
  }
};

export default gameService;
