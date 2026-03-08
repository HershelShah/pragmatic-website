import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

// Transform the specs array [{key, value}] into a Record<string, string>
// so existing templates using Object.values(product.specs) keep working
export function specsToRecord(
  specs: Array<{ key: string; value: string }> | null | undefined
): Record<string, string> {
  if (!specs || specs.length === 0) return {};
  return Object.fromEntries(specs.map((s) => [s.key, s.value]));
}
