export const LANGUAGE_KEY = 'visualization-introduction-language';

export function getLanguage() {
  try { return localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'zh'; }
  catch { return 'zh'; }
}

export function setLanguage(language) {
  const next = language === 'en' ? 'en' : 'zh';
  try { localStorage.setItem(LANGUAGE_KEY, next); } catch { /* The page still works without storage. */ }
  return next;
}

export function applyStaticCopy(copy, language) {
  const strings = copy[language];
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = strings[node.dataset.i18n];
    if (value !== undefined) node.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const value = strings[node.dataset.i18nHtml];
    if (value !== undefined) node.innerHTML = value;
  });
  for (const [attribute, datasetKey] of [['aria-label', 'i18nLabel'], ['alt', 'i18nAlt'], ['title', 'i18nTitle']]) {
    document.querySelectorAll('[data-' + datasetKey.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase()) + ']').forEach((node) => {
      const value = strings[node.dataset[datasetKey]];
      if (value !== undefined) node.setAttribute(attribute, value);
    });
  }
  if (strings.pageTitle) document.title = strings.pageTitle;
  if (strings.description) document.querySelector('meta[name="description"]')?.setAttribute('content', strings.description);
  document.querySelectorAll('[data-language-toggle]').forEach((button) => {
    button.textContent = language === 'en' ? '中文' : 'EN';
    button.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : 'Switch to English');
    button.setAttribute('title', language === 'en' ? '中文' : 'English');
  });
}

export const HOME_COPY = {
  zh: {
    pageTitle: 'Visualization Introduction｜可视化导论',
    description: '可视化导论：学习如何组织视觉信息、选择表达形式，并通过交互帮助人们理解。第一章学习 Web 页面布局。',
    skip: '跳到主要内容', brand: '可视化导论', brandSmall: 'VISUALIZATION INTRODUCTION', brandHome: '可视化导论首页',
    eyebrow: 'VISUALIZATION INTRODUCTION · 交互式课程', heroTitle: '可视化导论',
    heroCopy: '可视化将信息中的关系转化为可理解的视觉结构。本课程学习如何组织信息、选择恰当的图形表达，并通过交互帮助人们阅读、比较与探索。',
    heroAlt: '由坐标网格、数据节点、曲线和几何形态构成的抽象可视化图景',
    chapterRegion: '当前开放章节', directory: '章节目录', chapterMeta: 'CHAPTER 01 · 当前开放', chapterTitle: 'Web 页面布局',
    chapterCopy: '制作“形藏”专题页 · 6 个小节 · 每节包含代码练习与反馈', chapterLink: '进入第一章：Web 页面布局', chapterEnter: '进入第一章',
    outcomesKicker: 'LEARNING OUTCOMES', outcomesTitle: '逐步建立<br />可视化能力',
    outcome1Title: '组织视觉信息', outcome1Copy: '识别内容关系，用层级、分组和顺序降低理解成本。',
    outcome2Title: '选择表达形式', outcome2Copy: '根据目的与媒介，判断什么样的视觉结构更合适。',
    outcome3Title: '构建交互体验', outcome3Copy: '让可视化在不同屏幕与操作方式下保持清楚、稳定、可用。',
    continue: (count) => '继续第一章 · ' + count + '/6', revisit: '重新浏览第一章', themeLight: '切换到浅色主题', themeDark: '切换到深色主题'
  },
  en: {
    pageTitle: 'Visualization Introduction',
    description: 'An interactive introduction to organizing visual information, choosing appropriate forms, and designing readable interactions. Chapter 1 teaches Web page layout.',
    skip: 'Skip to main content', brand: 'Visualization Introduction', brandSmall: 'INTERACTIVE COURSE', brandHome: 'Visualization Introduction home',
    eyebrow: 'VISUALIZATION INTRODUCTION · INTERACTIVE COURSE', heroTitle: 'Visualization Introduction',
    heroCopy: 'Visualization turns relationships in information into understandable visual structures. This course explores how to organize information, choose suitable visual forms, and use interaction to help people read, compare, and explore.',
    heroAlt: 'Abstract visualization with a coordinate grid, data points, curves, and geometric shapes',
    chapterRegion: 'Available chapter', directory: 'Chapter directory', chapterMeta: 'CHAPTER 01 · AVAILABLE NOW', chapterTitle: 'Web Page Layout',
    chapterCopy: 'Build a Xingcang exhibition page · 6 steps · Code exercises and feedback in every step', chapterLink: 'Enter Chapter 1: Web Page Layout', chapterEnter: 'Enter Chapter 1',
    outcomesKicker: 'LEARNING OUTCOMES', outcomesTitle: 'Build visualization<br />skills step by step',
    outcome1Title: 'Organize visual information', outcome1Copy: 'Identify content relationships and reduce cognitive effort through hierarchy, grouping, and order.',
    outcome2Title: 'Choose a visual form', outcome2Copy: 'Select a visual structure that fits the purpose and medium.',
    outcome3Title: 'Build interactive experiences', outcome3Copy: 'Keep visualizations clear, stable, and usable across screens and input methods.',
    continue: (count) => 'Continue Chapter 1 · ' + count + '/6', revisit: 'Review Chapter 1', themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme'
  }
};

