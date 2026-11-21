/**
 * Display preferences store for the model list display plugin.
 * Persisted in localStorage via the framework's defineStore mechanism.
 */
import { createSnapshotStore, type SnapshotStore } from '@deepseek-ai/dsh-client-store'

export interface ModelListDisplayPrefs {
  /** Whether to collapse all provider groups when > 8 models. */
  collapseGroups: boolean
  /** Whether to show the recently-used models list at the top. */
  showRecent: boolean
  /** Whether the per-provider eye (show/hide) toggles are enabled. */
  providerVisibility: boolean
  /** Hidden provider ids. */
  hiddenProviders: string[]
  /** Recent selection history (most recent first), max 8 entries. */
  recentSelections: Array<{ provider: string; model: string; at: number }>
}

export const MODEL_LIST_DISPLAY_DEFAULTS: ModelListDisplayPrefs = {
  collapseGroups: false,
  showRecent: false,
  providerVisibility: false,
  hiddenProviders: [],
  recentSelections: [],
}

export const modelListDisplayStore: SnapshotStore<ModelListDisplayPrefs> = createSnapshotStore(MODEL_LIST_DISPLAY_DEFAULTS)

export function getModelListDisplayPrefs(): ModelListDisplayPrefs {
  return modelListDisplayStore.getSnapshot()
}

export function setModelListDisplayPrefs(partial: Partial<ModelListDisplayPrefs>): void {
  modelListDisplayStore.update((draft) => {
    Object.assign(draft, partial)
  })
}

export function recordRecentSelection(provider: string, model: string): void {
  modelListDisplayStore.update((draft) => {
    const now = Date.now()
    const idx = draft.recentSelections.findIndex((r) => r.provider === provider && r.model === model)
    if (idx !== -1) draft.recentSelections.splice(idx, 1)
    draft.recentSelections.unshift({ provider, model, at: now })
    if (draft.recentSelections.length > 8) draft.recentSelections.length = 8
  })
}

export function toggleProviderVisibility(providerId: string): void {
  modelListDisplayStore.update((draft) => {
    const idx = draft.hiddenProviders.indexOf(providerId)
    if (idx === -1) draft.hiddenProviders.push(providerId)
    else draft.hiddenProviders.splice(idx, 1)
  })
}

export function isProviderVisible(providerId: string): boolean {
  return !getModelListDisplayPrefs().hiddenProviders.includes(providerId)
}

export function clearRecentSelections(): void {
  modelListDisplayStore.update((draft) => { draft.recentSelections = [] })
}
