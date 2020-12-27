var rawImg = null;
var filterImgCanvas = document.getElementById("filtered-img-canvas");

function photoUpload() {
    var imgInput = document.getElementById("img-upload");
    var rawImgCanvas = document.getElementById("raw-img-canvas");
    rawImg = new SimpleImage(imgInput);

    rawImg.drawTo(rawImgCanvas);
    rawImg.drawTo(filterImgCanvas);
}

function resetButton() {
    var imgInput = document.getElementById("img-upload");
    rawImg = new SimpleImage(imgInput);

    rawImg.drawTo(filterImgCanvas);
}


function grayscaleButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    for (var pixel of rawImg.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        var avg = (red + green + blue) / 3;

        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }

    rawImg.drawTo(filterImgCanvas);
}

function redButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    for (var pixel of rawImg.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        var avg = (red + green + blue) / 3;

        if (avg < 127.5) {
            pixel.setRed(2 * avg);
            pixel.setBlue(0);
            pixel.setGreen(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(2 * avg - 255);
        }
    }
    rawImg.drawTo(filterImgCanvas);
}

function rainbowButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    var height = rawImg.getHeight();

    for (var pixel of rawImg.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        var avg = (red + green + blue) / 3;
        var y = pixel.getY();

        if (avg < 127.5) {
            if (y <= (height / 7)) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else if (y <= (height / 7 * 2)) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0.8 * avg);
                pixel.setBlue(0);
            } else if (y <= (height / 7 * 3)) {
                pixel.setRed(2 * avg);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else if (y <= (height / 7 * 4)) {
                pixel.setRed(0);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else if (y <= (height / 7 * 5)) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            } else if (y <= (height / 7 * 6)) {
                pixel.setRed(0.8 * avg);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            } else {
                pixel.setRed(1.6 * avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6 * avg);
            }
        } else {
            if (y <= (height / 7)) {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            } else if (y <= (height / 7 * 2)) {
                pixel.setRed(255);
                pixel.setGreen(1.2 * avg - 51);
                pixel.setBlue(2 * avg - 255);
            } else if (y <= (height / 7 * 3)) {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            } else if (y <= (height / 7 * 4)) {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            } else if (y <= (height / 7 * 5)) {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            } else if (y <= (height / 7 * 6)) {
                pixel.setRed(1.2 * avg - 51);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            } else {
                pixel.setRed(0.4 * avg + 153);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(0.4 * avg + 153);
            }
        }
    }
    rawImg.drawTo(filterImgCanvas);
}

/*function blurButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    var height = rawImg.getHeight();
    var width = rawImg.getWidth();

    for (var pixel of rawImg.values()) {
        var random1 = Math.random() * 10;
        var random2 = Math.random() * -10;
        var x = pixel.getX();
        var y = pixel.getY();
        var newx = Math.abs(x + random1 + random2);
        var newy = Math.abs(y + random1 + random2);

        if (random1 > 5) {
            if(newx > width || newy > height){
                var newpixwithin = rawImg.getPixel(width - 1, height - 1);

                pixel.setRed(newpixwithin.getRed());
                pixel.setGreen(newpixwithin.getGreen());
                pixel.setBlue(newpixwithin.getBlue());
            }
            else{
                var newpix = rawImg.getPixel(newx, newy);

                pixel.setRed(newpix.getRed());
                pixel.setGreen(newpix.getGreen());
                pixel.setBlue(newpix.getBlue());
            }
    }
}
    rawImg.drawTo(filterImgCanvas);
}*/
function blurButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    var height = rawImg.getHeight();
    var width = rawImg.getWidth();

    for (var pixel of rawImg.values()) {
        var random1 = Math.random() * 15;
        var random2 = Math.random() * -15;
        var x = pixel.getX();
        var y = pixel.getY();
        var newx = Math.abs(x + random1 + random2);
        var newy = Math.abs(y + random1 + random2);

        if (random1 > 5) {
            if(newx > width || newy > height){
            }
            else{
                var newpix = rawImg.getPixel(newx, newy);

                pixel.setRed(newpix.getRed());
                pixel.setGreen(newpix.getGreen());
                pixel.setBlue(newpix.getBlue());
            }
    }
}
    rawImg.drawTo(filterImgCanvas);
}

function redgreenswapButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    for (var pixel of rawImg.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();

        pixel.setRed(green);
        pixel.setGreen(red);
        pixel.setBlue(blue);
    }

    rawImg.drawTo(filterImgCanvas);
}

function redblueswapButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    for (var pixel of rawImg.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();

        pixel.setRed(blue);
        pixel.setGreen(green);
        pixel.setBlue(red);
    }

    rawImg.drawTo(filterImgCanvas);
}

function greenblueswapButton() {
    if (rawImg == null || !rawImg.complete()) {
        alert("Image not loaded!");
        return;
    }

    for (var pixel of rawImg.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();

        pixel.setRed(red);
        pixel.setGreen(blue);
        pixel.setBlue(green);
    }

    rawImg.drawTo(filterImgCanvas);
}