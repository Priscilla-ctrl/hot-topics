let content = document.querySelector('.content');
let btns = document.querySelectorAll('header nav a');

let url = 'content/partial-1.html';


function handleAjax(urlValue) {
    fetch(urlValue)
        .then(function (rsp) {
            if (rsp.ok) {
                return rsp.text();
            } else {
                throw new Error(rsp.statusText);
            }
        })
        .then(function (dataStr) {
            content.innerHTML = dataStr;
        })
        .catch(function (err) {
            console.log(err.message);
        })
}

for (let btn of btns) {
    btn.addEventListener('click', handleClick);
}

function handleClick(e) {
    e.preventDefault();
    // a builtin method that stops the default action of the targeted element, here it stops the anchor tag from moving to another page

    // console.log(e.target.href);

    url = e.target.href;

    handleAjax(url);
}

handleAjax(url);