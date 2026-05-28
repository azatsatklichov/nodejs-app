
//exclude types
type T = Exclude<string|Date, string|number>;
//   ^? type T = Date
type NonZeroNums = Exclude<number, 0>;
//   ^? type NonZeroNums = number
type NonEmptyString = Exclude<string, "">;