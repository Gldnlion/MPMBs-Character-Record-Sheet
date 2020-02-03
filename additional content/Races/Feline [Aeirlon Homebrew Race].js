/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Feline" 
				This is taken from the Aeirlon 5e Homebrew Race))
	Code by: Jim Inkpen
	Date:		2018-05-02 (sheet v12.999)
	Please support the creator of this content (Jeremy Forbing) and download his material from the DMs Guild website: http://www.dmsguild.com/browse.php?author=Jeremy%20Forbing
*/

var iFileName = "Feline [Aeirlon Homebrew Race].js";

RequiredSheetVersion(12.999);

SourceList["JI:H"] = {
	name : "Jim Inkpen : Feline player race",
	abbreviation : "JI:H",
	group : "Aeirlon Homebrew",
	url : "http://10.0.0.221/dokuwiki/doku.php?id=felines",
	date : "2018/05/02"
};

RaceList["Feline"] = {
	regExpSearch : /^(?=.*Feline).*$/i,
	name : "Feline",
	sortname : "Feline",
	source : ["JI:H", 0],
	plural : "Feline",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Eastern Common", 1],
	/* weaponprofs : [false, false, ["pike", "shortbow"]],*/
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	
	// Independent
	age : "Felines mature to adulthood at age 13, and very rarely live over 60 years old.",
	height : " 4-5' tall.",
	weight : " are the same weight as a normal member of their previous race.",
	improvements : ": +2 Dexterity,",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Feline (+2 Dexterity)\nNatural Grace. You are resistant to fall damage less than 40' or immune to damage from falls less than 20'.",
	weapons : ["feline claws"]
};
	
WeaponsList["feline claws"] = {
	regExpSearch : /^(?=.*feline)(?=.*claws).*$/i,
	name : "Feline Claws",
	source : ["JI:H", 4],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "You are proficient with your unarmed strikes which deal 1d4 slashing damage and are considered finesse weapons.",
	abilitytodamage : true,
	monkweapon : true
};	
