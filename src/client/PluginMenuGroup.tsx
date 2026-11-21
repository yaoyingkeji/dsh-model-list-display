/**
 * Menu group with an optional action slot in its heading.
 *
 * The upstream `MenuGroup` renders `<div class="heading">{label}</div>` and takes
 * no action slot, so this plugin ships its own group that mirrors that structure
 * (same sentinel + heading attributes, so `observeStickyMenuGroups` keeps
 * working) and appends caller-supplied controls inside the heading row.
 */
import { useId, type ReactNode } from 'react'

export function PluginMenuGroup({ label, children, headingActions }: {
  label: string
  children?: ReactNode
  headingActions?: ReactNode
}) {
  const headingId = useId()
  return (
    <section role="group" aria-labelledby={headingId} data-menu-group="" className="dsh-plugin-menu-group">
      <span aria-hidden="true" data-menu-group-start="" className="dsh-plugin-menu-group-start" />
      <div id={headingId} data-menu-group-heading="" className="dsh-plugin-menu-group-heading">
        <span>{label}</span>
        {headingActions}
      </div>
      {children}
    </section>
  )
}
