/* ==========================================================================
   SKILL 数据 — 单一内容来源。加 / 改 skill 只动这里，详见 CONTRIBUTING.md
   ========================================================================== */
const SKILLS = [
  // 调研洞察
  { id:'customer-research', bucket:'gather', name:'customer-research', zh:'从真实用户语言里提炼痛点', source:'marketingskills', platform:'universal',
    when:'写定位、落地页、内容前先用。把评论、访谈、客服工单变成痛点词、购买触发点和 wish list。',
    install:'marketingskills',
    prompts:['我有 50 条用户评论（粘贴）。用 customer-research 提取真实语言、3 个痛点、3 个购买触发点。','我们要做一个品牌活动页，目标用户是 25-35 岁都市女性。先用 customer-research 设计 10 个访谈问题。']
  },
  { id:'competitor-profiling', bucket:'gather', name:'competitor-profiling', zh:'把竞品官网拆成可用画像', source:'marketingskills', platform:'universal',
    when:'做品牌对位、页面改版、活动页前用。输出定位、人群、定价、messaging、视觉调性。',
    install:'marketingskills',
    prompts:['用 competitor-profiling 拆这三个竞品 URL。重点看首屏话术、CTA 和差异化心智。']
  },
  { id:'seo-audit', bucket:'gather', name:'seo-audit', zh:'扫网站 SEO 真问题', source:'marketingskills', platform:'universal',
    when:'品牌网站、博客、落地页有内容但没流量时用。输出优先级清单。',
    install:'marketingskills',
    prompts:['用 seo-audit 审这个网站，重点看为什么博客内容不出现在 Google 前 20。']
  },
  { id:'analytics', bucket:'gather', name:'analytics', zh:'营销数据和追踪检查', source:'marketingskills', platform:'universal',
    when:'看不清内容、落地页、渠道到底有没有转化时用。检查 GA4、事件、漏斗和指标定义。',
    install:'marketingskills',
    prompts:['帮我检查这个落地页应该追踪哪些事件，设计一个 GA4 事件和转化表。']
  },

  // 定位策略
  { id:'positioning-messaging', bucket:'strategize', name:'positioning-messaging', zh:'一页 messaging framework', source:'anthropic', platform:'universal',
    when:'新产品、活动页、品牌升级时用。确定对谁说、说什么、不说什么。',
    install:'anthropic',
    prompts:['用 positioning-messaging 帮我们做 v1 messaging，基于这份用户研究（粘贴）。']
  },
  { id:'brand-storytelling', bucket:'strategize', name:'brand-storytelling', zh:'把产品讲成故事', source:'anthropic', platform:'universal',
    when:'写 about page、品牌介绍、案例页、活动复盘时用。避免变成功能清单。',
    install:'anthropic',
    prompts:['我们做女性运动鞋，想写品牌故事。用 brand-storytelling 搭叙事骨架。']
  },
  { id:'content-strategy', bucket:'strategize', name:'content-strategy', zh:'规划内容主题和分发', source:'marketingskills', platform:'universal',
    when:'决定公众号、博客、短视频、Newsletter 怎么做时用。输出主题、频率、渠道和转化路径。',
    install:'marketingskills',
    prompts:['我们要围绕「AI 品牌营销」做 3 个月内容。用 content-strategy 设计栏目和发布节奏。']
  },
  { id:'product-marketing', bucket:'strategize', name:'product-marketing', zh:'产品营销上下文母版', source:'marketingskills', platform:'universal',
    when:'做 SaaS、AI 工具、服务产品的 GTM 和产品叙事时用。先统一市场、用户、竞品和卖点。',
    install:'marketingskills',
    prompts:['帮我为这个 AI 工具建立 product marketing context：目标用户、核心价值、竞品、主叙事。']
  },
  { id:'lead-magnets', bucket:'strategize', name:'lead-magnets', zh:'设计可转化的 lead magnet', source:'marketingskills', platform:'universal',
    when:'想用模板、清单、免费工具换线索时用。适合品牌营销服务和活动转化。',
    install:'marketingskills',
    prompts:['为品牌营销 AI 工作坊设计 5 个 lead magnet，按转化潜力排序。']
  },
  { id:'sales-enablement', bucket:'strategize', name:'sales-enablement', zh:'销售材料和 demo 话术', source:'marketingskills', platform:'universal',
    when:'需要 one-pager、pitch deck 大纲、异议处理、销售跟进材料时用。',
    install:'marketingskills',
    prompts:['为这个品牌营销 AI 服务生成销售 one-pager 和 5 个常见异议回应。']
  },

  // 内容写作
  { id:'copywriting', bucket:'write', name:'copywriting', zh:'营销文案主力', source:'marketingskills', platform:'universal',
    when:'写 hero 标题、落地页、广告、邮件、CTA 时用。先问读者是谁、痛点是什么、下一步是什么。',
    install:'marketingskills',
    prompts:['用 copywriting 写官网 hero。我们做跨境电商客服自动化 SaaS，用户是月单量 1000+ 店主。']
  },
  { id:'copy-editing', bucket:'write', name:'copy-editing', zh:'已有文案打磨', source:'marketingskills', platform:'universal',
    when:'官网 copy、公众号稿、落地页文案读起来松散时用。删冗余、换具体动词。',
    install:'marketingskills',
    prompts:['用 copy-editing 打磨这段官网 hero（粘贴），保持语气，但让每句更紧。']
  },
  { id:'social', bucket:'write', name:'social', zh:'社媒内容延展', source:'marketingskills', platform:'universal',
    when:'一篇文章、一次活动、一个案例要拆成多平台内容时用。',
    install:'marketingskills',
    prompts:['把这篇活动复盘改写成 LinkedIn、Twitter thread、小红书图文和朋友圈短文。']
  },
  { id:'cold-email', bucket:'write', name:'cold-email', zh:'B2B 冷邮件', source:'marketingskills', platform:'universal',
    when:'做合作、销售、BD outreach 时用。第一句不像群发，CTA 低门槛。',
    install:'marketingskills',
    prompts:['想给 50 家独立站发冷邮件介绍 SEO 工具。用 cold-email 写主邮件 + 两封跟进。']
  },
  { id:'emails', bucket:'write', name:'emails', zh:'邮件序列 / lifecycle', source:'marketingskills', platform:'universal',
    when:'做欢迎流、活动报名后跟进、试用转化、复购唤醒时用。',
    install:'marketingskills',
    prompts:['为一次 AI 工作坊设计报名后 5 封邮件：确认、预热、提醒、复盘、转化。']
  },
  { id:'wewrite', bucket:'write', name:'wewrite', zh:'公众号文章全流程', source:'wewrite', platform:'universal',
    when:'要把热点、活动、访谈、观点做成公众号文章时用。适合中文内容营销。',
    install:'wewrite',
    prompts:['把这段活动录音纪要整理成一篇公众号文章，保留现场感，不要写成新闻稿。']
  },
  { id:'humanizer-zh', bucket:'write', name:'humanizer-zh', zh:'中文去 AI 味', source:'humanizer-zh', platform:'universal',
    when:'所有中文对外文案发布前过一遍。让表达更像人，更少模板句。',
    install:'humanizer',
    prompts:['帮我把这段文字去 AI 味，保留意思但更像真人写：[粘贴]']
  },

  // 内容视觉化
  { id:'image', bucket:'visual', name:'image', zh:'营销图片 prompt', source:'marketingskills', platform:'universal',
    when:'需要博客头图、社媒图、产品 mockup、广告图但不想从零写 prompt 时用。',
    install:'marketingskills',
    prompts:['用 image 写 5 个图片 prompt，做「2026 营销趋势」博客头图，风格像 Stripe editorial。']
  },
  { id:'video', bucket:'visual', name:'video', zh:'视频内容框架 / prompt', source:'marketingskills', platform:'universal',
    when:'做产品 demo、活动宣传、短视频脚本和 AI 视频 prompt 时用。',
    install:'marketingskills',
    prompts:['用 video 给我一个 30 秒产品 demo 的分镜和 AI 视频生成 prompt。']
  },
  { id:'baoyu-article-illustrator', bucket:'visual', name:'baoyu-article-illustrator', zh:'文章正文配图', source:'baoyu-skills', platform:'universal',
    when:'中文文章需要一组解释图、观点图、方法论配图时用。',
    install:'baoyu-skills',
    prompts:['为这篇公众号文章设计 5 张正文配图，要求每张图只表达一个认知转折。']
  },
  { id:'baoyu-cover-image', bucket:'visual', name:'baoyu-cover-image', zh:'文章 / 社媒封面图', source:'baoyu-skills', platform:'universal',
    when:'做公众号封面、博客封面、文章主视觉时用。',
    install:'baoyu-skills',
    prompts:['为这篇文章生成 3 个封面方向：标题、构图、图片 prompt、适合平台。']
  },
  { id:'ian-xiaohei-illustrations', bucket:'visual', name:'ian-xiaohei-illustrations', zh:'小黑手绘正文配图', source:'interflow-practice', platform:'universal',
    when:'中文文章、方法论、流程、观点需要怪诞但清爽的正文解释图时用。作为互通有无实践补充，不是主推仓库。',
    install:'xiaohei-practice',
    prompts:['为这篇文章出 4 张小黑正文配图 shot list：放在哪段后、表达什么、小黑在做什么、中文标注词。']
  },
  { id:'taste-design', bucket:'visual', name:'taste-design', zh:'设计品味 / UI 方向', source:'stitch-skills', platform:'universal',
    when:'页面或视觉方向太模板时用。适合品牌页、作品页、活动页的视觉判断。',
    install:'stitch-skills',
    prompts:['用 taste-design 评估这个 landing page 的视觉方向，给 5 个具体修改建议。']
  },

  // 页面转化 / 沉淀
  { id:'site-architecture', bucket:'auto', name:'site-architecture', zh:'网站结构规划', source:'marketingskills', platform:'universal',
    when:'做官网、专题页、资源库、博客信息架构时用。',
    install:'marketingskills',
    prompts:['为一个品牌营销 AI 服务规划网站结构：导航、页面层级、URL、内部链接。']
  },
  { id:'brand-landingpage', bucket:'auto', name:'brand-landingpage', zh:'品牌落地页生成', source:'wshobson-agents', platform:'universal',
    when:'快速做品牌页、产品页、活动页时用。适合现场 demo 和网站原型。',
    install:'wshobson-agents',
    prompts:['帮我生成一个品牌活动落地页：首屏、痛点、适合谁、流程、案例、报名 CTA。']
  },
  { id:'page-cro', bucket:'auto', name:'page-cro', zh:'落地页转化诊断', source:'marketingskills', platform:'universal',
    when:'页面流量有了但转化低时用。从 hero 到 CTA 审一遍。',
    install:'marketingskills',
    prompts:['用 page-cro 审这个 URL，假设流量从 Google 搜「XX 工具」来的。给我改动优先级清单。']
  },
  { id:'ab-testing', bucket:'auto', name:'ab-testing', zh:'A/B 测试设计', source:'marketingskills', platform:'universal',
    when:'想验证标题、CTA、定价、表单、弹窗时用。设计假设、变量和成功标准。',
    install:'marketingskills',
    prompts:['想 A/B 测 hero 标题两版。用 ab-testing 设计怎么测、需要多少天、什么算 winning。']
  },
  { id:'ai-seo', bucket:'auto', name:'ai-seo', zh:'AI 搜索可见性', source:'marketingskills', platform:'universal',
    when:'想让品牌内容被 AI 搜索、LLM answers 引用时用。',
    install:'marketingskills',
    prompts:['为这个品牌网站做 AI SEO 审计，告诉我哪些页面更可能被 LLM 引用。']
  },
  { id:'web-quality-audit', bucket:'auto', name:'web-quality-audit', zh:'网站质量 / Core Web Vitals', source:'web-quality-skills', platform:'universal',
    when:'品牌页和活动页上线前检查性能、可访问性、SEO 和体验质量。',
    install:'web-quality-skills',
    prompts:['帮我按 Lighthouse / Core Web Vitals 维度审这个落地页，给优先级清单。']
  },
  { id:'baoyu-markdown-to-html', bucket:'auto', name:'baoyu-markdown-to-html', zh:'Markdown 转网页', source:'baoyu-skills', platform:'universal',
    when:'把文章、活动复盘、方案草稿快速转成可看的 HTML 页面。',
    install:'baoyu-skills',
    prompts:['把这份 Markdown 活动复盘转成一个可发布的单页 HTML，保留标题层级和案例卡片。']
  },
  { id:'generative-ui', bucket:'auto', name:'generative-ui', zh:'生成式 UI 原型', source:'json-render', platform:'universal',
    when:'需要把结构化 JSON 或内容快速变成 UI 原型时用。偏建站和产品展示，不是内容主线。',
    install:'json-render',
    prompts:['把这份 landing page JSON 结构渲染成一个清晰的页面原型。']
  },
  { id:'feishu-cli', bucket:'auto', name:'飞书 CLI', zh:'把内容沉淀进飞书', source:'feishu-cli', platform:'universal',
    when:'团队协作场景：方案、活动复盘、内容简报、任务进度写进飞书文档或 Base。',
    install:'feishu-cli',
    prompts:['把刚生成的内容地图写进飞书文档，存到「品牌」文件夹。']
  }
];

