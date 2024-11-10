// Database of all careers and their available skills
const careersDatabase = {
  assassin: {
    id: 'assassin',
    name: 'Assassin',
    description: 'Blades-for-hire—perhaps agents in the service of the king—spies and assassins make killing and stealing discreetly a way of life.',
    skills: [
      'escape-artist',
      'master-of-disguise',
      'piercing-proficiency',
      'poison-resistance',
      'poisoner',
      'quick-draw',
      'savage-strikes',
      'stashcraft',
      'surveillance',
      'tunnel-vision'
    ]
  },
  blacksmith: {
    id: 'blacksmith',
    name: 'Blacksmith',
    description: 'Skilled at melting, bending, shaping, and fixing metal objects, blacksmiths make weapons, armor, and repairs.',
    skills: [
      'armor-expert',
      'bludgeoning-proficiency',
      'crafty',
      'firm-grip',
      'lumberjack',
      'market-access',
      'protect',
      'savage-strikes'
    ]
  },
  destitute: {
    id: 'destitute',
    name: 'Destitute',
    description: 'Those destitute are beggars, vagrants, or tramps, aimlessly wandering from place to place.',
    skills: [
      'alert',
      'fancy-footwork',
      'friends-in-low-places',
      'haggler',
      'lockpicker',
      'master-of-disguise',
      'pickpocket',
      'pocket-change',
      'scavenger',
      'sleuth',
      'stashcraft',
      'subtle',
      'surveillance'
    ]
  },
  farmer: {
    id: 'farmer',
    name: 'Farmer',
    description: 'Simple people whose resilience and knowledge of the land can come in handy.',
    skills: [
      'animal-attuned',
      'animal-companion',
      'cook',
      'crafty',
      'herbalist',
      'lumberjack',
      'mount-mastery',
      'poison-resistance',
      'survival-expert'
    ]
  },
  gladiator: {
    id: 'gladiator',
    name: 'Gladiator',
    description: 'Specialists in individual combat primarily motivated by glory.',
    skills: [
      'bloodlust',
      'brutal-blows',
      'defensive-posture',
      'friends-in-high-places',
      'hard-to-kill',
      'impressive-skills',
      'merciless',
      'piercing-proficiency',
      'provocateur',
      'showfighter',
      'slashing-proficiency',
      'tunnel-vision'
    ]
  },
  hunter: {
    id: 'hunter',
    name: 'Hunter',
    description: 'Masters of tracking prey through the wilderness and wastelands.',
    skills: [
      'animal-attuned',
      'cook',
      'crippling-shot',
      'heightened-senses',
      'herbalist',
      'lumberjack',
      'mount-mastery',
      'night-sight',
      'piercing-proficiency',
      'poison-resistance',
      'poisoner',
      'scout',
      'sensitive-nose',
      'skilled-climber',
      'survival-expert',
      'tailshaker',
      'tracker',
      'trap-master'
    ]
  },
  magicUser: {
    id: 'magic-user',
    name: 'Magic-User',
    description: 'Those capable of casting magic through study, pacts, or innate ability.',
    skills: [
      'companion',
      'elemental',
      'gifted',
      'heightened-senses',
      'loremaster',
      'magic-sense',
      'night-sight',
      'third-eye'
    ]
  },
  mercenary: {
    id: 'mercenary',
    name: 'Mercenary',
    description: 'Warriors who work for pay, primarily motivated by personal gain.',
    skills: [
      'alert',
      'bloodlust',
      'bludgeoning-proficiency',
      'brawler',
      'brutal-blows',
      'commander',
      'hard-to-kill',
      'merciless',
      'momentum-master',
      'piercing-proficiency',
      'savage-strikes',
      'slashing-proficiency'
    ]
  },
  merchant: {
    id: 'merchant',
    name: 'Merchant',
    description: 'Wide-traveled adventurers who seek new and exotic goods to sell.',
    skills: [
      'appraiser',
      'bureaucrat',
      'carouser',
      'companion',
      'friends-in-high-places',
      'haggler',
      'market-access',
      'mediator',
      'scout',
      'sleuth',
      'smooth-talker',
      'socialite'
    ]
  },
  minstrel: {
    id: 'minstrel',
    name: 'Minstrel',
    description: 'Wandering entertainers sharing songs, stories, and music.',
    skills: [
      'carouser',
      'defensive-posture',
      'impressive-skills',
      'inspiring',
      'master-of-disguise',
      'mediator',
      'opportunist',
      'pocket-change',
      'provocateur',
      'rousing-words',
      'singer',
      'sleuth',
      'smooth-talker',
      'socialite'
    ]
  },
  noble: {
    id: 'noble',
    name: 'Noble',
    description: 'Those who held positions of power through violence, birthright, or social standing.',
    skills: [
      'bureaucrat',
      'carouser',
      'commander',
      'companion',
      'defensive-posture',
      'friends-in-high-places',
      'impressive-skills',
      'inspiring',
      'learned',
      'mounted-warrior',
      'provocateur',
      'smooth-talker',
      'socialite'
    ]
  },
  priest: {
    id: 'priest',
    name: 'Priest',
    description: 'Those devoted to something higher, be it a god, demon, concept, or nature.',
    skills: [
      'bludgeoning-proficiency',
      'devotion',
      'healer',
      'lay-on-hands',
      'learned',
      'librarian',
      'loremaster',
      'mediator',
      'sensitive-nose',
      'third-eye',
      'true-strikes',
      'words-of-grace'
    ]
  },
  sailor: {
    id: 'sailor',
    name: 'Sailor',
    description: 'Those who called the waters their home, familiar with ships and sea life.',
    skills: [
      'acrobat',
      'brawler',
      'fancy-footwork',
      'friends-in-low-places',
      'opportunist',
      'sea-legs',
      'singer',
      'skilled-climber'
    ]
  },
  scribe: {
    id: 'scribe',
    name: 'Scribe',
    description: 'Well-educated individuals knowledgeable in various subjects.',
    skills: [
      'bureaucrat',
      'counterfeiter',
      'learned',
      'librarian',
      'loremaster',
      'third-eye'
    ]
  },
  soldier: {
    id: 'soldier',
    name: 'Soldier',
    description: 'Warriors driven by duty to king, lord, village, or order.',
    skills: [
      'armor-expert',
      'commander',
      'firm-grip',
      'hard-to-kill',
      'healer',
      'inspiring',
      'mount-mastery',
      'mounted-warrior',
      'piercing-proficiency',
      'protect',
      'singer',
      'slashing-proficiency',
      'trooper'
    ]
  },
  thief: {
    id: 'thief',
    name: 'Thief',
    description: 'Those who made ends meet by being on the other side of the law.',
    skills: [
      'acrobat',
      'alert',
      'escape-artist',
      'friends-in-low-places',
      'haggler',
      'lockpicker',
      'market-access',
      'night-sight',
      'opportunist',
      'pickpocket',
      'skilled-climber',
      'stashcraft',
      'subtle',
      'surveillance',
      'tailshaker',
      'trap-master'
    ]
  },
  wanderer: {
    id: 'wanderer',
    name: 'Wanderer',
    description: 'Those who have witnessed the great wide open and survived its extremes.',
    skills: [
      'animal-attuned',
      'animal-companion',
      'cook',
      'escape-artist',
      'fancy-footwork',
      'heightened-senses',
      'herbalist',
      'magic-sense',
      'poison-resistance',
      'poisoner',
      'quick-draw',
      'scout',
      'sensitive-nose',
      'singer',
      'spelunker',
      'subtle',
      'survival-expert',
      'tailshaker',
      'tracker',
      'well-traveled'
    ]
  }
};

// Helper function to get all careers as array
const getAllCareers = () => {
  return Object.values(careersDatabase);
};

// Helper function to get career by ID
const getCareerById = (id) => {
  return careersDatabase[id];
};

// Helper function to get all careers that have access to a specific skill
const getCareersBySkill = (skillId) => {
  return getAllCareers().filter(career => career.skills.includes(skillId));
};

export {
  careersDatabase as default,
  getAllCareers,
  getCareerById,
  getCareersBySkill
};