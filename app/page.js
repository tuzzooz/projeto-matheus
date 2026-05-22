'use client'

import { useState } from 'react'
import SideNote from '../components/SideNote'
import VisionSimulator from '../components/VisionSimulator'
import VisualPathwayCanvas from '../components/VisualPathwayCanvas'

const areaData = {
  olhos: {
    name: 'Olhos',
    function: 'Captam a luz e convertem estímulos visuais em sinais neurais.',
    symptoms: ['Perda visual global', 'Visão borrada bilateral', 'Diminuição da acuidade']
  },
  'nervo-optico': {
    name: 'Nervo Óptico',
    function: 'Transporta sinais da retina até as estruturas centrais da via visual.',
    symptoms: ['Amaurose', 'Defeito pupilar aferente', 'Perda visual monocular']
  },
  'quiasma-optico': {
    name: 'Quiasma Óptico',
    function: 'Cruza fibras nasais e organiza a informação para o córtex visual.',
    symptoms: ['Hemianopsia bitemporal', 'Dificuldade de orientação lateral', 'Redução do campo visual periférico']
  }
}

export default function Page() {
  const [selectedArea, setSelectedArea] = useState(null)
  const [lesionArea, setLesionArea] = useState(null)

  return (
    <main className="min-h-screen px-6 py-8 md:px-10">
      <header className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">Header</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Atlas 3D Interativo da Via Visual</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          Clique nas estruturas anatômicas para estudar função, sintomas de lesão e impacto visual em tempo real.
        </p>
      </header>
      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <VisualPathwayCanvas onSelect={setSelectedArea} />
        <SideNote
          selectedArea={selectedArea}
          lesionArea={lesionArea}
          onSetLesion={setLesionArea}
          onClearLesion={() => setLesionArea(null)}
          data={areaData}
        />
      </section>
      <VisionSimulator lesionArea={lesionArea} />
    </main>
  )
}
