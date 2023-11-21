#!/bin/bash
rm ./css/in/main.css
cat ./css/style.css >> ./css/in/main.css
echo "" >> ./css/in/main.css
for file in ./css/*.css; do
    if [ $(basename $file) != "style.css" ]; then
        cat $file >> ./css/in/main.css
        echo "" >> ./css/in/main.css
    fi
done
npx tailwindcss -i ./css/in/main.css -o ./css/out/main.css --watch