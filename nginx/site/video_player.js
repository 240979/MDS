class playerMds extends HTMLElement
{
    constructor()
    {
        super();
        this.init();
        this.innerHTML = 
        `   
        <div class="w-100" id="preview" onmouseenter="classInstance.playPreview()" onmouseleave="classInstance.stopPreview()" onclick="classInstance.showModal()">
                    
        <div id="videoWrapper">
            <video id="previewPlayer" class="video-js" controls poster="/thumbnail/preview0.png" data-setup='{ "muted": true }'>
                <source src="/hls/stream.m3u8" type="application/x-mpegURL">
                
                <p class="vjs-no-js">
                Prohlížeč nepodporuje Javascript nebo HTML5.
                </p>
                
            </video>
            
        </div>
        <div id="imgWrapper">
            <img src="/thumbnail/preview0.png" class="img-fluid" id="thumbnail">
        </div>
        
        </div>
        
        <div class="modal fade" id="modalVid0">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" >
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Video 1</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <a href="/hls/stream.m3u8">Originální video</a>
                        </div>
                        <div>
                            <video id="hlsPlayer" class="video-js vjs-default-skin" controls width="640" height="264" poster="/thumbnail/out.png">
                                <source src="/hls/stream.m3u8" type="application/x-mpegURL" label="auto" selected="true">
                                <source src="/hls/stream_480.m3u8" type="application/x-mpegURL" label="480" res="480" id="0vid480">
                                <source src="/hls/stream_360.m3u8" type="application/x-mpegURL" label="360" res="360" id="0vid360">
                                <source src="/hls/stream_240.m3u8" type="application/x-mpegURL" label="240" res="240" id="0vid240" >
                                <p class="vjs-no-js">
                                Prohlížeč nepodporuje Javascript nebo HTML5.
                                </p>
                            
                            </video>
                            
                        </div>
                        <div>
                            <audio id="track0" type="audio/mpeg" loop>
                                <source src="/sound/sound.mp3">
                            </audio>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary"
                        data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    
    


  
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
        ////Řešení oživení náhledového obrázku
        this.imgWrapper = document.getElementById("imgWrapper");
        this.videoWrapper = document.getElementById("videoWrapper");
        this.previewPlayer = videojs('previewPlayer');
        this.previewPlayer.controls(false);


    
    
    }

    showModal()                                //Ovládání modalového okna
    {
        var modal0 = new bootstrap.Modal('#modalVid0');   
        modal0.show();
        
    }
    playPreview()
    {
        this.videoWrapper.style.visibility = 'visible';
        this.imgWrapper.style.visibility = 'hidden';
        this.previewPlayer.play(); 
    }
    stopPreview()
    {
        this.videoWrapper.style.visibility = 'hidden';
        this.imgWrapper.style.visibility = 'visible';
        this.previewPlayer.pause();
    }
    init()
    {
        //previewPlayer.setProperty('max-width','400px');
        this.videoWrapper.style.position = "absolute";
        this.imgWrapper.style.postion = "relative";
        this.videoWrapper.style.visibility = 'hidden';

    }
}


	customElements.define('player-mds', playerMds);
    videojs('hlsPlayer', {}, function() {                   //Přidání nastavení kvality videa
        var player = this;
        player.controlBar.addChild('QualitySelector');
    });
    var classInstance = new playerMds();



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
