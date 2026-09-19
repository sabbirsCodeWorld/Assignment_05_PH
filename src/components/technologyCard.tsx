import { Suspense } from 'react'
import TechnologyList from './TechnologyList'

export default function TechnologyCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900">
          Explore the Technologies
        </h2>

        <p className="mt-2 text-base text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense fallback={<p>Loading technologies...</p>}>
        <TechnologyList />
      </Suspense>
    </section>
  )
}