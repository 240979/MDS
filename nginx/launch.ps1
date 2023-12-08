$env:video="http://91.113.207.170/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER"
$env:target="rtmp://localhost/hls/stream0_"


Start-Process -NoNewWindow .\NGINX.exe

Start-Process -NoNewWindow ffmpeg "-y -stream_loop -1 -i $env:video -threads 4 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480`" -preset fast  -f flv rtmp://localhost/hls/stream0_480 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360`" -preset fast  -f flv rtmp://localhost/hls/stream0_360 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='240p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:240`" -preset fast  -f flv rtmp://localhost/hls/stream0_240 -vf fps=1,`"scale=400:-1`" -update 1 ./site/thumbnail/preview0.png"

$env:video="http://80.242.35.37:8084/mjpg/video.mjpg"
$env:target="rtmp://localhost/hls/stream1_"

Start-Process -NoNewWindow ffmpeg "-y -stream_loop -1 -i $env:video -threads 4 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480`" -preset fast  -f flv rtmp://localhost/hls/stream1_480 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360`" -preset fast  -f flv rtmp://localhost/hls/stream1_360 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='240p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:240`" -preset fast  -f flv rtmp://localhost/hls/stream1_240 -vf fps=1,`"scale=400:-1`" -update 1 ./site/thumbnail/preview1.png"

$env:video="http://86.49.161.121/mjpg/video.mjpg"
$env:target="rtmp://localhost/hls/stream2_"

Start-Process -NoNewWindow ffmpeg "-y -stream_loop -1 -i $env:video -threads 4 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480`" -preset fast  -f flv rtmp://localhost/hls/stream2_480 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360`" -preset fast  -f flv rtmp://localhost/hls/stream2_360 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='240p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:240`" -preset fast  -f flv rtmp://localhost/hls/stream2_240 -vf fps=1,`"scale=400:-1`" -update 1 ./site/thumbnail/preview2.png"

$env:video="http://185.160.21.117:81/mjpg/video.mjpg"
$env:target="rtmp://localhost/hls/stream3_"

Start-Process -NoNewWindow ffmpeg "-y -stream_loop -1 -i $env:video -threads 4 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='480p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:480`" -preset fast  -f flv rtmp://localhost/hls/stream3_480 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='360p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:360`" -preset fast  -f flv rtmp://localhost/hls/stream3_360 -c:v libx264 -vf `"drawtext=fontfile=arial.ttf:text='240p':fontcolor=yellow:fontsize=72:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)-20:y=20, scale=-2:240`" -preset fast  -f flv rtmp://localhost/hls/stream3_240 -vf fps=1,`"scale=400:-1`" -update 1 ./site/thumbnail/preview3.png"

