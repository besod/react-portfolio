import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber';

import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
 
const Plane = ({isRotating, ...props}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const {actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log({isRotating})
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }

  }, [actions, isRotating])
  
 
  
  useFrame(({clock}) => {
    // Update the Y position to simulate plane-like motion using a sine wave
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.4; 
  });
  

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane