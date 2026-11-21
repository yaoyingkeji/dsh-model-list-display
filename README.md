# dsh-model-list-display / 模型列表显示插件

DeepSeek Harness 插件：自定义「模型选择」下拉列表的展示方式。

A DeepSeek Harness plugin that customizes how the composer model dropdown is rendered.

## 功能 / Features

| 功能 | 说明 |
|------|------|
| **分组折叠** | 模型超过 8 个时按提供商分组折叠，可展开/折叠 / Collapse provider groups when more than 8 models |
| **最近选择列表** | 列表顶部显示最近用过的模型（最多 8 条）/ Recently-used models at the top (max 8) |
| **提供商显示/隐藏** | 每个提供商标题右侧眼睛按钮，点击切换 / Eye toggle per provider heading |
| **设置项** | 「通用设置 → 模型列表显示」，三项独立开关 / General Settings → Model list display |
| **默认不变** | 所有功能默认关闭，与上游行为一致 / All off by default, upstream behaviour unchanged |

## 安装 / Installation

插件以 **GitHub Release tarball** 形式分发（不发布 npm）。

```bash
# 1. 下载并解压
curl -fsSL -o dsh-model-list-display.tar.gz \
  https://github.com/yaoyingkeji/dsh-model-list-display/releases/latest/download/dsh-model-list-display.tar.gz
tar -xzf dsh-model-list-display.tar.gz

# 2. 放到插件目录（与 DeepSeek Harness 的 plugins 目录同级）
mkdir -p ~/.config/deepseek-harness/plugins
cp -r dsh-model-list-display ~/.config/deepseek-harness/plugins/

# 3. 重启 DeepSeek Harness
```

然后在「通用设置 → 模型列表显示」中开启需要的开关。

## 工作原理 / How it works

插件通过 `ui-slots` 的 `priority` 遮蔽机制接管 `conversation.input.model` 插槽：

- 上游 `ui-model-selection` 以 `priority: 0` 注册 `ModelSelect`
- 本插件以 `priority: -10` 注册 `ModelSelectPro`
- `single` 类型插槽按 priority 升序排序，最低者渲染 → 插件版本生效
- 上游插槽仍保留注册，因此其子插槽（`conversation.input.model.label/.options/.pane`）的声明不受影响

**因此无需修改上游任何文件，也不会与上游同步冲突。**

## 构建 / Build

```bash
pnpm install
pnpm run bundle    # tsdown → lib/index.js + lib/client.js
```

## 兼容性 / Compatibility

- DeepSeek Harness 0.2.2-rc.5（上游 master）
- 在 `linux-custom-titlebar` 与 `linux-package-official` 两个分支上均可加载

## 许可证 / License

MIT
