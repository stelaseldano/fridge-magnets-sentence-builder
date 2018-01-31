function initDnd() {
	var height, width;

	// make th words draggable
	var makeWordsDraggable = function() {
		var words = document.getElementsByClassName('word');

		for (var i=0; i<words.length; i++) {
			words[i].addEventListener('dragstart', function(event) {
				event.dataTransfer.setData("word", event.target.id);
				width = event.target.offsetWidth + 8;
				height = event.target.offsetHeight + 8;
			});
		}
	};

	// create new dropzone
	var createDropzone = function(siblingElem) {
		var dropzone = {};
		dropzone = document.createElement('div');
		dropzone.classList.add('dropzone');
		dropzone.classList.add('default');

		// insert the new dropzone elem before the sibling (arg given)
		siblingElem.parentNode.insertBefore(dropzone, siblingElem);

		dropzone.addEventListener('dragenter', function(event) {
			dropzone.style.height = height + 'px';
			dropzone.style.width = width + 'px';
			event.target.classList.remove('default');
			event.target.classList.add('allowed');
		});

		dropzone.addEventListener('dragleave', function(event) {
			event.target.classList.add('default');
			event.target.classList.remove('allowed');
		});

		dropzone.addEventListener('dragover', function(event) {
			event.preventDefault();
		});

		dropzone.addEventListener('drop', function(event) {
			var target = event.target;
			var id = event.dataTransfer.getData("word");
			var dragged = document.getElementById(id);
			var insertDropzone = false;
			target.parentNode.insertBefore(dragged, target);
			target.classList.remove('allowed');

	/*		dragged.addEventListener('dragenter', function() {
				insertDropzone = true;

				if (insertDropzone === true) {
					dropzone = createDropzone(dragged);

					dropzone.addEventListener('dragleave', function() {
						insertDropzone = false;
						dropzone.remove();
					});
				}
			});*/

		});

		dropzone.remove = function() {
			dropzone.parentNode.removeChild(dropzone);
		};

		return dropzone;
	};

	var dropzone = createDropzone(document.querySelector('#dropzone'));
	makeWordsDraggable();
};