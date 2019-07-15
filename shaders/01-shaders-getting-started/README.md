# Getting Started

```
#ifdef GL_ES
precision mediump float;
#endif

void main(){
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}
```

1. GLSL looks like C. 
2. It has variables (gl_FragColor), functions & types (vec4, float, int, bool, ..). 
3. It has pre-rendering macros. (#define, #ifdef & #endif). Every macro begins with #
4. The float type on the precision is crucial. The higher, the heavier for the GPU & the nicer look.





