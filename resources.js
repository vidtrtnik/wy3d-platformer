var m_cube;
var t_cube;
var m_pickup;
var t_pickup;
var m_particles;
var t_particles;

var m_player;
var t_player;

var t_background1;

function loadResources(wy) {
    m_cube = new wy3d_Model(wy, "./models/cube.wy3dm");
    t_cube = new wy3d_Texture(wy, "./textures/tile1.wy3dt");
    
    m_pickup = new wy3d_Model(wy, "./models/pickup.wy3dm");
    t_pickup = new wy3d_Texture(wy, "./textures/pickup.wy3dt");
    
    m_particles = new wy3d_Model(wy, "./models/particles.wy3dm");
    t_particles = new wy3d_Texture(wy, "./textures/particles.wy3dt");
    
    t_background1 = new wy3d_Texture(wy, "./textures/background1.wy3dt");

    m_player = new wy3d_Model(wy, "./models/ball.wy3dm");
    t_player = new wy3d_Texture(wy, "./textures/player.wy3dt");
}
