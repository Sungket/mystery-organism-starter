// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase === returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    compareDNA(otherOrganism) {
      commonDNAArray = [];
      firstDNA = this.dna;
      console.log('firstDNA: '+firstDNA);
      secondDNA = otherOrganism.dna;
      console.log('2ndDNA: '+secondDNA);
      for(let i = 0; i < 15; i++){
        if(firstDNA[i] === secondDNA[i]){
          commonDNAArray.push(firstDNA[i]);
        }
      }

      percentageMatch = (commonDNAArray.length / firstDNA.length) * 100;
      console.log(`specimen #1 and specimen #2 have ${percentageMatch}% DNA in common`)
      return percentageMatch;
    },

    willLikelySurvive() {
      const cOrG = commonDNAArray.filter(base => base === 'C' || base === 'G');
      const percentageCOrG = (cOrG.length / firstDNA.length) * 100;
      return (percentageCOrG >= 60) ? true : false ;
    },
    
  }
}

function create30Instances() {
  const storage = [];
  let iterator = 0;
  while(iterator < 30) {
    let sample = pAequorFactory(iterator, mockUpStrand());
    if (sample.willLikelySurvive) {
      storage.push(sample);
    }
    iterator++;
  }
}

let specimen1 = pAequorFactory(1, mockUpStrand());
let specimen2 = pAequorFactory(2, mockUpStrand());
specimen1.compareDNA(specimen2);
console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive());

