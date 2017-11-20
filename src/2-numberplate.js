function coolifyplateText(plateText) {
    return plateText.replace('for', '4').replace('too', 'to').replace('to', '2');
}

function shortenPlateText(plateText) {
  if (plateText.length > 12) {
    return plateText.substring(0, 12);
  }

  return plateText;
}

function formatVanityPlate(plateText) {
  let words = plateText.split(' ')
  words = words.map(word => word.toUpperCase());
  return words.join('');
}

function produceVanityPlate(plateText) {
  return formatVanityPlate(shortenPlateText(coolifyplateText(plateText)));
}

const one = 'I like money';
console.log(`Number plate: ${produceVanityPlate(one)}`);

const two = 'Cats for life';
console.log(`Number plate: ${produceVanityPlate(two)}`)

const three = 'Hot for you too';
console.log(`Number plate: ${produceVanityPlate(three)}`);


/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/
