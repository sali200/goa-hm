let images = [
    'https://s15.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/10/Brigada-1-1024x768.jpg',
    'https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/10/Brigada-2.jpg',
    "https://s9.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/10/8b0d2c811c5c7ae021d5f5a7e55ba2ee.jpg",
    
]

let slider = 0;

function next() {
    let js = document.querySelector('.js');
    slider++;
    if(slider >= images.lenght){
        slider = 0
    }
}


function prev(){
    let slider = document.querySelector('.js')
    slider--;
    if(slider<0){
        slider=images.lenght
    };
    slider.src = imgs[num];
}

