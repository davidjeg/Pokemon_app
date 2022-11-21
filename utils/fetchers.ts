export const fetcher = (args: any) =>
  fetch(args, { next: { revalidate: 10 } }).then(res => res.json())
