// Coze API 配置
const COZE_CONFIG = {
    // API Token
    TOKEN: 'pat_RLiCkrBjDFuRLEGGyO32OQau9a7fHaMFS4TKFNGyXHhlt2t8eOVjxtbMiPvLSxWu',

    // 工作流配置
    WORKFLOW_ID: '7551348048149053474',
    SPACE_ID: '7539139323220885543',

    // API 端点
    API_BASE: 'https://api.coze.cn',

    // 文件上传接口 - 使用Coze官方文档中的正确路径
    UPLOAD_URL: '/v1/files/upload',

    // 工作流运行接口
    WORKFLOW_URL: '/v1/workflow/stream_run',

    // 支持的文件类型
    SUPPORTED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],

    // 文件大小限制 (10MB)
    MAX_FILE_SIZE: 10 * 1024 * 1024
};

// 导出配置
window.COZE_CONFIG = COZE_CONFIG;