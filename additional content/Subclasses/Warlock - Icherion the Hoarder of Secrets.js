/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Warlock, called "Icherion the Hoarder of Secrets"
				This subclass is made by Gldnlion
	Code by:	Gldnlion
	Date:		2020-01-16 (sheet v12.999)
*/

var iFileName = "Warlock - Icherion the Hoarder of Secrets.js";
RequiredSheetVersion(12.999);

/*
var AddWarlockPactBoon = function (boonName, boonObj) {
	var warInv = ClassList.warlock.features["pact boon"];
	if (!warInv || (warInv.choices.indexOf(boonName) !== -1 && warInv[boonName.toLowerCase()].source && boonObj.source && warInv[boonName.toLowerCase()].source.toSource() === boonObj.source.toSource())) return; // the exact same thing is being added again, so skip it
	var useName = boonName;
	var suffix = 1;
	while (warInv.choices.indexOf(useName) !== -1) {
		suffix += 1;
		useName = boonName + " [" + suffix + "]";
	};
	warInv.choices.push(useName);
	warInv[useName.toLowerCase()] = boonObj;
};
*/

SourceList["HB:AC"] = {
	name: "Homebrew: Aeirlon Campaign",
	abbreviation: "HB:AC",
	group: "Homebrew",
	url: "https://https://homebrewery.naturalcrit.com/share/HkQDjxfpeI",
	date: "2020/01/29"
};

AddSubClass("warlock", "Icherion the Hoarder of Secrets", {
	regExpSearch: /^(?=.*\bicherion)(?=.*hoarder\b).*$/i,
	subname: "Icherion the Hoarder of Secrets",
	source: ["HB:AC", 0],
	spellcastingExtra: ["identify", "speak with animals", "detect thoughts", "locate object", "speak with dead", "clairvoyance", "arcane eye", "locate creature", "legend lore", "passwall"],
	features: {
		"subclassfeature1": {
			name: "Lair of Secrets",
			source: ["HB:AC", 0],
			minlevel: 1,
			description: "\n   " + "Starting at 1st level when you choose this patron, you can send your mind into the lair of Icherion to look among the detritus of secrets provided by its other servants." + "\n   " + "You can use a bonus action to gain advantage on and double your proficiency bonus (if you have one) for an ability check you make that uses Arcana, History, Insight, Nature, Tool Skill,, or Religion." + "Once you do so, you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 9th level and three times between long rests starting at 18th level.",
			action: ["bonus action", ""],
			usages: 1,
			recovery: "long rest"
		},

		"subclassfeature1.1": {
			name: "Sharing Secrets",
			source: ["HB:AC", 0],
			minlevel: 1,
			description: "\n   " + "Also at 1st level, Icherion begins to make demands upon your soul. Once per day, when you cast a divination spell, " + "\n   " + "you must whispoer a secret for Icherion to add to his lair. As you increase in levels Icherion demands more important and interesting secrets. ",
			usages: 1,
			recovery: "long rest"
		},

		"subclassfeature6": {
			name: "Magical Secrets",
			source: ["HB:AC", 0],
			minlevel: 6,
			description: "\n   " + "Starting at 6th level, your knowledge of Secrets dealing with magical effects and cosmic forces are developed enough that if you see a spell caster casting a spell, you can use your reaction to make an arcana check to know what the spell is.  If you sucessfully identify the spell the spell and the spell would force you to make a saving throw, you can make that saving throw with advantage. " + "\n   " + "Additionally, your comprehension of magic allows you to access magic beyond your power, but not your knowledge. " + "\n   " + " You can cast from a Spell Scroll even if the spell isn't on your spell list, and you can add your proficiency bonus to the ability check to successfully cast from a Spell Scroll. ",
		},

		"subclassfeature10": {
			name: "Secrets of the Damned",
			source: ["HB:AC", 0],
			minlevel: 10,
			description: "\n   " + "At 10th level, you can cast contact other plane (Icherion only) once per long rest. " + "\n   " + "This spell doesn’t count against your number of spells known.",
			recovery: "long rest",
			action: ["action", ""],
			spellcastingBonus: {
				name: "contact other plane",
				spells: "contact other plane",
				selection: "contact other plane"
			}
		},

		"subclassfeature14": {
			name: "The Vision of Icherion",
			source: ["HB:AC", 0],
			minlevel: 14,
			description: "Starting at 14th level, Icherion will sometimes look through your eyes and force its knowledge into your mind. You can use an action and take 1d10 psychic damage, learning the resistances, immunities, traits, and attacks of any creature you observe for 1 minute or more. You must be able to see or hear the target and the full breadth of what you learn is at the discretion of the GM (particularly obscure monsters may reveal very little).",
			action: ["action", ""]
		}
	}
});

