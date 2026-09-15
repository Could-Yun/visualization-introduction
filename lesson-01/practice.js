// Each exercise starts with an incomplete implementation, not a finished page.
export const EXERCISES = [
  {
    title: '01 · 让内容顺序服务于读者任务', language: 'html',
    goal: '情境：读者只想快速了解展览规模。把“概况”移到“展览介绍”之前，并把按钮改成“查看馆藏概况”。',
    instructions: ['先在上方探索区选择“查看馆藏概况”和“指标优先”，观察信息顺序。', '在下面的 HTML 中移动整个概况 section，而不是只移动标题。', '修改按钮文字，检查结果后回答理解题。'],
    initial: '<main>\n  <section data-block="hero">\n    <h1>器物有声</h1>\n    <p>探索东方器物的日常与工艺。</p>\n    <button>开始观展</button>\n  </section>\n  <section data-block="facts">\n    <h2>馆藏概况</h2>\n    <p>48 件器物 · 6 个时期</p>\n  </section>\n</main>',
    solution: '<main>\n  <section data-block="facts">\n    <h2>馆藏概况</h2>\n    <p>48 件器物 · 6 个时期</p>\n  </section>\n  <section data-block="hero">\n    <h1>器物有声</h1>\n    <p>探索东方器物的日常与工艺。</p>\n    <button>查看馆藏概况</button>\n  </section>\n</main>',
    hint: '选中从 <section data-block="facts"> 到它的 </section>，整体剪切到 hero 区块之前。DOM 顺序就是默认阅读顺序。',
    question: '为什么先调整 HTML 中的内容顺序，而不是只用 CSS 把概况摆到上面？',
    options: ['因为 HTML 决定默认阅读顺序，视觉与辅助技术的阅读路径应一致。', '因为放在前面的元素会自动变成蓝色。', '因为 section 不能用 CSS 布局。'], answer: 0,
    explanation: '位置表达优先级；DOM 顺序还影响屏幕阅读器的阅读路径。先组织信息，再做视觉布局。',
    transfer: '你学到的是：先明确读者任务，再决定内容顺序。同样的方法可以用于课程页、新闻页和产品说明页。'
  },
  {
    title: '02 · 把普通容器改成可理解的语义骨架', language: 'html',
    goal: '保持文字不变，把导航容器改成 nav，把主体改成 main，把内容容器改成有标题的 section。',
    instructions: ['在探索区对比“全用 div”和“语义标签”：注意外观可能不变。', '修改下面三个容器的开始与结束标签，为 nav 添加 aria-label="展览导航"。', '保留 h1 与 h2，确保每个 section 有标题。'],
    initial: '<div class="navigation">形藏 · 特展 · 典藏</div>\n<div class="page">\n  <h1>器物有声</h1>\n  <div class="content">\n    <h2>策展导语</h2>\n    <p>一只器物，保存生活的温度。</p>\n  </div>\n</div>',
    solution: '<nav aria-label="展览导航">形藏 · 特展 · 典藏</nav>\n<main class="page">\n  <h1>器物有声</h1>\n  <section class="content">\n    <h2>策展导语</h2>\n    <p>一只器物，保存生活的温度。</p>\n  </section>\n</main>',
    hint: '用 <nav>…</nav> 描述导航，<main>…</main> 描述主体；section 不只是排版盒子，它应代表有标题的一组内容。',
    question: '把 div 改成 main，页面为什么可能看起来没有变化？',
    options: ['main 必须配合 JavaScript 才能显示。', '语义描述内容职责，外观通常仍由 CSS 决定。', '浏览器不认识 main。'], answer: 1,
    explanation: '结构语义与视觉样式是两个层次。语义标签帮助辅助技术识别页面区域，但不会自动设计版面。',
    transfer: '你学到的是：HTML 负责内容意义，CSS 负责呈现。不要用“看起来一样”判断结构是否合理。'
  },
  {
    title: '03 · 建立居中容器与三列卡片', language: 'css',
    goal: '在 720px 练习画布中，设置最大宽度 560px 的居中容器、24px 内边距，以及间距 16px 的三列网格。',
    instructions: ['在探索区改变间距，观察卡片是否拥挤；这里的练习采用更小的容器。', '为 .page 设置 max-width、margin-inline 和 padding。', '为 .cards 设置 display: grid、三列与 gap: 16px。'],
    initial: '.page {\n  max-width: none;\n  margin-inline: 0;\n  padding: 8px;\n}\n.cards {\n  display: block;\n  gap: 0;\n}',
    solution: '.page {\n  max-width: 560px;\n  margin-inline: auto;\n  padding: 24px;\n}\n.cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}',
    hint: 'max-width 限制上限，margin-inline: auto 平分剩余空间；repeat(3, minmax(0, 1fr)) 建立三个等宽且可收缩的列。',
    question: '这里为什么使用 Grid 而不是给每张卡片写固定像素宽度？',
    options: ['Grid 会自动生成卡片内容。', '固定宽度永远不能使用。', 'Grid 统一管理列与间距，卡片可随容器宽度变化。'], answer: 2,
    explanation: 'Grid 让重复项目共享一套尺寸关系。固定像素宽度容易在容器改变后留下空隙或产生溢出。',
    transfer: '你学到的是：容器管整体边界，网格管内部关系，gap 管项目间距。它们不是同一个属性。'
  },
  {
    title: '04 · 让首屏拥有清晰的图文层级', language: 'css',
    goal: '把首屏从竖排改成两栏，使用 24px 图文间距；将标题设置在 32–48px 范围，让摘要和按钮仍有空间。',
    instructions: ['在上方比较 5:7 和 7:5：哪种更适合标题与主图？', '为 .hero 开启 Grid，设置两列与 24px 间距。', '修改 .hero h1 的字号，避免把所有文字都放大。'],
    initial: '.hero {\n  display: block;\n  gap: 0;\n}\n.hero h1 { font-size: 64px; }',
    solution: '.hero {\n  display: grid;\n  grid-template-columns: 5fr 7fr;\n  gap: 24px;\n  align-items: center;\n}\n.hero h1 { font-size: 40px; }',
    hint: '两列可使用 5fr 7fr 或 1fr 1fr；gap 控制两栏距离。标题是重点，但不应挤走摘要和主行动。',
    question: '为什么不把首屏标题、摘要与按钮全部放大？',
    options: ['没有尺寸差异就没有清晰主次，首屏也更容易拥挤。', 'CSS 不允许多个元素使用大字号。', '标题越小越好。'], answer: 0,
    explanation: '层级依靠相对差异，而不是每个元素都抢眼。让标题突出，同时保留摘要和按钮的完整空间。',
    transfer: '你学到的是：大布局可以用 Grid，视觉层级要同时看比例、留白与内容完整性。'
  },
  {
    title: '05 · 修复手机上的双栏拥挤', language: 'css',
    goal: '保持 720px 时的双栏；在 600px 及以下变成单栏，确保 390px 画布不产生横向溢出。',
    instructions: ['先切换下面的 390px 预览，亲眼看到没有断点时的拥挤。', '添加 @media (max-width: 600px)，只在窄屏把 .hero 改为单栏。', '检查会分别测量 720px 与 390px 两个宽度，而不只是查找代码关键词。'],
    initial: '.hero {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n/* 在这里添加窄屏规则 */',
    solution: '.hero {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 600px) {\n  .hero { grid-template-columns: minmax(0, 1fr); }\n}',
    hint: '基础规则保留双栏；在媒体查询内部覆盖 grid-template-columns。不要直接把基础规则改成一列，否则桌面也会变成单栏。',
    question: '为什么只把整个桌面页面缩小，不算完成响应式设计？',
    options: ['手机不能加载 CSS。', '缩小会损害文字与点击区域，应根据空间重排内容。', '每个设备必须重新写一份 HTML。'], answer: 1,
    explanation: '响应式设计保留可读性与主要任务，通过重排适应空间，不要求为每个设备维护一份内容。',
    transfer: '你学到的是：基础规则 + 条件覆盖。断点要解决实际拥挤，而不是盲目对应某个手机型号。'
  },
  {
    title: '06 · 为键盘操作与阅读补齐细节', language: 'css',
    goal: '把正文字号改为至少 16px，按钮高度至少 44px，并为 :focus-visible 设置清楚的焦点轮廓。',
    instructions: ['上方关闭一次“显示键盘焦点”，观察为什么当前位置会难以辨认。', '在下面修正正文与按钮尺寸，添加 .action:focus-visible 规则。', '在练习预览中按 Tab 体验焦点；检查后回答理解题。'],
    initial: 'body { font-size: 12px; }\n.action {\n  min-height: 24px;\n  outline: none;\n}\n/* 添加键盘焦点样式 */',
    solution: 'body { font-size: 16px; }\n.action { min-height: 44px; }\n.action:focus-visible {\n  outline: 3px solid #0875ad;\n  outline-offset: 4px;\n}',
    hint: '焦点样式写在 .action:focus-visible 中；不要在所有状态下移除 outline。尺寸检查只是本练习的约束，不等同于完整的可访问性审核。',
    question: '按钮焦点轮廓最重要的作用是什么？',
    options: ['只是为了让按钮更鲜艳。', '阻止用户点击按钮。', '让键盘用户知道当前操作位置。'], answer: 2,
    explanation: '键盘用户需要可见的位置反馈。对比度、操作顺序、缩放与读屏也应在真实成品中继续检查。',
    transfer: '你学到的是：可用性属于设计本身。章末作业：将这六步迁移到自己的课程作业页，提交 HTML、CSS 与一段布局理由。'
  }
];

export const EXERCISES_EN = [
  {
    title: '01 · Order content around the reader’s task', language: 'html',
    goal: 'Scenario: readers want a quick overview of exhibition scale. Move the facts before the exhibition introduction and change the button to “View collection facts.”',
    instructions: ['Choose “View collection facts” and “Facts first” above to compare the information order.', 'Move the entire facts section in the HTML below, not just its heading.', 'Change the button text, check the result, then answer the concept question.'],
    initial: '<main>\n  <section data-block="hero">\n    <h1>Objects Tell Stories</h1>\n    <p>Explore the everyday life and craft of Eastern objects.</p>\n    <button>Explore the exhibition</button>\n  </section>\n  <section data-block="facts">\n    <h2>Collection facts</h2>\n    <p>48 objects · 6 periods</p>\n  </section>\n</main>',
    solution: '<main>\n  <section data-block="facts">\n    <h2>Collection facts</h2>\n    <p>48 objects · 6 periods</p>\n  </section>\n  <section data-block="hero">\n    <h1>Objects Tell Stories</h1>\n    <p>Explore the everyday life and craft of Eastern objects.</p>\n    <button>View collection facts</button>\n  </section>\n</main>',
    hint: 'Select the full <section data-block="facts">…</section> and move it before the hero. DOM order is the default reading order.',
    question: 'Why change content order in HTML rather than only visually moving the facts with CSS?',
    options: ['HTML sets the default reading order; visual and assistive-technology paths should agree.', 'Earlier elements automatically turn blue.', 'A section cannot be laid out with CSS.'], answer: 0,
    explanation: 'Position conveys priority; DOM order also affects screen-reader reading paths. Organize information first, then its appearance.',
    transfer: 'You learned to define the reader’s task before ordering content. This also applies to course, news, and product pages.'
  },
  {
    title: '02 · Replace generic containers with semantic structure', language: 'html',
    goal: 'Keep the text unchanged. Turn the navigation container into nav, the primary content into main, and the headed content group into section.',
    instructions: ['Compare “Only div elements” and “Semantic elements” above; the appearance may not change.', 'Change the opening and closing tags of three containers and add aria-label="Exhibition navigation" to nav.', 'Keep h1 and h2 so the section has a heading.'],
    initial: '<div class="navigation">Xingcang · Exhibition · Collection</div>\n<div class="page">\n  <h1>Objects Tell Stories</h1>\n  <div class="content">\n    <h2>Curator’s introduction</h2>\n    <p>An object holds the warmth of everyday life.</p>\n  </div>\n</div>',
    solution: '<nav aria-label="Exhibition navigation">Xingcang · Exhibition · Collection</nav>\n<main class="page">\n  <h1>Objects Tell Stories</h1>\n  <section class="content">\n    <h2>Curator’s introduction</h2>\n    <p>An object holds the warmth of everyday life.</p>\n  </section>\n</main>',
    hint: '<nav> describes navigation; <main> describes primary content. A section is a headed group, not merely a styling box.',
    question: 'Why might changing div to main leave the page looking the same?',
    options: ['main requires JavaScript to appear.', 'Semantics describe the content’s role; CSS usually controls appearance.', 'Browsers do not understand main.'], answer: 1,
    explanation: 'Semantic structure and visual styling are separate layers. Semantic elements help assistive technology identify regions without designing the layout automatically.',
    transfer: 'You learned that HTML describes meaning and CSS presentation. Similar appearance does not prove good structure.'
  },
  {
    title: '03 · Build a centered container and three-column cards', language: 'css',
    goal: 'On a 720px exercise canvas, make a centered container with a 560px maximum width and 24px padding; arrange cards in three columns with a 16px gap.',
    instructions: ['Change spacing above to see when cards feel crowded; this exercise uses a smaller container.', 'Set max-width, margin-inline, and padding on .page.', 'Set display: grid, three columns, and gap: 16px on .cards.'],
    initial: EXERCISES[2].initial, solution: EXERCISES[2].solution,
    hint: 'max-width caps the width; margin-inline: auto shares unused space; repeat(3, minmax(0, 1fr)) makes three equal, shrinkable columns.',
    question: 'Why use Grid instead of a fixed pixel width for each card?',
    options: ['Grid generates card content automatically.', 'Fixed widths can never be used.', 'Grid manages columns and spacing consistently as the container changes.'], answer: 2,
    explanation: 'Grid gives repeated items shared sizing relationships. Fixed widths can leave gaps or overflow after the container changes.',
    transfer: 'You learned that the container sets outer boundaries, Grid manages inner relationships, and gap sets spacing between items.'
  },
  {
    title: '04 · Give the hero a clear text–image hierarchy', language: 'css',
    goal: 'Turn the hero into two columns with a 24px text–image gap. Set the heading between 32–48px so the summary and button still have room.',
    instructions: ['Compare 5:7 and 7:5 above: which better supports the heading and main image?', 'Enable Grid on .hero, define two columns, and set a 24px gap.', 'Adjust .hero h1 without enlarging all text.'],
    initial: EXERCISES[3].initial, solution: EXERCISES[3].solution,
    hint: 'Use 5fr 7fr or 1fr 1fr for two columns. gap sets the distance. Emphasize the heading without crowding the summary and action.',
    question: 'Why not enlarge the heading, summary, and button all at once?',
    options: ['Without size differences, hierarchy is unclear and the hero gets crowded.', 'CSS forbids multiple large font sizes.', 'Headings should always be small.'], answer: 0,
    explanation: 'Hierarchy comes from relative differences, not every element competing for attention. Keep the heading prominent while preserving the other content.',
    transfer: 'You learned to use Grid for composition and judge hierarchy through proportion, space, and content completeness.'
  },
  {
    title: '05 · Fix a crowded two-column layout on mobile', language: 'css',
    goal: 'Keep two columns at 720px. At 600px and below, switch to one column so the 390px canvas does not overflow horizontally.',
    instructions: ['First inspect the 390px preview below and see the crowding without a breakpoint.', 'Add @media (max-width: 600px) and override .hero to one column only on narrow screens.', 'The checker measures both 720px and 390px, rather than merely searching for keywords.'],
    initial: '.hero {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n/* Add a narrow-screen rule here */',
    solution: EXERCISES[4].solution,
    hint: 'Keep the base two-column rule. Override grid-template-columns inside the media query; otherwise desktop becomes one column too.',
    question: 'Why is shrinking the entire desktop page not enough for responsive design?',
    options: ['Phones cannot load CSS.', 'Shrinking hurts text and tap targets; rearrange content around available space.', 'Each device requires a separate HTML file.'], answer: 1,
    explanation: 'Responsive design protects readability and the primary task through reflow, without maintaining separate content for every device.',
    transfer: 'You learned base rules plus conditional overrides. A breakpoint should solve observed crowding, not match a device brand blindly.'
  },
  {
    title: '06 · Finish keyboard and reading details', language: 'css',
    goal: 'Set body text to at least 16px, button height to at least 44px, and a clear outline on :focus-visible.',
    instructions: ['Turn off “Show keyboard focus” above and see why your position becomes hard to identify.', 'Fix body and button sizes below, then add .action:focus-visible.', 'Press Tab in the exercise preview to test focus; check your work and answer the concept question.'],
    initial: 'body { font-size: 12px; }\n.action {\n  min-height: 24px;\n  outline: none;\n}\n/* Add keyboard focus styles */',
    solution: EXERCISES[5].solution,
    hint: 'Use .action:focus-visible and do not remove outlines in every state. Size checks are exercise constraints, not a complete accessibility audit.',
    question: 'What is the most important job of a button’s focus outline?',
    options: ['Simply make the button more colorful.', 'Prevent users from clicking.', 'Show keyboard users where their current action is.'], answer: 2,
    explanation: 'Keyboard users need visible location feedback. Keep checking contrast, order, zoom, and screen readers in a real project.',
    transfer: 'You learned that usability is part of design. Final project: transfer all six steps to your own course page and submit HTML, CSS, and a short layout rationale.'
  }
];

