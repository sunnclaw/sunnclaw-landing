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
        feat_1_title: "Real-time Signals",
        feat_1_desc: "Get instant notifications when our AI detects profitable opportunities across all major prediction markets.",
        feat_2_title: "AI-Powered Analysis",
        feat_2_desc: "Advanced machine learning models analyze odds, volume, and sentiment to find edge in every market.",
        feat_3_title: "Market Coverage",
        feat_3_desc: "Politics, crypto, sports, tech releases — we monitor all categories 24/7 so you never miss an opportunity.",
        feat_4_title: "Simple API",
        feat_4_desc: "RESTful API with SDKs for Python, JavaScript, and Go. Integrate in minutes, not days.",
        feat_5_title: "Pay Per Use",
        feat_5_desc: "No monthly fees. Only pay $0.10 per API call. Perfect for testing strategies or scaling up.",
        feat_6_title: "Enterprise Security",
        feat_6_desc: "Bank-grade encryption, rate limiting, and audit logs. Your API keys are always secure.",
        pricing_h2: "Simple, Transparent Pricing",
        pricing_p: "No subscriptions. No hidden fees. Just pay for what you use.",
        plan_name: "Usage-Based",
        price_unit: "/ request",
        billed_monthly: "Billed monthly based on usage",
        pricing_feat_1: "Unlimited API calls",
        pricing_feat_2: "Real-time market signals",
        pricing_feat_3: "All market categories",
        pricing_feat_4: "Webhook notifications",
        pricing_feat_5: "Priority support",
        pricing_feat_6: "Usage dashboard",
        get_api_key: "Get API Key",
        docs_h2: "API Documentation",
        docs_p: "Get started in minutes with our simple REST API.",
        docs_quick_start: "🚀 Quick Start",
        docs_endpoints: "📡 Endpoints",
        docs_endpoint_1: "Get all active trading signals",
        docs_endpoint_2: "List all monitored markets",
        docs_endpoint_3: "Register a webhook for real-time alerts",
        docs_pro_tip: "💡 Pro Tip:",
        docs_pro_tip_text: "Use webhooks to get instant notifications when new high-confidence signals are detected!",
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
        feat_1_title: "实时信号",
        feat_1_desc: "当我们的 AI 检测到所有主要预测市场的盈利机会时，您将获得即时通知。",
        feat_2_title: "AI 驱动分析",
        feat_2_desc: "先进的机器学习模型分析赔率、交易量和市场情绪，在每个市场中寻找套利机会。",
        feat_3_title: "全市场覆盖",
        feat_3_desc: "政治、加密货币、体育、科技发布——我们全天候监控所有类别，让您不错过任何机会。",
        feat_4_title: "简洁 API",
        feat_4_desc: "RESTful API，提供 Python、JavaScript 和 Go SDK。几分钟内即可集成。",
        feat_5_title: "按需付费",
        feat_5_desc: "无月费。每次 API 调用仅需 $0.10。非常适合测试策略或扩大规模。",
        feat_6_title: "企业级安全",
        feat_6_desc: "银行级加密、速率限制和审计日志。您的 API 密钥始终安全。",
        pricing_h2: "简单透明的定价",
        pricing_p: "无订阅费，无隐藏费用。仅为您使用的部分付费。",
        plan_name: "按需计费",
        price_unit: "/ 请求",
        billed_monthly: "根据实际用量按月结算",
        pricing_feat_1: "无限 API 调用",
        pricing_feat_2: "实时市场信号",
        pricing_feat_3: "所有市场类别",\
        pricing_feat_4: "Webhook 通知",
        pricing_feat_5: "优先支持",
        pricing_feat_6: "使用量仪表板",
        get_api_key: "获取 API Key",
        docs_h2: "API 技术文档",
        docs_p: "使用我们简洁的 REST API，几分钟内即可上手。",
        docs_quick_start: "🚀 快速开始",
        docs_endpoints: "📡 接口列表",
        docs_endpoint_1: "获取所有活跃交易信号",
        docs_endpoint_2: "列出所有监控的市场",
        docs_endpoint_3: "注册 Webhook 以获取实时提醒",
        docs_pro_tip: "💡 专业提示：",
        docs_pro_tip_text: "使用 Webhook 可以在检测到新的高置信度信号时获得即时通知！",
        cta_h2: "准备好狙击了吗？",
        cta_p: "加入正在使用 Sniper API 在预测市场中获取优势的交易者行列。",
        footer: "由 AI 老板 笋笋 😼 倾情打造。",
        lang_toggle: "中文 / English"
    }
};

function setLanguage(lang) {
    console.log('Setting language to:', lang);
    if (!translations[lang]) {
        console.error('Translation not found for language:', lang);
        return;
    }

    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    // Update Title
    if (translations[lang].title) {
        document.title = translations[lang].title;
    }

    // Update elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`Found ${elements.length} elements to translate.`);
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            // Use innerHTML for elements that might contain emojis or formatting
            // but be careful with scripts.
            el.innerHTML = translation;
        } else {
            console.warn(`Missing translation for key: "${key}" in language: "${lang}"`);
        }
    });
}

function initI18n() {
    let lang = localStorage.getItem('lang');
    if (!lang) {
        lang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    }
    setLanguage(lang);
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'en';
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
}

// Initial setup
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
