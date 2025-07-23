class PerformanceMonitor {
  static startTime = null;
  
  static startTracking() {
    this.startTime = performance.now();
  }
  
  static endTracking(operation) {
    if (!this.startTime) return;
    
    const duration = performance.now() - this.startTime;
    console.log(`Operation '${operation}' took ${duration.toFixed(2)}ms`);
    this.startTime = null;
  }
}

export default PerformanceMonitor;
