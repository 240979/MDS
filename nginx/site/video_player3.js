
function showModal0()                                //Ovládání modalového okna
{
    var modal0 = new bootstrap.Modal('#modalVid0');   
    modal0.show();
    
}
function showModal1()                                //Ovládání modalového okna
{
    var modal1 = new bootstrap.Modal('#modalVid1');   
    modal1.show();
    
}

function showModal2()                                //Ovládání modalového okna
{
    var modal2 = new bootstrap.Modal('#modalVid2');   
    modal2.show();
    
}
function showModal3()                                //Ovládání modalového okna
{
    var modal3 = new bootstrap.Modal('#modalVid3');   
    modal3.show();
    
}




//Řešení videa a zvuku klasického přehrávače
player0 = videojs('hlsPlayer0');
audioElement0 = document.getElementById('track0');

player1 = videojs('hlsPlayer1');
audioElement1 = document.getElementById('track1');

player2 = videojs('hlsPlayer2');
audioElement2 = document.getElementById('track2');

player3 = videojs('hlsPlayer3');
audioElement3 = document.getElementById('track3');

player0.on("pause",function()
{
    audioElement0.pause();
});
player0.on("play",function()
{
    audioElement0.play();
});

player1.on("pause",function()
{
    audioElement1.pause();
});
player1.on("play",function()
{
    audioElement1.play();
});

player2.on("pause",function()
{
    audioElement2.pause();
});
player2.on("play",function()
{
    audioElement2.play();
});

player3.on("pause",function()
{
    audioElement3.pause();
});
player3.on("play",function()
{
    audioElement3.play();
});

$('#modalVid0').on('hidden.bs.modal', function () {
    player0.pause();
})

$('#modalVid1').on('hidden.bs.modal', function () {
    player1.pause();
})
$('#modalVid2').on('hidden.bs.modal', function () {
    player2.pause();
})

$('#modalVid3').on('hidden.bs.modal', function () {
    player3.pause();
})

player0.on('volumechange', (e) => {
    if(player0.muted())
    {
        audioElement0.muted = true;
    }
    if(!player0.muted())
    {
        audioElement0.muted = false;
    }

});

player1.on('volumechange', (e) => {
    if(player1.muted())
    {
        audioElement1.muted = true;
    }
    if(!player1.muted())
    {
        audioElement1.muted = false;
    }

});

player2.on('volumechange', (e) => {
    if(player2.muted())
    {
        audioElement2.muted = true;
    }
    if(!player2.muted())
    {
        audioElement2.muted = false;
    }

});

player3.on('volumechange', (e) => {
    if(player3.muted())
    {
        audioElement3.muted = true;
    }
    if(!player3.muted())
    {
        audioElement3.muted = false;
    }

});

videojs('hlsPlayer0', {}, function() {                   //Přidání nastavení kvality videa
    var player0 = this;
    player0.controlBar.addChild('QualitySelector');
});

videojs('hlsPlayer1', {}, function() {                   //Přidání nastavení kvality videa
    var player1 = this;
    player1.controlBar.addChild('QualitySelector');
});

videojs('hlsPlayer2', {}, function() {                   //Přidání nastavení kvality videa
    var player2 = this;
    player2.controlBar.addChild('QualitySelector');
});

videojs('hlsPlayer3', {}, function() {                   //Přidání nastavení kvality videa
    var player3 = this;
    player3.controlBar.addChild('QualitySelector');
});

////Řešení oživení náhledového obrázku
var imgWrapper0 = document.getElementById("imgWrapper0");
var videoWrapper0 = document.getElementById("videoWrapper0");
var previewPlayer0 = videojs('previewPlayer0');
previewPlayer0.controls(false);

var imgWrapper1 = document.getElementById("imgWrapper1");
var videoWrapper1 = document.getElementById("videoWrapper1");
var previewPlayer1 = videojs('previewPlayer1');
previewPlayer1.controls(false);

var imgWrapper2 = document.getElementById("imgWrapper2");
var videoWrapper2 = document.getElementById("videoWrapper2");
var previewPlayer2 = videojs('previewPlayer2');
previewPlayer2.controls(false);

var imgWrapper3 = document.getElementById("imgWrapper3");
var videoWrapper3 = document.getElementById("videoWrapper3");
var previewPlayer3 = videojs('previewPlayer3');
previewPlayer3.controls(false);

function playPreview0()
{
    videoWrapper0.style.visibility = 'visible';
    imgWrapper0.style.visibility = 'hidden';
    previewPlayer0.play(); 
}
function stopPreview0()
{
    videoWrapper0.style.visibility = 'hidden';
    imgWrapper0.style.visibility = 'visible';
    previewPlayer0.pause();
}

function playPreview1()
{
    videoWrapper1.style.visibility = 'visible';
    imgWrapper1.style.visibility = 'hidden';
    previewPlayer1.play(); 
}
function stopPreview1()
{
    videoWrapper1.style.visibility = 'hidden';
    imgWrapper1.style.visibility = 'visible';
    previewPlayer1.pause();
}