const baseHtml = '<main class="page"><div class="hero"><div><h1>器物有声</h1><p>探索器物的工艺与日常，读懂展览主题。</p><button class="action">开始观展</button></div><div class="visual" role="img" aria-label="展品图片占位">展品主图</div></div><h2>馆藏主题</h2><div class="cards"><article>青瓷</article><article>陶器</article><article>金工</article></div></main>';
const baseHtmlEn = '<main class="page"><div class="hero"><div><h1>Objects Tell Stories</h1><p>Explore the craft and everyday life behind the exhibition.</p><button class="action">Explore the exhibition</button></div><div class="visual" role="img" aria-label="Featured object placeholder">Featured object</div></div><h2>Collection themes</h2><div class="cards"><article>Celadon</article><article>Pottery</article><article>Metalwork</article></div></main>';
const concepts = [
  '关键概念：浏览器默认按 HTML 中的先后顺序阅读区块。移动完整元素会改变顺序；只改文字不会改变结构。',
  '关键概念：标签名称表达职责，class 表达样式分组。nav、main、section 不能互相替代；开始和结束标签必须配对。',
  '关键概念：max-width 限制宽度上限；auto 边距分配外部空间；padding 留出内部空间；1fr 平分剩余列宽。',
  '关键概念：grid-template-columns 定义两栏相对比例；gap 定义栏间留白；font-size 只改变文字尺度，不替代布局。',
  '关键概念：媒体查询是条件规则。当视口符合 max-width 时，它覆盖基础样式；宽屏仍使用查询之外的基础规则。',
  '关键概念：min-height 约束操作区域；:focus-visible 表示浏览器认为需要显示焦点的状态，通常包含键盘导航。'
];
const conceptsEn = [
  'Key idea: browsers read blocks in HTML order by default. Moving an entire element changes that order; editing text alone does not.',
  'Key idea: elements describe roles, while classes group styles. nav, main, and section have different jobs; opening and closing tags must match.',
  'Key idea: max-width caps width; auto margins distribute outer space; padding creates inner space; 1fr shares remaining column width.',
  'Key idea: grid-template-columns defines relative column sizes; gap defines space between them; font-size changes text scale, not layout.',
  'Key idea: a media query is a conditional rule. When the viewport matches max-width, it overrides base styles; wider screens retain base rules.',
  'Key idea: min-height constrains the target area; :focus-visible marks states where the browser judges a visible focus indicator useful, often keyboard navigation.'
];
const checksEn = [
  ['The entire facts section precedes the exhibition introduction', 'Button text matches the reader’s task', 'The exhibition heading and facts remain present'],
  ['One unique main element contains primary content', 'nav has a readable accessible name', 'The section in main has a heading and h1 remains'],
  ['The 560px maximum-width container is centered at 720px', 'Left and right padding are 24px', 'Cards use three Grid columns with a 16px gap'],
  ['The hero uses two Grid columns', 'The text–image gap is 24px', 'The heading stays between 32–48px'],
  ['Two columns remain at 720px', 'The hero becomes one column at 390px', 'No horizontal content overflow at 390px'],
  ['Body text is at least 16px', 'The button’s actual height is at least 44px', 'focus-visible declares a visible outline of at least 2px']
];
const practiceUi = {
  zh: { edit: '编辑 ', question: '理解检查：', correct: '回答正确。', retry: '再想一想。', pass: '通过 · ', fix: '待修正 · ', quizPass: '通过 · 理解题回答正确', quizPending: '待完成 · 请回答下方理解题', solution: '参考解法（先尝试，再对照解释）：\n' },
  en: { edit: 'Edit ', question: 'Concept check: ', correct: 'Correct. ', retry: 'Think again. ', pass: 'Passed · ', fix: 'Needs work · ', quizPass: 'Passed · Concept question answered correctly', quizPending: 'Incomplete · Answer the concept question below', solution: 'Reference solution (try first, then compare):\n' }
};
let practiceLanguage = 'zh';
export const exerciseFor = (index, language = practiceLanguage) => (language === 'en' ? EXERCISES_EN : EXERCISES)[index];
export function setPracticeLanguage(language) { practiceLanguage = language === 'en' ? 'en' : 'zh'; }
const draftKey = (index) => practiceLanguage + ':' + index;
const baseCss = '*{box-sizing:border-box}body{margin:0;color:#102438;background:#f3f7fb;font:16px/1.6 system-ui,sans-serif}main{padding:24px}section,nav{padding:20px;margin:12px;border:1px solid #bccddd;border-radius:8px;background:white}h1{font-size:36px;margin:0 0 12px}h2{font-size:20px}p{margin:0 0 18px}.hero>*{min-width:0}.visual{display:grid;place-items:center;min-height:160px;background:#cde4f2;color:#29536d;border-radius:8px}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}article{padding:24px 12px;background:white;border:1px solid #cbd8e4;border-radius:6px}button{font:inherit;background:#123e61;color:white;border:0;border-radius:5px;padding:8px 16px;cursor:pointer}';
let stepIndex = 0;
let selectedWidth = 720;
let ready = Promise.resolve();
let revision = 0;
const drafts = new Map();
const quizAnswers = new Map();
const $ = (name) => document.querySelector('[data-practice-' + name + ']');

