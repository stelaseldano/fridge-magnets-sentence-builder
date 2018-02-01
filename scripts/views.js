// helpers
var hideOtherViews = function() {
	var views = document.getElementsByClassName('view');

	for (var i=0; i<views.length; i++) {
		views[i].classList.add('nodisplay');
	}
};

var getNextView = function() {
	var nexts = document.getElementsByClassName('next');

	for (var i=0; i<nexts.length; i++){
		nexts[i].addEventListener('click', function() {
			fme.getNextView();
		});
	}
};

var adjustTrialContainers = function() {
	document.querySelector('.progress-bar').classList.remove('nodisplay');
	document.querySelector('header').classList.add('trial');
	document.querySelector('main').classList.add('trial');
};

var initIntroView = function() {
	var view = {};
	view.name = 'intro';
	view.template = document.getElementById('intro-view').innerHTML;
	document.getElementById('main').innerHTML = Mustache.render(view.template, {
		title: config.intro.title,
		text: config.intro.text,
		button: config.intro.button
	});

	getNextView();

	return view;
};

var initInstructionsView = function() {
	var view = {};
	view.name = 'instructions';
	view.template = document.getElementById('instructions-view').innerHTML;
	document.getElementById('main').innerHTML = Mustache.render(view.template, {
		title: config.instructions.title,
		text: config.instructions.text,
		button: config.instructions.button
	});

	getNextView();

	return view;
};

var initTrialView = function() {
	var view = {};
	view.name = 'trial';
	view.template = document.getElementById('trial-view').innerHTML;
	document.getElementById('main').innerHTML = Mustache.render(view.template, {

	});

	initMagnets();
	adjustTrialContainers();
	getNextView();

	return view;
};

var initSubjInfoView = function() {
	var view = {};
	view.name = 'subj-info';
};

var initThanksView = function() {
	var view = {};
	view.name = 'thanks';

	view.template = document.getElementById('thanks-view').innerHTML;
	document.getElementById('main').innerHTML = Mustache.render(view.template, {
		title: config.thanks.title,
		text: config.thanks.text
	});

	return view;
}