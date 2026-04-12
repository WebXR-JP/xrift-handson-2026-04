/**
 * Stage 01: Add a box
 *
 * 最初のオブジェクトとして箱を1つ配置する
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

      {/* オレンジ色の箱を1つ追加 */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
    </group>
  )
}
