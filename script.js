

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrollss = document.getElementById('left_scrollss');
let right_scrollss = document.getElementById('right_scrollss');
let pop_songss = document.getElementsByClassName('pop_song')[1];

left_scrollss.addEventListener('click', ()=>{
    pop_songss.scrollLeft -= 330;
})
right_scrollss.addEventListener('click', ()=>{
    pop_songss.scrollLeft += 330;
})

let left_scrollsss = document.getElementById('left_scrollsss');
let right_scrollsss = document.getElementById('right_scrollsss');
let pop_songsss = document.getElementsByClassName('pop_song')[2];

left_scrollsss.addEventListener('click', ()=>{
    pop_songsss.scrollLeft -= 330;
})
right_scrollsss.addEventListener('click', ()=>{
    pop_songsss.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})

