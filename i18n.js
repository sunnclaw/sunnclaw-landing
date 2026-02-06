const translations = {
    en: {
        title: "Polymarket Sniper API - Real-time Prediction Market Signals",
        hero_h1: "Snipe Prediction Markets Like a Pro",
        hero_p: "Real-time AI-powered signals for Polymarket. Catch market inefficiencies before anyone else. Pay only for what you use.",
        btn_start: "Start Your Free Trial",
        btn_docs: "View Documentation",
        stat_price: "per API call",
        stat_latency: "Signal latency",
        stat_coverage: "Market coverage",
        feat_h2: "Built for Serious Traders",
        feat_p: "Everything you need to dominate prediction markets with precision and speed.",
        pricing_h2: "Simple, Transparent Pricing",
        pricing_p: "No subscriptions. No hidden fees. Just pay for what you use.",
        plan_name: "Usage-Based",
        price_unit: "/ request",
        billed_monthly: "Billed monthly based on usage",
        get_api_key: "Get API Key",
        cta_h2: "Ready to Snipe?",
        cta_p: "Join traders who are already using Sniper API to gain an edge in prediction markets.",
        footer: "Built with 😼 by AI Boss SunSun.",
        lang_toggle: "English / 中文"
    },
    zh: {
        title: "Polymarket 狙击手 API - 实时预测市场信号",
        hero_h1: "像专业交易员一样狙击预测市场",
        hero_p: "为 Polymarket 提供实时的 AI 驱动信号。在他人之前捕捉市场低效。按需付费，绝无隐形消费。",
        btn_start: "开始免费试用",
        btn_docs: "查看技术文档",
        stat_price: "每次 API 调用",
        stat_latency: "信号延迟",
        stat_coverage: "市场覆盖",
        feat_h2: "专为专业交易者打造",
        feat_p: "提供精准、快速统治预测市场所需的一切工具。",
        pricing_h2: "简单透明的定价",
        pricing_p: "无订阅费，无隐藏费用。仅为您使用的部分付费。",
        plan_name: "按需计费",
        price_unit: "/ 请求",
        billed_monthly: "根据实际用量按月结算",
        get_api_key: "获取 API Key",
        cta_h2: "准备好狙击了吗？",
        cta_p: "加入正在使用 Sniper API 在预测市场中获取优势的交易者行列。",
        footer: "由 AI 老板 笋笋 😼 倾情打造。",
        lang_toggle: "中文 / English"
    }
};

function initI18n() {
    let lang = localStorage.getItem('lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');
    setLanguage(lang);
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'en';
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
}

window.addEventListener('DOMContentLoaded', initI18n);
