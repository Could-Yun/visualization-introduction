export const EN_STEPS = [
  {
    id: 'planning', kicker: 'STEP 01 · CONTENT FIRST', title: 'Decide what to say before deciding where it goes',
    lead: 'Layout is not just arranging boxes. It helps readers see the right information at the right moment.',
    theoryTitle: 'Use hierarchy to guide reading order',
    theoryCopy: 'First define the page’s primary task. Then use position, scale, and space to show what matters most. Importance does not mean enlarging everything.',
    principles: ['Give each page one primary task', 'Order content around the reader’s likely questions', 'Keep related items together and separate unrelated ones with space'],
    checkpoint: 'Can a reader identify the page topic within five seconds?',
    checkpointCopy: 'Check information order before color and decoration. A clear grayscale structure is closer to completion than a beautiful but confusing page.',
    insight: 'If the main task is entering the exhibition, show its title and action first. If the task is viewing collection facts, move the facts earlier.', defaultLang: 'html'
  },
  {
    id: 'structure', kicker: 'STEP 02 · SEMANTIC SKELETON', title: 'Build the page structure before styling it',
    lead: 'HTML describes relationships between content. The reading order should make sense even without CSS.',
    theoryTitle: 'A clear structure keeps styling manageable',
    theoryCopy: 'Semantic elements help browsers, search engines, and assistive technology understand the page. The box model explains the space an element occupies.',
    principles: ['Use header and nav for site entry points', 'Reserve main for this page’s primary content', 'Give each section an identifiable heading', 'Do not use div for every role simply for appearance'],
    checkpoint: 'Does the content still read logically when CSS is removed?',
    checkpointCopy: 'From the first heading to the footer, the page should make sense without relying on columns or color.',
    insight: 'Semantic elements do not automatically make a page beautiful. They give layout changes a stable meaning and reading order.', defaultLang: 'html'
  },
  {
    id: 'grid', kicker: 'STEP 03 · CONTAINER & GRID', title: 'Create order with a container, columns, and spacing',
    lead: 'Consistent alignment usually creates a more professional page than extra shadows, rounded corners, or decoration.',
    theoryTitle: 'Grid builds a two-dimensional frame; Flex arranges one-dimensional groups',
    theoryCopy: 'A maximum width keeps lines readable. Fluid margins protect narrow screens. Consistent spacing creates a predictable rhythm.',
    principles: ['Use a container to limit line length and page width', 'Use columns as an alignment reference across modules', 'Use gap to manage relationships between items', 'Add a breakpoint when the layout begins to fail'],
    checkpoint: 'Do the important edges follow a small number of alignment lines?',
    checkpointCopy: 'Turn on grid guides and compare the hero, facts, text, and cards against the same boundaries.',
    insight: 'More columns are not always better. Twelve columns support many ratios; simpler pages may need fewer, but spacing should remain consistent.', defaultLang: 'css'
  },
  {
    id: 'modules', kicker: 'STEP 04 · COMPOSITION', title: 'Give the hero, facts, and objects a visual rhythm',
    lead: 'Even within one grid, some modules should be stronger. Repeatable modules should stay consistent.',
    theoryTitle: 'Hierarchy comes from difference and restraint',
    theoryCopy: 'Scale, weight, color, and space establish visual priority. If every module shouts, nothing stands out.',
    principles: ['Keep the hero focused on the theme and primary action', 'Use consistent structure and spacing for repeated cards', 'Let important content span columns when needed', 'Balance text width and line height for readability'],
    checkpoint: 'Where does the first, second, and third glance land?',
    checkpointCopy: 'The intended path is the exhibition topic, featured object, and main action before facts and more content.',
    insight: 'A larger title does not always improve hierarchy. Too much scale crowds out the summary and action.', defaultLang: 'css'
  },
  {
    id: 'responsive', kicker: 'STEP 05 · RESPONSIVE REFLOW', title: 'Reorganize content instead of shrinking the desktop page',
    lead: 'Responsive design is about content priority, wrapping, and reachability—not only preset device sizes.',
    theoryTitle: 'Let the content determine the breakpoint',
    theoryCopy: 'Change the viewport and notice when the layout gets crowded. Only then change the number or order of columns.',
    principles: ['Choose breakpoints when the layout fails, not by device brand', 'Keep the primary task visible on mobile and simplify secondary navigation', 'Use comfortably sized targets that do not depend on hover', 'Reserve image dimensions to prevent layout shifts'],
    checkpoint: 'Is the page still readable and tappable at 390px?',
    checkpointCopy: 'Inspect heading wraps, image crops, module order, and target size—not just horizontal overflow.',
    insight: 'A two-column hero should stack on narrow screens. Proportionally shrinking everything hurts text readability and button usability.', defaultLang: 'css'
  },
  {
    id: 'review', kicker: 'STEP 06 · ACCESSIBLE FINISH', title: 'Review usability, not just visual polish',
    lead: 'A beautiful page should also work with a keyboard, enlarged text, strong contrast, and reduced motion.',
    theoryTitle: 'Completion means more people can use the page',
    theoryCopy: 'Focus states, contrast, and stable loading are not extras. They help people see, understand, and complete tasks.',
    principles: ['Start body copy at a reliable 16px', 'Make keyboard focus clearly visible', 'Do not convey information by color alone', 'Respect prefers-reduced-motion', 'Reserve image width and height to avoid layout shifts'],
    checkpoint: 'Can someone use the page without a mouse and at 200% zoom?',
    checkpointCopy: 'Check keyboard order, text readability, contrast, and layout stability separately rather than hiding problems in one score.',
    insight: 'Accessibility need not weaken visual design. Clear focus, stable hierarchy, and good contrast often make it stronger.', defaultLang: 'css'
  }
];

