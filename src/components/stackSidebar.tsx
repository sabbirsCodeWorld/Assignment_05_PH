import { Suspense, use, useState } from 'react'
import { toast } from 'react-toastify'
import type { Technology } from '../types'

const technologiesPromise = fetch('/Technologies.json').then(
  (response) => response.json() as Promise<Technology[]>,
)

function StackContent() {
  const technologies: Technology[] = use(technologiesPromise)
  const [selectedStack, setSelectedStack] = useState<Technology[]>([])
  const [lastAdded, setLastAdded] = useState<string>('')

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedStack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelectedStack((prev) => [...prev, technology])
    setLastAdded(technology.name)
    toast.success(`${technology.name} added to your stack.`)
  }

  const handleRemoveFromStack = (technologyId: string) => {
    const removedTechnology = selectedStack.find((item) => item.id === technologyId)
    setSelectedStack((prev) => prev.filter((item) => item.id !== technologyId))
    setLastAdded('')

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`)
    }
  }

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      toast.info('Your stack is already empty.')
      return
    }

    setSelectedStack([])
    setLastAdded('')
    toast.info('All technologies removed from your stack.')
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 font-[Plus Jakarta Sans]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        {/* left column: technology cards grid */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl font-[Plus Jakarta Sans]">
              Explore the{' '}
              <span className="font-[Plus Jakarta Sans] bg-linear-to-r from-pink-500 via-violet-500 to-fuchsia-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-base text-slate-600">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isSelected = selectedStack.some((item) => item.id === technology.id)

              return (
                <div
                  key={technology.id}
                  className="flex h-full flex-col justify-between rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60"
                >
                  <div>
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2">
                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="leading-tight">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            {technology.category}
                          </p>
                          <h3 className="mt-1 text-2xl font-bold text-slate-900">{technology.name}</h3>
                        </div>
                      </div>

                      <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-600">
                        {technology.badge}
                      </span>
                    </div>

                    <p className="min-h-22.5 text-sm leading-6 text-slate-600">
                      {technology.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-slate-700">{technology.rating.toFixed(1)}</span>
                      </div>

                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
                        {technology.difficulty}
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={isSelected}
                      onClick={() => handleAddToStack(technology)}
                      className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isSelected
                          ? 'cursor-not-allowed bg-slate-300 text-slate-700'
                          : 'cursor-pointer bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      {isSelected ? 'Added to Stack' : 'Add to Stack'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* right column: selected stack panel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60 lg:sticky lg:top-24">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-2xl font-bold text-slate-900">Your Stack</h3>
            <span className="text-sm font-medium text-slate-500">
              {selectedStack.length} Technology{selectedStack.length === 1 ? '' : 'ies'} Selected
            </span>
          </div>

          {lastAdded && (
            <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              Last added: {lastAdded}
            </p>
          )}

          {selectedStack.length === 0 ? (
            <div className="flex min-h-55 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                🧩
              </div>
              <p className="text-base font-medium text-slate-700">Your stack is empty</p>
              <p className="mt-2 text-sm text-slate-500">Add technologies to compare your setup.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {selectedStack.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">{technology.name}</p>
                      <p className="text-[11px] text-slate-500">{technology.category}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveFromStack(technology.id)}
                    aria-label={`Remove ${technology.name}`}
                    className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg text-slate-600 shadow-sm transition hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={handleRemoveAll}
                className="cursor-pointer mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function StackSidebar() {
  return (
    <Suspense fallback={<p className="px-4 py-6 text-slate-500">Loading technologies...</p>}>
      <StackContent />
    </Suspense>
  )
}