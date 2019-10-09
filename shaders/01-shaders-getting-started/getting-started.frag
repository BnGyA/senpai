#ifdef GL_ES
precision mediump float;
#endif

/*
vec4 red(){
    return  vec4(1.0, 0.0, 1.0, 1.0);
}

void main(){
    //gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    gl_FragColor = red();  
}*/


/*
uniform float u_time;

void main(){
    gl_FragColor = vec4(abs(sin(u_time * 10.0)), abs(sin(u_time * 2.0)), abs(sin(u_time * 4.0)), 1.0);
}
*/
 
uniform float u_time;
uniform vec2 u_resolution;

void main(){
    // Normaliser les coordonnées du fragment, elles sont = entre 0.0 et 1.0
    vec2 st = gl_FragCoord.xy/u_resolution;

    gl_FragColor = vec4(abs(sin(u_time * 2.0)) * st.x , abs(sin(u_time * 3.0)) * st.y, abs(sin(u_time / 2.0)), 1.0);
}