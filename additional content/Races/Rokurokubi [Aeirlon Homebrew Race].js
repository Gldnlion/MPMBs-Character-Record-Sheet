/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Rokurokubi" 
				This is taken from the Aeirlon 5e Homebrew Race))
	Code by: Jim Inkpen
	Date:		2018-05-02 (sheet v12.999)
	Please support the creator of this content (Jeremy Forbing) and download his material from the DMs Guild website: http://www.dmsguild.com/browse.php?author=Jeremy%20Forbing
*/

var iFileName = "Rokurokubi [Aeirlon Homebrew Race].js";

RequiredSheetVersion(12.999);

SourceList["JI:H"] = {
	name : "Jim Inkpen : Rokurokubi player race",
	abbreviation : "JI:H",
	group : "Aeirlon Homebrew",
	url : "https://homebrewery.naturalcrit.com/share/HkHnuzufN",
	date : "2020/02/03"
};

RaceList["Rokurokubi"] = {
	regExpSearch : /^(?=.*Rokurokubi).*$/i,
	name : "Rokurokubi",
	sortname : "Rokurokubi",
	source : ["JI:H", 0],
	plural : "Rokurokubi",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common", 1],
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
	dmgres : ["Poison"]
};
	
WeaponsList["Rokurokubi poisonous bite"] = {
	regExpSearch : /^(?=.*Rokurokubi)(?=.*poisonous)(?=.*bite).*$/i,
	name : "Rokurokubi poisonous bite",
	source : ["JI:H", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 12, "poison"],
	range : "Melee",
	description : "You possess a bite attack, which is a standard action melee attack that benefits from your Proficiency bonus. This does not grant you extra attacks. On a hit, your bite attack inflicts 1d12 Poison damage, which increases by +1d12 at 5th level (2d12), 11th level (3d12) and 17th level (4d12).",
	abilitytodamage : true,
	monkweapon : true
};	

WeaponsList["Rokurokubi claws"] = {
	regExpSearch : /^(?=.*Rokurokubi)(?=.*claws).*$/i,
	name : "Rokurokubi Claws",
	source : ["JI:H", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "Finesse",
	abilitytodamage : true,
	monkweapon : true
};	