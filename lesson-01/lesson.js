import { bindPractice, renderPractice, checkPractice, setPracticeLanguage, exerciseFor } from './practice.js';
import { getLanguage, setLanguage, applyStaticCopy, LESSON_COPY } from '../i18n.js';
import { EN_STEPS, LESSON_UI } from './lesson-copy.js';
const THEME_KEY = "layout-lab-theme";
const PROGRESS_KEY = "layout-lab-progress-v2";

const STEPS = [
  {
    id: "planning",
    kicker: "STEP 01 · CONTENT FIRST",
    title: "先决定说什么，再决定怎么排",
    lead: "布局不是把盒子摆整齐，而是让读者在正确的时刻看到正确的信息。",
    theoryTitle: "用层级建立阅读顺序",
    theoryCopy: "先明确页面的主要任务，再用位置、大小和留白表达内容主次。重要内容不等于所有内容都要变大。",
    principles: ["一个页面先确定一个主要任务", "内容顺序应符合读者的提问顺序", "相关内容靠近，不相关内容用留白分开"],
    checkpoint: "读者能否在 5 秒内说出页面主题？",
    checkpointCopy: "先检查信息顺序，再处理颜色与装饰。清楚的灰度结构，比漂亮但混乱的页面更接近完成。",
    insight: "当主要任务是“进入特展”时，标题和行动按钮应先出现；如果主要任务改为“查看馆藏概况”，指标区就要提前。",
    defaultLang: "html"
  },
  {
    id: "structure",
    kicker: "STEP 02 · SEMANTIC SKELETON",
    title: "让页面骨架先于视觉样式成立",
    lead: "HTML 负责说明内容之间的关系。即使暂时移除 CSS，页面也应有合理的阅读顺序。",
    theoryTitle: "结构清楚，样式才不会失控",
    theoryCopy: "语义标签让浏览器、搜索引擎和辅助技术理解页面。盒模型则解释元素为何占据当前空间。",
    principles: ["header 与 nav 描述站点入口", "main 只容纳本页的主要内容", "section 应有可识别的标题", "不要为了视觉效果滥用 div"],
    checkpoint: "关闭 CSS 后，内容顺序仍然合理吗？",
    checkpointCopy: "从标题一路阅读到页脚，应当不依赖左右位置或颜色也能理解。",
    insight: "语义标签不会自动变漂亮，但它提供稳定骨架。视觉布局变化时，内容意义和键盘阅读顺序不会随之崩塌。",
    defaultLang: "html"
  },
  {
    id: "grid",
    kicker: "STEP 03 · CONTAINER & GRID",
    title: "用容器、列和间距建立秩序",
    lead: "专业感通常来自稳定的对齐关系，而不是更多阴影、圆角和装饰。",
    theoryTitle: "Grid 管二维骨架，Flex 管一维排列",
    theoryCopy: "最大宽度控制阅读尺度，流动边距保护窄屏呼吸感，统一间距让页面形成可预期的节奏。",
    principles: ["容器限制正文行长与整体宽度", "列网格提供跨模块对齐参照", "gap 管理项目之间的关系", "断点应在布局失效时出现"],
    checkpoint: "页面中的关键边缘是否落在少数几条对齐线上？",
    checkpointCopy: "开启网格辅助线检查首屏、指标、正文和卡片是否共享同一套边界。",
    insight: "列数不是越多越好。十二列便于组合 3、4、6 等比例；小页面可以减少列数，但间距尺度应继续统一。",
    defaultLang: "css"
  },
  {
    id: "modules",
    kicker: "STEP 04 · COMPOSITION",
    title: "让首屏、指标与展品形成节奏",
    lead: "同一套网格中也需要强弱变化：重点模块占据更多空间，重复模块保持一致。",
    theoryTitle: "层级来自差异，也来自克制",
    theoryCopy: "尺寸、粗细、颜色和留白共同决定视觉权重。每个模块都抢眼，最终等于没有重点。",
    principles: ["首屏只承担主题说明和主要行动", "重复卡片共享结构与间距", "重点内容可以跨列打破节奏", "正文宽度与行高共同决定可读性"],
    checkpoint: "第一眼、第二眼和第三眼分别落在哪里？",
    checkpointCopy: "理想顺序是展览主题、主展品、行动按钮，再进入指标和更多内容。",
    insight: "扩大标题并不总能提高层级。标题过大时会挤压摘要和行动按钮，破坏首屏完整性。",
    defaultLang: "css"
  },
  {
    id: "responsive",
    kicker: "STEP 05 · RESPONSIVE REFLOW",
    title: "重新组织内容，而不是缩小桌面页",
    lead: "响应式设计处理的是内容优先级、换行和操作距离，不只是几个固定设备尺寸。",
    theoryTitle: "让内容决定断点",
    theoryCopy: "拖动或切换视口，观察布局何时拥挤。只有在结构开始失效时，才需要改变列数或排列方式。",
    principles: ["断点来自布局失败而非设备品牌", "移动端保留主要任务，次要导航可收起", "点击目标要足够大且不依赖悬停", "图片应有明确比例，避免布局跳动"],
    checkpoint: "在 390px 宽度下，是否仍能顺畅阅读和点击？",
    checkpointCopy: "检查标题换行、图片裁切、模块顺序和点击区域，而不仅是有没有横向滚动。",
    insight: "窄屏时两栏首屏应自然堆叠。把所有模块等比例缩小会让文字难读，也会让按钮失去可操作性。",
    defaultLang: "css"
  },
  {
    id: "review",
    kicker: "STEP 06 · ACCESSIBLE FINISH",
    title: "最后一遍不是装饰，而是可用性验收",
    lead: "漂亮页面还要经得起键盘、对比度、文字缩放和减少动态效果的检验。",
    theoryTitle: "完成意味着更多人可以使用",
    theoryCopy: "焦点状态、对比度与稳定加载不是附加项。它们决定用户能否看见、理解并完成操作。",
    principles: ["正文以 16px 为可靠起点", "交互元素必须有清楚的焦点状态", "信息不能只依赖颜色表达", "尊重 prefers-reduced-motion", "为图片预留宽高避免页面跳动"],
    checkpoint: "不用鼠标、放大到 200%，页面仍然可用吗？",
    checkpointCopy: "逐项检查键盘路径、文字可读性、颜色对比和布局稳定性，不用模糊的综合分数掩盖问题。",
    insight: "可访问性不要求牺牲美感。清晰焦点、稳定层级和良好对比，往往也会让视觉设计更成熟。",
    defaultLang: "css"
  }
];

