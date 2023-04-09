import { atom, selector } from "recoil";

export const CartAtom = atom({
  key: "CartAtom",
  default: [],
});

export const QuantitySelector = selector({
  key: "QuantitySelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.length.toLocaleString();
  },
});

export const TotalPriceSelector = selector({
  key: "TotlaPriceSelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.reduce(
      (acc, cur) => acc + cur.price,
      0
    ).toLocaleString();
  },
});
