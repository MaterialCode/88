var canvas = new fabric.Canvas('myCanvas');

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;

function load_img() {
    fabric.Image.fromURL("golf-h1.png", function (Img) {
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_obj);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        ball_obj = Img;

        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((ball_x == hole_x) && (ball_y == hole_y))
        canvas.remove(ball_obj);
        document.getElementById("hd3").innerHTML="You have Hit the GOAL!!!!!!!!!!!!!!!!";
        document.getElementById("myCanvas").style.borderColor="red"
    else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

function up() {
    if (ball_y >= 0) {
        ball_y = ball_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X =  " + ball_x + " , Y = " + ball_y);
        canvas.remove(bal_obj);
        load_img();
    }
}

function down() {
    if (ball_y <= 450) {
        ball_y = ball_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = " + ball_y);
        canvas.remove(bal_obj);
        load_img();
    }
}

function left() {
    if (ball_x > 0) {
        ball_x = ball_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = " + ball_y);
        canvas.remove(bal_obj);
        load_img();
    }
}

function right() {
    if (ball_x <= 850) {
        ball_x = ball_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X =  " + ball_x + " , Y = " + ball_y);
        canvas.remove(bal_obj);
        load_img();
    }
}