


//console.log('hello')


document.querySelector('.text-box').addEventListener('keypress', function(){

    let charactercount = document.querySelector('.text-box').value.length
    let leftcharacters = 150- charactercount
    document.querySelector('.number').innerText = leftcharacters
})