const photo = document.querySelector('.photo img');

const tl = new TimelineMax();

tl.fromTo(photo, 1.4, { width: "0%" }, { width: "90%", ease: Power1.easeInOut })
    .fromTo(photo, 1.2, { height: "1%" }, { height: "86%", ease: Power1.easeInOut });


const text = [`I am a financial accountant and much more with over 6 years of experience in this field.
                Down below
                there are some
                of my skills.If you need any help with these kind of work, feel free to
get in touch with me.I would be really happy to discuss with you.`];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        // index = 0;
    }
    setTimeout(type, 35)
}());
