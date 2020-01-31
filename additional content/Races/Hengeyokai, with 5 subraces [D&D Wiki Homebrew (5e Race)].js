/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Hengeyokai" and its 5 subraces
				This is taken from the D&D Wki website (https://www.dandwiki.com/wiki/Hengeyokai_(5e_Race) )
	Code by: Jim Inkpen
	Date:		2018-04-13 (sheet v12.999)
	Please support the creator of this content (Jeremy Forbing) and download his material from the DMs Guild website: http://www.dmsguild.com/browse.php?author=Jeremy%20Forbing
*/

var iFileName = "Hengeyokai, with 5 subraces [D&D Wiki Homebrew (5e Race)].js";

RequiredSheetVersion(12.999);

SourceList["JI:H"] = {
	name : "Jim Inkpen : Hengeyokai player race",
	abbreviation : "JI:H",
	group : "D and D Wiki",
	url : "https://www.dandwiki.com/wiki/Hengeyokai_(5e_Race)",
	date : "2018/04/13"
};

RaceList["Hengeyokai, Tanuki"] = {
	regExpSearch : /^(?=.*Tanuki)(?=.*Hengeyokai).*$/i,
	name : "Hengeyokai, Tanuki",
	sortname : "Hengeyokai, Tanuki",
	source : ["JI:H", 0],
	plural : "Hengeyokai, Tanuki",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
    weaponprofs : [false, false, ["pike", "shortbow"]],
	
/*	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic"],
	skills : ["Stealth"],
	skillstxt : "Stealth and one other, chosen from: Deception, Investigation, or Sleight of Hand", 
*/	
	// Independent

	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Hengeyokai, Tanuki (+2 Dexterity, +1 Constitution)\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal.\nHybrid Instincts. In hybrid form have advantage on Survival and Nature checks in forested regions.\nAlternate form. Racoon dog (use cat for ability scores)",
	/*features : {
		"hidden step" : {
			name : "Hidden Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},

		"twilight cantrip" : {
			name : "Twilight Cantrip",
			minlevel : 1,
			action : ["bonus action", " (hide after)"]
		} 
	}  */
};

RaceList["Hengeyokai,  Suzume"] = {
	regExpSearch : /^(?=.*Hengeyokai)(?=.*Suzume).*$/i,
	name : "Hengeyokai,  Suzume",
	sortname : "Hengeyokai,  Suzume",
	source : ["JP:H", 0],
	plural : "Hengeyokai,  Suzume",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Hengeyokai, Suzume (+2 Dexterity, +1 Wisdom)\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal.\nHybrid Wings. In your hybrid form wings sprout from your back. You have a flying speed of 30 feet. To use this speed, you can’t be wearing medium or heavy armor. Your base walking speed is 25 feet in hybrid from.\nAlternate form. Sparrow (use raven for ability scores)",
};

RaceList["Hengeyokai,  Kitsune"] = {
	regExpSearch : /^(?=.*Hengeyokai)(?=.*Kitsune).*$/i,
	name : "Hengeyokai,  Kitsune",
	sortname : "Hengeyokai,  Kitsune",
	source : ["JP:H", 0],
	plural : "Hengeyokai,  Kitsune",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Hengeyokai, Kitsune (+2 Dexterity, +1 Charisma)\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal." 
		+ "\nFox Magic. You can use the dancing lights cantrip, and do not require material components. At third level, you can cast charm person once per day." 
		+ "\nHybrid Senses. In hybrid form have advantage on Perception checks detecting others./nAlternate form. Fox (use Jackal ability scores, but without pack tactics).",

	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Fox Magic (level 1)",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		atwill : true,
	},

	features : {
		"charm person" : {
			name : "Create/Destroy Water (level 2)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Fox Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Fox Magic (level 3)",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true,
			},
		},
	}
};

RaceList["Hengeyokai,  Bakeneko"] = {
	regExpSearch : /^(?=.*Hengeyokai)(?=.*Bakeneko).*$/i,
	name : "Hengeyokai,  Bakeneko",
	sortname : "Hengeyokai,  Bakeneko",
	source : ["JP:H", 0],
	plural : "Hengeyokai,  Bakeneko",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	skills : ["Acrobatics"],	
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Hengeyokai, Bakeneko (+2 Dexterity, +1 Intelligence)\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal." 
		+ "\nAlley Cat. You gain proficiency in the Acrobatics skill." 
		+ "\nHybrid Stealth. In your hybrid form you have advantage on Stealth checks."
		+ "\nAlternate form. Cat"
};

RaceList["Hengeyokai,  Mujina"] = {
	regExpSearch : /^(?=.*Hengeyokai)(?=.*Mujina).*$/i,
	name : "Hengeyokai,  Mujina",
	sortname : "Hengeyokai,  Mujina",
	source : ["JP:H", 0],
	plural : "Hengeyokai,  Mujina",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Hengeyokai, Mujina (+2 Dexterity, +1 Intelligence)\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal." 
		+ "\nHoney Badger. You don't care. When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest."
		+ "\nHybrid Claws. In your hybrid form you are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."
		+ "\nAlternate form. Badger"
};