const BUCKETS = [
  { id:'gather',     icon:'🔍', name:'调研洞察',   tagline:'用户 / 竞品 / SEO / 数据',       pair:'写内容前先校准真实问题' },
  { id:'strategize', icon:'🧠', name:'定位策略',   tagline:'定位 / 品牌故事 / 内容策略',   pair:'把方向定清楚再生产素材' },
  { id:'write',      icon:'✍️', name:'内容写作',   tagline:'文案 / 公众号 / 邮件 / 去 AI 味', pair:'品牌营销最核心的产出层' },
  { id:'visual',     icon:'🎨', name:'内容视觉化', tagline:'配图 / 封面 / 视频 / UI 品味',     pair:'让观点和案例变成可传播资产' },
  { id:'auto',       icon:'🧩', name:'页面转化',   tagline:'落地页 / SEO / CRO / 飞书沉淀',   pair:'把内容接到转化和协作' }
];

const SOURCE_META = {
  marketingskills: { label: 'marketingskills · 34.5k★' },
  'humanizer-zh': { label: 'Humanizer-zh · 11.2k★' },
  'wewrite': { label: 'wewrite · 2.5k★' },
  'baoyu-skills': { label: 'baoyu-skills · 22.2k★' },
  'web-quality-skills': { label: 'web-quality · 2.4k★' },
  'wshobson-agents': { label: 'wshobson/agents · 37k★' },
  'stitch-skills': { label: 'stitch-skills · 6.1k★' },
  'json-render': { label: 'json-render · 15.5k★' },
  'interflow-practice': { label: '互通有无实践补充' },
  'feishu-cli': { label: '飞书 CLI' },
  anthropic: { label: 'Anthropic / 常见内置' }
};

