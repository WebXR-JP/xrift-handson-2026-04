/**
 * Stage 00: Empty scene
 *
 * 最小構成: 地面と照明だけ
 */

export const StageWorld: React.FC = () => {
  return (
    <group>
      {/* 環境光（全体をふんわり照らす） */}
      <ambientLight intensity={0.6} />

      {/* 太陽光のような指向性ライト */}
      <directionalLight position={[5, 10, 5]} intensity={1.2} />

      {/* 地面（横向きの板） */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#3a3a4a" />
      </mesh>
    </group>
  )
}
