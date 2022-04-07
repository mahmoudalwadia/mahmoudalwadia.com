export enum BPKey {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}
// Default bootstrap breakpoints
export const breakpoints = {
  // < sm: small screens (Phones)
  [BPKey.SM]: 576,
  // > sm & < md: portrait tablets, portrait iPad, e-readers, landscape phones
  [BPKey.MD]: 768,
  // > md & < lg: tablet, landscape iPad, lo-res laptops ands desktops
  [BPKey.LG]: 992,
  // > lg & <xl: big landscape tablets, laptops, and desktops
  [BPKey.XL]: 1200,
};
