const fs = require('fs');
/**
 * generate random sentence from json file
 * @param filePath
 * @param totalSentences
 * @returns {string} random sentence from the file
 */
exports.generateRandomSentence = function(filePath, totalSentences) {
	const sentencesFile = fs.readFileSync(filePath);
	let sentences = JSON.parse(sentencesFile);
	sentences = Object.values(sentences);
	return sentences[Math.floor((Math.random() * (totalSentences + 1)))].text;
};