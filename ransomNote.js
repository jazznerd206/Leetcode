const note = 'aab';
const mag = 'baa';

const note1 = "bg"
const mag1 = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"

const contains = (ransomNote, magazine) => {
    if (magazine.length === 1 && magazine !== ransomNote || ransomNote.length > magazine.length) {
        return false
    }
    let map = {};
    for (let i = 0; i < magazine.length; i++) {
        map[magazine[i]] = (map[magazine[i]] || 0) + 1;
      }
      for (let i = 0; i < ransomNote.length; i++) {
          console.log(false)
        if (!map[ransomNote[i]]--) return false;
      }
      console.log(true)
      return true;
}
contains(note, mag)