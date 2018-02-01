var config = {
	"title": "Fridge magnets",
	"institution": "University of Tübingen",
	"trial_number": 30,
	"intro": {
		"title": "Welcome to ExPragExperiments!",
		"text": "But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
		"button": "Next"
	},
	"instructions": {
		"title": "Instructions",
		"text": "Instructions text",
		"button": "Next"
	},
	"trial": {
		"total_number": 2,
		"current_trial": 0
	},
	"thanks": {
		"title": "Thank you for taking part in this experiment!",
		"text": "more text"
	}
}

function configureExp() {
	var experiment = {};

	experiment.trialNumber = config.trial.total_number;
	experiment.currentTrial = config.trial.current_trial;

	// html updaters
	// main
	document.querySelector('#config-title').innerHTML = config.title;
	document.querySelector('#config-institution').innerHTML = config.institution;

	return experiment;
};