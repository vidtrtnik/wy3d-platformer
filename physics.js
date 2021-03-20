var collisionIgnore = ["pickup", "fx"];

function delObj(arr, i) {
    var newArr = arr;
    newArr.splice(i, 1);
    return newArr;
}

function checkPickups(info)
{
    for(var i=0; i < info.length; i++)
    {
        var object = game_Scene.getObject(info[i]);
        var index = -1;
        for(var j=0; j < PICKUPS.length; j++)
        {
            var pickup = PICKUPS[j];
            if(object.name == pickup.name)
                index = j;
        }
                    
        if(index == -1)
            continue;
            
        PICKUPS = delObj(PICKUPS, index);
                    
        var fx = new wy3d_Object("fx" + String(FX.length), m_particles, t_particles, object.position[0],object.position[1],object.position[2], Math.random() * 45, Math.random() * 45, Math.random() * 45, 0.33, 0.33, 0.33);
        FX.push(fx);
                    
        var tfx = new Date().getTime();
        TFX.push(tfx);
    }
}

function checkCollisions(info)
{
    grounded = false;
    
    for(var i=0; i < info.length; i++)
    {
        var loc_dc = false;
        var loc_rc = false;
        var loc_lc = false;
        var loc_tc = false;
            
        var object = game_Scene.getObject(info[i]);
            
        var skip = false;
        for(var j=0; j<collisionIgnore.length; j++)
        {
            var str = collisionIgnore[j];
            if(object.name.startsWith(str))
                skip=true;
        }
        
        if(skip)
            continue;
            
        var pMinX = px - player.dimensions[0]/2;
        var pMaxX = px + player.dimensions[0]/2;
        var pMinY = py - player.dimensions[1]/2;
        var pMaxY = py + player.dimensions[1]/2;
            
        var objMinX = object.position[0] - object.dimensions[0]/2;
        var objMaxX = object.position[0] + object.dimensions[0]/2;
        var objMinY = object.position[1] - object.dimensions[1]/2;
        var objMaxY = object.position[1] + object.dimensions[1]/2;

        if(pMinY >= objMaxY*0.9)
            loc_dc = true;

        if(pMaxY <= objMinY*1.1)
            loc_tc = true;
            
        if(pMaxX >= objMinX)
            loc_rc = true;

        if(pMinX <= objMaxX)
            loc_lc = true;
            
        if(loc_dc)
            grounded = true;   
        
        if(!loc_dc && (loc_rc || loc_lc))
            vx = 0;
            
        if(loc_tc && (loc_rc || loc_lc))
            vy = 0;

        //console.log(loc_rc, loc_lc, loc_dc, loc_tc);
    }
}

function handleMovement(deltaT)
{
    if(vy > max_vy)
        vy = max_vy
    if(vy < -max_vy)
        vy = -max_vy

    if(!running)
    {
        if(vx > 0)
        {
            vx -= (2*a) * deltaT;
        }
    
        if(vx < 0)
        {
            vx += (2*a) * deltaT;
        }
    }
    
    if(!grounded)
    {
        vy -= g * deltaT;
    }
    else
    {
        vy = 0;
    }
    
    checkInput(deltaT);
    px += vx * deltaT;
    py += vy * deltaT;
}
