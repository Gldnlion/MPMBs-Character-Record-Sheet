/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Aeirlon Additional Spells
	Effect:		Additional spells for the Aeirlon Campaign Setting
	Sheet:		v12.999 (2018-02-19)
	
	Please note that there is no code here to update drop-down boxes because the rop-down boxes in the spell selection dialogues are generated automatically and will include any spells you add correctly
	
	If you are looking for a way to add a cantrip/spell to the drop-down boxes in the attack sections, then you will have to look at the WeaponsList syntax and add the cantrip/spell as a weapon (as well)
*/

var iFileName = "Aeirlon SpellsList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SpellsList["abi-dalzim's horrid wilting"] = { //Object name; note the use of only lower case! The spelling here is used to identify the spell with and has to be exactly the same as "name" but in lower case. Also note the absence of the word "var" and the use of brackets []
	
	name : "Abi-Dalzim's Horrid Wilting", //Required; The name of the spell. This will be put in the Spell field on the Spell Sheet. Except, if a "nameShort" is present, this name will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.
	
	nameShort : "Abi-D's Horrid Wilting", //Optional; A shortened name of the spell that fits on the Spell Sheet. If present, this name will be put on the Spell Sheet and the full name above will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.
	
	nameAlt : "Horrid Wilting", //Optional; An alternative name that can be used to identify the spell with on the sheet
	
	classes : ["bard", "cleric", "druid", "sorcerer", "wizard"], //Optional; Array of all the classes that have this spell on their list. Even with one entry you still need to put the brackets around it []. Note the use of only lower case as these entries are identical to the CLassList object names! If you omit this attribute, the spell will only be selectable through the dependencies, see below. If you want the spell to be available for subclasses and through the SpellcastingBonus object, just add an empty array, i.e. classes : [],
	
	source : ["HB", 0], //Required; the source and the page number. "HB" stands for homebrew. //Note that filling out this incorrectly will prohibit the spell from showing up in the spell selection dialogues. //If you want to add a custom source, see "Homebrew Syntax - SourceList.js" // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
	
	ritual : false, //Optional; Whether (true) or not (false) this spell is a ritual
	
	level : 0, //Required; The Spell Level. Has to be a number from 0 to 9 // use 1 if you are adding a psionic discipline, and 0 for a psionic talent
	
	school : "Trans", //Optional; Spell School as it will show up on the Spell Sheet; Can only select from: "Abjur", "Conj", "Div", "Ench", "Evoc", "Illus", "Necro", "Trans", and for psionic discipline orders: "Avatar", "Awake", "Immor", "Nomad", "Wu Jen"
	
	time : "1 min", //Required; Casting Time as it will show up on the Spell Sheet
	
	range : "Touch", //Required; Spell Range as it will show up on the Spell Sheet
	
	components : "V,S,M", //Optional; Components as they will show up on the Spell Sheet; Use "M\u0192" for a material component that is costly (Mƒ), and use "M\u2020" for a material component that is costly and also consumed (M†)
	
	compMaterial : "Two lodestones", //Optional; Material Component. This string will be put in the mouseover text (tooltip) of the component field
	
	duration : "Instantaneous", //Required; Spell Duration as it will show up on the Spell Sheet

	save : "Int", //Optional; The ability score that the spell's Saving Throw uses. This will be put in the save field
	
	description : "Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item", //Required; Short Spell Description as it will show up on the Spell Sheet
	
	descriptionMetric : "Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item", //Optional; Short Spell Description as it will show up on the Spell Sheet when it is set to use the metric system. If this is omitted the sheet will automatically try to convert the 'description' to metric
	
	descriptionFull : "This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn clack, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage." + "\n   " + "This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.", //Optional; The full Spell Description. This string will be put in the mouseover text (tooltip) of the description field
	
	firstCol : "6", //Optional; Set something to be put in the first column on the spell sheet. This can be something like power point cost or ki cost, but also the commands "atwill", "oncelr", "oncesr", "markedbox", "checkbox", or "checkedbox" for the appropriate icon
	
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
	
	psionic : true, //Optional; If you set this to true, the sheet will treat this spell as a psionic talent/discipline
};

SpellsList["close wound"] = { 
	name : "close wound", 
	nameShort : "close wound", 
	classes : ["bard", "cleric", "druid"], 
	source : ["HB", 0], 
	ritual : false, 
	level : 0, 
	school : "Evoc", 
	time : "1 action",
	range : "Touch", 
	components : "V,S", 
	duration : "Instantaneous", 
	description : "Touch a creature and channel a surge of natural healing. If the target creature has at least 1 hit point, you can spend one of your Hit dice, rolling the die and adding their Constituion Modifier to the result. They regain Hit Points equal to the results (minimum of 0)."
        + "\nYou ccan spend one addtional Hit Die when you reach 5th level(2), 11th level(3) and 17th level(4)",
	descriptionFull : "Touch a creature and channel a surge of natural healing. If the target creature has at least 1 hit point, you can spend one of your Hit dice, rolling the die and adding their Constituion Modifier to the result. They regain Hit Points equal to the results (minimum of 0)."
    + "\nYou ccan spend one addtional Hit Die when you reach 5th level(2), 11th level(3) and 17th level(4)"
};

SpellsList["wall of obsucrment"] = { 
	name : "wall of obsucrment", 
	nameShort : "wall of obsucrment", 
	nameAlt : "blur wall", 
	classes : ["wizard"], 
	source : ["HB", 0], 
	ritual : true,
	level : 4,
	school : "Illus", 
	time : "1 action", 
	range : "30 ft.", 
	components : "V,S,M", 
	compMaterial : "Slice of Mica", 
	duration : "24 hrs.",
	description : "An wall of obsurement springs into existence at a point you choose within range.  Light passing thru the wall is refracted randomly creating a blurring effect. This makes it impossible to identify people or objects on the other side of the wall (or the distance to them), giving disadvantage on attacks or spells targeting creatures/objects thru the wall. This also gives advanatage on saves for spells targeting beyond the wall. General movement and light/darkness sources can be seen, but exact position/distance and what is happening cannot be determined. Area of effect spells that overlap the wall act as normal, if a creature/object being affect happens to be in the area of effect."
        + "\nThe wall appears in any orientation you choose, as a horizontal or vertical wall or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature can only see what is on one side or the other (your choice which side). "
        + "\nPhysical objects can simply pass through the wall, but it blocks light & darkness based effects (light, darkness, dancing lights, hypnotic pattern, etc.). It is immune to all damage The wall also extends into the Ethereal Plane, obsuring vision through the wall."
        + "\nYou can create a permanent wall of obscurement by casting this spell in the same location every day for one year. Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item", 
	descriptionFull : "An wall of obsurement springs into existence at a point you choose within range.  Light passing thru the wall is refracted randomly creating a blurring effect. This makes it impossible to identify people or objects on the other side of the wall (or the distance to them), giving disadvantage on attacks or spells targeting creatures/objects thru the wall. This also gives advanatage on saves for spells targeting beyond the wall. General movement and light/darkness sources can be seen, but exact position/distance and what is happening cannot be determined. Area of effect spells that overlap the wall act as normal, if a creature/object being affect happens to be in the area of effect."
    + "\nThe wall appears in any orientation you choose, as a horizontal or vertical wall or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature can only see what is on one side or the other (your choice which side). "
    + "\nPhysical objects can simply pass through the wall, but it blocks light & darkness based effects (light, darkness, dancing lights, hypnotic pattern, etc.). It is immune to all damage The wall also extends into the Ethereal Plane, obsuring vision through the wall."
    + "\nYou can create a permanent wall of obscurement by casting this spell in the same location every day for one year. Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item"
};

SpellsList["greater alarm"] = { 
	name : "greater alarm", 
	nameShort : "greater alarm", 
	classes : ["wizard"], 
	source : ["HB", 0], 
	ritual : true,
	level : 3,
	school : "Abjur", 
	time : "1 action", 
	range : "30 ft.", 
	components : "V,S,M", 
	compMaterial : "a tiny bell and a piece of fine silver wire", 
	duration : "24 hrs.",
	description : "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm or a token/object that can be carried. You also choose whether the alarm is mental or audible."
        + "\nA mental alarm alerts you with a ping in your mind if you are on the same plane as the warded area. This ping awakens you if you are sleeping."
        + "\nAn audible alarm produces the sound of a hand bell for 10 mintues within 60 feet."
        + "\nYou can create a permanent Greater Alarm by casting this spell in the same location every day for one year. ",
    descriptionFull : "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm or a token/object that can be carried. You also choose whether the alarm is mental or audible."
    + "\nA mental alarm alerts you with a ping in your mind if you are on the same plane as the warded area. This ping awakens you if you are sleeping."
    + "\nAn audible alarm produces the sound of a hand bell for 10 mintues within 60 feet."
    + "\nYou can create a permanent Greater Alarm by casting this spell in the same location every day for one year. "
};