const defaults = {
  step: 0,
  primary: "exhibit",
  order: "story",
  semantic: true,
  boxes: false,
  structureType: "semantic",
  containerWidth: 1040,
  columns: 12,
  gap: 22,
  showGrid: true,
  heroRatio: "5-7",
  cardColumns: 3,
  titleScale: 100,
  viewport: "desktop",
  mobileBehavior: "stack",
  contrast: false,
  focusDemo: true,
  reducedMotion: false,
  lineLength: 34,
  language: "html"
};

let state = Object.assign({}, defaults);
let completed = readProgress();
let toastTimer;
let pageLanguage = getLanguage();
const ui = (key) => LESSON_UI[pageLanguage][key];
const currentStep = () => (pageLanguage === 'en' ? EN_STEPS : STEPS)[state.step];

function readProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]"); }
  catch { return []; }
}

function saveProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(completed));
}

function applyTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");
}

function bindTheme() {
  const button = document.querySelector("[data-theme-toggle]");
  const refresh = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    button.setAttribute("aria-label", dark ? LESSON_COPY[pageLanguage].themeLight : LESSON_COPY[pageLanguage].themeDark);
    button.querySelector("span").textContent = dark ? "☀" : "◐";
  };
  refresh();
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    refresh();
  });
}

function showToast(message) {
  const node = document.querySelector("[data-toast]");
  node.textContent = message;
  node.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove("is-visible"), 1800);
}

function choiceButton(field, value, label, current) {
  return '<button type="button" data-choice="' + field + '" data-value="' + value + '" aria-pressed="' + String(current === value) + '">' + label + "</button>";
}

