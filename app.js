const keys = document.querySelectorAll(`.key`)

const playAudio = (e) => {
    console.log(e.keyCode)
    
    const audio =  document.querySelector(`audio[data-key = '${e.keyCode}']`);

    const key =  document.querySelector(`.key[data-key ='${e.keyCode}'`);
    console.log(key)
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
//    console.log(audio)
}
window.addEventListener('keydown', playAudio)

keys.forEach(key => {
    key.addEventListener('transitionend', (e) => {
        if(e.propertyName !== 'transform'){
            return;
        }
        key.classList.remove('playing');
       }) 
 });