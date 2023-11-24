#!/bin/bash
# while true; do
    cat ./css/global.css > ./css/in/main-in.css
    echo "" >> ./css/in/main-in.css
    # for file in ./css/*.css; do
    for file in $(find ./css -name '*.css'); do
        if [ $(basename $file) != "global.css" ] || 
        [ $(basename $file) != "main*.css" ]; then
            cat $file >> ./css/in/main-in.css
            echo "" >> ./css/in/main-in.css
        fi
    done
    npx tailwindcss -i ./css/in/main-in.css -o ./css/out/main-out.css
    exit 0
    # sleep 2
# done