function renderControls() {
  const mount = document.querySelector("[data-controls]");
  if (state.step === 0) {
    mount.innerHTML = [
      '<label class="control"><span>' + ui('primaryTask') + '</span><select data-control="primary">',
      '<option value="exhibit">' + ui('enterExhibit') + '</option><option value="facts">' + ui('viewFacts') + '</option></select></label>',
      '<div class="control"><span>' + ui('contentOrder') + '</span><div class="choice-group">',
      choiceButton("order", "story", ui('storyFirst'), state.order),
      choiceButton("order", "facts", ui('factsFirst'), state.order),
      "</div></div>"
    ].join("");
    mount.querySelector('[data-control="primary"]').value = state.primary;
  } else if (state.step === 1) {
    mount.innerHTML = [
      '<div class="control"><span>' + ui('structureType') + '</span><div class="choice-group">',
      choiceButton("structureType", "semantic", ui('semanticTags'), state.structureType),
      choiceButton("structureType", "generic", ui('divOnly'), state.structureType),
      "</div></div>",
      '<label class="toggle"><span>' + ui('landmarks') + '</span><input type="checkbox" data-control="semantic"></label>',
      '<label class="toggle"><span>' + ui('showBoxes') + '</span><input type="checkbox" data-control="boxes"></label>'
    ].join("");
    mount.querySelector('[data-control="semantic"]').checked = state.semantic;
    mount.querySelector('[data-control="boxes"]').checked = state.boxes;
  } else if (state.step === 2) {
    mount.innerHTML = [
      '<label class="control"><span>' + ui('containerWidth') + ' <output>' + state.containerWidth + 'px</output></span><input type="range" min="760" max="1180" step="20" value="' + state.containerWidth + '" data-control="containerWidth"></label>',
      '<label class="control"><span>' + ui('referenceColumns') + ' <output>' + state.columns + ' ' + (pageLanguage === 'en' ? 'columns' : '列') + '</output></span><input type="range" min="4" max="12" step="2" value="' + state.columns + '" data-control="columns"></label>',
      '<label class="control"><span>' + ui('columnGap') + ' <output>' + state.gap + 'px</output></span><input type="range" min="8" max="40" step="2" value="' + state.gap + '" data-control="gap"></label>',
      '<label class="toggle"><span>' + ui('gridGuides') + '</span><input type="checkbox" data-control="showGrid"></label>'
    ].join("");
    mount.querySelector('[data-control="showGrid"]').checked = state.showGrid;
  } else if (state.step === 3) {
    mount.innerHTML = [
      '<label class="control"><span>' + ui('heroRatio') + '</span><select data-control="heroRatio"><option value="5-7">5 : 7</option><option value="1-1">1 : 1</option><option value="7-5">7 : 5</option></select></label>',
      '<div class="control"><span>' + ui('cardColumns') + '</span><div class="choice-group">',
      choiceButton("cardColumns", "2", ui('twoColumns'), String(state.cardColumns)),
      choiceButton("cardColumns", "3", ui('threeColumns'), String(state.cardColumns)),
      "</div></div>",
      '<label class="control"><span>' + ui('titleScale') + ' <output>' + state.titleScale + '%</output></span><input type="range" min="80" max="125" step="5" value="' + state.titleScale + '" data-control="titleScale"></label>'
    ].join("");
    mount.querySelector('[data-control="heroRatio"]').value = state.heroRatio;
  } else if (state.step === 4) {
    mount.innerHTML = [
      '<div class="control"><span>' + ui('testViewport') + '</span><div class="choice-group three">',
      choiceButton("viewport", "desktop", ui('desktop'), state.viewport),
      choiceButton("viewport", "tablet", ui('tablet'), state.viewport),
      choiceButton("viewport", "mobile", ui('mobile'), state.viewport),
      "</div></div>",
      '<label class="control"><span>' + ui('narrowReflow') + '</span><select data-control="mobileBehavior"><option value="stack">' + ui('stack') + '</option><option value="compact">' + ui('compact') + '</option></select></label>'
    ].join("");
    mount.querySelector('[data-control="mobileBehavior"]').value = state.mobileBehavior;
  } else {
    mount.innerHTML = [
      '<label class="toggle"><span>' + ui('contrast') + '</span><input type="checkbox" data-control="contrast"></label>',
      '<label class="toggle"><span>' + ui('keyboardFocus') + '</span><input type="checkbox" data-control="focusDemo"></label>',
      '<label class="toggle"><span>' + ui('reducedMotion') + '</span><input type="checkbox" data-control="reducedMotion"></label>',
      '<label class="control"><span>' + ui('lineLength') + ' <output>' + state.lineLength + ' ' + ui('chars') + '</output></span><input type="range" min="22" max="48" step="2" value="' + state.lineLength + '" data-control="lineLength"></label>'
    ].join("");
    ["contrast", "focusDemo", "reducedMotion"].forEach((key) => {
      mount.querySelector('[data-control="' + key + '"]').checked = state[key];
    });
  }
}

