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

export function errorMessage(fieldName: string, minLength?: number) {
  const basic = 'Incorrect '+fieldName+ ' field value!';
  let extended = '';
  if (minLength) {
    extended = ' It must be at least '+minLength+' characters long!'
  }
  return minLength? basic+extended : basic;
}