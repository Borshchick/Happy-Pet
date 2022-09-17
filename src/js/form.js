const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const INPUT = document.querySelector('#email');
let btn = document.querySelector('#submit')

function validate(value) {
    return EMAIL_REGEXP.test(value);
}

function updateInput() {
    if (validate(INPUT.value)) {
        INPUT.style.borderColor = 'green'
        console.log(INPUT.value)
        return
    };
    INPUT.style.borderColor = 'red';
}
btn.addEventListener('click', updateInput);