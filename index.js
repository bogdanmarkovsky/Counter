let count = 0;
const counter = document.getElementById('value');

function setColor(element) {
    color = '';
    if (count > 0) {
        color = 'green';
    } else if (count < 0) {
        color = 'red';
    } else {
        color = 'black';
    }
    element.style.color = color;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            count -= 1;
            counter.textContent = count;
            setColor(counter);
        } else if (styles.contains('increase')) {
            count += 1;
            counter.textContent = count;
            setColor(counter);
        } else {
            count = 0;
            counter.textContent = count;
            setColor(counter);
        }
    });
});