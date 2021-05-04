const ENDPOINT = {
    BASE: 'http://localhost:8756',
    SECURITY: {
        LOGIN: 'security/login',
        REFRESH: 'security/refresh',
        LOCK: (id) => `security/lock?${buildQueryParams({ id })}`,
        UNLOCK: (id) => `security/unlock?${buildQueryParams({ id })}`,
        ENABLE: (id) => `security/enable?${buildQueryParams({ id })}`,
        UNABLE: (id) => `security/unable?${buildQueryParams({ id })}`
    }
};

export default ENDPOINT;
