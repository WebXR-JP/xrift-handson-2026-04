/**
 * Stage 05: Add an interactable button
 *
 * クリックできるオブジェクトを置く（見た目はボタン風のメッシュ）
 * Interactableコンポーネントは XRift プロバイダ環境では実際のクリックも反応する
 */

import { Gltf, Text, useTexture } from '@react-three/drei'
import { useXRift } from '@xrift/world-components'
import { BackSide } from 'three'

export const StageWorld: React.FC = () => {
  const { baseUrl } = useXRift()
  const skyTexture = useTexture(`${baseUrl}tokyo-station.jpg`)

  return (
    <group>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

      {/* スカイボックス */}
      <mesh>
        <sphereGeometry args={[100, 60, 40]} />
        <meshBasicMaterial map={skyTexture} side={BackSide} />
      </mesh>

      {/* 地面 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#3a3a4a" />
      </mesh>

      {/* 基本オブジェクト */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      <mesh position={[-1.8, 0.6, 0]} castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>

      <mesh position={[1.8, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>

      {/* 3Dモデル */}
      <Gltf
        src={`${baseUrl}duck.glb`}
        position={[0, 0, 2.2]}
        scale={1}
        castShadow
        receiveShadow
      />

      {/* インタラクティブなボタン（クリックできるオブジェクト） */}
      <group position={[0, 1.5, -2]}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.5, 0.4]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.4} roughness={0.3} />
        </mesh>
        <Text
          position={[0, 0, 0.21]}
          fontSize={0.18}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          CLICK ME
        </Text>
      </group>
    </group>
  )
}