function updateFrame() {
  revision += 1;
  const ex = exerciseFor(stepIndex);
  const code = $('editor').value;
  drafts.set(draftKey(stepIndex), code);
  $('results').replaceChildren();
  const frame = $('frame');
  ready = new Promise((resolve) => { frame.onload = resolve; });
  // The sandbox intentionally disables scripts, forms, popups and top navigation.
  const css = ex.language === 'css' ? code.replace(/<\/style/gi, '<\\/style') : '';
  const html = ex.language === 'html' ? code : (practiceLanguage === 'en' ? baseHtmlEn : baseHtml);
  frame.srcdoc = '<!doctype html><html lang="' + (practiceLanguage === 'en' ? 'en' : 'zh-CN') + '"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src &#39;none&#39;; style-src &#39;unsafe-inline&#39;"><style>' + baseCss + '\n' + css + '</style></head><body>' + html + '</body></html>';
}

function chooseWidth(width) {
  selectedWidth = width;
  $('frame').style.width = width + 'px';
  document.querySelectorAll('[data-practice-width]').forEach((button) => button.setAttribute('aria-pressed', String(Number(button.dataset.practiceWidth) === width)));
}

export function renderPractice(index) {
  stepIndex = index;
  const ex = exerciseFor(index);
  $('title').textContent = ex.title;
  $('language').textContent = practiceUi[practiceLanguage].edit + ex.language.toUpperCase();
  $('goal').textContent = ex.goal + ' ' + (practiceLanguage === 'en' ? conceptsEn : concepts)[index];
  $('instructions').innerHTML = ex.instructions.map((text) => '<li>' + text + '</li>').join('');
  $('editor').value = drafts.get(draftKey(index)) ?? ex.initial;
  $('question').textContent = practiceUi[practiceLanguage].question + ex.question;
  $('options').replaceChildren();
  ex.options.forEach((text, optionIndex) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio'; input.name = 'understanding'; input.value = String(optionIndex);
    input.checked = quizAnswers.get(index) === optionIndex;
    input.addEventListener('change', () => {
      quizAnswers.set(index, optionIndex);
      $('quiz-feedback').textContent = (optionIndex === ex.answer ? practiceUi[practiceLanguage].correct : practiceUi[practiceLanguage].retry) + ex.explanation;
      $('quiz-feedback').className = optionIndex === ex.answer ? 'feedback-pass' : 'feedback-fail';
    });
    label.append(input, document.createTextNode(text)); $('options').append(label);
  });
  $('quiz-feedback').textContent = '';
  $('hint-text').hidden = true;
  $('transfer').textContent = ex.transfer;
  chooseWidth(index === 4 ? 390 : 720);
  updateFrame();
}