export const LESSON_COPY = {
  zh: {
    pageTitle: '第一章 · Web 页面布局｜可视化导论',
    description: '第一章：通过形藏数字博物馆案例学习 Web 页面布局、Grid、Flex 与响应式设计。',
    skip: '跳到课程内容', brand: '可视化导论', brandSmall: 'VISUALIZATION INTRODUCTION', brandHome: '返回可视化导论首页', chapterLabel: 'Web 页面布局',
    introKicker: 'CHAPTER 01 · WEB PAGE LAYOUT', introTitle: '如何布局制作<br /><em>一个 Web 网页</em>',
    introCopy: '你的任务：把一份展览内容清单做成可在电脑和手机阅读的“形藏”专题页。上方案例预览会保留你前几节的设计决定；每节的独立练习则聚焦一种技能。探索、改代码、检查结果并回答理解题，六步走完一张完整网页的设计流程。',
    progress: '学习进度', progressLabel: '第一章学习进度', workflowLabel: '第一章学习流程',
    planning: '内容规划', structure: '页面骨架', grid: '容器与网格', modules: '模块布局', responsive: '响应式', review: '细节验收',
    missionLabel: '这节要解决的具体问题', missionLink: '去完成代码练习 ↓', principlesLabel: '设计原理', controlsLabel: '动手调整', reset: '恢复默认',
    controlsTitle: '改变设计决策', insightLabel: '为什么', studioLabel: '案例实时工作台', exploreLabel: '① 探索案例 · 改参数看变化',
    viewportLabel: '预览宽度', desktopTitle: '桌面预览', tabletTitle: '平板预览', mobileTitle: '手机预览', museumLabel: '形藏数字博物馆案例预览',
    museumBrand: '形藏 XINGCANG', museumNav1: '特展', museumNav2: '典藏', museumNav3: '参观', museumYear: '年度特展 · 2026',
    museumTitle: '器物有声', museumIntro: '从泥土、火焰与时间中，听见东方器物的日常回响。', museumAction: '开始观展 →',
    museumAlt: '展厅中的青瓷花瓶', museumFact1: '精选器物', museumFact2: '历史时期', museumFact3: '年工艺流变',
    museumFeatureTitle: '一只器物，如何保存生活的温度？', museumFeatureCopy: '观察比例、釉色和使用痕迹，器物便不再只是玻璃柜中的年代标签。',
    museumCard1Title: '青瓷：雨过天青', museumCard1Copy: '以留白突出材质与轮廓。',
    museumCard2Title: '陶器：火的尺度', museumCard2Copy: '从实用器到精神容器。',
    museumCard3Title: '金工：光的秩序', museumCard3Copy: '细部纹样构成观看路径。',
    museumFooter: '形藏', museumDisclaimer: '示例内容仅用于页面布局教学',
    codeLabel: '代码语言', codeViewLabel: '与预览同步的关键代码', copyCode: '复制代码',
    practiceKicker: '独立练习 · 把观察变成能力', editorLabel: '修改下面的代码（输入后自动更新练习预览）',
    practiceResult: '你的练习结果', practiceFrame: '独立练习实时预览', practiceReset: '重置练习', hint: '提示', answer: '查看参考解法',
    check: '检查我的实现', download: '下载当前练习 HTML', checkpoint: '本步检查点',
    previous: '← 上一步', back: '返回课程首页', next: '下一步 →', stepNavigation: '步骤导航',
    themeLight: '切换到浅色主题', themeDark: '切换到深色主题'
  },
  en: {
    pageTitle: 'Chapter 1 · Web Page Layout | Visualization Introduction',
    description: 'Chapter 1 teaches Web page layout, Grid, Flex, and responsive design through a Xingcang digital museum case.',
    skip: 'Skip to lesson content', brand: 'Visualization Introduction', brandSmall: 'INTERACTIVE COURSE', brandHome: 'Return to Visualization Introduction home', chapterLabel: 'Web Page Layout',
    introKicker: 'CHAPTER 01 · WEB PAGE LAYOUT', introTitle: 'How to Design the Layout<br /><em>of a Web Page</em>',
    introCopy: 'Your task: turn an exhibition content list into a Xingcang feature page that works on desktop and mobile. The case preview above carries your design decisions across steps; each independent exercise focuses on one skill. Explore, edit code, check the result, and answer a concept question to complete the six-step design process for one page.',
    progress: 'Learning progress', progressLabel: 'Chapter 1 learning progress', workflowLabel: 'Chapter 1 learning sequence',
    planning: 'Content planning', structure: 'Page structure', grid: 'Container & grid', modules: 'Module layout', responsive: 'Responsive', review: 'Final review',
    missionLabel: 'The problem to solve in this step', missionLink: 'Go to the code exercise ↓', principlesLabel: 'Design principles', controlsLabel: 'Try a change', reset: 'Reset',
    controlsTitle: 'Change a design decision', insightLabel: 'Why it matters', studioLabel: 'Live case workspace', exploreLabel: '① Explore the case · Change parameters',
    viewportLabel: 'Preview width', desktopTitle: 'Desktop preview', tabletTitle: 'Tablet preview', mobileTitle: 'Mobile preview', museumLabel: 'Xingcang digital museum case preview',
    museumBrand: 'XINGCANG Museum', museumNav1: 'Exhibition', museumNav2: 'Collection', museumNav3: 'Visit', museumYear: 'Annual exhibition · 2026',
    museumTitle: 'Objects Have Voices', museumIntro: 'Through earth, fire, and time, discover the everyday stories of Eastern objects.', museumAction: 'Explore the exhibition →',
    museumAlt: 'Celadon vase in a museum gallery', museumFact1: 'Selected objects', museumFact2: 'Historical periods', museumFact3: 'Years of craft history',
    museumFeatureTitle: 'How can an object preserve the warmth of everyday life?', museumFeatureCopy: 'Look at its proportions, glaze, and traces of use: an object becomes more than a date on a display label.',
    museumCard1Title: 'Celadon: sky after rain', museumCard1Copy: 'Use negative space to reveal material and silhouette.',
    museumCard2Title: 'Pottery: the scale of fire', museumCard2Copy: 'From practical vessel to cultural symbol.',
    museumCard3Title: 'Metalwork: an order of light', museumCard3Copy: 'Small patterns guide the viewing path.',
    museumFooter: 'XINGCANG', museumDisclaimer: 'Example content for Web page layout lessons only',
    codeLabel: 'Code language', codeViewLabel: 'Key code synchronized with the preview', copyCode: 'Copy code',
    practiceKicker: 'Independent exercise · Turn observation into skill', editorLabel: 'Edit the code below (the exercise preview updates as you type)',
    practiceResult: 'Your exercise result', practiceFrame: 'Live exercise preview', practiceReset: 'Reset exercise', hint: 'Hint', answer: 'View a reference solution',
    check: 'Check my implementation', download: 'Download current exercise HTML', checkpoint: 'Step checkpoint',
    previous: '← Previous step', back: 'Back to course home', next: 'Next step →', stepNavigation: 'Step navigation',
    themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme'
  }
};
