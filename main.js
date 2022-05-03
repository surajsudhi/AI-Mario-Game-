function preload() {
	world_start = loadSound("world_start.wav");
    mario_jump = loadSound("jump.wav");
    mario_coin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");


	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("Game_console");	

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose",gotPoses);
}

function modelLoaded(){
console.log("Model loaded");	
}

function gotPoses(result){
if(result.length > 0){
console.log(result);
noseX = result[0].pose.nose.x;
noseY = result[0].pose.nose.y;	
}
}

function draw() {
	game()
}






