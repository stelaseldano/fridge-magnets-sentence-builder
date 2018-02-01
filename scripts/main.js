document.addEventListener('DOMContentLoaded', function() {
	//fme - fridge magnets experiment
	fme.init();
});

var fme = {};

fme.getNextView = function() {
	if (this.view.name === 'intro') {
		this.view = initInstructionsView();
	} else if ((this.view.name === 'trial') && (this.exp.currentTrial <= this.exp.trialNumber)) {
		this.view = initTrialView();
		this.exp.currentTrial++;
	} else if (this.view.name === 'instructions') {
		this.view = initTrialView();
		this.exp.currentTrial++;
	} else {
		this.view = initThanksView();
	}
};

fme.init = function() {
	this.view = initIntroView();
	this.exp = configureExp();
	this.exp.trialNumber = this.exp.trialNumber;
	this.exp.currentTrial = this.exp.currentTrial;
};