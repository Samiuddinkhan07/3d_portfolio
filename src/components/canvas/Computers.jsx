import {Suspense,useEffect,useState} from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('../../../public/public/desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight
      intensity={2}
      groundColor="black"
      />
      <spotLight position={[30,50,10]} angle={0.12} penumbra={1} intensity={2} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={0.1} postion={[0,-3.5,-1.5]} rotation={[-0.02,-0.2,-0.1]}/>
    </mesh>
  )
}


const ComputerCanvas = () =>{
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[25,6,5],fov:5}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense >
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default ComputerCanvas