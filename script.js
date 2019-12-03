let originalImage;
let newImage;
let fileinput;

function upload() {
    let imgcanvas = document.getElementById("canvas");
    fileinput = document.getElementById("finput");
    originalImage = new SimpleImage(fileinput);
    newImage = new SimpleImage(fileinput);
    originalImage.drawTo(imgcanvas);
    document.getElementById("center").style.display = "none";
    document.getElementById("canvas").style.display = "block";
}

function makeGray() {
    for (let pixel of newImage.values()) {
        let avg = ((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg)
    }
    newImage.drawTo(document.getElementById("canvas"));
}

function makeSepia() {
    for (let pixel of newImage.values()) {
        let tr = 0.393 * pixel.getRed() + 0.769 * pixel.getGreen() + 0.189 * pixel.getBlue();
        let tg = 0.349 * pixel.getRed() + 0.686 * pixel.getGreen() + 0.168 * pixel.getBlue();
        let tb = 0.272 * pixel.getRed() + 0.534 * pixel.getGreen() + 0.131 * pixel.getBlue();
        pixel.setRed(Math.floor(tr));
        pixel.setBlue(Math.floor(tb));
        pixel.setGreen(Math.floor(tg));
    }
    newImage.drawTo(document.getElementById("canvas"));
    
}

function addContrast() {
    let contrast = 1.11;
    let r, g, b;
    for (let pixel of newImage.values()) {
        r = pixel.getRed()/255;
        r = r - 0.5;
        r = r * contrast;
        r = r + 0.5;
        r = r * 255;
        (r<0) ? pixel.setRed(0): pixel.setRed(r);
        g = pixel.getGreen()/255;
        g = g - 0.5;
        g = g * contrast;
        g = g + 0.5;
        g = g * 255;
        (g<0) ? pixel.setGreen(0): pixel.setGreen(g);
        b = pixel.getBlue()/255;
        b = b - 0.5;
        b = b * contrast;
        b = b + 0.5;
        b = b * 255;
        (b<0) ? pixel.setBlue(0): pixel.setBlue(b);
    }
    newImage.drawTo(document.getElementById("canvas"));
}

function removeContrast() {
    let contrast = 0.89;
    let r, g, b;
    for (let pixel of newImage.values()) {
        r = pixel.getRed()/255;
        r = r - 0.5;
        r = r * contrast;
        r = r + 0.5;
        r = r * 255;
        (r<0) ? pixel.setRed(0): pixel.setRed(r);
        g = pixel.getGreen()/255;
        g = g - 0.5;
        g = g * contrast;
        g = g + 0.5;
        g = g * 255;
        (g<0) ? pixel.setGreen(0): pixel.setGreen(g);
        b = pixel.getBlue()/255;
        b = b - 0.5;
        b = b * contrast;
        b = b + 0.5;
        b = b * 255;
        (b<0) ? pixel.setBlue(0): pixel.setBlue(b);
    }
    newImage.drawTo(document.getElementById("canvas"));
}

function resetChanges() {
    newImage = new SimpleImage(fileinput);
    originalImage.drawTo(document.getElementById("canvas"));
}