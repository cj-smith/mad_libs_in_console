alert("I'm working with JavaScript");

function mad_libs() {
	var nouns = ["cat", "grass", "door"];
	var places = ["outside", "backyard", "inside"];
	var verbs = ["eat", "puked", "cry", "meow", "whine", "yowl"];
	var adjectives = ["black", "annoying", "closed"];
	document.write ("There once was a " + adjectives[0] + " " + nouns[0] + " named Frank.  He liked to go " + places[0] + " in the " + places[1] + " and " + verbs[0] + " " + nouns[1] + " until he " + verbs[1] + ".  But he didn't like the " + nouns[2] + " to be " + adjectives[2] + " behind him.  He would " + verbs[2] + " and " + verbs[4] + " if he was closed " + places[2] + ", and he would " + verbs[3] + " and " + verbs[5] + " if he was closed " + places[0] + ".  Frank was a very " + adjectives[1] + " " + nouns[0] + ".");
}

mad_libs();
