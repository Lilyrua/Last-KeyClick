const inp = document.getElementById('inp');
const content = document.getElementById('content')

function show(event) {
    content.innerText = event.key;
}
inp.onkeyup = show;