function playPreview2()
{
    videoWrapper2.style.visibility = 'visible';
    imgWrapper2.style.visibility = 'hidden';
    previewPlayer2.play(); 
}
function stopPreview2()
{
    videoWrapper2.style.visibility = 'hidden';
    imgWrapper2.style.visibility = 'visible';
    previewPlayer2.pause();
}

function playPreview3()
{
    videoWrapper3.style.visibility = 'visible';
    imgWrapper3.style.visibility = 'hidden';
    previewPlayer3.play(); 
}
function stopPreview3()
{
    videoWrapper3.style.visibility = 'hidden';
    imgWrapper3.style.visibility = 'visible';
    previewPlayer3.pause();
}

function init()
{
    var previewDiv0 = document.getElementById('preview0');
    
    previewDiv0.setAttribute('width','400px');
    previewDiv0.setAttribute('height','225px');
    previewPlayer0.setAttribute('width','400px');
    previewPlayer0.setAttribute('height','225px');
    videoWrapper0.setAttribute('width','400px');
    imgWrapper0.setAttribute('width','400px');
    videoWrapper0.style.position = "absolute";
    imgWrapper0.style.postion = "relative";
    videoWrapper0.style.visibility = 'hidden';

    var previewDiv1 = document.getElementById('preview1');
    
    previewDiv1.setAttribute('width','400px');
    previewDiv1.setAttribute('height','225px');
    previewPlayer1.setAttribute('width','400px');
    previewPlayer1.setAttribute('height','225px');
    videoWrapper1.setAttribute('width','400px');
    imgWrapper1.setAttribute('width','400px');
    videoWrapper1.style.position = "absolute";
    imgWrapper1.style.postion = "relative";
    videoWrapper1.style.visibility = 'hidden';

    refreshCamerasFirst(); //Volání refreshe obrázku
    fetch('./config.json')
    .then((response) => response.json())
    .then((json) => processConfig(json));
}
function processConfig(config)
{
    config.forEach(element => {
        console.log(element);
    });
    
    var vid_src = document.getElementById("0vidauto");
    vid_src.setAttribute('src',config[0].vid_auto);
    var vid_src = document.getElementById("0vid480");
    vid_src.setAttribute('src',config[0].vid_480);
    var vid_src = document.getElementById("0vid360");
    vid_src.setAttribute('src',config[0].vid_360);
    var vid_src = document.getElementById("0vid240");
    vid_src.setAttribute('src',config[0].vid_240);
    console.log(config[0].vidauto);

    var vid_src = document.getElementById("1vidauto");
    vid_src.setAttribute('src',config[1].vid_auto);
    var vid_src = document.getElementById("1vid480");
    vid_src.setAttribute('src',config[1].vid_480);
    var vid_src = document.getElementById("1vid360");
    vid_src.setAttribute('src',config[1].vid_360);
    var vid_src = document.getElementById("1vid240");
    vid_src.setAttribute('src',config[1].vid_240);

    var vid_src = document.getElementById("2vidauto");
    vid_src.setAttribute('src',config[2].vid_auto);
    var vid_src = document.getElementById("2vid480");
    vid_src.setAttribute('src',config[2].vid_480);
    var vid_src = document.getElementById("2vid360");
    vid_src.setAttribute('src',config[2].vid_360);
    var vid_src = document.getElementById("2vid240");
    vid_src.setAttribute('src',config[2].vid_240);

    var vid_src = document.getElementById("3vidauto");
    vid_src.setAttribute('src',config[3].vid_auto);
    var vid_src = document.getElementById("3vid480");
    vid_src.setAttribute('src',config[3].vid_480);
    var vid_src = document.getElementById("3vid360");
    vid_src.setAttribute('src',config[3].vid_360);
    var vid_src = document.getElementById("3vid240");
    vid_src.setAttribute('src',config[3].vid_240);
    
}



//Refresh náhledového obrázku
//Princip: Změna se vyvolá tím, že se změní nečtená část souboru (přidá se unixový čas)
//https://itecnote.com/tecnote/javascript-refreshing-images-on-a-page-periodically/
function refreshCameras() {
    $('#thumbnail0').attr('src', function(i, old) { return old.replace(/\?.+/,"?i=" + (Date.now)); });
    $('#thumbnail1').attr('src', function(i, old) { return old.replace(/\?.+/,"?i=" + (Date.now)); });
    $('#thumbnail2').attr('src', function(i, old) { return old.replace(/\?.+/,"?i=" + (Date.now.toString())); });
    $('#thumbnail3').attr('src', function(i, old) { return old.replace(/\?.+/,"?i=" + (Date.now.toString())); });
    setTimeout(refreshCameras, 1000);
  }
  function refreshCamerasFirst() {
    $('#thumbnail0').attr('src', function(i, old) { return old + "?i=" + (Date.now); });
    $('#thumbnail1').attr('src', function(i, old) { return old + "?i=" + (Date.now); });
    $('#thumbnail2').attr('src', function(i, old) { return old + "?i=" + (Date.now); });
    $('#thumbnail3').attr('src', function(i, old) { return old + "?i=" + (Date.now); });
    setTimeout(refreshCameras, 1000);
  }
