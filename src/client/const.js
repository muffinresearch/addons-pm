export const validYearRX = /^20\d{2}$/;
export const validQuarterRX = /^Q[1-4]{1}$/;
export const GH_API_ROOT = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:3000/api';
