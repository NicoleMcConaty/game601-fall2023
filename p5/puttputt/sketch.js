let ballX = 750;
let ballY = 500;
let velY = -2;
let accY = 0.1; // Gravity
let guideX = ballX;
let guideY = ballY;
let holeX = 750;
let holeY = 100;
let holeSize = 50;
let threshold = 20; //threshold for alignment

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	circle(mouseX, mouseY, 20);
	background(66, 245, 114);
	fill(190, 237, 185)
	stroke(60, 158, 89)
	strokeWeight(4)
	ellipse(width / 2 - 10, height / 2, 600, 600)


	// Calc. the distance between the ball and the hole
	let distance = dist(ballX, ballY, holeX, holeY);

	// Check if the ball is close enough to the hole to go into
	if (distance < threshold) {
		ballX = holeX; // hit ball to hole's X position
		ballY = holeY; // hit ball to hole's Y position

	} else {
		// Update velocity and position based on acceleration
		velY += accY;
		ballY += velY;
	}
	// Check if the mouse is pressed
	if (mouseIsPressed) {
		// If the mouse is pressed, apply an upward force 
		accY = -0.04; // adjust acc
	} else {
		// If the mouse is not pressed apply gravity
		accY = 0.1; // Adjust gravity
	}
	// hole
	fill(93, 94, 94)
	stroke(0)
	strokeWeight(3)
	ellipse(holeX, holeY, holeSize, holeSize);

	// ball
	fill(255)
	ellipse(ballX, ballY, 20, 20);
}
