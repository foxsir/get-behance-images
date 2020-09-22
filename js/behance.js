let checkLoaded = setInterval(() => {
    if(document.readyState === 'interactive') {
        clearInterval(checkLoaded);

        let topHeight = 60;
        let counter = 0;

        document.querySelectorAll("[data-ut=image]").forEach(tu => {
            let imgBox = document.createElement("a");

            if(tu.querySelector("img").src) {
                imgBox.href = tu.querySelector("img").src;
                imgBox.target = "_blank";
                imgBox.className = "__imgBox";
                imgBox.style.background = "url(" + tu.querySelector("img").src + ") " + "no-repeat center";
                imgBox.style.backgroundSize = "contain";
                imgBox.style.backgroundColor = "black";
                imgBox.style.display = "block";
                imgBox.style.width = "145px";
                imgBox.style.height = "200px";
                imgBox.style.cursor = "pointer";
                imgBox.style.position = "absolute";
                imgBox.style.zIndex = "999999999999";
                imgBox.style.top = topHeight + (counter * 200) + "px";
                document.body.append(imgBox);
                counter = counter + 1;
            }
        });
    }
}, 1000);