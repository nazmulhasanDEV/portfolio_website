const audio_one = document.getElementById('radio_spot_one');
const audio_two = document.getElementById('radio_spot_two');
const audio_three = document.getElementById('radio_spot_three');

const ortho_btn1 = document.getElementById('ortho_btn_1');
const ortho_btn2 = document.getElementById('ortho_btn_2');
const ortho_btn3 = document.getElementById('ortho_btn_3');

let select_player = 1;

const player1 = (audio_player) => {

    if(select_player===0){
        audio_player.pause();
        select_player = 1;
    }else{
        audio_player.play();
        select_player = 0;
    }

}

ortho_btn1.onclick = ()=> {
    player1(audio_one);
};

ortho_btn2.onclick = () =>{
    player1(audio_one);
};

ortho_btn3.onclick = () =>{
    player1(audio_one);
};

