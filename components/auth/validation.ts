export function isEmail(value: string) {
  return value.includes('@');
}

export function isNotEmpty(value: string) {
  if (value == undefined || null) {
    return false;
  }
  return value.trim() !== '';
}

export function hasMinLength(value: string, minLength: number) {
  return value.length >= minLength;
}

export function isEqualToOtherValue(value: string, otherValue: any) {
  return value === otherValue;
}