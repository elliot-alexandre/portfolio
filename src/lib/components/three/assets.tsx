import { MeshWobbleMaterial } from "@react-three/drei";
import { ObjectMap } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

export function Assets(data: ObjectMap) {
  const group = useRef<Group>(null!);
  const { nodes, materials } = data;
  return (
    <group ref={group} castShadow>
      {/* @ts-ignore */}
      <mesh {...nodes.grass1} castShadow>
        <MeshWobbleMaterial
          factor={0.34}
          speed={1.8}
          {...materials["palette(Clone).011"]}
        />
      </mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.grass2} castShadow>
        <MeshWobbleMaterial
          factor={0.4}
          speed={2}
          {...materials["palette(Clone).010"]}
        />
      </mesh>

      {/* @ts-ignore */}
      <mesh {...nodes.stone1} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.stone2} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.stone3} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.coconut} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.coconut2} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.coconut3} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.umbrella} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.star} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.chair} castShadow />
      {/* @ts-ignore */}
      <mesh {...nodes.grass3} castShadow>
        <MeshWobbleMaterial
          factor={0.34}
          speed={2}
          {...materials["palette(Clone).012"]}
        />
      </mesh>
      {/* @ts-ignore */}
      <mesh {...nodes.grass4} castShadow>
        <MeshWobbleMaterial
          factor={0.24}
          speed={2}
          {...materials["palette(Clone).013"]}
        />
      </mesh>
    </group>
  );
}
