import { use } from 'react'
import type { Technology } from '../types'

const technologiesPromise = fetch('/Technologies.json')
  .then(response => response.json())

export default function TechnologyList() {
  const technologies: Technology[] = use(technologiesPromise)

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <article
          key={technology.id}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-12 w-12 object-contain"
          />

          <p className="text-[10px] font-semibold uppercase text-slate-400">
            {technology.category}
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            {technology.name}
          </h3>

          <p className="text-sm text-slate-600">
            {technology.description}
          </p>

          <p>
            ★ {technology.rating.toFixed(1)}
          </p>

          <span>
            {technology.difficulty}
          </span>

          <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
            Add to Stack
          </button>
        </article>
      ))}
    </div>
  )
}