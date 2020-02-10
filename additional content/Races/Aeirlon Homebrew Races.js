/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds the Aeirlon Hombrew player races; Rokurokubi, Gisanti, Feline, Komori-Jin (Bat man), Pei-Chin (Skin Changers), Seekers, and spirit folk
				Also includes a player race, called "Hengeyokai" and its 5 subraces, this is taken from the D&D Wki website (https://www.dandwiki.com/wiki/Hengeyokai_(5e_Race) )
	Code by: Jim Inkpen
	Date:		2020-02-06 (sheet v12.999)
	*/

var iFileName = "Aeirlon Homebrew Races.js";

RequiredSheetVersion(12.999);

SourceList["JI:HB"] = {
	name : "Jim Inkpen : Aeirlon Homebrew Races",
	abbreviation : "JI:HB",
	group : "Aeirlon Homebrew",
	url : "https://homebrewery.naturalcrit.com/user/gldnlion",
	date : "2020/02/06"
};

RaceList["Rokurokubi"] = {
	regExpSearch : /^(?=.*Rokurokubi).*$/i,
	name : "Rokurokubi",
	sortname : "Rokurokubi",
	source : ["JI:HB", 0],
	plural : "Rokurokubi",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common"],
	/* weaponprofs : [false, false, ["pike", "shortbow"]],*/
	vision : [["Darkvision", 60]],
	//skills : ["Stealth"],
	
	// Independent
	age : "Rokurokubis mature to adulthood at age 13, and very rarely live over 60 years old.",
	height : " 5-6' tall.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Charisma, +1 Wisdom,",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Rokurokubi (+2 Charisma, +1 Wisdom)\nElongate Neck. As a bonus action, you can extend your neck into a prehensile tendril that reaches 20 feet. Whilst extended, you can use its mobility to gain superior vantage points, as logical, and your bite attack has a reach of 20 feet. Whilst extended, you can retract it back into your body as a bonus action. Tireless: You only need to enter a semiconscious dream-state for 4 hours per day to gain the full benefits of 8 hours of sleep. Also, you have Advantage on saving throws against the Sleep condition. Toxin Proofed: You have Resistance to Poison damage and advantage on saving throws against the Poisoned condition.",
	weapons : ["Rokurokubi poisonous bite","Rokurokubi claws"],
	dmgres : ["Poison"],
	savetxt : { adv_vs : ["Poisoned", "Sleep"] }
};
	
WeaponsList["Rokurokubi poisonous bite"] = {
	regExpSearch : /^(?=.*Rokurokubi)(?=.*poisonous)(?=.*bite).*$/i,
	name : "Rokurokubi poisonous bite",
	source : ["JI:HB", 4],
	ability : 1,
	type : "Natural",
	damage : ["C", 12, "poison"],
	range : "Melee",
	description : "You possess a bite attack, which is a standard action melee attack that benefits from your Proficiency bonus. This does not grant you extra attacks. On a hit, your bite attack inflicts 1d12 Poison damage, which increases by +1d12 at 5th level (2d12), 11th level (3d12) and 17th level (4d12).",
	abilitytodamage : true,
	monkweapon : true
};	

WeaponsList["Rokurokubi claws"] = {
	regExpSearch : /^(?=.*Rokurokubi)(?=.*claws).*$/i,
	name : "Rokurokubi Claws",
	source : ["JI:HB", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "Finesse",
	abilitytodamage : true,
	monkweapon : true
};	

RaceList["Feline"] = {
	regExpSearch : /^(?=.*Feline).*$/i,
	name : "Feline",
	sortname : "Feline",
	source : ["JI:HB", 0],
	plural : "Feline",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common"],
	/* weaponprofs : [false, false, ["pike", "shortbow"]],*/
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	
	// Independent
	age : "Felines mature to adulthood at age 13, and very rarely live over 60 years old.",
	height : " 4-5' tall.",
	weight : " 90-130 lbs.",
	improvements : ": +2 Dexterity,",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Feline (+2 Dexterity)\nNatural Grace. You are resistant to fall damage less than 40' or immune to damage from falls less than 20'.",
	weapons : ["feline claws"]
};
	
WeaponsList["feline claws"] = {
	regExpSearch : /^(?=.*feline)(?=.*claws).*$/i,
	name : "Feline Claws",
	source : ["JI:HB", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "You are proficient with your unarmed strikes which deal 1d4 slashing damage and are considered finesse weapons.",
	abilitytodamage : true,
	monkweapon : true
};	

RaceList["Gisanti"] = {
	regExpSearch : /^(?=.*Gisanti).*$/i,
	name : "Gisanti",
	sortname : "Gisanti",
	source : ["JI:HB", 0],
	plural : "Gisanti",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 }, 
			swim : {spd : 30, enc : 20}
		},
	languageProfs : ["Draconic","Eastern Common"],
	/* weaponprofs : [false, false, ["pike", "shortbow"]],*/
	vision : [["Darkvision", 60], ["Smell Magic", 15]],
	skills : ["Strength (Swimming)"],
	
	// Independent
	age : "Gisanti mature to adulthood at age 13, and very rarely live over 80 years old.",
	height : " 4-5' tall.",
	weight : " 90-130 lbs.",
	improvements : ": + 2 Intelligence,",
	scores : [0, 0, 0, 2, 0, 0],
	trait : "Gisanti (+ 2 Intelligence)\nSmell Magic Rnd 1 - Notice Magic in 15', Rnd 2 - Location (if looking), Rnd 3 - Flavor (Racial, benign/Malign, Tainted, etc...)."
	
};
	
RaceList["Pei-Chin (Skin Changer)"] = {
	regExpSearch : /^(?=.*Pei-Chin).*$/i,
	name : "Pei-Chin (Skin Changer)",
	sortname : "Pei-Chin (Skin Changer)",
	source : ["JI:HB", 0],
	plural : "Pei-Chin (Skin Changers)",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common"],
	/* weaponprofs : [false, false, ["pike", "shortbow"]],*/
	//vision : [["Darkvision", 60]],
	//skills : ["Strength (Swimming)"],
	
	// Independent
	age : "Pei-Chin (Skin Changers) mature to adulthood at age 10, and very rarely live over 100 to 120 years old.",
	height : " 5-6' tall.",
	weight : " 120-190 lbs.",
	improvements : ": + 2 Charisma,",
	scores : [0, 0, 0, 0, 0, 2],
	trait : desc ([ "Pei-Chin (+ 2 Charisma)\nShed Skin. As a full round action a Pei-Chin can shed its skin (creating a cloak or cloths) and assume human form. ",
		"Assume Skin, As a full round action a Pei-Chin wearing it's animal skin can assume it's animal form. Alternatly the Pei-Chin can help another creature to assume it's skin, but the change is permanent and cannot be reversed with out the use of a Wish, Limited Wish, or True Polymorph.",
		"Call to Kind, As an action a Pei Chin can sound a call to others of its kind or anmials of the same type for help. Animals of the Pei-Chin's type within 500' will normally respond, but will still act normally. Although the Pei-Chin may be able to convince them to help (diplomacy or Intimidation).",	
		"Communicate with creatures of same type, A Pei-Chin can speak with creatures as of the same type as its animal form both in animal and human form",
		"Shed Human Skin, As a full round action a Pei-Chin can shed its human skin and re-assume its animal form permanently. This is normally only done if it's animal skin is destroyed.."]) ,
	
};

RaceList["Komori-Jin (Bat People)"] = {
	regExpSearch : /^(?=.*Komori-Jin).*$/i,
	name : "Komori-Jin (Bat People)",
	sortname : "Komori-Jin (Bat People)",
	source : ["JI:HB", 0],
	plural : "Komori-Jin (Bat People)",
	size : 3,
	speed : { walk : { spd : 20, enc : 10 }, 
			fly : { spd : 40, enc : 20 } 
		},
	languageProfs : ["Eastern Common"],
	/* weaponprofs : [false, false, ["pike", "shortbow"]],*/
	vision : [["Darkvision", 60], ["BlindSense", 40]],
	skills : ["Stealth"],
	
	// Independent
	age : "Komori-Jin (Bat People) mature to adulthood at age 15, and very rarely live over 50 years old.",
	height : " 4-5' tall.",
	weight : " 90-130 lbs.",
	improvements : ": +2 Dexterity,",
	scores : [0, 2, 0, 0, 0, 0],
	trait : desc(["Komori-Jin (Bat People) (+2 Dexterity)\nBlindSense the Komori-Jin can use its sonic abilities to see an area 40 feet around them, determining shapes and movement.",
		"Silent Speech The Koumori-Jin can use its sonic abilities to project speech directly into the ears of a single creature or a group of creatures in a 90 degree arc without others being able to hear.",
		"Creatures with sensitive hearing will be able to detect that a sound has been uttered (or that .",
		"Flyby. You doen't provoke an opportunity attack when it flies out of an enemy’s reach.",
		"Sub Type. Komori-Jin are Humanoids with the sub type of Monstrous, and are affected by all spells that effect either."]),
	weapons : ["Komori-Jin claws","Wing Blades"]
};
	
WeaponsList["Komori-Jin claws"] = {
	regExpSearch : /^(?=.*Komori-Jin)(?=.*claws).*$/i,
	name : "Komori-Jin Claws",
	source : ["JI:HB", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "You are proficient with your unarmed strikes which deal 1d4 slashing damage and are considered finesse weapons.",
	abilitytodamage : true,
	monkweapon : true
};	

WeaponsList["Wing Blades"] = {
	regExpSearch : /^(?=.*Wing)(?=.*Blades).*$/i,
	name : "Wing Blades",
	source : ["JI:HB", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "slashing"],
	modifiers : ["", 1],
	range : "Melee",
	description : "Mounted on the outer leading edge of the Kumori-Jin's wings, these dual blades do 1d6+1 damage.",
	abilitytodamage : true,
	monkweapon : true
};	


RaceList["Hengeyokai, Tanuki"] = {
	regExpSearch : /^(?=.*Tanuki)(?=.*Hengeyokai).*$/i,
	name : "Hengeyokai, Tanuki",
	sortname : "Hengeyokai, Tanuki",
	source : ["JI:HB", 0],
	plural : "Hengeyokai, Tanuki",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
    weaponprofs : [false, false, ["pike", "shortbow"]],
	
	// Independent
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Hengeyokai, Tanuki (+2 Dexterity, +1 Constitution)"
		+"\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal."
		+ "\nHybrid Instincts. In hybrid form have advantage on Survival and Nature checks in forested regions."
		+ "\nAlternate form. Racoon dog (use cat for ability scores)",

};

RaceList["Hengeyokai,  Suzume"] = {
	regExpSearch : /^(?=.*Hengeyokai)(?=.*Suzume).*$/i,
	name : "Hengeyokai,  Suzume",
	sortname : "Hengeyokai,  Suzume",
	source : ["JP:HB", 0],
	plural : "Hengeyokai,  Suzume",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Hengeyokai, Suzume (+2 Dexterity, +1 Wisdom)"
		+ "\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal."
		+ "\nHybrid Wings. In your hybrid form wings sprout from your back. You have a flying speed of 30 feet. To use this speed, you can’t be wearing medium or heavy armor. Your base walking speed is 25 feet in hybrid from."
		+ "\nAlternate form. Sparrow (use raven for ability scores)",
};

RaceList["Hengeyokai,  Kitsune"] = {
	regExpSearch : /^(?=.*Hengeyokai)(?=.*Kitsune).*$/i,
	name : "Hengeyokai,  Kitsune",
	sortname : "Hengeyokai,  Kitsune",
	source : ["JP:HB", 0],
	plural : "Hengeyokai,  Kitsune",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Hengeyokai, Kitsune (+2 Dexterity, +1 Charisma)"
		+ "\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal." 
		+ "\nFox Magic. You can use the dancing lights cantrip, and do not require material components. At third level, you can cast charm person once per day." 
		+ "\nHybrid Senses. In hybrid form have advantage on Perception checks detecting others."
		+ "\nAlternate form. Fox (use Jackal ability scores, but without pack tactics).",

	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Fox Magic (level 1)",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		atwill : true,
	},

	features : {
		"charm person" : {
			name : "charm person (level 2)",
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
	source : ["JP:HB", 0],
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
	trait : "Hengeyokai, Bakeneko (+2 Dexterity, +1 Intelligence)"
		+ "\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal." 
		+ "\nAlley Cat. You gain proficiency in the Acrobatics skill." 
		+ "\nHybrid Stealth. In your hybrid form you have advantage on Stealth checks."
		+ "\nAlternate form. Cat"
};

RaceList["Hengeyokai,  Mujina"] = {
	regExpSearch : /^(?=.*Hengeyokai)(?=.*Mujina).*$/i,
	name : "Hengeyokai,  Mujina",
	sortname : "Hengeyokai,  Mujina",
	source : ["JP:HB", 0],
	plural : "Hengeyokai,  Mujina",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	age : "Hengeyokai reach maturity at 12 months. The exact length of their lifespans vary but records show that the oldest kitsune to date was 623.",
	height : " are the same height as a normal member of their previous race.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity, +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Hengeyokai, Mujina (+2 Dexterity, +1 Intelligence)"
		+ "\nChange Form: You can transform to your Human Form, or Animal Form as an action. You can use this feature once. At 3rd level, you may use it twice, and at 6th level you may use it three times, regaining the uses after a short or long rest. Your Hybrid Form is considered your 'true' form in which you have a humanoid body but the face of your animal. You can revert to your true form at will. Each form has a set appearance based on the individual (a hengeyokai cannot choose to take the shape or form of another person or animal in order to disguise himself). The mechanics of transforming to your Animal Form works the same as the Druid feature Wild Shape except limited to your chosen animal." 
		+ "\nHoney Badger. You don't care. When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest."
		+ "\nHybrid Claws. In your hybrid form you are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."
		+ "\nAlternate form. Badger"
};

RaceList["Ikwiikwii"] = {
	regExpSearch : /Ikwiikwii/i,
	name : "Ikwiikwii",
	source : ["JP:HB", 0],
	plural : "Ikwiikwii",
	size : 4,
	speed : {walk : { spd : 25, enc : 15 }, allfours : { spd : 35, enc : 20 }, climb : { spd : 20, enc : 10 }  },
	vision : [["Darkvision", 60]],
	languages : ["Eastern Common", "Ikwiikwii"],
	weapons : ["Owlbear Weaponry"],
	age : " Ikwiikwii reach maturity at 10 years, and live up to 60 years.",
	height : " are between 2 and 3 feet tall",
	weight : " average about 50 pounds",
	improvements : "Ikwiikwii: +2 Wisdom , +1 Strength",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Ikwiikwii (+2 Wisdom , +1 Strength"
		+ "\nKeen Sight. You have advantage on Wisdom (Perception) checks made that rely on sight."
		+ "\nLeverage. You can wield a weapons with the heavy property without the penalty usually applied to small creatures."
		+ "\nOwlbear Weaponry. You have sharp claws, which grant you a climbing speed of 20 feet. In addition, your claws and beak are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier."
		+ "\nHybrid Nature. Your creature type is monstrosity in addition to humanoid. You can become the target of any ability, spell or effect that affects either of your creature types."
	};

WeaponsList["Owlbear Weaponry"] = {
	regExpSearch : /^(?=.*Owlbear)(?=.*Weaponry).*$/i,
	name : "Owlbear Weaponry",
	source : ["JI:HB", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	modifiers : ["", 1],
	range : "Melee",
	description : "your claws and beak are natural weapons, which you can use to make unarmed strikes.",
	abilitytodamage : true,
	monkweapon : true
};	

RaceList["Seeker"] = {
	regExpSearch : /^(?=.*Seeker).*$/i,
	name : "Seeker",
	sortname : "Seeker",
	source : ["JI:HB", 0],
	plural : "Seekers",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common", "Underdark Common"],
		
	// Independent
	age : "Seekers mature to adulthood at age 13, and ususaly live to around 90 years old.",
	height : " 5-6' tall.",
	weight : " 100 - 180 lbs",
	improvements : "Seeker : +2 Charisma, +1 Constitution,",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Seeker (+2 Charisma, +1 Wisdom)"
		+ "\nTireless: You only need to enter a semiconscious dream-state for 4 hours per day to gain the full benefits of 8 hours of sleep. Also, you have Advantage on saving throws against the Sleep condition."
		+ "\nToxin Proofed: You have Resistance to Poison damage and advantage on saving throws against the Poisoned condition."
		+ "\nHardened: You are both Fire and Cold Resistant",
	weapons : ["Seeker claws"],
	dmgres : ["Fire","Cold","Poison"],
	savetxt : { adv_vs : ["Poisoned", "Sleep"] }
};
		
WeaponsList["Seeker claws"] = {
	regExpSearch : /^(?=.*Seeker)(?=.*claws).*$/i,
	name : "Seeker Claws",
	source : ["JI:HB", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "Finesse",
	abilitytodamage : true,
	monkweapon : true
};	

RaceList["Spirit Folk, Bamboo (wood)"] = {
	regExpSearch : /^(?=.*Sprit).*$/i,
	name : "Spirit Folk, Bamboo (wood)",
	sortname : "Spirit Folk, Bamboo (wood)",
	source : ["JI:HB", 0],
	plural : "Spirit Folk, Bamboo (wood)",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common"],
	vision : [["Darkvision", 60]],
	
	// Independent
	age : "Spirit Folk mature to adulthood at age 13, and ususaly live to around 500 years old.",
	height : " 5-6' tall.",
	weight : " 125 - 250 lbs",
	improvements : "Spirit Folk, Bamboo (wood) : +2 Wisdom, +1 Dexterity",
	scores : [0, 1, 0, 0, 2, 0],
	trait : "Spirit Folk, Bamboo (wood) (+2 Wisdom, +1 Dexterity)"
		+ "\nSpirit Subtype. Spirit folk have the spirit subtype, which means that you can be affected by spells and effects that specifically target spirits, such as protection from spirits. Your human ancestry means that you are still a humanoid, however, and therefore vulnerable to spells such as charm person. "
		+ "\nChild of Nature. You have advantage on Intelligence (Nature) and Wisdom (Survival) checks in Forest/Jungle terrain. "
		+ "\nSpeak with Small Beasts. Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts that live normally in Forest/Jungle terrain"
		+ "\nTerrain Movement: While oving in your Forest/Jungle terrain, moving thru non-magical difficult terain costs you no extra movement and you can pass thru non-magical plants without being slowed by them, and without taking damage from them if they have throns, spines or any other similar hazards."
		+ "\nForestwalker. You have advantage on Dexterity (Stealth) checks made within wooded or forested areas. You may also attempt to hide even when only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena. "
};

RaceList["Spirit Folk, Grasslands"] = {
	regExpSearch : /^(?=.*Sprit).*$/i,
	name : "Spirit Folk, Grasslands",
	sortname : "Spirit Folk, Grasslands",
	source : ["JI:HB", 0],
	plural : "Spirit Folk, Grasslands",
	size : 3,
	speed : { walk : { spd : 35, enc : 20 } },
	languageProfs : ["Eastern Common"],
	vision : [["Darkvision", 60]],
		
	// Independent
	age : "Spirit Folk mature to adulthood at age 13, and ususaly live to around 500 years old.",
	height : " 5-6' tall.",
	weight : " 125 - 250 lbs",
	improvements : "Spirit Folk, Grasslands : +2 Wisdom, +1 Charisma",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Sprit Folk, Grasslands (+2 Wisdom, +1 Charisma)"
		+ "\nSpirit Subtype. Spirit folk have the spirit subtype, which means that you can be affected by spells and effects that specifically target spirits, such as protection from spirits. Your human ancestry means that you are still a humanoid, however, and therefore vulnerable to spells such as charm person. "
		+ "\nChild of Nature. You have advantage on Intelligence (Nature) and Wisdom (Survival) checks in Plains/Savannah terrain. "
		+ "\nSpeak with Small Beasts. Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts that live normally in Plains/Savannah terrain"
		+ "\nTerrain Movement: While oving in your Plains/Savannah terrain, moving thru non-magical difficult terain costs you no extra movement and you can pass thru non-magical plants without being slowed by them, and without taking damage from them if they have throns, spines or any other similar hazards."
		+ "\nPlainswalker. You have advantage on Charisma (Persuasion) checks when first attempting them on people you just met."
		+ "\nImproved Speed. Your base walking speed increases to 35 feet. "
};

RaceList["Spirit Folk, Grasslands"] = {
	regExpSearch : /^(?=.*Sprit).*$/i,
	name : "Spirit Folk, Grasslands",
	sortname : "Spirit Folk, Grasslands",
	source : ["JI:HB", 0],
	plural : "Spirit Folk, Grasslands",
	size : 3,
	speed : { walk : { spd : 35, enc : 20 } },
	languageProfs : ["Eastern Common"],
	vision : [["Darkvision", 60]],
		
	// Independent
	age : "Spirit Folk mature to adulthood at age 13, and ususaly live to around 500 years old.",
	height : " 5-6' tall.",
	weight : " 125 - 250 lbs",
	improvements : "Spirit Folk, Grasslands : +2 Wisdom, +1 Charisma",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Sprit Folk, Grasslands (+2 Wisdom, +1 Charisma)"
		+ "\nSpirit Subtype. Spirit folk have the spirit subtype, which means that you can be affected by spells and effects that specifically target spirits, such as protection from spirits. Your human ancestry means that you are still a humanoid, however, and therefore vulnerable to spells such as charm person. "
		+ "\nChild of Nature. You have advantage on Intelligence (Nature) and Wisdom (Survival) checks in Plains/Savannah terrain. "
		+ "\nSpeak with Small Beasts. Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts that live normally in Plains/Savannah terrain"
		+ "\nTerrain Movement: While oving in your Plains/Savannah terrain, moving thru non-magical difficult terain costs you no extra movement and you can pass thru non-magical plants without being slowed by them, and without taking damage from them if they have throns, spines or any other similar hazards."
		+ "\nPlainswalker. You have advantage on Charisma (Persuasion) checks when first attempting them on people you just met."
		+ "\nImproved Speed. Your base walking speed increases to 35 feet. "
};

RaceList["Spirit Folk, Mountain (Earth)"] = {
	regExpSearch : /^(?=.*Sprit).*$/i,
	name : "Spirit Folk, Mountain (Earth)",
	sortname : "Spirit Folk, Mountain (Earth)",
	source : ["JI:HB", 0],
	plural : "Spirit Folk, Mountain (Earth)",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common"],
	vision : [["Darkvision", 60]],
		
	// Independent
	age : "Spirit Folk mature to adulthood at age 13, and ususaly live to around 500 years old.",
	height : " 5-6' tall.",
	weight : " 125 - 250 lbs",
	improvements : "Spirit Folk, Mountain (Earth) : +2 Wisdom, +1 Strength",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Sprit Folk, Mountain (Earth) (+2 Wisdom, +1 Strength)"
		+ "\nSpirit Subtype. Spirit folk have the spirit subtype, which means that you can be affected by spells and effects that specifically target spirits, such as protection from spirits. Your human ancestry means that you are still a humanoid, however, and therefore vulnerable to spells such as charm person. "
		+ "\nChild of Nature. You have advantage on Intelligence (Nature) and Wisdom (Survival) checks in Mountain/Hill/Plateau terrain. "
		+ "\nSpeak with Small Beasts. Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts that live normally in Mountain/Hill/Plateau terrain"
		+ "\nTerrain Movement: While oving in your Mountain/Hill/Plateau terrain, moving thru non-magical difficult terain costs you no extra movement and you can pass thru non-magical plants without being slowed by them, and without taking damage from them if they have throns, spines or any other similar hazards."
		+ "\nMountainwalker. You have advantage on Strength (Athletics) checks made to climb and jump in mountainous or other rocky terrain, such as in natural caves."
};

RaceList["Spirit Folk, River/Sea (Water)"] = {
	regExpSearch : /^(?=.*Sprit).*$/i,
	name : "Spirit Folk, River/Sea (Water)",
	sortname : "Spirit Folk, River/Sea (Water)",
	source : ["JI:HB", 0],
	plural : "Spirit Folk, River/Sea (Water)",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 }, swim : { spd : 30, enc : 20 }  },
	languageProfs : ["Eastern Common"],
	vision : [["Darkvision", 60]],
		
	// Independent
	age : "Spirit Folk mature to adulthood at age 13, and ususaly live to around 500 years old.",
	height : " 5-6' tall.",
	weight : " 125 - 250 lbs",
	improvements : "Spirit Folk, River/Sea (Water) : +2 Wisdom, +1 Intelligence",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Sprit Folk, River/Sea (Water) (+2 Wisdom, +1 Intelligence)"
		+ "\nSpirit Subtype. Spirit folk have the spirit subtype, which means that you can be affected by spells and effects that specifically target spirits, such as protection from spirits. Your human ancestry means that you are still a humanoid, however, and therefore vulnerable to spells such as charm person. "
		+ "\nChild of Nature. You have advantage on Intelligence (Nature) and Wisdom (Survival) checks in River/Lake/sea/Coastal terrain. "
		+ "\nSpeak with Small Beasts. Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts that live normally in River/Lake/sea/Coastal terrain"
		+ "\nTerrain Movement: While oving in your River/Lake/sea/Coastal terrain, moving thru non-magical difficult terain costs you no extra movement and you can pass thru non-magical plants without being slowed by them, and without taking damage from them if they have throns, spines or any other similar hazards."
		+ "\nAquatic Adaptation. You have a swim speed of 30 feet. You can also breathe in water as easily as you can breathe air. "
};

aceList["Spirit Folk, Desert (Fire)"] = {
	regExpSearch : /^(?=.*Sprit).*$/i,
	name : "Spirit Folk, Desert (Fire)",
	sortname : "Spirit Folk, Desert (Fire)",
	source : ["JI:HB", 0],
	plural : "Spirit Folk, Desert (Fire)",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 }, swim : { spd : 30, enc : 20 }  },
	languageProfs : ["Eastern Common"],
	vision : [["Darkvision", 60]],
		
	// Independent
	age : "Spirit Folk mature to adulthood at age 13, and ususaly live to around 500 years old.",
	height : " 5-6' tall.",
	weight : " 125 - 250 lbs",
	improvements : "Spirit Folk, Desert (Fire) : +2 Wisdom, +1 Constitution",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Sprit Folk, Desert (Fire) (+2 Wisdom, +1 Constitution)"
		+ "\nSpirit Subtype. Spirit folk have the spirit subtype, which means that you can be affected by spells and effects that specifically target spirits, such as protection from spirits. Your human ancestry means that you are still a humanoid, however, and therefore vulnerable to spells such as charm person. "
		+ "\nChild of Nature. You have advantage on Intelligence (Nature) and Wisdom (Survival) checks in Desert/Scrubland terrain. "
		+ "\nSpeak with Small Beasts. Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts that live normally in Desert/Scrubland terrain"
		+ "\nTerrain Movement: While oving in your Desert/Scrubland terrain, moving thru non-magical difficult terain costs you no extra movement and you can pass thru non-magical plants without being slowed by them, and without taking damage from them if they have throns, spines or any other similar hazards."
		+ "\nDesertwalker. You have advantage on Constitution checks made to march without rest when in hot desert terrain and you require only a quarter as much water as normal."
};