/* 
AddFeatureChoice(
	ClassList.warlock.features["pact boon"], false, "Pact of the Bones", {
	name: ["Pact of the Bones"],
	source: ["HB:AC", 0],
	description: desc(
		["Icherion grants you a bag of bones. While the bones are on your person, you cast the augury spell with the bag (arcane focus) (or as a ritual). The spell doesn’t count against your number of spells known.",
			"The bones can also be dumped (cannot do augury while this is in use) to call forth a skeleton under your control. ",
			"If you lose your bag of Bone, you can perform a 1-hour ceremony to receive a replacement from Icherion. The ceremony can be performed during a short or long rest, and it destroys the previous bag. The cbag disappears in a flash of light when you die."]),
	spellcastingBonus: {
		name: ["Pact of the Bones"],
		spells: ["augury"],
		selection: ["augury"],
		firstCol: ["(R)"],
		prereqeval: function (v) {
			return classes.known.warlock && classes.known.warlock.subclass == "warlock-the seeker" ? true : "skip"
		}
	}
}); 
*/

AddWarlockPactBoon("Pact of the Bones", {
	name: "Pact of the Bones",
	source: ["HB", 0],
	description: "\n   " + "Icherion grants you a bag of bones. While the bones are on your person, you cast the augury spell with the bag (arcane focus) (or as a ritual). The spell doesn’t count against your number of spells known." + "\n   " + "The bones can also be dumped (cannot do augury while this is in use) to call forth a skeleton under your control." + "\n   " + "If you lose your bag of Bone, you can perform a 1-hour ceremony to receive a replacement from Icherion. The ceremony can be performed during a short or long rest, and it destroys the previous bag. The cbag disappears in a flash of light when you die.",
	//usages : 1,
	//recovery : "short rest",
	spellcastingBonus: {
		name: "Pact of the Bone",
		spells: "augury",
		selection: "augury",
		firstCol: "(R)"
	}
});

//add the invocations
AddWarlockInvocation("Summon Multiple Skeletons", {
	name: "Summon Multiple Skeletons",
	description: "\n   " + "Prerequisite:Pact of the Bones, You can summon one addtional skeleton (2 addtional at warlock level 7, 3 at warlock level 11 and 4 at warlock level 15)",
	source: ["HB:AC", 3],
	prereqeval: "classes.known.warlock.subclass === 'Icherion the Hoarder of Secrets' && What('Class Features Remember').indexOf('warlock,pact boon,Pact of the Bones') !== -1",
});

AddWarlockInvocation("improved skeletons (fire/ice)", {
	name: "improved skeletons (fire/ice)",
	description: "\n   " + "Prerequisite:Pact of the Bones & Warlock Lvl 11, Your summoned skeleton can do an additional 1d6 fire or cold dammage. All the skeletons do the same type of addtional damange",
	source: ["HB:AC", 3],
	prereqeval: "classes.known.warlock.subclass === 'Icherion the Hoarder of Secrets' && What('Class Features Remember').indexOf('warlock,pact boon,Pact of the Bones') !== -1",
});

AddWarlockInvocation("divining nones", {
	name: "divining bones",
	description: "\n   " + "Prerequisite:Pact of the Bones & Warlock Lvl 11, Your summoned skeleton can do an additional 1d6 fire or cold dammage. All the skeletons do the same type of addtional damange",
	source: ["HB:AC", 3],
	usages: 1,
	recovery: "long rest",
	prereqeval: "classes.known.warlock.subclass === 'Icherion the Hoarder of Secrets' && What('Class Features Remember').indexOf('warlock,pact boon,Pact of the Bones') !== -1",
});

