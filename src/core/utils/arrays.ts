// export const unique = <T>(arr: T[]) => [...new Set(arr)];

// type Many<T> = T | ReadonlyArray<T>;

// export const castArray = <T>(arr: Many<T>): T[] => {
//   if (!arr && (arr as any) !== 0) return [];
//   return Array.isArray(arr) ? arr : [arr];
// };

// // avoid naming conflicts
// export { castArray as ensureArray } from "lodash-unified";
