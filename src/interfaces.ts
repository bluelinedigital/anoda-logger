export enum ELevel {
  INFO = "INFO",
  ERROR = "ERROR",
  WARN = "WARN",
  DEBUG = "DEBUG",
  FATAL = "FATAL"
}


export interface LogObj {
  timestamp: string,
  context: string,
  level: ELevel,
  message: string,
  traceId: string,
  env: string
}
