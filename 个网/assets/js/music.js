
let playState= true
function testAutoPlay () {
return new Promise(resolve => {
if(playState){
    let audio = document.createElement('audio');
audio.src = "https://api.uomg.com/api/rand.music?sort=热歌榜"
audio.loop="loop"
document.body.appendChild(audio);
let autoplay = true;
audio.play().then(() => {
    autoplay = true;
}).catch(err => {
    autoplay = false;
}).finally((e) => {
    resolve(autoplay);
});
playState=false
}else{
    resolve(false)
}

});
}

let audioInfo = {
autoplay: false,
testAutoPlay () {
return testAutoPlay()
},
setAutoPlayWhenClick () {
function setAutoPlay () {
    audioInfo.autoplay = true;
    document.removeEventListener('click', setAutoPlay);
    document.removeEventListener('touchend', setAutoPlay);
}
document.addEventListener('click', setAutoPlay);
document.addEventListener('touchend', setAutoPlay);
},
init () {
audioInfo.testAutoPlay().then(autoplay => {
    if (!audioInfo.autoplay) {
        audioInfo.autoplay = autoplay;
    }
});
audioInfo.setAutoPlayWhenClick();
}
};
document.addEventListener('click', ()=>{
audioInfo.init();
});
 document.addEventListener('touchend', ()=>{
  audioInfo.init();
 });
