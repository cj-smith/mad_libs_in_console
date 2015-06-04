// alert("I'm working with JavaScript");

function mad_libs() {
	var nouns = ["cat", "grass", "door"];
	var places = ["outside", "backyard", "inside"];
	var verbs = ["eat", "puked", "cry", "meow", "whine", "yowl"];
	var adjectives = ["black", "annoying", "closed"];
	document.write ("There once was a " + adjectives[0] + " " + nouns[0] + " named Frank.  He liked to go " + places[0] + " in the " + places[1] + " and " + verbs[0] + " " + nouns[1] + " until he " + verbs[1] + ".  But he didn't like the " + nouns[2] + " to be " + adjectives[2] + " behind him.  He would " + verbs[2] + " and " + verbs[4] + " if he was closed " + places[2] + ", and he would " + verbs[3] + " and " + verbs[5] + " if he was closed " + places[0] + ".  Frank was a very " + adjectives[1] + " " + nouns[0] + ".");
	
	nouns = ["beer", "hipster", "jackalope"]
	places = ["inside", "outside", "bar"]
	verbs = ["drink", "bike", "run", "complain", "giggle", "belch"]
	adjectives = ["neckbeard", "enlightening", "rainbow-colored"]
	var random0_2 = Math.floor(Math.random() * 3);
	var random0_5 = Math.floor(Math.random() * 6);
	document.write ("There once was a " + adjectives[random0_2] + " " + nouns[random0_2] + " named Frank.  He liked to go " + places[random0_2] + " in the " + places[random0_2] + " and " + verbs[random0_5] + " " + nouns[random0_2] + " until he " + verbs[random0_5] + ".  But he didn't like the " + nouns[random0_2] + " to be " + adjectives[random0_2] + " behind him.  He would " + verbs[random0_5] + " and " + verbs[random0_5] + " if he was closed " + places[random0_2] + ", and he would " + verbs[random0_5] + " and " + verbs[random0_5] + " if he was closed " + places[random0_2] + ".  Frank was a very " + adjectives[random0_2] + " " + nouns[random0_2] + ".");
}

mad_libs();

// var verbs = ["eat", "puked", "cry", "meow", "whine", "yowl"];
// var random1_6 = Math.floor(Math.random() * 5);
// console.log(verbs[random1_6])