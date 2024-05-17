import React from 'react'

import {useRef, useEffect} from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  

  useEffect(() => {
    actions['Take 001'].play();
     
  },[])

  useFrame(({clock, camera}) => {

    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > 7) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < -7) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }


    // Update the X position based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.02;
      birdRef.current.position.z -= 0.02;
    } else  {
      // Moving backward
      birdRef.current.position.x -= 0.02;
      birdRef.current.position.z += 0.02;
    }
  }
  );


  return (
    <mesh position={[-5, 0, 1]}
     scale = {[0.003,0.003,0.003]}
     ref={birdRef}>
     <primitive object={scene} />
    </mesh>
  )
}

export default Bird