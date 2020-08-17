exports.translatePersonality = function(personality) {
	switch (personality) {
	case 'Normal': return 'Normale';
	case 'Cranky': return 'Versatile';
	case 'Jock': return 'Sportive';
	case 'Smug': return 'Chic';
	case 'Snooty': return 'Arrogante';
	case 'Lazy': return 'Paresseuse';
	case 'Uchi': return 'Grande soeur';
	case 'Peppy': return 'Vive';
	default: return 'Inconnu';
	}
};

exports.translateSpecies = function(species) {
	switch (species) {
	case 'Anteater': return 'Fourmilier';
	case 'Eagle': return 'Aigle';
	case 'Ostrich': return 'Autruche';
	case 'Penguin': return 'Pingouin';
	case 'Pig': return 'Cochon';
	case 'Rabbit': return 'Lapin';
	case 'Rhino': return 'Rhinocéros';
	case 'Sheep': return 'Mouton';
	case 'Squirrel': return 'Écureuil';
	case 'Tiger': return 'Tigre';
	case 'Wolf': return 'Loup';
	case 'Bear': return 'Ours';
	case 'Bird': return 'Oiseau';
	case 'Bull': return 'Taureau';
	case 'Cat': return 'Chat';
	case 'Cub': return 'Ourson';
	case 'Chicken': return 'Poulet';
	case 'Cow': return 'Vache';
	case 'Alligator': return 'Alligator';
	case 'Deer': return 'Cerf';
	case 'Dog': return 'Chien';
	case 'Duck': return 'Canard';
	case 'Elephant': return 'Éléphant';
	case 'Frog': return 'Grenouille';
	case 'Goat': return 'Chèvre';
	case 'Gorilla': return 'Gorille';
	case 'Hamster': return 'Hamster';
	case 'Hippo': return 'Hippopotame';
	case 'Horse': return 'Cheval';
	case 'Koala': return 'Koala';
	case 'Kangaroo': return 'Kangourou';
	case 'Lion': return 'Lion';
	case 'Monkey': return 'Singe';
	case 'Mouse': return 'Souris';
	case 'Octopus': return 'Poulpe';
	default: return 'Inconnu';
	}
};

exports.translateHobbies = function(hobby) {
	switch (hobby) {
	case 'Education': return 'Se cultiver';
	case 'Fitness': return 'Le sport';
	case 'Fashion': return 'La mode';
	case 'Nature': return 'La nature';
	case 'Play': return 'Jouer';
	case 'Music': return 'La musique';
	default: return 'Inconnu';
	}
};