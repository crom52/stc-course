/** sleep for n milliseconds */
export const sleep = async (millisecond: number = 0) => {
  return new Promise((resolve: (value: unknown) => void) => {
    setTimeout(() => {
      resolve(null);
    }, millisecond);
  });
};

type TruncateOptions = { pre?: number; suf?: number; default?: string }
export function truncateMiddleString(str: string, options?: TruncateOptions) {
  const pre = options?.pre ?? 4;
  const suf = options?.suf ?? 4;

  if (!str.length)
    return options?.default || '';

  if (str?.length > pre + suf)
    return `${str.substring(0, pre)}...${str.substring(str.length - suf, str.length)}`;

  return str;
}

export function pageToOffset(pageInfo: Partial<Pagination>): OffsetPage {
  const num = pageInfo?.pageSize || 10;
  let offset = 0;
  if (pageInfo.page && pageInfo.page !== 1)
    offset = pageInfo.page * num - 1;

  return { offset, num };
}

export const uuidGenerator = (optional?: { prefix?: string; suffix?: string }) => {
  const str = '10000000-1000-4000-8000-100000000000'.replace(
    /[018]/g,
    (c: string) => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16),
  );

  return `${optional?.prefix ?? ''}${str}${optional?.suffix ?? ''}`;
};

export const getImg = (imgName: string) => {
  return new URL(`../assets/images/${imgName}`, import.meta.url) as any as string;
};
