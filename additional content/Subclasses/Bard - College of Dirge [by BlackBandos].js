/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Bard, called "College of Dirge"
	Code by:	https://blackbandos-homebrew.fandom.com/wiki/College_of_Dirge_(5e_Bard_Archetype)
	Date:		2017-11-29 (sheet v12.999)
*/

var iFileName = "Bard - College of Dirge [by BlackBandos].js";
RequiredSheetVersion(12.999);

AddSubClass("bard", "college of dirge", {
	regExpSearch : /^(?=.*college)(?=.*dirge).*$/i,
	subname : "College of Dirge",
	source : ["HB", 0],
	features : {
		"subclassfeature3" : {
			name : "Bonus Cantrip",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "When you join this bardic college, at 3rd level, you learn one necromancy cantrip of your choice, which counts as a bard cantrip for you but not towards your cantrips known. ",
			spellcastingBonus : {
				name : "Necromancy Cantrips",
				spells : ["chill touch", "spare the dying", "toll the dead"],
				times : 1
			}
		},
		"subclassfeature3.1" : {
			name : "Haunted Eyes",
			source : ["HB", 0],
			minlevel : 3,
			dmgres : ["necrotic"],
			savetxt : {	adv_vs : ["frightened"] },
			description : "\n   " + "Additionally, at 3rd level, your dealing with the dead has made your mind and body strong. You gain resistance to necrotic damage, and have advantage on saving throws against being frightened. ",
		},
		"subclassfeature6" : {
			name : "Dance of the Dead",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "Starting at 6th level, you are able to perform to raise the dead. You learn the animate dead spell, which does not count towards your spells known. Additionally, as an action, you can expend one use of your bardic inspiration to animate two corpses or piles of bone within 30 feet of yourself as either zombies or skeletons, giving them temporary hit points equal to the number rolled on the die. They remain under your command as if raised by an animate dead spell. You must retain concentration on this feature, and when you lose concentration, or when an hour has passed, the undead return to being corpses or piles of bones. Bodies or bones cannot be animated more than once using this feature. ",
			action : ["action", "(perform)"],
			spellcastingBonus : {
				name : "Dance of the Dead",
				spells : ["animate dead"],
				selection : ["animate dead"]
			},
		},
		"subclassfeature14" : {
			name : "Emboldened Undead",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "At 14th level, your undead are mightier than most. Undead you control are immune to being turned, and when you use your Dance of the Dead feature, you animate one additional zombie or skeleton.y wou "
		}
	}
});