const INSTALL_TARGETS = {
  marketingskills: {
    repo: 'https://github.com/coreyhaines31/marketingskills',
    description: '高星营销 skill 包，覆盖 CRO、copywriting、SEO、analytics、growth 等品牌营销高频任务。',
    paths: {
      claude: `git clone https://github.com/coreyhaines31/marketingskills ~/.claude/skills/marketingskills`,
      codex: `git clone https://github.com/coreyhaines31/marketingskills ~/.codex/skills/marketingskills`,
      other: `<span class="comment"># 把这段话粘给豆包 / Floatboat / WorkBuddy</span>

帮我装这个高星营销 skill 包：
https://github.com/coreyhaines31/marketingskills`
    }
  },
  humanizer: {
    repo: 'https://github.com/op7418/Humanizer-zh',
    description: '中文去 AI 味。中文对外内容建议最后过一遍。',
    paths: {
      claude: `git clone https://github.com/op7418/Humanizer-zh ~/.claude/skills/humanizer-zh`,
      codex: `git clone https://github.com/op7418/Humanizer-zh ~/.codex/skills/humanizer-zh`,
      other: `帮我装 humanizer-zh，让所有中文输出发布前去 AI 味：
https://github.com/op7418/Humanizer-zh`
    }
  },
  wewrite: {
    repo: 'https://github.com/oaker-io/wewrite',
    description: '公众号文章全流程 AI skill，适合中文内容营销。',
    paths: {
      claude: `git clone https://github.com/oaker-io/wewrite ~/.claude/skills/wewrite`,
      codex: `git clone https://github.com/oaker-io/wewrite ~/.codex/skills/wewrite`,
      other: `帮我装 wewrite，用来做公众号文章全流程：
https://github.com/oaker-io/wewrite`
    }
  },
  'baoyu-skills': {
    repo: 'https://github.com/jimliu/baoyu-skills',
    description: '高星中文内容和视觉 skill 集合，适合文章插图、封面、Markdown 转网页等任务。',
    paths: {
      claude: `git clone https://github.com/jimliu/baoyu-skills ~/.claude/skills/baoyu-skills`,
      codex: `git clone https://github.com/jimliu/baoyu-skills ~/.codex/skills/baoyu-skills`,
      other: `帮我装 baoyu-skills，重点使用文章配图、封面、Markdown 转网页能力：
https://github.com/jimliu/baoyu-skills`
    }
  },
  'web-quality-skills': {
    repo: 'https://github.com/addyosmani/web-quality-skills',
    description: '网站质量、性能、SEO、可访问性审计，适合品牌页和活动页上线前检查。',
    paths: {
      claude: `git clone https://github.com/addyosmani/web-quality-skills ~/.claude/skills/web-quality-skills`,
      codex: `git clone https://github.com/addyosmani/web-quality-skills ~/.codex/skills/web-quality-skills`,
      other: `帮我装 web-quality-skills，用来审网站质量和 Core Web Vitals：
https://github.com/addyosmani/web-quality-skills`
    }
  },
  'wshobson-agents': {
    repo: 'https://github.com/wshobson/agents',
    description: '高星多 agent / skill 集合，这里只取和品牌落地页相关的能力。',
    paths: {
      claude: `git clone https://github.com/wshobson/agents ~/.claude/skills/wshobson-agents`,
      codex: `git clone https://github.com/wshobson/agents ~/.codex/skills/wshobson-agents`,
      other: `帮我安装 wshobson/agents，并优先启用 brand-landingpage 相关能力：
https://github.com/wshobson/agents`
    }
  },
  'stitch-skills': {
    repo: 'https://github.com/google-labs-code/stitch-skills',
    description: 'Google Labs 的 Stitch skills，这里只取设计品味和 UI 方向相关能力。',
    paths: {
      claude: `git clone https://github.com/google-labs-code/stitch-skills ~/.claude/skills/stitch-skills`,
      codex: `git clone https://github.com/google-labs-code/stitch-skills ~/.codex/skills/stitch-skills`,
      other: `帮我安装 stitch-skills，优先使用 taste-design：
https://github.com/google-labs-code/stitch-skills`
    }
  },
  'json-render': {
    repo: 'https://github.com/vercel-labs/json-render',
    description: 'Vercel Labs 的生成式 UI 框架，适合页面原型和结构化内容渲染。',
    paths: {
      claude: `git clone https://github.com/vercel-labs/json-render ~/.claude/skills/json-render`,
      codex: `git clone https://github.com/vercel-labs/json-render ~/.codex/skills/json-render`,
      other: `帮我安装 json-render，用来把结构化内容转成 UI 原型：
https://github.com/vercel-labs/json-render`
    }
  },
  'xiaohei-practice': {
    repo: '本地 / 互通有无实践补充',
    description: '小黑正文配图是互通有无本地实践补充，不作为高星仓库主推。公开使用时可先复制 prompt 规则。',
    paths: {
      claude: `<span class="comment"># 当前为本地实践 skill</span>
复制 SKILL.md 规则到 ~/.claude/skills/ian-xiaohei-illustrations`,
      codex: `<span class="comment"># 当前为本地实践 skill</span>
复制 SKILL.md 规则到 ~/.codex/skills/ian-xiaohei-illustrations`,
      other: '按「小黑正文配图」规则执行：白底、黑色手绘线稿、少量红橙蓝批注、小黑参与核心动作。'
    }
  },
  'feishu-cli': {
    repo: 'https://open.feishu.cn/document/no_class/mcp-archive/feishu-cli-installation-guide.md',
    description: '飞书官方命令行工具，适合把文档、任务、活动复盘沉淀进飞书。',
    paths: {
      claude: `<span class="comment"># 跟着官方文档装：</span>
https://open.feishu.cn/document/no_class/mcp-archive/feishu-cli-installation-guide.md`,
      codex: '<span class="comment"># 同上</span>',
      other: `帮我装飞书 CLI，让你能读写飞书文档、任务和群消息：
https://open.feishu.cn/document/no_class/mcp-archive/feishu-cli-installation-guide.md`
    }
  },
  anthropic: {
    notice: '常见内置 / 通用策略类 skill',
    description: '这类能力通常不需要单独安装；如果当前 Agent 没有同名 skill，可以把 prompt 当作工作流说明使用。'
  }
};

