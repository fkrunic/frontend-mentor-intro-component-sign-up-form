export type ValidationResult
  = { kind: 'valid' }
  | { kind: 'invalid', err: string }

export type Validator = (fieldName: string, input: string) => ValidationResult