export const LESSON_UI = {
  zh: {
    primaryTask: '页面主要任务', enterExhibit: '进入特展', viewFacts: '查看馆藏概况', contentOrder: '内容叙事顺序', storyFirst: '故事优先', factsFirst: '指标优先',
    structureType: '骨架写法', semanticTags: '语义标签', divOnly: '全用 div', landmarks: '显示语义地标', showBoxes: '显示盒模型占位',
    containerWidth: '最大容器宽度', referenceColumns: '参考列数', columnGap: '列间距', gridGuides: '显示网格辅助线',
    heroRatio: '首屏图文比例', cardColumns: '展品卡片列数', twoColumns: '两列', threeColumns: '三列', titleScale: '标题尺度',
    testViewport: '测试视口', desktop: '桌面', tablet: '平板', mobile: '手机', narrowReflow: '窄屏重排方式', stack: '图文自然堆叠', compact: '压缩内容间距',
    contrast: '高对比检查', keyboardFocus: '显示键盘焦点', reducedMotion: '减少动态效果', lineLength: '正文每行长度', chars: '字',
    desktopStatus: '桌面预览 · 1024px', tabletStatus: '平板预览 · 720px', mobileStatus: '手机预览 · 390px',
    exhibitAction: '开始观展 →', factsAction: '查看馆藏概况 →', htmlNote: '当前语义骨架', cssNote: '当前生效规则',
    factsFirstInsight: '指标优先会让读者先获得规模概览，但也会削弱展览叙事。只有主要任务确实是快速查看概况时才这样安排。',
    mismatchInsight: '主要按钮已经改为“查看馆藏概况”，但指标仍在首屏之后。行动目标与内容顺序不一致，提示我们还应把指标区提前。',
    divInsight: '全部使用 div 后，视觉暂时不变，但结构意义消失。屏幕阅读器和搜索引擎无法轻易分辨导航、正文和页脚。',
    crampedInsight: '间距过小时模块会显得拥挤，分组边界变得模糊。统一 gap 比逐项添加 margin 更容易维护。',
    largeTitleInsight: '标题继续放大会挤压摘要和按钮。视觉层级需要差异，但也要保留内容完整性。',
    mobileInsight: '手机预览中，首屏从两栏变成单列，次要导航收起，主要行动仍在标题之后立即可见。',
    focusInsight: '关闭焦点轮廓后，键盘用户无法判断当前位置。焦点样式应被设计，而不是简单移除。',
    doneLabel: '本节已通过 · 再检查并继续', completeLabel: '检查练习并记录完成', restored: '已恢复本步默认设置',
    copied: '当前代码已复制', copyFailed: '复制失败，请手动选择代码', incomplete: '请先修正练习并回答理解题；检查结果已在练习区列出',
    allDone: '六节练习均已通过，开始制作自己的课程作业页吧', passed: '本节练习与理解题已通过',
    previewDesktopComment: '桌面 1024px，使用基础规则', previewTabletComment: '平板 720px，检查中间状态', previewMobileComment: '手机 390px，媒体查询已生效',
    gridComment: '参考网格用于对齐；不等于卡片列数', flexComment: 'Flex 适合排成一行的导航', focusDemoNote: '焦点样式应保留'
  },
  en: {
    primaryTask: 'Primary page task', enterExhibit: 'Enter exhibition', viewFacts: 'View collection facts', contentOrder: 'Content narrative order', storyFirst: 'Story first', factsFirst: 'Facts first',
    structureType: 'Page structure', semanticTags: 'Semantic elements', divOnly: 'Only div elements', landmarks: 'Show semantic landmarks', showBoxes: 'Show box-model regions',
    containerWidth: 'Maximum container width', referenceColumns: 'Reference columns', columnGap: 'Column gap', gridGuides: 'Show grid guides',
    heroRatio: 'Hero text–image ratio', cardColumns: 'Object card columns', twoColumns: 'Two columns', threeColumns: 'Three columns', titleScale: 'Heading scale',
    testViewport: 'Test viewport', desktop: 'Desktop', tablet: 'Tablet', mobile: 'Mobile', narrowReflow: 'Narrow-screen reflow', stack: 'Stack text and image', compact: 'Reduce spacing',
    contrast: 'High-contrast check', keyboardFocus: 'Show keyboard focus', reducedMotion: 'Reduce motion', lineLength: 'Body line length', chars: 'characters',
    desktopStatus: 'Desktop preview · 1024px', tabletStatus: 'Tablet preview · 720px', mobileStatus: 'Mobile preview · 390px',
    exhibitAction: 'Explore the exhibition →', factsAction: 'View collection facts →', htmlNote: 'Current semantic structure', cssNote: 'Current effective rules',
    factsFirstInsight: 'Facts first gives readers an immediate overview, but weakens the exhibition story. Use it only when quick facts are the main task.',
    mismatchInsight: 'The button now says “View collection facts,” but the facts still follow the hero. The action and content order disagree; move the facts earlier.',
    divInsight: 'Replacing semantic elements with div leaves the appearance unchanged, but loses structure. Assistive technology and search engines cannot easily distinguish navigation, main content, and footer.',
    crampedInsight: 'Too little spacing crowds modules and blurs group boundaries. A shared gap is easier to maintain than separate margins on every item.',
    largeTitleInsight: 'Further enlarging the title squeezes the summary and button. Hierarchy needs differences while keeping essential content intact.',
    mobileInsight: 'On mobile, the two-column hero stacks, secondary navigation is hidden, and the primary action remains close to the heading.',
    focusInsight: 'Without a visible focus outline, keyboard users cannot tell where they are. Design focus states rather than removing them.',
    doneLabel: 'Step passed · Check again and continue', completeLabel: 'Check exercise and record completion', restored: 'Default settings restored for this step',
    copied: 'Current code copied', copyFailed: 'Copy failed; please select the code manually', incomplete: 'Fix the exercise and answer the concept question first; results are listed in the exercise area',
    allDone: 'All six exercises passed. Now build your own course project page.', passed: 'Exercise and concept question passed',
    previewDesktopComment: 'Desktop 1024px: base rules apply', previewTabletComment: 'Tablet 720px: check intermediate layout', previewMobileComment: 'Mobile 390px: media query applies',
    gridComment: 'Reference grid aligns elements; it is not the card-column count', flexComment: 'Flex suits a single-row navigation group', focusDemoNote: 'Keep focus styles visible'
  }
};
