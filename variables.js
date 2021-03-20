var wy = null;
var game_Scene = null;

var z = -9.5;

var timeInt = 30;

var LAYOUT = [];
var OBJECTS = [];
var PICKUPS = [];
var FX = [];
var TFX = [];

var player = null;
var px=1;
var py=7;
var pz=z;

var vx=0;
var vy=0;
var a=4;
var g=6;
var max_vx = 5;
var max_vy = 100;
var jumpForce = 400;

var cubeS = [0.5,0.5,0.5]
var cubeR = [0,0,0]

var Tprev = 0;

var running = false;
var falling = false;

var jump = false;

var grounded = false;
