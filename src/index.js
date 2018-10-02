import './style.css'

function createElement(element) {
    let elem = document.createElement(element)
    elem.innerHTML = 'Hello project!'
    elem.classList.add('greeting')
    return elem
}

document.body.appendChild(createElement('div'))