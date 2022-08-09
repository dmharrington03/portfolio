
export default function sketch (p5) {
    let w = 28;
    let h = 28;
    let size;
    let diameter = 0;
    let pixelState = [];

    p5.updateWithProps = (newProps) => {
        if(newProps.getData) {
            p5.sendData = newProps.getData;
        }
    }

    p5.setup = () => {
        p5.createCanvas(600, 600);
        size = p5.width / w;
        p5.textSize(20);
        p5.stroke(100);
        // Populate pixel array
        resetPixels();
    }

    p5.draw = () => {

        // Spacebar
        if (p5.keyIsDown(32)) {
            resetPixels();
        }
        
        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {

                if (p5.mouseIsPressed)
                   p5.setFill(x, y, diameter);

                if (pixelState[x][y] === 1)
                    p5.fill(51);
                else
                    p5.fill(200);

                    p5.rect(x * size, y * size, size, size);
            }
        }

        p5.fill(0);
        p5.text(`Diameter: ${diameter + 1}`, 20, 30);
    }

    p5.keyPressed = () => {

        if (p5.keyCode === p5.DOWN_ARROW && diameter > 0)
            diameter--;
        else if (p5.keyCode === p5.UP_ARROW && diameter < 10)
            diameter++;
        
        if (p5.keyCode === p5.ENTER)
            p5.sendData(JSON.stringify(pixelState.toString()));
    }

    p5.setFill = (x, y, d) => {
        if ((p5.mouseX > x * size && p5.mouseX < x * size + size)
        && (p5.mouseY > y * size && p5.mouseY < y * size + size)) {

            if (d % 2 === 0)
                for (let i = p5.ceil(-d / 2); i <= p5.floor(d / 2); i++)
                    for (let j = p5.ceil(-d / 2); j <= p5.floor(d / 2); j++)
                            pixelState[p5.constrain(x + i, 0, w - 1)][p5.constrain(y + j, 0, h - 1)] = 1;
            else
                for (let i = p5.ceil(-d / 2); i <= p5.ceil(d / 2); i++)
                    for (let j = p5.ceil(-d / 2); j <= p5.ceil(d / 2); j++)
                        pixelState[p5.constrain(x + i, 0, w - 1)][p5.constrain(y + j, 0, h - 1)] = 1;

        }
    }

    const resetPixels = () => {
        pixelState = [];
        let row;
        for (let i = 0; i < w; i++) {
            row = [];
            for (let j = 0; j < h; j++) {
                row.push(0);
            }
            pixelState.push(row);
        }
    }
};