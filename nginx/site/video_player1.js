
function showModal()                                //Ovládání modalového okna
{
    var modal0 = new bootstrap.Modal('#modalVid0');   
    modal0.show();
    
}
//Řešení videa a zvuku klasického přehrávače
player = videojs('hlsPlayer');
audioElement = document.getElementById('track0');

player.on("pause",function()
{
    audioElement.pause();
});
player.on("play",function()
{
    audioElement.play();
});

$('#modalVid0').on('hidden.bs.modal', function () {
    player.pause();
})
player.on('volumechange', (e) => {
    if(player.muted())
    {
        audioElement.muted = true;
    }
    if(!player.muted())
    {
        audioElement.muted = false;
    }

});
videojs('hlsPlayer', {}, function() {                   //Přidání nastavení kvality videa
    var player = this;
    player.controlBar.addChild('QualitySelector');
});
////Řešení oživení náhledového obrázku
var imgWrapper = document.getElementById("imgWrapper");
var videoWrapper = document.getElementById("videoWrapper");
var previewPlayer = videojs('previewPlayer');
previewPlayer.controls(false);

function playPreview()
{
    videoWrapper.style.visibility = 'visible';
    imgWrapper.style.visibility = 'hidden';
    previewPlayer.play(); 
}
function stopPreview()
{
    videoWrapper.style.visibility = 'hidden';
    imgWrapper.style.visibility = 'visible';
    previewPlayer.pause();
}
function init()
{
    var previewDiv = document.getElementById('preview');
    previewDiv.setAttribute('width','400px');
    previewDiv.setAttribute('height','225px');
    previewPlayer.setAttribute('width','400px');
    previewPlayer.setAttribute('height','225px');
    videoWrapper.setAttribute('width','400px');
    imgWrapper.setAttribute('width','400px');
    videoWrapper.style.position = "absolute";
    imgWrapper.style.postion = "relative";
    videoWrapper.style.visibility = 'hidden';
    refreshCamerasFirst(); //Volání refreshe obrázku
}



//Refresh náhledového obrázku
//Princip: Změna se vyvolá tím, že se změní nečtená část souboru (přidá se unixový čas)
//https://itecnote.com/tecnote/javascript-refreshing-images-on-a-page-periodically/
function refreshCameras() {
    $('#thumbnail').attr('src', function(i, old) { return old.replace(/\?.+/,"?i=" + (Date.now)); });
    setTimeout(refreshCameras, 1000);
  }
  function refreshCamerasFirst() {
    $('#thumbnail').attr('src', function(i, old) { return old + "?i=" + (Date.now); });
    setTimeout(refreshCameras, 1000);
  }

/*

function refreshImages()
{
    caches.open("v1").then((cache) => {
        cache.delete("/images/preview0.png").then((response) => {
            document.getElementById("thumbnail").src="preview0.png";
 
            setTimeout("refreshImages()",(1000))
        });
      });
}*/

/*
setTimeout(() => {
    //document.getElementById("thumbnail").src="/images/preview0a.png";
    document.getElementById("thumbnail").src="/images/preview0.png";
  }, 500);
  */
/*
function refreshImages()
{
    
    document.getElementById("thumbnail").src="/images/preview0.png";
   // document.getElementById("thumbnail").src="/images/preview0a.png";
    setTimeout("refreshImages()",500);
}
*/
/*
function refreshDiv()
{
    $( "#imgWrapper" ).load(window.location.href + " #imgWrapper" );
    console.log("Refreshed!");
    setTimeout("refreshDiv()",1000);
}
*/