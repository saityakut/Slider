var models = [
    {
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'https://www.borusanotomotiv.com/_veriler_havuz/bmw/teknik/216d-active-tourer.html',
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'https://www.borusanotomotiv.com/_veriler_havuz/bmw/teknik/216d-active-tourer.html',
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'https://www.borusanotomotiv.com/_veriler_havuz/bmw/teknik/216d-active-tourer.html',
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'https://www.borusanotomotiv.com/_veriler_havuz/bmw/teknik/216d-active-tourer.html',
    },
];

var index = 0;
var slatCount = models.length;
var interval;

var settings = {
    duration : '500',
    random : false,
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () { 
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () { 
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval); 
    });
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings); 
    });
});

function init(settings) {
    var prev;

    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slatCount);
            } while (index == prev) {
                prev = index;
            }
        } else {
            if (slatCount == index - 1) {
                index = 0;
            }
            showSlide(index);
            index++;
            console.log(index);
        }
        showSlide(index);
     },settings.duration,);
}

function showSlide(i) {
    index = i;

    if (i < 0) {
        index = slatCount - 1;
    }
    if (index >= slatCount) {
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-link').setAttribute('href', models[index].link);
}