SpellsList["arcane shield"] = { 
	name : "arcane shield", 
	nameShort : "arcane shield", 
	classes : ["wizard"], 
	source : ["HB", 0], 
	ritual : false,
	level : 2,
	school : "Abjur", 
	time : "1 action", 
	range : "self", 
	components : "V,S,M", 
	compMaterial : "a small iron plate (at least 2 inches across)", 
	duration : "1 min. Concentration",
	description : "Arcane shield creates an moving invisible tower-shield-sized mobile disk that hovers in on one of your facings. It will scatter or dissipate up to 4 levels of any magical energy or force attacks directed at you on that facing."
        + "\nFor Example: Peng Shu has a Arcane shield up and is hit by a Lvl 3 lightning bolt, this leaves 1 levels left in the shield."
        + "\nA shield with insufficient levels or protection against a spell reduces the dice of damage taken. At 2 dice per level remaining. Saving Throws Still Apply."
        + "\nFor Example: Peng Shu with 1 levels left in his shield is hit by a level 3 fireball, the shield protects Peng Shu reducing the fireball to from 8d6 to 6d6."
        + "\nThe shield's facing can be changed as a bonus action."
        + "\nAt Higher Levels. When you cast this spell using a spell slot of 3th level or higher, the levels of the spell that can be disapated increases by 2 for each slot level above 3rd.",
    descriptionFull : "Arcane shield creates an moving invisible tower-shield-sized mobile disk that hovers in on one of your facings. It will scatter or dissipate up to 4 levels of any magical energy or force attacks directed at you on that facing."
        + "\nFor Example: Peng Shu has a Arcane shield up and is hit by a Lvl 3 lightning bolt, this leaves 1 levels left in the shield."
        + "\nA shield with insufficient levels or protection against a spell reduces the dice of damage taken. At 2 dice per level remaining. Saving Throws Still Apply."   
        + "\nFor Example: Peng Shu with 1 levels left in his shield is hit by a level 3 fireball, the shield protects Peng Shu reducing the fireball to from 8d6 to 6d6."
        + "\nThe shield's facing can be changed as a bonus action."
        + "\nAt Higher Levels. When you cast this spell using a spell slot of 3th level or higher, the levels of the spell that can be disapated increases by 2 for each slot level above 3rd."
};

SpellsList["bloodhound"] = { 
	name : "bloodhound", 
	nameShort : "bloodhound", 
	classes : ["wizard"], 
	source : ["HB", 0], 
	ritual : true,
	level : 2,
	school : "Divin", 
	time : "1 action", 
	range : "self", 
	components : "V,S,M", 
	compMaterial : "a drop of the casters blood and a object with the scent to be tracked", 
	duration : "1 hr. Concentration",
	description : "The caster places a drop of their blood on the object with the scent to be tracked. The spell then attempts to locate scent(s) from the object within 30 feet of the caster. It then 'Pulls' the caster to either the greatest concentration of the scents (which should be the freshest) or least concentration (oldest), at the casters choice. As the caster moves, the spell points out the general direction the scents came from or went towards."  
        + "\nThe spell can be fooled by masking or changing scents, for example tracking a fugitive who takes a bath, sprays with perfume and/or changes into new cloths, the spell may track the old cloths. Like wise if an object has multiple scents and they go different ways it will follow the strongest scent(s). Also if the target flies or otherwise moves outside of the area of effect without touching anything to leave behind a scent the spell will not pull in any direction."
        + "\nAs long as the caster maintains concentration, the spell will continue to look for the scent, pulling if it finds it again.",
    descriptionFull : "The caster places a drop of their blood on the object with the scent to be tracked. The spell then attempts to locate scent(s) from the object within 30 feet of the caster. It then 'Pulls' the caster to either the greatest concentration of the scents (which should be the freshest) or least concentration (oldest), at the casters choice. As the caster moves, the spell points out the general direction the scents came from or went towards."  
    + "\nThe spell can be fooled by masking or changing scents, for example tracking a fugitive who takes a bath, sprays with perfume and/or changes into new cloths, the spell may track the old cloths. Like wise if an object has multiple scents and they go different ways it will follow the strongest scent(s). Also if the target flies or otherwise moves outside of the area of effect without touching anything to leave behind a scent the spell will not pull in any direction."
    + "\nAs long as the caster maintains concentration, the spell will continue to look for the scent, pulling if it finds it again."
};

