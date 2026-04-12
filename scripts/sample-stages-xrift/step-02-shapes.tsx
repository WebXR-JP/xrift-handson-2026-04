/**
 * Stage 02: Add more shapes
 *
 * 箱に加えて球体と円柱を配置する
 */

export const StageWorld: React.FC = () => {
  return (
    <group>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

      {/* 地面 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#3a3a4a" />
      </mesh>

      {/* 箱 */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      {/* 球体 */}
      <mesh position={[-1.8, 0.6, 0]} castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>

      {/* 円柱 */}
      <mesh position={[1.8, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>
    </group>
  )
}
