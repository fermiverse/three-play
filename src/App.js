import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';

function Model() {
  const gltf = useGLTF("/ship.glb", true);
  return <primitive object={gltf.scene} dispose={null} />
}

function HTMLContent() {
  const ref = useRef();
  return (
    <mesh ref={ref}>
      <Model />
    </mesh>
  )
}

function App() {
  
  return (
    <div className="App">
      <div className="plot-container">
        <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}>
          <OrbitControls />
          <Suspense fallback={null}>
          <HTMLContent />
          </Suspense>
          <ambientLight intensity={0.4} />
          <directionalLight intensity={0.4} position={[30, 100, 9]} />
          <directionalLight intensity={0.7} position={[0, -100, 90]} />
          <pointLight position={[100, 100, 100]} intensity={0.1} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
