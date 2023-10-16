import './App.css';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, CameraControls, GizmoHelper, GizmoViewport } from '@react-three/drei'

function App() {
  return (
    <div id="canvas-container" className='h-screen w-screen'>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <directionalLight castShadow position={[2.5, 5, 5]} intensity={1.5} shadow-mapSize={[1024, 1024]} />
        <CameraControls makeDefault />
        <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 5, 0]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App;

