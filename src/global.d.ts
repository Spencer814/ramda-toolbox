import type { Curry } from 'Function/Curry';

export declare global {
  type Fn = (input: any) => any;
  type Path = (string | number)[];
  type Input = number | Path | string;
  type List = any[];

  interface Dictionary {
    [index: string]: any;
  }

  interface Lens {
    <T, U>(obj: T): U;
    set<T, U>(str: string, obj: T): U;
  }

  type SetLensType = Curry<(src: Input, val: any, data: Dictionary | List) => Dictionary | List>;
  type SetLensIndexType = Curry<(n: number, val: any, arr: List) => List>;
  type SetLensPathType = Curry<(path: Path, val: any, obj: Dictionary) => Dictionary>;
  type SetLensPropType = Curry<(str: string, val: any, obj: Dictionary) => Dictionary>;

  type ViewEqType = Curry<(src: Input, val: any, data: Dictionary | List) => boolean>;
  type ViewEqIndexType = Curry<(n: number, val: any, arr: List) => boolean>;
  type ViewEqPathType = Curry<(path: Path, val: any, obj: Dictionary) => boolean>;
  type ViewEqPropType = Curry<(str: string, val: any, obj: Dictionary) => boolean>;

  type ViewLensType = Curry<(val: Input, data: Dictionary | List) => any>;
  type ViewLensIndexType = Curry<(n: number, arr: List) => any>;
  type ViewLensPathType = Curry<(path: Path, obj: Dictionary) => any>;
  type ViewLensPropType = Curry<(str: string, obj: Dictionary) => any>;

  type ViewOrType = Curry<(def: any, val: Input, data: Dictionary | List) => any>;
  type ViewOrIndexType = Curry<(def: any, n: number, arr: List) => any>;
  type ViewOrPathType = Curry<(def: any, path: Path, obj: Dictionary) => any>;
  type ViewOrPropType = Curry<(def: any, str: string, obj: Dictionary) => any>;

  type ViewWithType = Curry<(val: Input, fn: Fn, data: Dictionary | List) => any>;
  type ViewWithIndexType = Curry<(n: number, fn: Fn, arr: List) => any>;
  type ViewWithPathType = Curry<(path: Path, fn: Fn, obj: Dictionary) => any>;
  type ViewWithPropType = Curry<(str: string, fn: Fn, obj: Dictionary) => any>;
}
