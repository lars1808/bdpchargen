// Database of all available skills organized by category
const skillsDatabase = {
  'Allies & Morale': [
    { 
      id: 'animal-attuned',
      name: 'Animal Attuned',
      description: 'You are good with animals: +1 on reaction rolls with animals & beasts.'
    },
    {
      id: 'animal-companion',
      name: 'Animal Companion',
      description: 'You have a faithful pet: 2d6 for stats, 3 HP, d6 attack.'
    },
    {
      id: 'commander',
      name: 'Commander',
      description: 'Once per combat, issue a single command to an ally to enhance their next attack, or to heal them for 1d6 HP.'
    },
    {
      id: 'companion',
      name: 'Companion',
      description: 'You have an assistant, bodyguard, or errand boy. Roll 3d6 for stats, 3 HP.'
    },
    {
      id: 'impressive-skills',
      name: 'Impressive Skills',
      description: 'After winning an impressive victory, by defeating a tough foe for instance, you may call for onlookers to either reroll their Reaction Rolls with a +2 bonus, or their Morale Rolls with a -2 penalty.'
    },
    {
      id: 'inspiring',
      name: 'Inspiring',
      description: 'Allies automatically pass morale saves.'
    },
    {
      id: 'mediator',
      name: 'Mediator',
      description: '+1 on reaction rolls for those you share a language with.'
    },
    {
      id: 'provocateur',
      name: 'Provocateur',
      description: 'Whether through boasting or appealing to a sense of honor, you know how to goad someone into a duel. You can force those who understand you to make a WIL Save. If they fail, they\'ll be compelled to duel you.'
    },
    {
      id: 'rousing-words',
      name: 'Rousing Words',
      description: 'Once per day, you can rouse your allies into dealing more damage on their turn. They roll double their damage dice and pick the highest result when they attack.'
    },
    {
      id: 'singer',
      name: 'Singer',
      description: 'You know how to sing stimulating songs, inspiring those around you.'
    }
  ],
  'Combat': [
    {
      id: 'alert',
      name: 'Alert',
      description: 'You are rarely surprised. You lower the party\'s odds of being surprised and automatically succeed any DEX Saves required to determine who goes first in the first round of combat.'
    },
    {
      id: 'armor-expert',
      name: 'Armor Expert',
      description: 'Any armor you wear loses the Bulky tag.'
    },
    {
      id: 'bloodlust',
      name: 'Bloodlust',
      description: 'Killing or Critically Damaging an enemy gains you 1d3 HP.'
    },
    {
      id: 'bludgeoning-proficiency',
      name: 'Bludgeoning Proficiency',
      description: 'You have Damage Type Proficiency with bludgeoning weapons.'
    },
    {
      id: 'brawler',
      name: 'Brawler',
      description: 'Your unarmed strikes do d6 damage.'
    },
    {
      id: 'brutal-blows',
      name: 'Brutal Blows',
      description: 'When you deal 10 or more damage in a single attack, the target\'s attacks are impaired in the next round.'
    },
    {
      id: 'crippling-shot',
      name: 'Crippling Shot',
      description: 'You know how to hit to maim. When you make a ranged attack and your damage roll is more than half than the size of your damage die, the enemy\'s next attack is impaired, and they are unable to move.'
    },
    {
      id: 'defensive-posture',
      name: 'Defensive Posture',
      description: 'You know how to wield Fast or Balanced weapons in a defensive manner and gain +1 Armor when not using a shield or weapon in your other hand.'
    },
    {
      id: 'fancy-footwork',
      name: 'Fancy Footwork',
      description: 'Being unarmored gives you 1 Armor.'
    },
    {
      id: 'firm-grip',
      name: 'Firm Grip',
      description: 'You can never be disarmed as long as you\'re conscious.'
    },
    {
      id: 'hard-to-kill',
      name: 'Hard to Kill',
      description: 'Once per day, reroll your Save for Critical Damage in case of failure.'
    },
    {
      id: 'merciless',
      name: 'Merciless',
      description: 'When you inflict Critical Damage, you do so brutally. This immediately triggers a Morale Save by enemies.'
    },
    {
      id: 'momentum-master',
      name: 'Momentum Master',
      description: 'When you kill or Critically Damage an enemy, you can attack again.'
    },
    {
      id: 'mounted-warrior',
      name: 'Mounted Warrior',
      description: 'When you are mounted, attacks against unmounted targets are enhanced.'
    },
    {
      id: 'piercing-proficiency',
      name: 'Piercing Proficiency',
      description: 'You have Damage Type Proficiency with piercing weapons.'
    },
    {
      id: 'protect',
      name: 'Protect',
      description: 'If allies are in the same melee as you, you can give up your action to draw all attacks to yourself instead. Declare this at the start of a round.'
    },
    {
      id: 'quick-draw',
      name: 'Quick Draw',
      description: 'When using the specific weapon you trained this skill with, you automatically succeed DEX Saves when determining who strikes first.'
    },
    {
      id: 'savage-strikes',
      name: 'Savage Strikes',
      description: 'Make an enhanced attack at the cost of 1 Fatigue.'
    },
    {
      id: 'showfighter',
      name: 'Showfighter',
      description: 'You have +1 armor and STR 18 if you have a large audience.'
    },
    {
      id: 'slashing-proficiency',
      name: 'Slashing Proficiency',
      description: 'You have Damage Type Proficiency with slashing weapons.'
    },
    {
      id: 'trooper',
      name: 'Trooper',
      description: '+1 damage when outnumbering an enemy in melee.'
    },
    {
      id: 'true-strikes',
      name: 'True Strikes',
      description: 'For 1d4 WIL damage per attack, you can perform unarmed strikes that do 1d8 damage, ignore Armor, and can strike ghosts.'
    },
    {
      id: 'tunnel-vision',
      name: 'Tunnel Vision',
      description: 'Once per day, when in combat, choose one humanoid opponent. Your attacks against them are enhanced, and their attacks against you are impaired. All other sources of damage against you are enhanced.'
    }
  ],
  'Esoteric & Arcane': [
    {
      id: 'devotion',
      name: 'Devotion',
      description: 'You gain +1 Faith Die, up to a total of 4.'
    },
    {
      id: 'elemental',
      name: 'Elemental',
      description: 'Choose an element, such as Fire or Ice. You always have 3 Armor against magical damage of that element.'
    },
    {
      id: 'gifted',
      name: 'Gifted',
      description: 'You gain +1 Magic Dice, to a maximum of 4.'
    },
    {
      id: 'heightened-senses',
      name: 'Heightened Senses',
      description: 'You get a "weird feeling" when there\'s a secret passage close to you.'
    },
    {
      id: 'lay-on-hands',
      name: 'Lay On Hands',
      description: 'Once per day, cure someone of a disease or poison, or heal 1d6 STR.'
    },
    {
      id: 'magic-sense',
      name: 'Magic-Sense',
      description: 'You can tell when arcane energies are at work and where.'
    },
    {
      id: 'night-sight',
      name: 'Night Sight',
      description: 'Your eyes are well-attuned to the dark.'
    },
    {
      id: 'sensitive-nose',
      name: 'Sensitive Nose',
      description: 'You can smell Undead or Evil creatures nearby.'
    },
    {
      id: 'third-eye',
      name: 'Third Eye',
      description: 'You cannot be fooled by magical illusions.'
    },
    {
      id: 'words-of-grace',
      name: 'Words of Grace',
      description: 'Heal 1d6 to any ability, but become Deprived until you rest.'
    }
  ],
  'Exploration': [
    {
      id: 'acrobat',
      name: 'Acrobat',
      description: 'You have a near-supernatural sense of balance.'
    },
    {
      id: 'mount-mastery',
      name: 'Mount Mastery',
      description: 'You can always keep any mount you\'re riding calm and under control.'
    },
    {
      id: 'scavenger',
      name: 'Scavenger',
      description: 'You\'re skilled at gaining useful resources from places where others might find none.'
    },
    {
      id: 'scout',
      name: 'Scout',
      description: 'You know how to travel fast, efficiently, and unseen.'
    },
    {
      id: 'sea-legs',
      name: 'Sea Legs',
      description: 'You can man and repair small vessels on your own and are a valuable addition to any crew.'
    },
    {
      id: 'skilled-climber',
      name: 'Skilled Climber',
      description: 'You can climb near-impossible sheer surfaces.'
    },
    {
      id: 'sleuth',
      name: 'Sleuth',
      description: 'You are skilled at urban tracking, finding people in towns and cities.'
    },
    {
      id: 'spelunker',
      name: 'Spelunker',
      description: 'You are skilled at subterranean navigation, survival, and traversal.'
    },
    {
      id: 'survival-expert',
      name: 'Survival Expert',
      description: 'You know how to live off the land.'
    },
    {
      id: 'tailshaker',
      name: 'Tailshaker',
      description: 'You\'re skilled at covering your tracks.'
    },
    {
      id: 'tracker',
      name: 'Tracker',
      description: 'You know how to track nearly any quarry through the wilds.'
    },
    {
      id: 'trap-master',
      name: 'Trap Master',
      description: 'You are skilled at setting and disabling traps.'
    },
    {
      id: 'well-traveled',
      name: 'Well-Traveled',
      description: 'You know the lay of the land in a specific region and know the way to any major settlements and points of interest. You have a 4-in-6 chance to know the location of minor settlements and landmarks and a 2-in-6 chance to know of obscure locations.'
    }
  ],
  'Knowledge': [
    {
      id: 'appraiser',
      name: 'Appraiser',
      description: 'You are skilled at figuring out the general worth of found treasure.'
    },
    {
      id: 'bureaucrat',
      name: 'Bureaucrat',
      description: 'You know the local laws and rules and how to bend them in your favor.'
    },
    {
      id: 'cook',
      name: 'Cook',
      description: 'You\'re skilled at cooking and preparing food.'
    },
    {
      id: 'crafty',
      name: 'Crafty',
      description: 'You know how to repair non-magical objects.'
    },
    {
      id: 'healer',
      name: 'Healer',
      description: 'You\'re skilled at non-magical means of healing and knowledgeable about medicine and anatomy.'
    },
    {
      id: 'herbalist',
      name: 'Herbalist',
      description: 'You know which plants and herbs can heal or produce interesting effects.'
    },
    {
      id: 'learned',
      name: 'Learned',
      description: 'You\'ve enjoyed a broad general education in a topic of choice, such as history, politics, biology, or philosophy.'
    },
    {
      id: 'librarian',
      name: 'Librarian',
      description: 'You are skilled at obtaining information from libraries.'
    },
    {
      id: 'loremaster',
      name: 'Loremaster',
      description: 'If you don\'t know a certain piece of knowledge, you know where to start searching.'
    },
    {
      id: 'lumberjack',
      name: 'Lumberjack',
      description: 'You fell wooden objects with supremely efficient strikes.'
    }
  ],
  'Socializing': [
    {
      id: 'carouser',
      name: 'Carouser',
      description: 'You know your way around taverns and know how to gain information or make contacts.'
    },
    {
      id: 'friends-in-high-places',
      name: 'Friends in High Places',
      description: 'You know how to gain access to society\'s upper crust.'
    },
    {
      id: 'friends-in-low-places',
      name: 'Friends in Low Places',
      description: 'You know how to gain access to society\'s lower rungs.'
    },
    {
      id: 'haggler',
      name: 'Haggler',
      description: 'You are a skilled salesperson. You buy items at a 10% discount and sell items for 10% more.'
    },
    {
      id: 'market-access',
      name: 'Market Access',
      description: 'You know how to gain access to the full breadth of commerce in a location — legal and otherwise.'
    },
    {
      id: 'smooth-talker',
      name: 'Smooth Talker',
      description: 'You can convince others to do things for you, within reason.'
    },
    {
      id: 'socialite',
      name: 'Socialite',
      description: 'You can invite yourself to most parties, ceremonies, or similar functions.'
    }
  ],
  'Tricks & Subterfuge': [
    {
      id: 'counterfeiter',
      name: 'Counterfeiter',
      description: 'Given the right materials and a reference, you can create perfect copies of legal documents and the like.'
    },
    {
      id: 'escape-artist',
      name: 'Escape Artist',
      description: 'You can wriggle free from any restraints, even when it seems impossible, such as from chains or a noose.'
    },
    {
      id: 'lockpicker',
      name: 'Lockpicker',
      description: 'You are skilled at picking locks.'
    },
    {
      id: 'master-of-disguise',
      name: 'Master of Disguise',
      description: 'You know how to acquire, apply, and utilize a disguise.'
    },
    {
      id: 'opportunist',
      name: 'Opportunist',
      description: 'During big chaotic distractions (possibly caused by you), attacks against you are Impaired.'
    },
    {
      id: 'pickpocket',
      name: 'Pickpocket',
      description: 'You know how to cut a purse.'
    },
    {
      id: 'pocket-change',
      name: 'Pocket Change',
      description: 'Be it through pity, sympathy, or entertaining passersby, you know how to make people part with their coin. After a day of roaming city streets, make a WIL Save. On a success, gain 1d10 gp; on a failure, 1d4 gp.'
    },
    {
      id: 'poison-resistance',
      name: 'Poison Resistance',
      description: 'Sheer exposure has made you resistant to poison.'
    },
    {
      id: 'poisoner',
      name: 'Poisoner',
      description: 'You know how to identify, treat, make, and administer dangerous poisons.'
    },
    {
      id: 'stashcraft',
      name: 'Stashcraft',
      description: 'You are skilled at hiding small items on your body and can nearly always produce a dagger if needed.'
    },
    {
      id: 'subtle',
      name: 'Subtle',
      description: 'You don\'t stand out if you don\'t want to. Enemies tend to give you a low priority if not outright ignore you.'
    },
    {
      id: 'surveillance',
      name: 'Surveillance',
      description: 'For each week you spend investigating/closely observing a local powerful person, institution, or structure, you learn one dirty secret about it.'
    }
  ]
};

// Helper function to get all skills as a flat array
const getAllSkills = () => {
  return Object.values(skillsDatabase).flat();
};

// Helper function to get skill by ID
const getSkillById = (id) => {
  return getAllSkills().find(skill => skill.id === id);
};

// Helper function to get skills by category
const getSkillsByCategory = (category) => {
  return skillsDatabase[category] || [];
};

// Helper function to get all categories
const getCategories = () => {
  return Object.keys(skillsDatabase);
};

export {
  skillsDatabase as default,
  getAllSkills,
  getSkillById,
  getSkillsByCategory,
  getCategories
};

      