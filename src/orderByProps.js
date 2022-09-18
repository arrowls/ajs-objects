export default function orderByProps(obj, props = []) {
  const ordered = Object.keys(obj)
    .sort()
    .filter((prop) => !props.includes(prop))
    .map((key) => ({ key, value: obj[key] }));

  for (let i = props.length - 1; i >= 0; i -= 1) {
    ordered.unshift({ key: props[i], value: obj[props[i]] });
  }
  return ordered;
}
