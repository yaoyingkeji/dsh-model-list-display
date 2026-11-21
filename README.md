# @yaoyingkeji/dsh-model-list-display

DeepSeek Harness 插件：**模型选择器显示自定义**。

## 功能

- **分组折叠**：模型超过 8 个时，按提供商分组折叠，支持展开/折叠
- **最近选择列表**：在列表顶部显示最近用过的模型（最多 8 条）
- **提供商显示/隐藏**：每个提供商标题右侧显示眼睛按钮，点击切换显示/隐藏
- **设置项**：在「通用设置」中增加「模型列表显示」设置区，所有功能可独立开关
- **默认不变**：所有功能默认关闭，不影响现有体验

## 安装

1. 从 [Releases](https://github.com/yaoyingkeji/dsh-model-list-display/releases) 下载最新版本的 `dsh-model-list-display-*.tar.gz`。
2. 解压到 `~/.config/deepseek-harness/plugins/dsh-model-list-display/`（或插件目录）。
3. 重启 DeepSeek Harness。
4. 在「通用设置」中找到「模型列表显示」设置项，进行配置。

## 构建（如需本地构建）

```bash
pnpm install
pnpm run bundle
```

## 许可证

MIT
