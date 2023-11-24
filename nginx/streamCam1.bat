set video="http://147.229.147.107/hls/cam1.m3u8"
set target="rtmp://localhost/hls/stream_"

ffmpeg -stream_loop -1 -i %video% -threads 3 ^
-c:v libx264 -c:a aac -b:a 128k -vf "drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480" -preset fast  -f flv %target%480 ^
-c:v libx264 -c:a aac -b:a 64k -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360" -preset fast  -f flv %target%360 ^
-c:v libx264 -c:a aac -b:a 32k -vf "drawtext=fontfile=arial.ttf:text='240p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:240" -preset fast  -f flv %target%240