const nextPaint = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
export async function checkPractice() {
  const index = stepIndex;
  const capturedRevision = revision;
  await ready;
  const frame = $('frame');
  const doc = frame.contentDocument;
  if (!doc) return false;
  const computed = (selector) => {
    const node = doc.querySelector(selector);
    return node ? frame.contentWindow.getComputedStyle(node) : null;
  };
  const columns = (selector) => (computed(selector)?.gridTemplateColumns || '').split(/\s+/).filter(Boolean).length;
  const checks = [];
  const add = (ok, text) => checks.push({ ok: Boolean(ok), text: practiceLanguage === 'en' ? checksEn[index][checks.length] : text });
  if (index === 0) {
    const facts = doc.querySelector('[data-block="facts"]');
    const hero = doc.querySelector('[data-block="hero"]');
    add(facts && hero && (facts.compareDocumentPosition(hero) & 4), '概况区整体位于展览介绍之前');
    add(doc.querySelector('button')?.textContent.trim() === (practiceLanguage === 'en' ? 'View collection facts' : '查看馆藏概况'), '按钮文字与读者任务一致');
    add(doc.querySelector('h1') && facts?.querySelector('h2'), '展览标题与概况内容没有丢失');
  } else if (index === 1) {
    add(doc.querySelectorAll('main').length === 1, '主体使用唯一的 main');
    add(doc.querySelector('nav[aria-label]')?.getAttribute('aria-label')?.trim(), '导航使用 nav 并具有可读名称');
    add(doc.querySelector('main section h2') && doc.querySelector('main h1'), 'main 内的 section 有标题，页面主标题仍在');
  } else if (index === 2) {
    frame.style.width = '720px'; await nextPaint();
    const page = computed('.page');
    const rect = doc.querySelector('.page')?.getBoundingClientRect();
    add(page?.maxWidth === '560px' && rect && Math.abs(rect.left - (720 - rect.width) / 2) < 2, '容器最大宽度 560px，并在 720px 中居中');
    add(page?.paddingLeft === '24px' && page?.paddingRight === '24px', '左右内边距为 24px');
    add(computed('.cards')?.display === 'grid' && columns('.cards') === 3 && computed('.cards')?.gap === '16px', '卡片使用三列 Grid，间距为 16px');
  } else if (index === 3) {
    frame.style.width = '720px'; await nextPaint();
    add(computed('.hero')?.display === 'grid' && columns('.hero') === 2, '首屏使用两栏 Grid');
    add(computed('.hero')?.gap === '24px', '图文间距为 24px');
    const size = parseFloat(computed('.hero h1')?.fontSize);
    add(size >= 32 && size <= 48, '标题在 32–48px 之间，保留其他内容空间');
  } else if (index === 4) {
    frame.style.width = '720px'; await nextPaint();
    add(computed('.hero')?.display === 'grid' && columns('.hero') === 2, '720px 时保留双栏');
    frame.style.width = '390px'; await nextPaint();
    add(computed('.hero')?.display === 'grid' && columns('.hero') === 1, '390px 时重排为单栏');
    add(doc.documentElement.scrollWidth <= 391, '390px 时没有横向内容溢出');
  } else {
    add(parseFloat(computed('body')?.fontSize) >= 16, '正文至少 16px');
    add(doc.querySelector('.action')?.getBoundingClientRect().height >= 44, '按钮实际高度至少 44px');
    const rules = [...doc.styleSheets].flatMap((sheet) => [...sheet.cssRules]);
    const focus = rules.findLast((rule) => rule.selectorText?.includes('.action:focus-visible'));
    add(focus && focus.style.outlineStyle && focus.style.outlineStyle !== 'none' && parseFloat(focus.style.outlineWidth) >= 2, 'focus-visible 声明至少 2px 的可见轮廓');
  }
  chooseWidth(selectedWidth);
  if (index !== stepIndex || capturedRevision !== revision) return false;
  const list = $('results'); list.replaceChildren();
  checks.forEach(({ ok, text }) => { const li = document.createElement('li'); li.textContent = (ok ? practiceUi[practiceLanguage].pass : practiceUi[practiceLanguage].fix) + text; li.className = ok ? 'feedback-pass' : 'feedback-fail'; list.append(li); });
  const quizCorrect = quizAnswers.get(index) === exerciseFor(index).answer;
  const li = document.createElement('li'); li.textContent = quizCorrect ? practiceUi[practiceLanguage].quizPass : practiceUi[practiceLanguage].quizPending; li.className = quizCorrect ? 'feedback-pass' : 'feedback-fail'; list.append(li);
  return checks.every((item) => item.ok) && quizCorrect;
}

export function bindPractice() {
  $('editor').addEventListener('input', updateFrame);
  $('check').addEventListener('click', checkPractice);
  $('download').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([$('frame').srcdoc], {type:'text/html;charset=utf-8'}));
    const link = document.createElement('a'); link.href = url; link.download = 'layout-exercise-' + (stepIndex + 1) + '.html'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('reset').addEventListener('click', () => { $('editor').value = exerciseFor(stepIndex).initial; updateFrame(); });
  $('hint').addEventListener('click', () => { $('hint-text').hidden = false; $('hint-text').textContent = exerciseFor(stepIndex).hint; });
  $('answer').addEventListener('click', () => { $('hint-text').hidden = false; $('hint-text').textContent = practiceUi[practiceLanguage].solution + exerciseFor(stepIndex).solution; });
  document.querySelectorAll('[data-practice-width]').forEach((button) => button.addEventListener('click', () => chooseWidth(Number(button.dataset.practiceWidth))));
}
