

function showModal0()                                //Ovládání modalového okna
{
    var modal0 = new bootstrap.Modal('#modalVid0');   
    modal0.show();
    
}
function hideModal0()
{
    $('#modalVid0').modal('hide');
    console.log("closed!");   
}
//Řešení videa a zvuku klasického přehrávače
player0 = videojs('hlsPlayer0');
audioElement0 = document.getElementById('track0');

player0.on("pause",function()
{
    audioElement0.pause();
});
player0.on("play",function()
{
    audioElement0.play();
});

$('#modalVid0').on('hidden.bs.modal0', function () {
    player0.pause();
})

player0.on('volumechange', (e) => {
    if(player0.muted())
    {
        audioElement0.muted = true;
    }
    if(!player0.muted())
    {
        audioElement.muted = false;
    }

});
videojs('hlsPlayer0', {}, function() {                   //Přidání nastavení kvality videa
    var player0 = this;
    player0.controlBar.addChild('QualitySelector');
});
////Řešení oživení náhledového obrázku
var imgWrapper0 = document.getElementById("imgWrapper0");
var videoWrapper0 = document.getElementById("videoWrapper0");
var previewPlayer0 = videojs('previewPlayer0');
previewPlayer0.controls(false);

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
    refreshCamerasFirst(); //Volání refreshe obrázku
}



//Refresh náhledového obrázku
//Princip: Změna se vyvolá tím, že se změní nečtená část souboru (přidá se unixový čas)
//https://itecnote.com/tecnote/javascript-refreshing-images-on-a-page-periodically/
function refreshCameras() {
    $('#thumbnail0').attr('src', function(i, old) { return old.replace(/\?.+/,"?i=" + (Date.now)); });
    setTimeout(refreshCameras, 1000);
  }
  function refreshCamerasFirst() {
    $('#thumbnail0').attr('src', function(i, old) { return old + "?i=" + (Date.now); });
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