AddWarlockInvocation("psychic damage", {
	name: "make familiar invisible",
	description: "\n   " + "Prerequisite:Pact of the blade & Warlock Lvl 6, your pact weapon does psychic damage.",
	source: ["HB:AC", 3],
	prereqeval: "classes.known.warlock.subclass === 'Icherion the Hoarder of Secrets' && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
});

AddWarlockInvocation("make familiar invisible", {
	name: "make familiar invisible",
	description: "\n   " + "Prerequisite:Pact of the chain & Warlock Lvl 6, you can cast invisiblity on your familiar as a bonus action one per short rest.",
	source: ["HB:AC", 3],
	usages: 1,
	recovery: "short rest",
	spellcastingBonus: {
		name: "Pact of the chain",
		spells: "invisibility",
		selection: "invisibility"
	},
	prereqeval: "classes.known.warlock.subclass === 'Icherion the Hoarder of Secrets' && What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
});


CreatureList["bone sential"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [] //the name entered here is used to identify the input, so it has to be the same as the "name : " below, but in lower case

	name : "bone sential", // Required; the name to use for the race

	source : ["HB:AC", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	size : 5, // Required; the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)

	type : "fiend", // Required; the type of the creature. Always put something here!

	subtype : "devil", // Required; the subtype of the creature. Do not delete this line, but it can be just ""

	companion : "pact_of_the_chain", // Optional; whether or not the creature will be added to the menu on the companion page, except the ranger's companion, that is based on other criteria.
	/* The options are the following within the quotation marks (note the use of only lower case):
		- "familiar" (Find Familiar spell AND Pact of the Chain warlock feature)
		- "familiar_not_al" [only available from v13 onwards, same as "familiar" but ignored if the sheet is used for Adventurers League]
		- "mount" (Find Steed spell)
		- "steed" (Find Greater Steed spell)
		- "pact_of_the_chain" (Pact of the Chain warlock feature)
		- "companion" (UA: Revised Ranger's Beast Conclave feature)
	Note that for the creature to be available to the PHB ranger, you don't need to do anything
	*/

	alignment : "lawful neutral", // Required; the alignment. Always put something here!

	ac : 15, // Required; the armour class. Always put something here!

	hp : 18, //  Required; the amount of hit points. Always put something here!

	hd : [4, 4], //[#, die]. Required; Always put something here!

	speed : "40 ft., fly 40 ft. (hover)", // Required; the speed of the race in feet (do not forget to put "ft" in the string)

	scores : [7, 16, 14, 16, 12, 6], // [Str, Dex, Con, Int, Wis, Cha] Required;

	saves : ["", "", "", "", "", ""], // [Str, Dex, Con, Int, Wis, Cha]. Required; The total of each Saving Throw (not just the modifier to the ability modifier). Only put something there if it is different than the normal ability score modifier (so when the creature is proficient or has other bonuses).

	skills : { // Optional; any skill proficiencies the creature has. Enter the name of the skill with the total bonus in that skill, not just the proficiency bonus, but inlcude the ability score modifier as well!
        "perception" : 6,
        "investigation" : 6,
        "stealth" : 7,
	}, // if the creature has no skill proficiencies, you can delete the entire traits entry

	//damage_vulnerabilities : "radiant", // Optional; damage vulnerabilitie(s) the creature has. This line can be deleted if you don't have anything to put here

	//damage_resistances : "lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons", // Optional; damage resistance(s) the creature has. This line can be deleted if you don't have anything to put here

	damage_immunities : "poison", // Optional; damage immunities the creature has. This line can be deleted if you don't have anything to put here

	condition_immunities : "exhaustion, poisoned, prone", // Optional; conditional immunities the creature has. This line can be deleted if you don't have anything to put here

	senses : "Darkvision 60 ft, passive Perception 16", // Required; senses granted by the race. This text will be put in the "Senses" section on the sheet. If you don't have anything to put here, DO NOT DELETE THIS LINE, but just put ""

	languages : "understands the same languages as its master but can't speak", // Required; the language(s) known by the creature, note that they all appear as one string

	challengeRating : "1", // Required; the Challenge Rating of the creature. Always put something here!

	proficiencyBonus : 2, // Required; Proficiency Bonus the creature has. Always put something here!

	attacksAction : 1, // Required; The amount of attacks per Attack action the creature can do. Always put something here!

	attacks : [{ // Required; the attacks used for the companion and wild shape page
			name : "Flarebolt", // name of the attack
			ability : 2, // the ability score used to calculate the to hit modifier (and the damage if applicable, see below). [Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6]
			damage : [1, 4, "piercing"], // [#, die, type] First entry is the amount of dice, second is the type of dice, and third is the damage type. //"" for die is allowed, meaning no die will be given, only the first digit will be present.
			range : " range (60 ft.)", // the attack's range
			description : "Single ranged attack as an Attack action, and the target creature is illuminated as if affected by the light cantrip; the creature can spend an action removing any bolts from its body to end this effect. This attack does not have disadvantage if an enemy is within 5 feet.", // the attack's description
			modifiers : [ 2, "+2", ""], // bonuses to: [to hit, to damage, add ability to damage]; "" means ignore. //For the first two (to hit and to damage), you can also enter the three-letter abbreviation of an ability score (Str, Dex, Con, Int, Wis, or Cha), to have that ability's modifier added to it. //The last one can be either "" (meaning you add ability modifier to damage) or false (meaning you don't add the ability modifier to damage)
			//dc : true, // optional, will make the To Hit field display a DC instead. This will overwrite the first value you put in Modifiers
			//tooltip : "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone." // optional, this text will be added to the tooltip of the description field of the attack of the Wild Shape. It will do nothing for the attack on the Companion page
		}, // you can add more by copying what is between the {}, (also include the {}, )and putting it here
	], // if the creature has no attacks, simply put [], DO NEVER DELETE the attack entry

	features : [{ // Optional; features that are added to the companion "Features" section as bullet points after the abovementioned vulnerabilitie, immunities, resistances, senses, and languages //with the Wild Shape, these features are never added
			name : "Immaculate Memory", // name of the trait
			description : "The bone sentinel can recall a specific creature or object that it has seen or heard before with almost perfect accuracy, even among those of a similar type or appearance.", // description of the trait

        },
	], // if the creature has no traits, you can delete the entire traits entry

	actions : [{ // Optional; actions that are added to the companion "Traits" section as bullet points //with the Wild Shape, these traits are only added (also as bullet points) if no "wildshapeString" is defined, see below
	        name : "Projection.", // name of the trait
			description : "The bone sentinel can create images of its thoughts and memories anywhere within 10 feet to communicate with other creatures. " + "/n" + "It can also cast the minor illusion spell at will with a range of 30 feet and a spell DC of 13", // description of the trait

            name : "Searchlight.", // name of the trait
			description : "The sentinel drone can begin emitting light as if casting the light cantrip on itself as a bonus action. ", // description of the trait

		},
	],

    /*
	traits : [{ // Optional; traits that are added to the companion "Traits" section as bullet points after the actions //with the Wild Shape, these traits are only added (also as bullet points) if no "wildshapeString" is defined, see below
			name : "Air Form", // name of the trait
			description : "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.", // description of the trait
		},
	], // if the creature has no traits, you can delete the entire traits entry
    */

	wildshapeString : "Darkvision 60 ft| Knows Auran| Resistant to: lightning, thunder, and bludgeoning, piercing, and slashing from nonmagical weapons| Immune to: poison, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious| Air Form: can move through 1 inch wide space without squeezing and can move through and stop in space of hostiles| Whirlwind: see Monster Manual page 124", // Optional; a string to put in the Wild Shape Traits & Features field. If you define this, no trait or action will be added to the Wild Shape Traits & Features field. This is here so you can make all the traits and features fit into the limited space on the Wild Shape page //This line can be deleted if you don't have anything to put here
};