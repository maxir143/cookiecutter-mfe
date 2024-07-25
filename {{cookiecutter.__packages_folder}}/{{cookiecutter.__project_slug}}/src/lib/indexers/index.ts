export function indexBy<T>(array: T[], attr: string): Record<string, T> {
  if (!Array.isArray(array) || array.length === 0 || !attr) {
    return {};
  }

  return array.reduce((indexed: Record<string, T>, item: T) => {
    const attrValue = item[attr as keyof typeof item];

    indexed[attrValue as keyof typeof indexed] = item;

    return indexed;
  }, {});
}
