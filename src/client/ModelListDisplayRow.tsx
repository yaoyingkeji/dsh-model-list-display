/** General Settings control for the model list display switches. */
import { useEffect, useRef, useState } from 'react'
import { Switch } from '@deepseek-ai/dsh-client-ui-primitives'
import type { InjectFace, PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { useModelListDisplay } from './display-store.ts'
import css from './ModelListDisplayRow.module.css'

export interface ModelListDisplayRowInjected {
  bridge?: unknown
}

export function ModelListDisplayRow({ t }:
  PropsRuntime<'settings.general.item'> & PropsLocale<'settings'> & InjectFace<ModelListDisplayRowInjected>) {
  const [prefs, setPrefs] = useState(() => useModelListDisplay().getSnapshot())
  const touched = useRef(false)

  useEffect(() => {
    const unsubscribe = useModelListDisplay().subscribe(() => {
      if (!touched.current) setPrefs(useModelListDisplay().getSnapshot())
    })
    return () => { unsubscribe() }
  }, [])

  const toggle = (key: keyof typeof prefs, value: boolean): void => {
    touched.current = true
    useModelListDisplay().set({ [key]: value })
    setPrefs(useModelListDisplay().getSnapshot())
  }

  return (
    <div className={css.row}>
      <div className={css.labelGroup}>
        <span className={css.label}>{t('modelListDisplay.title' as Parameters<typeof t>[0])}</span>
        <span className={css.description}>{t('modelListDisplay.description' as Parameters<typeof t>[0])}</span>
      </div>
      <div className={css.controls}>
        <label className={css.control}>
          <Switch checked={prefs.collapseGroups} onChange={(v: boolean) => toggle('collapseGroups', v)} />
          <span>{t('modelListDisplay.collapse' as Parameters<typeof t>[0])}</span>
          <span className={css.hint}>{t('modelListDisplay.collapseHint' as Parameters<typeof t>[0])}</span>
        </label>
        <label className={css.control}>
          <Switch checked={prefs.showRecent} onChange={(v: boolean) => toggle('showRecent', v)} />
          <span>{t('modelListDisplay.recent' as Parameters<typeof t>[0])}</span>
          <span className={css.hint}>{t('modelListDisplay.recentHint' as Parameters<typeof t>[0])}</span>
        </label>
        <label className={css.control}>
          <Switch checked={prefs.providerVisibility} onChange={(v: boolean) => toggle('providerVisibility', v)} />
          <span>{t('modelListDisplay.visibility' as Parameters<typeof t>[0])}</span>
          <span className={css.hint}>{t('modelListDisplay.visibilityHint' as Parameters<typeof t>[0])}</span>
        </label>
      </div>
    </div>
  )
}
