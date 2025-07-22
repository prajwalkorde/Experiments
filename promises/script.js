let doc = document.querySelector('.container');
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    doc.innerHTML = '<h1>Welcome to the JavaScript World!</h1>';
    doc.style.backgroundColor = 'lightblue';
    doc.style.color = 'darkblue';
    doc.style.fontSize = '20px';
});
doc.style.padding = '20px';