const WORKFLOWS = {
  website: {
    title: '我想做品牌 / 项目网站',
    sub: 'Positioning → Site structure → Landing page → Web quality',
    description: '先把定位和受众讲清楚，再生成页面结构和落地页，最后检查 SEO、速度、可访问性和转化问题。',
    tileTitle: '做品牌 / 项目网站',
    tileVote: '建站高频',
    tileQuote: '适合个人项目、品牌服务、活动页、AI 工具官网：先说清楚，再做页面。',
    tileAuthor: '— 品牌 / AI 创作者',
    tileTime: '想法 → 可展示页面',
    composition: ['positioning-messaging', 'site-architecture', 'brand-landingpage', 'web-quality-audit'],
    pipeline: [
      { name:'定位', desc:'positioning-messaging 先定目标用户、核心价值和不说什么' },
      { name:'结构', desc:'site-architecture 规划导航、页面顺序和信息层级' },
      { name:'生成', desc:'brand-landingpage 生成页面初稿或 HTML 原型' },
      { name:'检查', desc:'web-quality-audit 做上线前质量检查' }
    ],
    requirement: '适合 Claude Code / Codex / Cursor / Windsurf。先复制 prompt 也能跑。',
    setup: `<span class="comment"># 推荐先装 marketingskills + web-quality-skills</span>
git clone https://github.com/coreyhaines31/marketingskills ~/.claude/skills/marketingskills
git clone https://github.com/addyosmani/web-quality-skills ~/.claude/skills/web-quality-skills`,
    prompt: `我要做一个品牌/项目网站。请按顺序：
1. 用 positioning-messaging 问我最多 5 个问题，定清目标用户和一句话价值
2. 用 site-architecture 规划页面结构
3. 用 landing page 思路写首屏、模块和 CTA
4. 用 web-quality 角度检查可访问性、SEO、移动端和转化风险
最后输出一个可直接给 AI 建站工具使用的页面 brief。`,
    output: '页面 brief + 页面结构 + 首屏文案 + CTA + 上线前检查清单'
  },
  article: {
    title: '我想做公众号 / 长文内容',
    sub: 'Strategy → Article → Illustration → Humanize',
    description: '从内容策略到公众号文章，再补正文配图和中文去 AI 味。适合品牌观点、活动复盘和案例文章。',
    tileTitle: '做公众号 / 长文',
    tileVote: '内容营销',
    tileQuote: '把一个观点或活动现场做成能发的中文长文，而不是一堆素材。',
    tileAuthor: '— 内容负责人',
    tileTime: '素材 → 文章资产',
    composition: ['content-strategy', 'wewrite', 'baoyu-article-illustrator', 'humanizer-zh'],
    pipeline: [
      { name:'定主题', desc:'content-strategy 判断这篇文章服务什么转化目的' },
      { name:'成稿', desc:'wewrite 生成公众号文章结构和正文' },
      { name:'配图', desc:'baoyu-article-illustrator 或 xiaohei 做正文解释图' },
      { name:'润色', desc:'humanizer-zh 去 AI 味' }
    ],
    requirement: '适合中文内容营销。小黑配图作为垂类增强，不是必须步骤。',
    setup: `git clone https://github.com/oaker-io/wewrite ~/.claude/skills/wewrite
git clone https://github.com/jimliu/baoyu-skills ~/.claude/skills/baoyu-skills
git clone https://github.com/op7418/Humanizer-zh ~/.claude/skills/humanizer-zh`,
    prompt: `我有一批活动/访谈/项目素材（粘贴）。请：
1. 先判断这篇公众号文章的核心目的和读者
2. 用 wewrite 写成公众号文章，不要写成新闻稿
3. 给 4 张正文配图 shot list，可以用 baoyu 或小黑风格
4. 最后用 humanizer-zh 去 AI 味`,
    output: '公众号正文 + 标题候选 + 正文配图 shot list + 去 AI 味版本'
  },
  conversion: {
    title: '我想提升落地页转化',
    sub: 'Research → Copy → CRO → A/B test',
    description: '先看用户真实语言，再改页面文案，最后设计可验证的 CRO 和 A/B 测试。',
    tileTitle: '提升落地页转化',
    tileVote: '转化问题',
    tileQuote: '不是凭感觉改页面，而是把用户语言、页面文案和测试假设连起来。',
    tileAuthor: '— Growth / Marketing',
    tileTime: '审页面 → 改动清单',
    composition: ['customer-research', 'copywriting', 'page-cro', 'ab-testing'],
    pipeline: [
      { name:'用户语言', desc:'customer-research 找出真实痛点词' },
      { name:'文案', desc:'copywriting 改 hero、CTA 和模块说明' },
      { name:'CRO', desc:'page-cro 找出漏转化点' },
      { name:'实验', desc:'ab-testing 设计验证方式' }
    ],
    requirement: '适合已有页面或准备上线的活动页 / 产品页。',
    setup: 'git clone https://github.com/coreyhaines31/marketingskills ~/.claude/skills/marketingskills',
    prompt: `这是我的落地页 URL/文案（粘贴）。请按顺序：
1. 用 customer-research 推断用户真实痛点
2. 用 copywriting 改首屏和 CTA
3. 用 page-cro 给转化问题优先级
4. 用 ab-testing 设计 2 个值得跑的实验`,
    output: '页面改动清单 + 新文案 + CRO 优先级 + A/B 测试方案'
  },
  visual: {
    title: '我想把内容视觉化',
    sub: 'Copy → Image prompt → Cover / Illustration → polish',
    description: '把文章、案例、活动观点做成封面、正文配图和社媒图，而不是只停留在文字。',
    tileTitle: '把内容视觉化',
    tileVote: '视觉资产',
    tileQuote: '品牌营销不是只写文案，还要把观点包装成能被看懂、能传播的视觉资产。',
    tileAuthor: '— 内容 / 设计协作',
    tileTime: '文章 → 配图资产',
    composition: ['copywriting', 'image', 'baoyu-cover-image', 'ian-xiaohei-illustrations'],
    pipeline: [
      { name:'提炼观点', desc:'copywriting / copy-editing 先把核心观点压清楚' },
      { name:'主视觉', desc:'image 或 baoyu-cover-image 做封面方向' },
      { name:'正文图', desc:'baoyu-article-illustrator 或 xiaohei 做解释图' },
      { name:'平台适配', desc:'按公众号、博客、社媒调整比例和文字密度' }
    ],
    requirement: '适合公众号、博客、方法论文章、活动复盘和案例页。',
    setup: `git clone https://github.com/jimliu/baoyu-skills ~/.claude/skills/baoyu-skills
# 小黑为互通有无实践补充，可先复制 prompt 使用`,
    prompt: `这是一篇文章/活动复盘（粘贴）。请：
1. 提炼 1 个封面主视觉方向
2. 设计 3 张正文配图 shot list
3. 如果用小黑风格，每张图说明小黑在做什么
4. 输出可给图片模型使用的 prompt`,
    output: '封面方向 + 正文配图 shot list + 图片生成 prompt'
  }
};
