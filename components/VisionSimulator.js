'use client'

const lesionOpacity = {
  olhos: { left: 0.68, right: 0.68 },
  'nervo-optico': { left: 0.42, right: 0.42 },
  'quiasma-optico': { left: 0.58, right: 0.58 },
  none: { left: 0, right: 0 }
}

function EyeView({ label, opacity }) {
  return (
    <div className="flex w-28 flex-col items-center gap-2">
      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-slate-500/60 bg-gradient-to-br from-cyan-300 to-blue-500">
        <div className="absolute inset-0 bg-black transition-opacity duration-300" style={{ opacity }} />
      </div>
      <span className="text-xs text-slate-200">{label}</span>
    </div>
  )
}

export default function VisionSimulator({ lesionArea }) {
  const mode = lesionOpacity[lesionArea] ?? lesionOpacity.none

  return (
    <div className="fixed bottom-5 right-5 z-20 rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-lg shadow-black/40">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-400">VisionSimulator</p>
      <div className="flex gap-3">
        <EyeView label="Olho Esquerdo" opacity={mode.left} />
        <EyeView label="Olho Direito" opacity={mode.right} />
      </div>
    </div>
  )
}
