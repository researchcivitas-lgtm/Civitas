export function withBase(path: string): string {
  if (/^(?:https?:|mailto:|tel:|#)/.test(path)) return path;

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  if (path === '/') return base;
  const route = path.replace(/^\/+|\/+$/g, '');
  return route ? `${base}${route}/` : base;
}
