var level1_layout = [
    [0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
]

var level1_objects = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

function generateLevel()
{
    var layers = level1_layout.length;
    var len = level1_layout[0].length;
    
    for(var i=0; i < layers; i++)
    {
        var layer = level1_layout[i];
        for(var j=0; j<len; j++)
        {
            var ypos = layers - i;
            if(layer[j] == 1)
            {
                var color = [0.0+i/layers, 0.5, 0.5];
                var el = new wy3d_Object("layer"+i.toString()+"_"+j.toString(), m_cube, t_cube, j*2,ypos*2,z, 0,0,0, 1,1,1, color[0],color[1],color[2]);
                LAYOUT.push(el);
            }
                
            if(layer[j] == 2)
            {
                var color = [0.0+i/layers, 0.5, 0.5];
                var el = new wy3d_Object("layer"+i.toString()+"_"+j.toString(), m_cube, t_cube, j*2,ypos*2 + 0.2,z, 0,0,0, 1,1,1, color[0],color[1],color[2]);
                LAYOUT.push(el);
            }
        }
    }
    
    layers = level1_objects.length;
    len = level1_objects[0].length;
    
    for(var i=0; i < layers; i++)
    {
        var layer = level1_objects[i];
        for(var j=0; j<len; j++)
        {
            var ypos = layers - i;
            if(layer[j] == 1)
            {
                var pickup = new wy3d_Object("pickup"+i.toString()+"_"+j.toString(), m_pickup, t_pickup, j*2,ypos*2,z, 0,0,0, 0.70,0.70,0.70);
                PICKUPS.push(pickup);
            }
        }
    }
}

function movePickups()
{
    var Tnow = new Date().getTime();
    for(var i=0; i < PICKUPS.length; i++)
    {
        var pickup = PICKUPS[i];
        var initial = pickup.position[1]
        pickup.position[1] = initial +  Math.sin(2 * Tnow/600) * 0.01;
        pickup.addRotation(0, 0.33, 0);
    }
}

function extendFX()
{
    for(var i=0; i < FX.length; i++)
    {
        var fx = FX[i];
        fx.addScale(0.025, 0.025, 0.025);
        fx.addOpacity(-0.04);
    }
}
