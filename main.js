var time = 0;

function start() {
    var canvas = document.getElementById("canvas");
    resy = window.innerHeight * 0.85;
    resx = resy * (16 / 9);
    canvas.width = resx;
    canvas.height = resy;
    
    wy = new Wineyard3D(canvas, resx, resy, 1);
    loadResources(wy);
    createGameScene();
    wy.renderScene(game_Scene, gameFunction);
}

function createGameScene() {
    game_Scene = wy.addScene("test");
    game_Scene.setBackgroundTexture(t_background1);
    Tprev = new Date().getTime();

    player = new wy3d_Object("P", m_player, t_player, px,py,pz);
    generateLevel();
}

function handleTime()
{
    var Tnow = new Date().getTime();
    var deltaT = (Tnow - Tprev) / 1000.0;
    Tprev = Tnow;
    
    return deltaT;
}

function gameFunction() {
    game_Scene.OBJECTS = [];
    
    if (py < -10 || px > 50 || px < -50) {
		px = 1;
		py = 7;
		pz = z;
		vx = 0;
		vy = 0;
	}
    
    player.setPosition(px, py, pz);
    
    game_Scene.addObject(player)
    game_Scene.moveCamera(-px,-py-2, pz);
    game_Scene.setBackgroundScroll(px/50,py/25);
    
    for (var i = 0; i < TFX.length; i++) {
        var time_now = new Date().getTime();
        if (time_now - TFX[i] > 550) {
            TFX = delObj(TFX, i);
            FX = delObj(FX, i);
        }
    }
    
    for (var i = 0; i < FX.length; i++) {
        game_Scene.addObject(FX[i])
    }
    
    for (var i = 0; i < PICKUPS.length; i++) {
        game_Scene.addObject(PICKUPS[i])
    }
    
    for (var i = 0; i < OBJECTS.length; i++) {
        game_Scene.addObject(OBJECTS[i])
    }
    
    for (var i = 0; i < LAYOUT.length; i++) {
        game_Scene.addObject(LAYOUT[i])
    }
    
    movePickups();
    extendFX();
    
    var deltaT = handleTime();
    
    game_Scene.checkCollisions()
    checkCollisions(player.collisionInfo);
    checkPickups(player.collisionInfo);
    
    handleMovement(deltaT);

    time++;
    if(time >= timeInt)
        time = 0;
}
