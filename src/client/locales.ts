/** Locale dictionaries for the plugin's own copy (model-list display). */

export const NS = 'model-list-display'

export const zh = {
  'recent.title': "最近使用",
  'recent.clear': "清除",
  'settings.title': "模型列表显示",
  'settings.description': "自定义「模型选择」下拉列表的展示方式。默认不改变。",
  'settings.collapse': "分组折叠",
  'settings.collapseHint': "模型超过 8 个时，按提供商分组折叠",
  'settings.recent': "最近选择列表",
  'settings.recentHint': "在列表顶部显示最近用过的模型",
  'settings.visibility': "提供商显示/隐藏",
  'settings.visibilityHint': "在每个提供商标题右侧显示眼睛按钮",
} as const

export const en = {
  'recent.title': "Recent",
  'recent.clear': "Clear",
  'settings.title': "Model list display",
  'settings.description': "Customize how the composer model dropdown is shown. Default is unchanged.",
  'settings.collapse': "Collapse provider groups",
  'settings.collapseHint': "Collapse groups by provider when there are more than 8 models",
  'settings.recent': "Recently used models",
  'settings.recentHint': "Show a recent list above the provider groups",
  'settings.visibility': "Per-provider visibility",
  'settings.visibilityHint': "Show an eye toggle next to each provider heading",
} as const

export const ja = {
  'recent.title': "最近使用",
  'recent.clear': "クリア",
  'settings.title': "モデル一覧の表示",
  'settings.description': "「モデル選択」ドロップダウンの表示方法をカスタマイズします。既定は変更されません。",
  'settings.collapse': "グループを折りたたむ",
  'settings.collapseHint': "モデルが 8 個を超えるとプロバイダごとに折りたたむ",
  'settings.recent': "最近使ったモデル",
  'settings.recentHint': "一覧の先頭に最近使ったモデルを表示する",
  'settings.visibility': "プロバイダーの表示/非表示",
  'settings.visibilityHint': "各プロバイダー見出しに目のボタンを表示する",
} as const

export const es = {
  'recent.title': "Recientes",
  'recent.clear': "Borrar",
  'settings.title': "Lista de modelos",
  'settings.description': "Personaliza cómo se muestra el desplegable de modelos. El comportamiento por defecto no cambia.",
  'settings.collapse': "Colapsar grupos",
  'settings.collapseHint': "Colapsar por proveedor cuando hay más de 8 modelos",
  'settings.recent': "Modelos recientes",
  'settings.recentHint': "Mostrar una lista de recientes encima de los grupos",
  'settings.visibility': "Visibilidad por proveedor",
  'settings.visibilityHint': "Mostrar un botón de ojo junto a cada proveedor",
} as const

export const fr = {
  'recent.title': "Récents",
  'recent.clear': "Effacer",
  'settings.title': "Liste de modèles",
  'settings.description': "Personnalise l'affichage du menu de modèles. Le comportement par défaut est inchangé.",
  'settings.collapse': "Replier les groupes",
  'settings.collapseHint': "Replier par fournisseur au-delà de 8 modèles",
  'settings.recent': "Modèles récents",
  'settings.recentHint': "Afficher une liste des modèles récents en haut",
  'settings.visibility': "Visibilité par fournisseur",
  'settings.visibilityHint': "Afficher un bouton œil à côté de chaque fournisseur",
} as const

export const de = {
  'recent.title': "Zuletzt",
  'recent.clear': "Leeren",
  'settings.title': "Modellliste",
  'settings.description': "Anzeige des Modell-Dropdowns anpassen. Standard bleibt unverändert.",
  'settings.collapse': "Gruppen einklappen",
  'settings.collapseHint': "Nach Anbieter einklappen, wenn mehr als 8 Modelle vorhanden sind",
  'settings.recent': "Zuletzt verwendete Modelle",
  'settings.recentHint': "Liste zuletzt genutzter Modelle über den Gruppen anzeigen",
  'settings.visibility': "Sichtbarkeit je Anbieter",
  'settings.visibilityHint': "Augen-Schaltfläche neben jeder Anbieterüberschrift anzeigen",
} as const

export const ru = {
  'recent.title': "Недавние",
  'recent.clear': "Очистить",
  'settings.title': "Список моделей",
  'settings.description': "Настройка отображения списка моделей. По умолчанию поведение не меняется.",
  'settings.collapse': "Сворачивать группы",
  'settings.collapseHint': "Сворачивать по провайдеру, если моделей больше 8",
  'settings.recent': "Недавно использованные",
  'settings.recentHint': "Показывать список недавних над группами",
  'settings.visibility': "Видимость провайдеров",
  'settings.visibilityHint': "Показывать кнопку-глаз рядом с каждым провайдером",
} as const

export const pt = {
  'recent.title': "Recentes",
  'recent.clear': "Limpar",
  'settings.title': "Lista de modelos",
  'settings.description': "Personalize como a lista de modelos é exibida. O padrão não muda.",
  'settings.collapse': "Recolher grupos",
  'settings.collapseHint': "Recolher por provedor quando houver mais de 8 modelos",
  'settings.recent': "Modelos recentes",
  'settings.recentHint': "Mostrar uma lista de recentes acima dos grupos",
  'settings.visibility': "Visibilidade por provedor",
  'settings.visibilityHint': "Mostrar um botão de olho ao lado de cada provedor",
} as const

export const locales = { zh, en, ja, es, fr, de, ru, pt }
export type ModelListDisplayKey = keyof typeof zh
