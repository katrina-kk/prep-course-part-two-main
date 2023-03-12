//TASK DONE 

/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */
//klase ietvars koda daļai. tā tiek izmantota, lai uztaisītu jaunu objekta instanci. objekts tiek uztaisīts kaut kur kompim atmiņā, rezervēta viņam vieta.  
//ar this varam piekļūt klasei
//ar get ir mērķis tikai paņemt, kodus nav nepieciešamība mainīt 
//testā var redzēt ar "new" klasē notiek jauna objekta inicializācija, paskatīties vērtību, piem, ar latest pēc tam, kad bijis inputs masīvā
//-1 jo sākas ar 0, citādi būs undefined
//... punkti, jo vajag izvilkt masīva vērtības ārā  , jo Math.Max nevar iedot masīvu, vajag iedot kā atsevišķus argumentus
//Spread syntax (...)
class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length -1];
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {

    return [...this.scores].sort((a, b) => b - a).slice(0,3);
  }
// [...] uztaisa jaunu masīvu un ieliek vērtības no scores
  //pēc šī rodas errors. jo order of scores is kept. vajag nokopēt masīvu. jo sort izmaina oriģinālo. 
  // Piemēram, ar for loopu arī varētu to darīt. tiek uztaisīts jauns masīvs, iziet tam cauri, izķeram elementu un ieliekam jaunā masīvā. tad būtu 2 paši par sevi masīvi. 
}

export { HighScores };


/* original 
class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return 0;
  }

  get personalBest() {
    return 0;
  }

  get personalTopThree() {
    return 0;
  }
}

export { HighScores };  */
