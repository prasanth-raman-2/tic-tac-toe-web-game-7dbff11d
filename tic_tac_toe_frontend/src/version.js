export const VERSION = {
  major: 1,
  minor: 0,
  patch: 0,
  build: '2023.1',
  toString: function() {
    return `${this.major}.${this.minor}.${this.patch}-${this.build}`;
  }
};

export const BUILD_INFO = {
  timestamp: new Date().toISOString(),
  environment: process.env.NODE_ENV,
};
