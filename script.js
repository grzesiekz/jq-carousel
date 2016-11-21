var $carouselList = $('.slider');
var $circleList = $('.smalldot');
var $galleryLength = $('.slider img').length;
var currentIndex = 0;
var previousIndex = currentIndex - 1;

function insertElement() {
	for (var i = 0; i < $galleryLength; i++) {
		var element = document.createElement('li');
		$(element).attr('id', i);
		$('.smalldot').append(element);
	}
}

$(function () {
	setInterval(changeToRight, 4000);
	insertElement();
	applyClass();
});

function firstSlideRight() {
	var $firstItem = $carouselList.find('li:first');
	var $lastItem = $carouselList.find('li:last');
	$lastItem.after($firstItem);
	$carouselList.css({marginLeft: '0'});
};

function changeToRight() {
	previousIndex = currentIndex;
	currentIndex++;
	if (currentIndex >= $galleryLength) {
		currentIndex = 0;
	};
	$carouselList.animate({marginLeft: '-600px'}, 500, firstSlideRight);
	applyClass();
};

function firstSlideLeft() {
	var $firstItem = $carouselList.find('li:first');
	var $lastItem = $carouselList.find('li:last');
	$firstItem.before($lastItem);
	$carouselList.css({marginLeft: '-600px'});
};

function changeToLeft() {
	previousIndex = currentIndex;
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = $galleryLength - 1;
	};
	console.log('currentIndex', currentIndex);
	firstSlideLeft();
	$carouselList.animate({marginLeft: '0'}, 500);
	applyClass();
};

function applyClass() {
	var $currentCircle = $('#' + currentIndex);
	var $previousCircle = $('#' + previousIndex);
	$currentCircle.addClass('disc');
	$previousCircle.removeClass('disc');
};

$('#right').click(function() {
	changeToRight();
});

$('#left').click(function() {
	changeToLeft();
});