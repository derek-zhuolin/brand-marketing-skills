# 协作指南 · 怎么加 / 改 Skill

两个人一起维护这个工具箱。核心规则只有一条：

> **`main` 分支永远是发布版本（GitHub Pages 从它构建）。任何改动都先开自己的分支，PR 互审对齐后再合并到 `main`。谁都不要直接 push `main`。**

所有内容都在 `skills-data.js` 里——加 / 改 skill 只动这个文件，不用碰 `index.html`。

## 标准流程（每次加 skill 都这么走）

```bash
# 1. 切回主版本并拉最新（确保从对方最新成果开始）
git checkout main
git pull

# 2. 开一个属于你这次改动的分支
git checkout -b add-<你要加的-skill名>      # 例：add-cold-email

# 3. 只改 skills-data.js，加完后双击 index.html 在浏览器里确认显示正常、控制台无报错

# 4. 提交并推送
git add skills-data.js
git commit -m "feat: 新增 <skill名> skill"
git push -u origin add-<你要加的-skill名>

# 5. 开 Pull Request（命令行或 GitHub 网页都行）
gh pr create --fill
```

然后**对方 review、对齐**，approve 后在 GitHub 上点 Merge。合并到 `main` 后 Pages 会自动重新发布。这一步的 PR 就是你俩「对齐后再一起上传」的关卡。

## Skill 数据格式

往 `skills-data.js` 的 `SKILLS` 数组里追加一个对象：

```js
{
  id: 'cold-email',            // 唯一英文 id，全局不重复
  bucket: 'write',             // 必须是已有分类之一（见下）
  name: 'cold-email',          // 展示名
  zh: '一句话说明这个 skill 干嘛的',
  source: 'marketingskills',   // 必须是 SOURCE_META 里已有的 key
  platform: 'universal',
  install: 'marketingskills',  // 必须是 INSTALL_TARGETS 里已有的 key
  when: '什么时候用它、输出什么。',
  prompts: [
    '可直接复制的示例 prompt 1',
    '可直接复制的示例 prompt 2',
  ],
}
```

- **`bucket` 可选值**：`gather`(调研洞察) · `strategize`(定位策略) · `write`(内容写作) · `visual`(内容视觉化) · `auto`(页面转化)。
- **`source` / `install`**：用 `skills-data.js` 里 `SOURCE_META` / `INSTALL_TARGETS` 已有的 key；要新增来源就在那两个对象里先加一条，再在 PR 里说明。
- **减少冲突的小习惯**：新 skill **追加到对应分类段的末尾**，别插在中间，这样两人很少改到同一行。

## 减少冲突 / 解决冲突

- 因为数据集中在 `skills-data.js`、又是各自追加，冲突很少。万一 PR 提示有冲突：`git checkout main && git pull`，再 `git checkout 你的分支 && git merge main`，手动把两人新增的对象都保留下来即可。
- 拿不准就在 PR 里 @ 对方一起看，别强行覆盖对方的改动。