function renderGridOverlay() {
  const overlay = document.querySelector("[data-grid-overlay]");
  overlay.replaceChildren();
  for (let index = 0; index < state.columns; index += 1) overlay.append(document.createElement("i"));
  overlay.classList.toggle("is-visible", state.step === 2 && state.showGrid);
}

function renderPreview() {
  const preview = document.querySelector("[data-museum-preview]");
  const viewport = document.querySelector("[data-preview-viewport]");
  preview.querySelector(".museum-hero button").textContent = state.primary === "facts" ? ui('factsAction') : ui('exhibitAction');
  preview.style.setProperty("--case-max", state.containerWidth + "px");
  preview.style.setProperty("--case-cols", String(state.columns));
  preview.style.setProperty("--case-gap", state.gap + "px");
  const ratios = { "5-7": ["5fr", "7fr"], "1-1": ["1fr", "1fr"], "7-5": ["7fr", "5fr"] };
  preview.style.setProperty("--hero-left", ratios[state.heroRatio][0]);
  preview.style.setProperty("--hero-right", ratios[state.heroRatio][1]);
  preview.style.setProperty("--card-cols", String(state.cardColumns));
  preview.style.setProperty("--case-title", (2.8 * state.titleScale / 100).toFixed(2) + "rem");
  preview.style.setProperty("--copy-width", state.lineLength + "ch");

  preview.classList.toggle("primary-facts", state.order === "facts");
  preview.classList.toggle("primary-exhibit", state.step === 0 && state.primary === "exhibit");
  preview.classList.toggle("primary-overview", state.primary === "facts");
  preview.classList.toggle("generic-structure", state.structureType === "generic");
  preview.classList.toggle("show-semantics", state.step === 1 && state.semantic);
  preview.classList.toggle("show-boxes", state.step === 1 && state.boxes);
  preview.classList.toggle("cards-2", state.cardColumns === 2);
  preview.classList.toggle("compact", state.mobileBehavior === "compact");
  preview.classList.toggle("high-contrast", state.step === 5 && state.contrast);
  preview.classList.toggle("focus-demo", state.step === 5 && state.focusDemo);
  preview.classList.toggle("reduced-demo", state.step === 5 && state.reducedMotion);

  viewport.className = "preview-viewport mode-" + state.viewport;
  const viewportLabels = { desktop: ui('desktopStatus'), tablet: ui('tabletStatus'), mobile: ui('mobileStatus') };
  document.querySelector("[data-preview-status]").textContent = viewportLabels[state.viewport];
  document.querySelectorAll("[data-viewport]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.viewport === state.viewport)));
  renderGridOverlay();
}

function htmlSkeleton() {
  const semantic = state.structureType === "semantic";
  const tags = semantic
    ? { header: "header", main: "main", section: "section", article: "article", footer: "footer", nav: "nav" }
    : { header: "div", main: "div", section: "div", article: "div", footer: "div", nav: "div" };
  const heroSection = [
    "  <" + tags.section + ' class="exhibition-hero">',
    '    <button class="primary-action">' + (state.primary === "facts" ? ui('viewFacts') : ui('enterExhibit')) + "</button>",
    "  </" + tags.section + ">"
  ].join("\n");
  let sections = [
    heroSection,
    "  <" + tags.section + ' class="museum-facts">…</' + tags.section + ">",
    "  <" + tags.article + ' class="feature-story">…</' + tags.article + ">",
    "  <" + tags.section + ' class="collection-grid">…</' + tags.section + ">"
  ];
  if (state.order === "facts") sections = [sections[1], sections[0], sections[2], sections[3]];
  return [
    "<" + tags.header + ' class="site-header">',
    "  <" + tags.nav + ' aria-label="' + (pageLanguage === 'en' ? 'Main navigation' : '主导航') + '">…</' + tags.nav + ">",
    "</" + tags.header + ">",
    "<" + tags.main + ">",
    sections.join("\n"),
    "</" + tags.main + ">",
    "<" + tags.footer + ">…</" + tags.footer + ">"
  ].join("\n");
}

function cssForStep() {
  if (state.step === 0) {
    return [
      ".exhibition-hero { order: " + (state.order === "facts" ? "2" : "1") + "; }",
      ".museum-facts { order: " + (state.order === "facts" ? "1" : "2") + "; }",
      ".primary-action {",
      "  background: " + (state.primary === "exhibit" ? "#df4a34" : "#111a2e") + ";",
      "}"
    ].join("\n");
  }
  if (state.step === 1) {
    return [
      "* { box-sizing: border-box; }",
      "body { margin: 0; }",
      ".site-header { padding-inline: 2rem; }",
      ".exhibition-hero {",
      "  padding: 3rem;",
      "  border: 0;",
      "}"
    ].join("\n");
  }
  if (state.step === 2) {
    return [
      ".page-container {",
      "  width: min(100% - 2rem, " + state.containerWidth + "px);",
      "  margin-inline: auto;",
      "}",
      "",
      "/* " + ui('gridComment') + " */",
      ".reference-grid {",
      "  display: grid;",
      "  grid-template-columns: repeat(" + state.columns + ", minmax(0, 1fr));",
      "  gap: " + state.gap + "px;",
      "}",
      "",
      "/* " + ui('flexComment') + " */",
      ".museum-nav {",
      "  display: flex;",
      "  align-items: center;",
      "  justify-content: space-between;",
      "}"
    ].join("\n");
  }
  if (state.step === 3) {
    const ratio = state.heroRatio === "1-1" ? "1fr 1fr" : state.heroRatio === "7-5" ? "7fr 5fr" : "5fr 7fr";
    return [
      ".exhibition-hero {",
      "  display: grid;",
      "  grid-template-columns: " + ratio + ";",
      "}",
      "",
      ".hero-title {",
      "  font-size: " + (2.8 * state.titleScale / 100).toFixed(2) + "rem;",
      "}",
      "",
      ".collection-grid {",
      "  display: grid;",
      "  grid-template-columns: repeat(" + state.cardColumns + ", 1fr);",
      "  gap: " + state.gap + "px;",
      "}"
    ].join("\n");
  }
  if (state.step === 4) {
    const viewportText = state.viewport === "mobile" ? ui('previewMobileComment') : state.viewport === "tablet" ? ui('previewTabletComment') : ui('previewDesktopComment');
    return [
      "/* " + viewportText + " */",
      ".exhibition-hero {",
      "  display: grid;",
      "  grid-template-columns: 5fr 7fr;",
      "}",
      "",
      "@media (max-width: 42rem) {",
      "  .exhibition-hero { grid-template-columns: 1fr; }",
      "  .collection-grid { grid-template-columns: 1fr; }",
      "  .secondary-nav { display: none; }",
      state.mobileBehavior === "compact" ? "  section { padding-block: 1.5rem; }" : "  section { padding-block: 2.5rem; }",
      "}"
    ].join("\n");
  }
  return [
    "body {",
    "  color: " + (state.contrast ? "#090d14" : "#161b25") + ";",
    "  font-size: 1rem;",
    "}",
    "",
    ".reading-copy { max-width: " + state.lineLength + "ch; }",
    "",
    ".primary-action:focus-visible {",
    "  outline: " + (state.focusDemo ? "3px solid #62d2ff" : "none") + ";",
    "  outline-offset: 4px;",
    "}",
    "",
    "@media (prefers-reduced-motion: reduce) {",
    "  * { transition-duration: " + (state.reducedMotion ? "0.01ms" : "inherit") + "; }",
    "}"
  ].join("\n");
}

function activeLinesFor(code, language) {
  const lines = code.split("\n");
  const needles = [];
  if (language === "html") {
    if (state.step === 0) needles.push("primary-action", state.order === "facts" ? "museum-facts" : "exhibition-hero");
    if (state.step === 1) needles.push(state.structureType === "semantic" ? "<main" : '<div>');
  } else if (state.step === 2) needles.push(String(state.containerWidth), "repeat(" + state.columns, state.gap + "px");
  else if (state.step === 3) needles.push("grid-template-columns", (2.8 * state.titleScale / 100).toFixed(2), "repeat(" + state.cardColumns);
  else if (state.step === 4) {
    needles.push("/*");
    needles.push(state.viewport === "mobile" ? "@media" : "5fr 7fr");
    if (state.viewport === "mobile") needles.push(state.mobileBehavior === "compact" ? "1.5rem" : "2.5rem");
  }
  else if (state.step === 5) needles.push(state.lineLength + "ch", state.focusDemo ? "3px solid" : "none", state.reducedMotion ? "0.01ms" : "inherit");
  else needles.push("order");
  return new Set(lines.map((line, index) => needles.some((needle) => line.includes(needle)) ? index : -1).filter((index) => index >= 0));
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function highlightHtml(line) {
  const escaped = escapeHtml(line);
  return escaped.replace(/(&lt;\/?)([a-z0-9-]+)(.*?)(\/?&gt;)/gi, function (_, open, tag, attrs, close) {
    const coloredAttrs = attrs.replace(/([a-z-]+)(=)(&quot;.*?&quot;)/gi, '<span class="tok-attr">$1</span><span class="tok-punc">$2</span><span class="tok-string">$3</span>');
    return '<span class="tok-punc">' + open + '</span><span class="tok-tag">' + tag + "</span>" + coloredAttrs + '<span class="tok-punc">' + close + "</span>";
  });
}

function highlightCss(line) {
  const trimmed = line.trim();
  if (trimmed.startsWith("/*")) return '<span class="tok-comment">' + escapeHtml(line) + "</span>";
  if (line.includes("{") && line.includes("}") && line.includes(":")) {
    const openAt = line.indexOf("{");
    const closeAt = line.lastIndexOf("}");
    const selector = escapeHtml(line.slice(0, openAt));
    const body = line.slice(openAt + 1, closeAt);
    const colonAt = body.indexOf(":");
    const property = escapeHtml(body.slice(0, colonAt));
    let value = escapeHtml(body.slice(colonAt + 1));
    value = value.replace(/(#[0-9a-f]{3,8}|\b\d+(?:\.\d+)?(?:px|rem|fr|ch|ms|%)?)/gi, '<span class="tok-number">$1</span>');
    return '<span class="tok-selector">' + selector + '</span><span class="tok-punc">{</span><span class="tok-property">' + property + '</span><span class="tok-punc">:</span><span class="tok-value">' + value + '</span><span class="tok-punc">}</span>';
  }
  if (line.includes("{") && !trimmed.startsWith("@")) {
    const at = line.indexOf("{");
    return '<span class="tok-selector">' + escapeHtml(line.slice(0, at)) + '</span><span class="tok-punc">{</span>';
  }
  if (trimmed.startsWith("@")) return '<span class="tok-keyword">' + escapeHtml(line) + "</span>";
  const colon = line.indexOf(":");
  if (colon > -1) {
    const left = escapeHtml(line.slice(0, colon));
    let right = escapeHtml(line.slice(colon + 1));
    right = right.replace(/(#[0-9a-f]{3,8}|\b\d+(?:\.\d+)?(?:px|rem|fr|ch|ms|%)?)/gi, '<span class="tok-number">$1</span>');
    return '<span class="tok-property">' + left + '</span><span class="tok-punc">:</span><span class="tok-value">' + right + "</span>";
  }
  return escapeHtml(line).replaceAll("}", '<span class="tok-punc">}</span>');
}

function codeForLanguage(language) {
  return language === "html" ? htmlSkeleton() : cssForStep();
}

function renderCode() {
  const code = codeForLanguage(state.language);
  const active = activeLinesFor(code, state.language);
  const lines = code.split("\n");
  document.querySelector("[data-code]").innerHTML = lines.map((line, index) => {
    const highlighted = state.language === "html" ? highlightHtml(line) : highlightCss(line);
    return '<span class="code-line' + (active.has(index) ? " is-active" : "") + '"><span class="line-no">' + (index + 1) + '</span><span>' + (highlighted || " ") + "</span></span>";
  }).join("");
  document.querySelectorAll("[data-code-tab]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.codeTab === state.language)));
  document.querySelector("[data-code-note]").textContent = state.language === "html" ? ui('htmlNote') : ui('cssNote');
}

function updateInsight() {
  let text = currentStep().insight;
  if (state.step === 0 && state.order === "facts") text = ui('factsFirstInsight');
  if (state.step === 0 && state.primary === "facts" && state.order !== "facts") text = ui('mismatchInsight');
  if (state.step === 1 && state.structureType === "generic") text = ui('divInsight');
  if (state.step === 2) text = state.gap < 16 ? ui('crampedInsight') : currentStep().insight;
  if (state.step === 3 && state.titleScale > 115) text = ui('largeTitleInsight');
  if (state.step === 4 && state.viewport === "mobile") text = ui('mobileInsight');
  if (state.step === 5 && !state.focusDemo) text = ui('focusInsight');
  document.querySelector("[data-insight]").textContent = text;
}

function renderProgress() {
  const count = completed.length;
  document.querySelector("[data-progress-text]").textContent = count + " / 6";
  const bar = document.querySelector("[data-progress-track]");
  bar.setAttribute("aria-valuenow", String(count));
  bar.querySelector("i").style.width = (count / 6 * 100) + "%";
  document.querySelectorAll("[data-step-link]").forEach((link, index) => {
    link.toggleAttribute("aria-current", index === state.step);
    if (index === state.step) link.setAttribute("aria-current", "step");
    link.classList.toggle("is-complete", completed.includes(link.dataset.stepLink));
  });
  const currentId = STEPS[state.step].id;
  const completeButton = document.querySelector("[data-complete-step]");
  const isDone = completed.includes(currentId);
  completeButton.classList.toggle("is-complete", isDone);
  document.querySelector("[data-complete-label]").textContent = isDone ? ui('doneLabel') : ui('completeLabel');
}

function renderStep(scrollFlow, keepLanguage) {
  const step = currentStep();
  if (!keepLanguage) state.language = step.defaultLang;
  document.querySelector("[data-step-kicker]").textContent = step.kicker;
  document.querySelector("[data-step-title]").textContent = step.title;
  document.querySelector("[data-step-lead]").textContent = step.lead;
  document.querySelector('[data-mission]').textContent = exerciseFor(state.step, pageLanguage).goal;
  document.querySelector("[data-theory-title]").textContent = step.theoryTitle;
  document.querySelector("[data-theory-copy]").textContent = step.theoryCopy;
  document.querySelector("[data-principles]").innerHTML = step.principles.map((item) => "<li>" + item + "</li>").join("");
  document.querySelector("[data-checkpoint-title]").textContent = step.checkpoint;
  document.querySelector("[data-checkpoint-copy]").textContent = step.checkpointCopy;
  document.querySelector("[data-prev-step]").disabled = state.step === 0;
  document.querySelector("[data-next-step]").disabled = state.step === STEPS.length - 1;
  renderControls();
  renderPreview();
  updateInsight();
  renderCode();
  renderProgress();
  renderPractice(state.step);
  if (scrollFlow) {
    const active = document.querySelector('[data-step-link="' + step.id + '"]');
    active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    document.querySelector(".step-heading").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function goToStep(index) {
  state.step = Math.max(0, Math.min(STEPS.length - 1, index));
  const id = STEPS[state.step].id;
  if (location.hash !== "#" + id) history.pushState(null, "", "#" + id);
  renderStep(true, false);
}

function resetCurrentStep() {
  const id = STEPS[state.step].id;
  const resetKeys = {
    planning: ["primary", "order"],
    structure: ["semantic", "boxes", "structureType"],
    grid: ["containerWidth", "columns", "gap", "showGrid"],
    modules: ["heroRatio", "cardColumns", "titleScale"],
    responsive: ["viewport", "mobileBehavior"],
    review: ["contrast", "focusDemo", "reducedMotion", "lineLength"]
  };
  resetKeys[id].forEach((key) => { state[key] = defaults[key]; });
  renderStep(false, true);
  showToast(ui('restored'));
}

function updateControl(target) {
  const key = target.dataset.control;
  if (!key) return;
  if (target.type === "checkbox") state[key] = target.checked;
  else if (target.type === "range") state[key] = Number(target.value);
  else state[key] = target.value;
  if (target.type === "range") {
    const output = target.closest(".control").querySelector("output");
    const suffix = key === "columns" ? (pageLanguage === 'en' ? ' columns' : ' 列') : key === "titleScale" ? "%" : key === "lineLength" ? ' ' + ui('chars') : "px";
    if (output) output.textContent = state[key] + suffix;
  } else {
    renderControls();
  }
  renderPreview();
  updateInsight();
  renderCode();
}

function bindInteractions() {
  document.querySelector('[data-language-toggle]').addEventListener('click', () => {
    pageLanguage = pageLanguage === 'zh' ? 'en' : 'zh';
    setLanguage(pageLanguage);
    applyStaticCopy(LESSON_COPY, pageLanguage);
    setPracticeLanguage(pageLanguage);
    const dark = document.documentElement.dataset.theme === 'dark';
    document.querySelector('[data-theme-toggle]').setAttribute('aria-label', dark ? LESSON_COPY[pageLanguage].themeLight : LESSON_COPY[pageLanguage].themeDark);
    renderStep(false, true);
  });
  document.querySelector("[data-controls]").addEventListener("input", (event) => updateControl(event.target));
  document.querySelector("[data-controls]").addEventListener("change", (event) => updateControl(event.target));
  document.querySelector("[data-controls]").addEventListener("click", (event) => {
    const button = event.target.closest("[data-choice]");
    if (!button) return;
    const key = button.dataset.choice;
    state[key] = key === "cardColumns" ? Number(button.dataset.value) : button.dataset.value;
    renderControls();
    renderPreview();
    updateInsight();
    renderCode();
  });

  document.querySelectorAll("[data-step-link]").forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      goToStep(index);
    });
  });
  document.querySelectorAll("[data-viewport]").forEach((button) => {
    button.addEventListener("click", () => {
      state.viewport = button.dataset.viewport;
      renderPreview();
      if (state.step === 4) {
        renderControls();
        updateInsight();
        renderCode();
      }
    });
  });
  document.querySelectorAll("[data-code-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.codeTab;
      renderCode();
    });
  });
  document.querySelector("[data-copy-code]").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(codeForLanguage(state.language));
      showToast(ui('copied'));
    } catch {
      showToast(ui('copyFailed'));
    }
  });
  document.querySelector("[data-reset]").addEventListener("click", resetCurrentStep);
  document.querySelector("[data-prev-step]").addEventListener("click", () => goToStep(state.step - 1));
  document.querySelector("[data-next-step]").addEventListener("click", () => goToStep(state.step + 1));
  document.querySelector("[data-complete-step]").addEventListener("click", async () => {
    const index = state.step;
    const button = document.querySelector('[data-complete-step]');
    if (button.disabled) return;
    button.disabled = true;
    let passed = false;
    try { passed = await checkPractice(); } finally { button.disabled = false; }
    if (state.step !== index) return;
    if (!passed) {
      showToast(ui('incomplete'));
      document.querySelector('.practice-assessment').scrollIntoView({behavior:'smooth', block:'center'});
      return;
    }
    const id = STEPS[state.step].id;
    if (!completed.includes(id)) {
      completed.push(id);
      saveProgress();
      renderProgress();
      showToast(completed.length === 6 ? ui('allDone') : ui('passed'));
    }
    if (state.step < STEPS.length - 1) goToStep(state.step + 1);
  });
  window.addEventListener("popstate", selectStepFromHash);
  window.addEventListener("hashchange", selectStepFromHash);
}

function selectStepFromHash() {
  const id = location.hash.slice(1);
  const index = STEPS.findIndex((step) => step.id === id);
  state.step = index >= 0 ? index : 0;
  renderStep(false, false);
}

function start() {
  applyStaticCopy(LESSON_COPY, pageLanguage);
  setPracticeLanguage(pageLanguage);
  applyTheme();
  bindTheme();
  bindPractice();
  bindInteractions();
  selectStepFromHash();
}

start();
