# http://localhost:3000/joinImages?img=
# https://upload.wikimedia.org/wikipedia/pt/d/df/Sonic_1991.png
# https://mb.srb2.org/attachments/s3sonic_css_20240105165802-png.108841/
#
# background
# https://wallpaper.forfun.com/fetch/54/54efaae4409a928b1f4929e1bebefa11.jpeg
#
IMAGE_URL="https://upload.wikimedia.org/wikipedia/pt/d/df/Sonic_1991.png"
BACKGROUND_URL="https://wallpaper.forfun.com/fetch/54/54efaae4409a928b1f4929e1bebefa11.jpeg"

curl "http://localhost:3000/joinImages?img=$IMAGE_URL&background=$BACKGROUND_URL"
