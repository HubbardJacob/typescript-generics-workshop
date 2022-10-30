import { expect, it } from "vitest";
import { T } from "vitest/dist/global-60f880c6";
import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <T, K>(a: T, b: K): { a: T; b: K } => {
  return { a, b };
};

it("Should return a tuple of the arguments you pass", () => {
  const result = returnBothOfWhatIPassIn("a", 1);

  expect(result).toEqual({
    a: "a",
    b: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;
});
