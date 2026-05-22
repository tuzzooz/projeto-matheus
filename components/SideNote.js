'use client'

export default function SideNote({ selectedArea, lesionArea, onSetLesion, onClearLesion, data }) {
  const details = selectedArea ? data[selectedArea] : null

  return (
    <aside className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-black/30">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">SideNote</p>
      {details ? (
        <div className="mt-4 space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-white">{details.name}</h2>
            <p className="mt-2 text-sm text-slate-300">{details.function}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-rose-300">Sintomas da Lesão</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
              {details.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onSetLesion(selectedArea)}
              className="rounded-md bg-rose-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-rose-400"
            >
              Ativar Lesão
            </button>
            <button
              type="button"
              onClick={onClearLesion}
              className="rounded-md border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
            >
              Limpar Lesão
            </button>
          </div>
          <p className="text-xs text-slate-400">
            Lesão ativa: <span className="text-slate-200">{lesionArea ? data[lesionArea].name : 'Nenhuma'}</span>
          </p>
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-400">Selecione uma estrutura no modelo 3D para visualizar os detalhes.</p>
      )}
    </aside>
  )
}