SpellsList["spike spray"] = { 
	name : "spike spray", 
	nameShort : "spike spray", 
	classes : ["wizard"], 
	source : ["HB", 0], 
	ritual : false,
	level : 2,
	school : "Conj", 
	time : "1 action", 
	range : "self (30 ft. Cone)", 
	components : "V,S,M", 
	compMaterial : "a pin, small nail or needle", 
	duration : "Instantaneous",
	description : "A spray of cold iron spikes spray from your fingertips. Each creature in a 30-foot cone must make a Dexterity saving throw. A target takes 6d4 (13) peircing damage on a failed save, or half as much damage on a successful one. The spikes are not magical."
        + "\nAt Higher Levels. When you cast this spell using a spell slot of 3th level or higher, the damage increases by 1d4 for each slot level above 2nd.",
    descriptionFull : "A spray of cold iron spikes spray from your fingertips. Each creature in a 30-foot cone must make a Dexterity saving throw. A target takes 6d4 (13) peircing damage on a failed save, or half as much damage on a successful one. The spikes are not magical."
    + "\nAt Higher Levels. When you cast this spell using a spell slot of 3th level or higher, the damage increases by 1d4 for each slot level above 2nd."
};

SpellsList["glitter wall"] = { 
	name : "glitter wall", 
	nameShort : "glitter wall", 
	classes : ["wizard"], 
	source : ["HB", 0], 
	ritual : false,
	level : 2,
	school : "Conj", 
	time : "1 action", 
	range : "60 ft.", 
	components : "V,S,M", 
	compMaterial : "a pinch of mica dust", 
	duration : "1 min.",
	description : "Creates a glittering curtain (wall) of golden particles up to 100' long and 20' high, or with a radius up to 20 ft. wide and 20 ft. tall. Any creature caught in the wall when cast can make a Dexterity saving throw not to be affected initially (Jump out of the way)."
        + "\nCreatures moving through the wall must make succeed on a dexterity saving throw or be blinded for the duration of the spell."
        + "\nAll within the wall or moving through it are covered by the dust, which cannot be removed and continues to sparkle until it fades, visibly outlining invisible things for the duration of the spell."
        + "\nAny creature covered by the dust takes a -20 penalty on Hide checks. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
        + "\nAt Higher Levels. When you cast this spell using a spell slot of 4rd level or higher, the duration increases by 1 minute for each slot level above 3rd.",
    descriptionFull : "Creates a glittering curtain (wall) of golden particles up to 100' long and 20' high, or with a radius up to 20 ft. wide and 20 ft. tall. Any creature caught in the wall when cast can make a Dexterity saving throw not to be affected initially (Jump out of the way)."
        + "\nCreatures moving through the wall must make succeed on a dexterity saving throw or be blinded for the duration of the spell."
        + "\nAll within the wall or moving through it are covered by the dust, which cannot be removed and continues to sparkle until it fades, visibly outlining invisible things for the duration of the spell."
        + "\nAny creature covered by the dust takes a -20 penalty on Hide checks. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
        + "\nAt Higher Levels. When you cast this spell using a spell slot of 4rd level or higher, the duration increases by 1 minute for each slot level above 3rd."
};

SpellsList["glitter cloud"] = { 
	name : "glitter cloud", 
	nameShort : "glitter cloud", 
	classes : ["wizard"], 
	source : ["HB", 0], 
	ritual : false,
	level : 2,
	school : "Conj", 
	time : "1 action", 
	range : "30 ft.", 
	components : "V,S,M", 
	compMaterial : "a small bag of mica dust", 
	duration : "1 min.",
	description : "Creates an cloud full of glittering golden particles up to 50' ft in radius. Creatures Starting in or entering the area become blinded on a failed reflex save for the duration of the spell."
        + "\nAll within the area or moving through it are covered by the dust, which cannot be removed and continues to sparkle until it fades, visibly outlining invisible things for the duration of the spell. "
        + "\nAny creature covered by the dust takes a -20 penalty on Hide checks. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
        + "\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the duration increases by 1 minute for each slot level above 4th.",
    descriptionFull : "Creates an cloud full of glittering golden particles up to 50' ft in radius. Creatures Starting in or entering the area become blinded on a failed reflex save for the duration of the spell."
        + "\nAll within the area or moving through it are covered by the dust, which cannot be removed and continues to sparkle until it fades, visibly outlining invisible things for the duration of the spell. "
        + "\nAny creature covered by the dust takes a -20 penalty on Hide checks. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible."
        + "\nAt Higher Levels. When you cast this spell using a spell slot of 4rd level or higher, the duration increases by 1 minute for each slot level above 3rd."
};