/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */
//tests uzkarās, jo tie ir neredzamie property katram objektam iebūvĒti iekšā. jāmeklē keys tajā objektā uzkarās vai skaita nepareizi
// ir funkcija, kuru var izsaukt uz objektu. Object.prototype.hasOwnProperty() iet cauri katram objektam un skaitīt klāt +1
//izmantot reduce un tests aizies automātiski, vajag pareizi notipizēt
//izprast kas ir objekta prototips 

//testā count ir tā metode, kas paņem inputu. 
//str - arguments, kas ieiet metodē. var uztaisīt vienu objektu, izsaukt count un iedot inputu

// 7 failed - 5 passed 

class Words {
  count(str: string) {
    const words = str.split(" ") ;
    const result: Record<string, number> = {};    //{[key: string]: number}

    words.forEach(word => {       //apskatos vai tāds vārds ir 
      if (result[word]) { 
                              //The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index
      result [word]++;             //hasOwn - apskatīties vai runa ir par mūsu objekta vērtību, vai iebūvēto vērtību
      return;
      }      
      result[word] = 1;
    })     
    return result;
    
  }
}

export { Words };

/*original 

class Words {
  count(str: string) {}
}

export { Words };  */
