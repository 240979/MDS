function showModal()                                //Ovládání modalového okna
{
    var modal0 = new bootstrap.Modal('#modalVid0');   
    modal0.show();
    
}
//Řešení videa a zvuku klasického přehrávače
var player = videojs('hlsPlayer');
var audioElement = document.getElementById('track0');
videojs('hlsPlayer', {}, function() {                   //Přidání nastavení kvality videa
    var player = this;
    player.controlBar.addChild('QualitySelector');
 });
 player.on("pause",function()
 {
    audioElement.pause();
 });
 player.on("play",function()
 {
    audioElement.play();
 });
 $('#modalVid0').on('hidden.bs.modal', function () {
    //audioElement.pause();
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
    //previewPlayer.setProperty('max-width','400px');
    videoWrapper.style.position = "absolute";
    imgWrapper.style.postion = "relative";
    videoWrapper.style.visibility = 'hidden';

}
//Refresh náhledového obrázku
/*
function refreshCameras() {
    $('.imgWrapper img').attr('src', function(i, old) { return old.replace(/\?.+/,"?i=" + (Math.random()*1000)); });
    setTimeout(refreshCameras, 1000);
  }
  function refreshCamerasFirst() {
    $('.imgWrapper img').attr('src', function(i, old) { return old + "?i=" + (Math.random()*1000); });
    setTimeout(refreshCameras, 1000);
  }
  $(function() {
      setTimeout(refreshCamerasFirst, 1000);
  });
*/

// <img src="/thumbnail/out.png" onclick="showModal()" onmouseover= "triggerPreview()" onmouseout="haltPreview()" class="img-fluid" id="thumbnail">

/*
ffmpeg -stream_loop -1 -i %video% -i %audio% -threads 3 ^
-c:v libx264 -c:a aac -b:a 128k -vf "drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480" -preset fast  -f flv %target%480 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360" -preset fast  -f flv %target%360 ^
-c:v libx264 -c:a aac -b:a 32k -vf "drawtext=fontfile=arial.ttf:text='240p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:240" -preset fast  -f flv %target%240 ^
-vf fps=1 -update ./site/thumbnail/out.png 
*/