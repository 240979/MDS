set video="./fireworks.mp4"

ffmpeg -stream_loop -1 -i %video% -vf fps=1,"scale=400:-1" -update 1 ./site/thumbnail/out.png 

REM ffmpeg -stream_loop -1 -i ./fireworks.mp4 -vf fps=1,"scale=400:-1" -update 1 ./site/thumbnail/out.png 
