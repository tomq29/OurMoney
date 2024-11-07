type ModType = Record<string, string | boolean>;

export default function classNames(
  main: string,
  mod: ModType = {},
  additional: string[] = []
): string {
  const modArr = Object.entries(mod)
    .filter(([key, value]) => value)
    .map(([key, value]) => key);

  return [main, ...additional.filter(Boolean), ...modArr].join(' ');
}
