(() => {
  'use strict';

  const links = Object.freeze({
    aliyun: 'https://www.aliyun.com/minisite/goods?userCode=xbifxhv7',
    tencent: 'https://cloud.tencent.com/act/cps/redirect?redirect=6544&cps_key=8eb5bd7fecaebaa8c13d45dcda49294d&from=console',
    yisu: 'https://www.yisu.com/coupon?partner=RjIO6',
    ucloud: 'https://www.ucloud.cn/site/active/hk-global.html?cps_code=C1x43AB84293347'
  });

  const recommendations = {
    web: {
      kicker: '网站、博客与学习实践',
      title: '国内建站，先看阿里云新用户优惠',
      stack: '轻量应用 / 2核2–4GB参考',
      region: '面向国内访客，优先比较大陆地域',
      fit: '个人网站、企业官网与学习实践可从轻量套餐评估；WordPress可参考2核4GB，再结合主题、插件、缓存和实际访问量调整。',
      cost: '比较首购总价与续费年价；用途确定后再评估多年购买。',
      note: '本站阿里云入口提供新用户折上8折，覆盖120+款指定云产品；资格、叠加及适用范围以官网结算为准。',
      main: 'aliyun', mainLabel: '领取阿里云新用户折上8折',
      alt: 'tencent', altLabel: '对比腾讯云新用户特惠',
      mobileTitle: '阿里云新用户 · 折上8折',
      mobileLabel: '领取8折优惠',
      mobileExtra: '120+款指定产品 · 仅限新用户'
    },
    ai: {
      kicker: 'AI 工具、问答与智能体',
      title: '先用模型 API，把 AI 应用跑起来',
      stack: 'CPU 云服务器 + 云端模型 API',
      region: '核对服务器地域与模型服务可用范围',
      fit: '服务器运行应用、账号与数据服务，接入百炼或 TokenHub 处理对话、内容生成与知识问答。配置按应用内存和并发评估。',
      cost: '服务器与模型调用分别计费，先小规模验证，再按使用量扩展。',
      note: '普通 CPU 服务器适合承载应用，不等于本地运行大型模型。8折仅限阿里云新用户120+款指定产品，AI产品优惠需单独确认。',
      main: 'aliyun', mainLabel: '查看阿里云新用户优惠',
      alt: 'tencent', altLabel: '对比腾讯云云产品特惠',
      mobileTitle: 'AI 应用 · 服务器 + 模型 API',
      mobileLabel: '查看新用户优惠',
      mobileExtra: '模型调用另计费 · 优惠按产品确认'
    },
    automation: {
      kicker: '定时任务与自动化工作流',
      title: '让自动化任务持续在云端运行',
      stack: 'CPU 云服务器 / 轻量应用服务器',
      region: '按数据源、第三方接口与访客地域选择',
      fit: '运行定时脚本、业务通知、数据同步与自动化工作流；需要 AI 时再连接云端模型 API。配置按任务并发、浏览器与内存需求确定。',
      cost: '同时评估服务器、备份、外部工具及模型调用成本。',
      note: '常驻任务可在云端持续运行，配置按任务和工具需求评估。阿里云8折限新用户指定产品，模型API费用另算。',
      main: 'aliyun', mainLabel: '查看阿里云新用户优惠',
      alt: 'tencent', altLabel: '对比腾讯云轻量云特惠',
      mobileTitle: '自动化任务 · 持续在线',
      mobileLabel: '查看云产品优惠',
      mobileExtra: '配置按任务需求选择 · 核对续费价格'
    },
    api: {
      kicker: 'API、小程序与业务后端',
      title: '给你的应用一个稳定的云端后端',
      stack: 'CPU 云服务器 + 按需选配数据库',
      region: '优先靠近用户与相关服务',
      fit: '承载小程序接口、登录授权、应用 API 与业务数据；加入 AI 能力时可调用模型 API，无需先采购 GPU。',
      cost: '按并发、内存、数据库与带宽测算；模型调用另计费。',
      note: '按项目技术要求和压力测试选择配置。阿里云折上8折仅限新用户120+款指定云产品，不代表所有后端与AI服务均可叠加。',
      main: 'aliyun', mainLabel: '查看阿里云新用户优惠',
      alt: 'tencent', altLabel: '对比腾讯云新用户特惠',
      mobileTitle: '应用后端 · 按项目需求选配置',
      mobileLabel: '查看新用户优惠',
      mobileExtra: '核对带宽、数据库与续费成本'
    },
    global: {
      kicker: '香港与海外部署',
      title: '预算优先，先比较亿速云',
      stack: '香港 / 海外云服务器与轻量机型',
      region: '先确定香港或目标海外地区，再核对线路',
      fit: '面向香港或海外部署需求，本站从预算角度优先建议比较亿速云，再对比 UCloud；按实际线路、流量和业务需求选择。',
      cost: '比较新用户价、线路、流量额度与续费总成本。',
      note: '亿速云此入口为优惠券页，优惠券不适用于轻量应用服务器；轻量专项价格需按对应活动确认。UCloud可对比香港及全球节点。',
      main: 'yisu', mainLabel: '查看亿速云新用户优惠券',
      alt: 'ucloud', altLabel: '对比 UCloud 香港与海外套餐',
      mobileTitle: '香港 / 海外 · 先比较亿速云',
      mobileLabel: '查看新用户优惠',
      mobileExtra: '轻量专项价需单独确认 · 核对线路与流量'
    },
    gpu: {
      kicker: '本地模型与 GPU 计算',
      title: '先确定模型需求，再选择 GPU 规格',
      stack: 'GPU 云服务器 / 专业 AI 算力',
      region: '按 GPU 库存、数据位置与服务范围确认',
      fit: '需要本地模型推理、训练或图像生成时，按模型规模、精度、显存和并发评估 GPU。轻量入门 CPU 配置无法替代大型模型所需算力。',
      cost: '同时核算 GPU、存储与使用时长，先测试再扩大采购。',
      note: '本站入口可查看云产品优惠，但 GPU 机型、地域、计费模式与新用户资格须在官网单独确认；不承诺所有 AI 算力均享8折。',
      main: 'aliyun', mainLabel: '查看云产品优惠与资格',
      alt: 'yisu', altLabel: '对比亿速云优惠与产品范围',
      mobileTitle: 'GPU 算力 · 按模型与显存选择',
      mobileLabel: '查看优惠与资格',
      mobileExtra: '核对GPU规格、库存与实际报价'
    }
  };

  let currentIntent = 'web';
  const byId = (id) => document.getElementById(id);
  const setText = (id, value) => {
    const element = byId(id);
    if (element) element.textContent = value;
  };

  function emitAction(action, provider, placement) {
    window.dispatchEvent(new CustomEvent('cloudguide:action', {
      detail: { action, provider, intent: currentIntent, placement }
    }));
  }

  function updateLink(id, provider, placement) {
    const anchor = byId(id);
    if (!anchor) return;
    anchor.href = links[provider];
    anchor.dataset.provider = provider;
    anchor.dataset.placement = placement;
  }

  function selectIntent(intent, placement) {
    if (!Object.hasOwn(recommendations, intent)) return;
    currentIntent = intent;
    const recommendation = recommendations[intent];
    ['kicker', 'title', 'stack', 'region', 'fit', 'cost', 'note'].forEach((field) => {
      setText('rec-' + field, recommendation[field]);
    });
    updateLink('rec-main', recommendation.main, 'recommendation_main');
    updateLink('rec-alt', recommendation.alt, 'recommendation_alternative');
    setText('rec-main-label', recommendation.mainLabel);
    setText('rec-alt-label', recommendation.altLabel);
    updateLink('mobile-link', recommendation.main, 'mobile_fixed');
    setText('mobile-title', recommendation.mobileTitle);
    setText('mobile-label', recommendation.mobileLabel);
    setText('mobile-extra', recommendation.mobileExtra);
    document.querySelectorAll('[data-intent]').forEach((button) => {
      const active = button.dataset.intent === intent;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
    });
    if (placement) emitAction('select_intent', recommendation.main, placement);
  }

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const intentButton = event.target.closest('[data-intent]');
    if (intentButton) {
      selectIntent(intentButton.dataset.intent, 'intent_selector');
      return;
    }
    const jumpButton = event.target.closest('[data-jump-intent]');
    if (jumpButton) {
      selectIntent(jumpButton.dataset.jumpIntent, 'scenario_card');
      const choose = byId('choose');
      if (choose) choose.scrollIntoView({ block: 'start', behavior: 'auto' });
      return;
    }
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;
    const provider = anchor.dataset.provider || Object.keys(links).find((name) => anchor.href === links[name]);
    if (provider && Object.hasOwn(links, provider)) {
      emitAction('outbound_click', provider, anchor.dataset.placement || anchor.id || 'page_link');
    }
  });

  const requestedIntent = new URLSearchParams(window.location.search).get('scene');
  selectIntent(requestedIntent && Object.hasOwn(recommendations, requestedIntent) ? requestedIntent : 'web');
  const controls = byId('intent-controls');
  if (controls) controls.hidden = false;

  const form = byId('cost-form');
  const firstPrice = byId('first-price');
  const firstMonths = byId('first-months');
  const renewPrice = byId('renew-price');
  const useMonths = byId('use-months');
  if (!form || !firstPrice || !firstMonths || !renewPrice || !useMonths) return;

  const amountFormat = new Intl.NumberFormat('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const formatAmount = (amount) => '¥' + amountFormat.format(amount);
  const allowedPurchaseMonths = new Set([1, 12, 24, 36, 60]);
  const allowedUseMonths = new Set([12, 24, 36, 60]);
  const additionalCosts = '续费按年价折算，未计域名、备份、流量、模型API等额外费用。';

  function showIncomplete(status, explain) {
    setText('cost-total', '—');
    setText('cost-monthly', '—');
    setText('cost-status', status);
    setText('cost-explain', explain || '输入官网实际报价，即可估算计划使用周期内的总成本与月均成本。');
  }

  function readAmount(input) {
    if (input.validity.badInput) return { error: true };
    const value = input.value.trim();
    if (value === '') return { empty: true };
    const number = Number(value);
    if (!Number.isFinite(number) || number < 0 || !input.validity.valid) return { error: true };
    return { amount: number };
  }

  function calculateCosts() {
    const initial = readAmount(firstPrice);
    const renewal = readAmount(renewPrice);
    const purchaseMonths = Number(firstMonths.value);
    const plannedMonths = Number(useMonths.value);
    if (initial.error || renewal.error) {
      showIncomplete('请填写有效金额，金额须为不小于0的有限数值。');
      return;
    }
    if (!allowedPurchaseMonths.has(purchaseMonths) || !allowedUseMonths.has(plannedMonths)) {
      showIncomplete('请选择有效的首购周期与计划使用周期。');
      return;
    }
    if (initial.empty) {
      showIncomplete('先填写首购总价，报价以官网结算页面为准。');
      return;
    }
    const remainingMonths = Math.max(0, plannedMonths - purchaseMonths);
    if (remainingMonths > 0 && renewal.empty) {
      showIncomplete('计划周期超过首购周期，请补充预计续费年价。',
        '首购覆盖' + purchaseMonths + '个月，计划使用' + plannedMonths + '个月，还需估算' + remainingMonths + '个月的续费费用。' + additionalCosts);
      return;
    }
    const renewalCost = remainingMonths > 0 ? remainingMonths * (renewal.amount / 12) : 0;
    const total = initial.amount + renewalCost;
    const monthly = total / plannedMonths;
    if (!Number.isFinite(total) || !Number.isFinite(monthly)) {
      showIncomplete('金额超出可计算范围，请核对实际报价。');
      return;
    }
    setText('cost-total', formatAmount(total));
    setText('cost-monthly', formatAmount(monthly));
    setText('cost-status', '已按' + plannedMonths + '个月的计划使用周期估算。');
    let explanation;
    if (purchaseMonths > plannedMonths) {
      explanation = '首购' + purchaseMonths + '个月，计划使用' + plannedMonths + '个月，仍将已支付首购总价' + formatAmount(initial.amount) + '完整计入，不假定提前退款。';
    } else if (remainingMonths === 0) {
      explanation = '首购周期已覆盖计划使用周期，计入首购总价' + formatAmount(initial.amount) + '，无需额外续费。';
    } else {
      explanation = '首购总价' + formatAmount(initial.amount) + ' + ' + remainingMonths + '个月续费估算' + formatAmount(renewalCost) + '；实际续费周期与金额以官网为准。';
    }
    setText('cost-explain', explanation + additionalCosts);
  }

  form.addEventListener('input', calculateCosts);
  form.addEventListener('change', calculateCosts);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateCosts();
  });
  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      firstPrice.value = '';
      renewPrice.value = '';
      firstMonths.value = '12';
      useMonths.value = '36';
      calculateCosts();
    }, 0);
  });
  calculateCosts();
})();
