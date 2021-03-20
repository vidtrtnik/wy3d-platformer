function checkInput(deltaT)
{
    var coeff = 1;
    if(vx < 0)
        coeff = 4;
    
    if(wy.input.get("right"))
    {
        vx += coeff*a * deltaT;
        if(vx > max_vx)
            vx = max_vx;
        
        running = true;

    }

    else if(wy.input.get("left"))
    {
        var coeff = 1;
        if(vx > 0)
            coeff = 4;
    
        vx -= coeff*a * deltaT;
        if(vx < -max_vx)
            vx = -max_vx;
        running = true;
    }
    else
    {
        running = false;
    }

    if(wy.input.isDown("space") && grounded)
    {   
        jump = true;
        py += 0.33;
        vy += jumpForce * deltaT;
        
    }
    else
    {
        jump = false;
        falling = true;
    }
}
