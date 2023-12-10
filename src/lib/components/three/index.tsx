'use client';

import { Canvas } from '@react-three/fiber';
import { SceneMonkeyIsland } from './Scene';

export function ThreeComponent(props: any) {
  return (
    <Canvas flat orthographic={true} shadows={'percentage'}>
      <SceneMonkeyIsland />
    </Canvas>
  );
}
