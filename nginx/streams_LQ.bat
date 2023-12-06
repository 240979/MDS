REM set video="./fireworks.mp4"
set video="http://80.242.35.37:8084/mjpg/video.mjpg"
set target="rtmp://localhost/hls/stream_"

ffmpeg -y -stream_loop -1 -i %video% ^
-threads 4 ^
-c:v libx264 -vf "drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480" -preset fast  -f flv %target%480 ^
-c:v libx264 -vf "drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360" -preset fast  -f flv %target%360 ^
-c:v libx264 -vf "drawtext=fontfile=arial.ttf:text='240p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:240" -preset fast  -f flv %target%240 ^
-vf fps=1,"scale=400:-1" -update 1 ./site/thumbnail/preview0.png 

