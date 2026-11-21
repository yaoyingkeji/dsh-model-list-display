import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type { ModelSelectInjected } from '@deepseek-ai/dsh-client-ui-model-selection/src/client/slots.ts'
import { ModelSelectPro } from './ModelSelectPro.tsx'
import { ModelListDisplayRow } from './ModelListDisplayRow.tsx'
import { desktopNotify } from '@deepseek-ai/dsh-client-ui-primitives'
import { en, ja, es, fr, de, ru, pt, NS, zh } from './locales.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    'model-list-display': typeof zh
  }
}

export const inject = [
  'slots', 'locale', 'sessions', 'remote', 'remote.session',
  'ui-model-selection',
  'ui-settings-general',
]

export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en, ja, es, fr, de, ru, pt }), 'model-list-display: dictionaries')

  // Register ModelSelectPro with priority -10 to shadow the upstream ModelSelect
  // (priority 0). Single-kind slots pick the lowest priority entry, so the
  // plugin's version wins while upstream's remains registered (so its sub-slots
  // keep their declarations).
  ctx.slots.inject('conversation.input.model', () =>
    ctx.slots.register({
      name: 'conversation.input.model',
      priority: -10,
      locale: NS,
      inject: (): ModelSelectInjected => ({
        available: true,
        directory: (ctx as any).modelDirectory as any,
        load: () => { /* no-op: directory auto-loads */ },
        resolveText: (text: any) => typeof text === 'string' ? text : (text?.en ?? text?.zh ?? ''),
        select: async (selection: any) => (ctx as any).modelSelect?.select?.(selection),
      }),
    }, ModelSelectPro as any),
  )

  // Register the settings row in General Settings.
  ctx.slots.inject('settings.general.item', () =>
    ctx.slots.register({
      name: 'settings.general.item',
      id: 'model-list-display',
      order: 130,
      locale: NS,
    }, ModelListDisplayRow as any),
  )
}
