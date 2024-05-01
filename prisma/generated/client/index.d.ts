
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
/**
 * Model Method
 * 
 */
export type Method = $Result.DefaultSelection<Prisma.$MethodPayload>
/**
 * Model Ingredients
 * 
 */
export type Ingredients = $Result.DefaultSelection<Prisma.$IngredientsPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs>;

  /**
   * `prisma.method`: Exposes CRUD operations for the **Method** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Methods
    * const methods = await prisma.method.findMany()
    * ```
    */
  get method(): Prisma.MethodDelegate<ExtArgs>;

  /**
   * `prisma.ingredients`: Exposes CRUD operations for the **Ingredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredients.findMany()
    * ```
    */
  get ingredients(): Prisma.IngredientsDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Food: 'Food',
    Category: 'Category',
    Bookmark: 'Bookmark',
    Method: 'Method',
    Ingredients: 'Ingredients',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'food' | 'category' | 'bookmark' | 'method' | 'ingredients' | 'order'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>,
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>,
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      Method: {
        payload: Prisma.$MethodPayload<ExtArgs>
        fields: Prisma.MethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MethodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MethodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload>
          }
          findFirst: {
            args: Prisma.MethodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MethodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload>
          }
          findMany: {
            args: Prisma.MethodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload>[]
          }
          create: {
            args: Prisma.MethodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload>
          }
          createMany: {
            args: Prisma.MethodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MethodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload>
          }
          update: {
            args: Prisma.MethodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload>
          }
          deleteMany: {
            args: Prisma.MethodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MethodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MethodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MethodPayload>
          }
          aggregate: {
            args: Prisma.MethodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMethod>
          }
          groupBy: {
            args: Prisma.MethodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MethodCountArgs<ExtArgs>,
            result: $Utils.Optional<MethodCountAggregateOutputType> | number
          }
        }
      }
      Ingredients: {
        payload: Prisma.$IngredientsPayload<ExtArgs>
        fields: Prisma.IngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findFirst: {
            args: Prisma.IngredientsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findMany: {
            args: Prisma.IngredientsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          create: {
            args: Prisma.IngredientsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          createMany: {
            args: Prisma.IngredientsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IngredientsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          update: {
            args: Prisma.IngredientsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          deleteMany: {
            args: Prisma.IngredientsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IngredientsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIngredients>
          }
          groupBy: {
            args: Prisma.IngredientsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientsCountArgs<ExtArgs>,
            result: $Utils.Optional<IngredientsCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookmark: number
    order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmark?: boolean | UserCountOutputTypeCountBookmarkArgs
    order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    method: number
    ingredients: number
    bookmark: number
    order: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method?: boolean | FoodCountOutputTypeCountMethodArgs
    ingredients?: boolean | FoodCountOutputTypeCountIngredientsArgs
    bookmark?: boolean | FoodCountOutputTypeCountBookmarkArgs
    order?: boolean | FoodCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MethodWhereInput
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountBookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    foods: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | CategoryCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    uuid: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    uuid: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    uuid: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    uuid?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    uuid?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    uuid?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uuid: string
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bookmark?: boolean | User$bookmarkArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uuid?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmark?: boolean | User$bookmarkArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookmark: Prisma.$BookmarkPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const userWithUuidOnly = await prisma.user.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookmark<T extends User$bookmarkArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findMany'> | Null>;

    order<T extends User$orderArgs<ExtArgs> = {}>(args?: Subset<T, User$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly uuid: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.bookmark
   */
  export type User$bookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * User.order
   */
  export type User$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    category_id: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    rating: number | null
    category_id: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    rating: number | null
    category_id: number | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    rating: number | null
    category_id: number | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    image: number
    description: number
    rating: number
    category_id: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    rating?: true
    category_id?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    rating?: true
    category_id?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    rating?: true
    category_id?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    rating?: true
    category_id?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    rating?: true
    category_id?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    name: string
    image: string | null
    description: string | null
    rating: number | null
    category_id: number
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    rating?: boolean
    category_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    method?: boolean | Food$methodArgs<ExtArgs>
    ingredients?: boolean | Food$ingredientsArgs<ExtArgs>
    bookmark?: boolean | Food$bookmarkArgs<ExtArgs>
    order?: boolean | Food$orderArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    rating?: boolean
    category_id?: boolean
  }

  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    method?: boolean | Food$methodArgs<ExtArgs>
    ingredients?: boolean | Food$ingredientsArgs<ExtArgs>
    bookmark?: boolean | Food$bookmarkArgs<ExtArgs>
    order?: boolean | Food$orderArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      method: Prisma.$MethodPayload<ExtArgs>[]
      ingredients: Prisma.$IngredientsPayload<ExtArgs>[]
      bookmark: Prisma.$BookmarkPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string | null
      description: string | null
      rating: number | null
      category_id: number
    }, ExtArgs["result"]["food"]>
    composites: {}
  }


  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FoodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Food that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FoodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FoodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
    **/
    create<T extends FoodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodCreateArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Foods.
     *     @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     *     @example
     *     // Create many Foods
     *     const food = await prisma.food.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FoodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
    **/
    delete<T extends FoodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FoodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FoodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FoodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
    **/
    upsert<T extends FoodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>
    ): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    method<T extends Food$methodArgs<ExtArgs> = {}>(args?: Subset<T, Food$methodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'findMany'> | Null>;

    ingredients<T extends Food$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Food$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'findMany'> | Null>;

    bookmark<T extends Food$bookmarkArgs<ExtArgs> = {}>(args?: Subset<T, Food$bookmarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findMany'> | Null>;

    order<T extends Food$orderArgs<ExtArgs> = {}>(args?: Subset<T, Food$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Food model
   */ 
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly name: FieldRef<"Food", 'String'>
    readonly image: FieldRef<"Food", 'String'>
    readonly description: FieldRef<"Food", 'String'>
    readonly rating: FieldRef<"Food", 'Int'>
    readonly category_id: FieldRef<"Food", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }


  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }


  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }


  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }


  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }


  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }


  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }


  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
  }


  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }


  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }


  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
  }


  /**
   * Food.method
   */
  export type Food$methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    where?: MethodWhereInput
    orderBy?: MethodOrderByWithRelationInput | MethodOrderByWithRelationInput[]
    cursor?: MethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MethodScalarFieldEnum | MethodScalarFieldEnum[]
  }


  /**
   * Food.ingredients
   */
  export type Food$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    cursor?: IngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }


  /**
   * Food.bookmark
   */
  export type Food$bookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * Food.order
   */
  export type Food$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    header_image: string | null
    image: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    header_image: string | null
    image: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    header_image: number
    image: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    header_image?: true
    image?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    header_image?: true
    image?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    header_image?: true
    image?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    header_image: string | null
    image: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    header_image?: boolean
    image?: boolean
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    header_image?: boolean
    image?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      foods: Prisma.$FoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      header_image: string | null
      image: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    foods<T extends Category$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Category$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly header_image: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.foods
   */
  export type Category$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkAvgAggregateOutputType = {
    food_id: number | null
  }

  export type BookmarkSumAggregateOutputType = {
    food_id: number | null
  }

  export type BookmarkMinAggregateOutputType = {
    user_uuid: string | null
    food_id: number | null
  }

  export type BookmarkMaxAggregateOutputType = {
    user_uuid: string | null
    food_id: number | null
  }

  export type BookmarkCountAggregateOutputType = {
    user_uuid: number
    food_id: number
    _all: number
  }


  export type BookmarkAvgAggregateInputType = {
    food_id?: true
  }

  export type BookmarkSumAggregateInputType = {
    food_id?: true
  }

  export type BookmarkMinAggregateInputType = {
    user_uuid?: true
    food_id?: true
  }

  export type BookmarkMaxAggregateInputType = {
    user_uuid?: true
    food_id?: true
  }

  export type BookmarkCountAggregateInputType = {
    user_uuid?: true
    food_id?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookmarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookmarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _avg?: BookmarkAvgAggregateInputType
    _sum?: BookmarkSumAggregateInputType
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    user_uuid: string
    food_id: number
    _count: BookmarkCountAggregateOutputType | null
    _avg: BookmarkAvgAggregateOutputType | null
    _sum: BookmarkSumAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_uuid?: boolean
    food_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    user_uuid?: boolean
    food_id?: boolean
  }

  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }


  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      food: Prisma.$FoodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_uuid: string
      food_id: number
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }


  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookmarkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bookmark that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookmarkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `user_uuid`
     * const bookmarkWithUser_uuidOnly = await prisma.bookmark.findMany({ select: { user_uuid: true } })
     * 
    **/
    findMany<T extends BookmarkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
    **/
    create<T extends BookmarkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookmarks.
     *     @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     *     @example
     *     // Create many Bookmarks
     *     const bookmark = await prisma.bookmark.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookmarkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
    **/
    delete<T extends BookmarkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookmarkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookmarkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookmarkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
    **/
    upsert<T extends BookmarkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>
    ): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bookmark model
   */ 
  interface BookmarkFieldRefs {
    readonly user_uuid: FieldRef<"Bookmark", 'String'>
    readonly food_id: FieldRef<"Bookmark", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }


  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }


  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }


  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }


  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }


  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
  }


  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }


  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }


  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
  }


  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude<ExtArgs> | null
  }



  /**
   * Model Method
   */

  export type AggregateMethod = {
    _count: MethodCountAggregateOutputType | null
    _avg: MethodAvgAggregateOutputType | null
    _sum: MethodSumAggregateOutputType | null
    _min: MethodMinAggregateOutputType | null
    _max: MethodMaxAggregateOutputType | null
  }

  export type MethodAvgAggregateOutputType = {
    id: number | null
    step: number | null
    food_id: number | null
  }

  export type MethodSumAggregateOutputType = {
    id: number | null
    step: number | null
    food_id: number | null
  }

  export type MethodMinAggregateOutputType = {
    id: number | null
    step: number | null
    how: string | null
    food_id: number | null
  }

  export type MethodMaxAggregateOutputType = {
    id: number | null
    step: number | null
    how: string | null
    food_id: number | null
  }

  export type MethodCountAggregateOutputType = {
    id: number
    step: number
    how: number
    food_id: number
    _all: number
  }


  export type MethodAvgAggregateInputType = {
    id?: true
    step?: true
    food_id?: true
  }

  export type MethodSumAggregateInputType = {
    id?: true
    step?: true
    food_id?: true
  }

  export type MethodMinAggregateInputType = {
    id?: true
    step?: true
    how?: true
    food_id?: true
  }

  export type MethodMaxAggregateInputType = {
    id?: true
    step?: true
    how?: true
    food_id?: true
  }

  export type MethodCountAggregateInputType = {
    id?: true
    step?: true
    how?: true
    food_id?: true
    _all?: true
  }

  export type MethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Method to aggregate.
     */
    where?: MethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methods to fetch.
     */
    orderBy?: MethodOrderByWithRelationInput | MethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Methods
    **/
    _count?: true | MethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MethodMaxAggregateInputType
  }

  export type GetMethodAggregateType<T extends MethodAggregateArgs> = {
        [P in keyof T & keyof AggregateMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMethod[P]>
      : GetScalarType<T[P], AggregateMethod[P]>
  }




  export type MethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MethodWhereInput
    orderBy?: MethodOrderByWithAggregationInput | MethodOrderByWithAggregationInput[]
    by: MethodScalarFieldEnum[] | MethodScalarFieldEnum
    having?: MethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MethodCountAggregateInputType | true
    _avg?: MethodAvgAggregateInputType
    _sum?: MethodSumAggregateInputType
    _min?: MethodMinAggregateInputType
    _max?: MethodMaxAggregateInputType
  }

  export type MethodGroupByOutputType = {
    id: number
    step: number
    how: string
    food_id: number
    _count: MethodCountAggregateOutputType | null
    _avg: MethodAvgAggregateOutputType | null
    _sum: MethodSumAggregateOutputType | null
    _min: MethodMinAggregateOutputType | null
    _max: MethodMaxAggregateOutputType | null
  }

  type GetMethodGroupByPayload<T extends MethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MethodGroupByOutputType[P]>
            : GetScalarType<T[P], MethodGroupByOutputType[P]>
        }
      >
    >


  export type MethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    step?: boolean
    how?: boolean
    food_id?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["method"]>

  export type MethodSelectScalar = {
    id?: boolean
    step?: boolean
    how?: boolean
    food_id?: boolean
  }

  export type MethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }


  export type $MethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Method"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      step: number
      how: string
      food_id: number
    }, ExtArgs["result"]["method"]>
    composites: {}
  }


  type MethodGetPayload<S extends boolean | null | undefined | MethodDefaultArgs> = $Result.GetResult<Prisma.$MethodPayload, S>

  type MethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MethodCountAggregateInputType | true
    }

  export interface MethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Method'], meta: { name: 'Method' } }
    /**
     * Find zero or one Method that matches the filter.
     * @param {MethodFindUniqueArgs} args - Arguments to find a Method
     * @example
     * // Get one Method
     * const method = await prisma.method.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MethodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MethodFindUniqueArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Method that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MethodFindUniqueOrThrowArgs} args - Arguments to find a Method
     * @example
     * // Get one Method
     * const method = await prisma.method.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MethodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MethodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Method that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodFindFirstArgs} args - Arguments to find a Method
     * @example
     * // Get one Method
     * const method = await prisma.method.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MethodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MethodFindFirstArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Method that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodFindFirstOrThrowArgs} args - Arguments to find a Method
     * @example
     * // Get one Method
     * const method = await prisma.method.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MethodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MethodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Methods
     * const methods = await prisma.method.findMany()
     * 
     * // Get first 10 Methods
     * const methods = await prisma.method.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const methodWithIdOnly = await prisma.method.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MethodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MethodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Method.
     * @param {MethodCreateArgs} args - Arguments to create a Method.
     * @example
     * // Create one Method
     * const Method = await prisma.method.create({
     *   data: {
     *     // ... data to create a Method
     *   }
     * })
     * 
    **/
    create<T extends MethodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MethodCreateArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Methods.
     *     @param {MethodCreateManyArgs} args - Arguments to create many Methods.
     *     @example
     *     // Create many Methods
     *     const method = await prisma.method.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MethodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MethodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Method.
     * @param {MethodDeleteArgs} args - Arguments to delete one Method.
     * @example
     * // Delete one Method
     * const Method = await prisma.method.delete({
     *   where: {
     *     // ... filter to delete one Method
     *   }
     * })
     * 
    **/
    delete<T extends MethodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MethodDeleteArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Method.
     * @param {MethodUpdateArgs} args - Arguments to update one Method.
     * @example
     * // Update one Method
     * const method = await prisma.method.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MethodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MethodUpdateArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Methods.
     * @param {MethodDeleteManyArgs} args - Arguments to filter Methods to delete.
     * @example
     * // Delete a few Methods
     * const { count } = await prisma.method.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MethodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MethodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Methods
     * const method = await prisma.method.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MethodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MethodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Method.
     * @param {MethodUpsertArgs} args - Arguments to update or create a Method.
     * @example
     * // Update or create a Method
     * const method = await prisma.method.upsert({
     *   create: {
     *     // ... data to create a Method
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Method we want to update
     *   }
     * })
    **/
    upsert<T extends MethodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MethodUpsertArgs<ExtArgs>>
    ): Prisma__MethodClient<$Result.GetResult<Prisma.$MethodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodCountArgs} args - Arguments to filter Methods to count.
     * @example
     * // Count the number of Methods
     * const count = await prisma.method.count({
     *   where: {
     *     // ... the filter for the Methods we want to count
     *   }
     * })
    **/
    count<T extends MethodCountArgs>(
      args?: Subset<T, MethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MethodAggregateArgs>(args: Subset<T, MethodAggregateArgs>): Prisma.PrismaPromise<GetMethodAggregateType<T>>

    /**
     * Group by Method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MethodGroupByArgs['orderBy'] }
        : { orderBy?: MethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Method model
   */
  readonly fields: MethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Method.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Method model
   */ 
  interface MethodFieldRefs {
    readonly id: FieldRef<"Method", 'Int'>
    readonly step: FieldRef<"Method", 'Int'>
    readonly how: FieldRef<"Method", 'String'>
    readonly food_id: FieldRef<"Method", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Method findUnique
   */
  export type MethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * Filter, which Method to fetch.
     */
    where: MethodWhereUniqueInput
  }


  /**
   * Method findUniqueOrThrow
   */
  export type MethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * Filter, which Method to fetch.
     */
    where: MethodWhereUniqueInput
  }


  /**
   * Method findFirst
   */
  export type MethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * Filter, which Method to fetch.
     */
    where?: MethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methods to fetch.
     */
    orderBy?: MethodOrderByWithRelationInput | MethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Methods.
     */
    cursor?: MethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Methods.
     */
    distinct?: MethodScalarFieldEnum | MethodScalarFieldEnum[]
  }


  /**
   * Method findFirstOrThrow
   */
  export type MethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * Filter, which Method to fetch.
     */
    where?: MethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methods to fetch.
     */
    orderBy?: MethodOrderByWithRelationInput | MethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Methods.
     */
    cursor?: MethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Methods.
     */
    distinct?: MethodScalarFieldEnum | MethodScalarFieldEnum[]
  }


  /**
   * Method findMany
   */
  export type MethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * Filter, which Methods to fetch.
     */
    where?: MethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Methods to fetch.
     */
    orderBy?: MethodOrderByWithRelationInput | MethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Methods.
     */
    cursor?: MethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Methods.
     */
    skip?: number
    distinct?: MethodScalarFieldEnum | MethodScalarFieldEnum[]
  }


  /**
   * Method create
   */
  export type MethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * The data needed to create a Method.
     */
    data: XOR<MethodCreateInput, MethodUncheckedCreateInput>
  }


  /**
   * Method createMany
   */
  export type MethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Methods.
     */
    data: MethodCreateManyInput | MethodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Method update
   */
  export type MethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * The data needed to update a Method.
     */
    data: XOR<MethodUpdateInput, MethodUncheckedUpdateInput>
    /**
     * Choose, which Method to update.
     */
    where: MethodWhereUniqueInput
  }


  /**
   * Method updateMany
   */
  export type MethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Methods.
     */
    data: XOR<MethodUpdateManyMutationInput, MethodUncheckedUpdateManyInput>
    /**
     * Filter which Methods to update
     */
    where?: MethodWhereInput
  }


  /**
   * Method upsert
   */
  export type MethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * The filter to search for the Method to update in case it exists.
     */
    where: MethodWhereUniqueInput
    /**
     * In case the Method found by the `where` argument doesn't exist, create a new Method with this data.
     */
    create: XOR<MethodCreateInput, MethodUncheckedCreateInput>
    /**
     * In case the Method was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MethodUpdateInput, MethodUncheckedUpdateInput>
  }


  /**
   * Method delete
   */
  export type MethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
    /**
     * Filter which Method to delete.
     */
    where: MethodWhereUniqueInput
  }


  /**
   * Method deleteMany
   */
  export type MethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Methods to delete
     */
    where?: MethodWhereInput
  }


  /**
   * Method without action
   */
  export type MethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method
     */
    select?: MethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MethodInclude<ExtArgs> | null
  }



  /**
   * Model Ingredients
   */

  export type AggregateIngredients = {
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  export type IngredientsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    price: number | null
    food_id: number | null
  }

  export type IngredientsSumAggregateOutputType = {
    id: number | null
    amount: number | null
    price: number | null
    food_id: number | null
  }

  export type IngredientsMinAggregateOutputType = {
    id: number | null
    name: string | null
    amount: number | null
    price: number | null
    food_id: number | null
  }

  export type IngredientsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    amount: number | null
    price: number | null
    food_id: number | null
  }

  export type IngredientsCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    price: number
    food_id: number
    _all: number
  }


  export type IngredientsAvgAggregateInputType = {
    id?: true
    amount?: true
    price?: true
    food_id?: true
  }

  export type IngredientsSumAggregateInputType = {
    id?: true
    amount?: true
    price?: true
    food_id?: true
  }

  export type IngredientsMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    price?: true
    food_id?: true
  }

  export type IngredientsMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    price?: true
    food_id?: true
  }

  export type IngredientsCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    price?: true
    food_id?: true
    _all?: true
  }

  export type IngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to aggregate.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsMaxAggregateInputType
  }

  export type GetIngredientsAggregateType<T extends IngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredients[P]>
      : GetScalarType<T[P], AggregateIngredients[P]>
  }




  export type IngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithAggregationInput | IngredientsOrderByWithAggregationInput[]
    by: IngredientsScalarFieldEnum[] | IngredientsScalarFieldEnum
    having?: IngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsCountAggregateInputType | true
    _avg?: IngredientsAvgAggregateInputType
    _sum?: IngredientsSumAggregateInputType
    _min?: IngredientsMinAggregateInputType
    _max?: IngredientsMaxAggregateInputType
  }

  export type IngredientsGroupByOutputType = {
    id: number
    name: string
    amount: number
    price: number
    food_id: number
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  type GetIngredientsGroupByPayload<T extends IngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
        }
      >
    >


  export type IngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    price?: boolean
    food_id?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    price?: boolean
    food_id?: boolean
  }

  export type IngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }


  export type $IngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredients"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      amount: number
      price: number
      food_id: number
    }, ExtArgs["result"]["ingredients"]>
    composites: {}
  }


  type IngredientsGetPayload<S extends boolean | null | undefined | IngredientsDefaultArgs> = $Result.GetResult<Prisma.$IngredientsPayload, S>

  type IngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngredientsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngredientsCountAggregateInputType | true
    }

  export interface IngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredients'], meta: { name: 'Ingredients' } }
    /**
     * Find zero or one Ingredients that matches the filter.
     * @param {IngredientsFindUniqueArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IngredientsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsFindUniqueArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ingredients that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IngredientsFindUniqueOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IngredientsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IngredientsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsFindFirstArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ingredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IngredientsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredients.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IngredientsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ingredients.
     * @param {IngredientsCreateArgs} args - Arguments to create a Ingredients.
     * @example
     * // Create one Ingredients
     * const Ingredients = await prisma.ingredients.create({
     *   data: {
     *     // ... data to create a Ingredients
     *   }
     * })
     * 
    **/
    create<T extends IngredientsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsCreateArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ingredients.
     *     @param {IngredientsCreateManyArgs} args - Arguments to create many Ingredients.
     *     @example
     *     // Create many Ingredients
     *     const ingredients = await prisma.ingredients.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IngredientsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ingredients.
     * @param {IngredientsDeleteArgs} args - Arguments to delete one Ingredients.
     * @example
     * // Delete one Ingredients
     * const Ingredients = await prisma.ingredients.delete({
     *   where: {
     *     // ... filter to delete one Ingredients
     *   }
     * })
     * 
    **/
    delete<T extends IngredientsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsDeleteArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ingredients.
     * @param {IngredientsUpdateArgs} args - Arguments to update one Ingredients.
     * @example
     * // Update one Ingredients
     * const ingredients = await prisma.ingredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IngredientsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsUpdateArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientsDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IngredientsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IngredientsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredients.
     * @param {IngredientsUpsertArgs} args - Arguments to update or create a Ingredients.
     * @example
     * // Update or create a Ingredients
     * const ingredients = await prisma.ingredients.upsert({
     *   create: {
     *     // ... data to create a Ingredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredients we want to update
     *   }
     * })
    **/
    upsert<T extends IngredientsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientsUpsertArgs<ExtArgs>>
    ): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredients.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientsCountArgs>(
      args?: Subset<T, IngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientsAggregateArgs>(args: Subset<T, IngredientsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsAggregateType<T>>

    /**
     * Group by Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientsGroupByArgs['orderBy'] }
        : { orderBy?: IngredientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredients model
   */
  readonly fields: IngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ingredients model
   */ 
  interface IngredientsFieldRefs {
    readonly id: FieldRef<"Ingredients", 'Int'>
    readonly name: FieldRef<"Ingredients", 'String'>
    readonly amount: FieldRef<"Ingredients", 'Int'>
    readonly price: FieldRef<"Ingredients", 'Int'>
    readonly food_id: FieldRef<"Ingredients", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Ingredients findUnique
   */
  export type IngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }


  /**
   * Ingredients findUniqueOrThrow
   */
  export type IngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }


  /**
   * Ingredients findFirst
   */
  export type IngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }


  /**
   * Ingredients findFirstOrThrow
   */
  export type IngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }


  /**
   * Ingredients findMany
   */
  export type IngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }


  /**
   * Ingredients create
   */
  export type IngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredients.
     */
    data: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
  }


  /**
   * Ingredients createMany
   */
  export type IngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ingredients update
   */
  export type IngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredients.
     */
    data: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
    /**
     * Choose, which Ingredients to update.
     */
    where: IngredientsWhereUniqueInput
  }


  /**
   * Ingredients updateMany
   */
  export type IngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
  }


  /**
   * Ingredients upsert
   */
  export type IngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredients to update in case it exists.
     */
    where: IngredientsWhereUniqueInput
    /**
     * In case the Ingredients found by the `where` argument doesn't exist, create a new Ingredients with this data.
     */
    create: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
    /**
     * In case the Ingredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
  }


  /**
   * Ingredients delete
   */
  export type IngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter which Ingredients to delete.
     */
    where: IngredientsWhereUniqueInput
  }


  /**
   * Ingredients deleteMany
   */
  export type IngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientsWhereInput
  }


  /**
   * Ingredients without action
   */
  export type IngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IngredientsInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    food_id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    rating: number | null
    food_id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    location: string | null
    date: Date | null
    rating: number | null
    user_uuid: string | null
    food_id: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    location: string | null
    date: Date | null
    rating: number | null
    user_uuid: string | null
    food_id: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    location: number
    date: number
    rating: number
    user_uuid: number
    food_id: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    rating?: true
    food_id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    rating?: true
    food_id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    location?: true
    date?: true
    rating?: true
    user_uuid?: true
    food_id?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    location?: true
    date?: true
    rating?: true
    user_uuid?: true
    food_id?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    location?: true
    date?: true
    rating?: true
    user_uuid?: true
    food_id?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    location: string
    date: Date
    rating: number
    user_uuid: string
    food_id: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    date?: boolean
    rating?: boolean
    user_uuid?: boolean
    food_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    location?: boolean
    date?: boolean
    rating?: boolean
    user_uuid?: boolean
    food_id?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      food: Prisma.$FoodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      location: string
      date: Date
      rating: number
      user_uuid: string
      food_id: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly location: FieldRef<"Order", 'String'>
    readonly date: FieldRef<"Order", 'DateTime'>
    readonly rating: FieldRef<"Order", 'Int'>
    readonly user_uuid: FieldRef<"Order", 'String'>
    readonly food_id: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uuid: 'uuid',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    description: 'description',
    rating: 'rating',
    category_id: 'category_id'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    header_image: 'header_image',
    image: 'image'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    user_uuid: 'user_uuid',
    food_id: 'food_id'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const MethodScalarFieldEnum: {
    id: 'id',
    step: 'step',
    how: 'how',
    food_id: 'food_id'
  };

  export type MethodScalarFieldEnum = (typeof MethodScalarFieldEnum)[keyof typeof MethodScalarFieldEnum]


  export const IngredientsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    price: 'price',
    food_id: 'food_id'
  };

  export type IngredientsScalarFieldEnum = (typeof IngredientsScalarFieldEnum)[keyof typeof IngredientsScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    location: 'location',
    date: 'date',
    rating: 'rating',
    user_uuid: 'user_uuid',
    food_id: 'food_id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uuid?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bookmark?: BookmarkListRelationFilter
    order?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bookmark?: BookmarkOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bookmark?: BookmarkListRelationFilter
    order?: OrderListRelationFilter
  }, "uuid" | "email">

  export type UserOrderByWithAggregationInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    image?: StringNullableFilter<"Food"> | string | null
    description?: StringNullableFilter<"Food"> | string | null
    rating?: IntNullableFilter<"Food"> | number | null
    category_id?: IntFilter<"Food"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    method?: MethodListRelationFilter
    ingredients?: IngredientsListRelationFilter
    bookmark?: BookmarkListRelationFilter
    order?: OrderListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    category_id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    method?: MethodOrderByRelationAggregateInput
    ingredients?: IngredientsOrderByRelationAggregateInput
    bookmark?: BookmarkOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    name?: StringFilter<"Food"> | string
    image?: StringNullableFilter<"Food"> | string | null
    description?: StringNullableFilter<"Food"> | string | null
    rating?: IntNullableFilter<"Food"> | number | null
    category_id?: IntFilter<"Food"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    method?: MethodListRelationFilter
    ingredients?: IngredientsListRelationFilter
    bookmark?: BookmarkListRelationFilter
    order?: OrderListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    name?: StringWithAggregatesFilter<"Food"> | string
    image?: StringNullableWithAggregatesFilter<"Food"> | string | null
    description?: StringNullableWithAggregatesFilter<"Food"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Food"> | number | null
    category_id?: IntWithAggregatesFilter<"Food"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    header_image?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    foods?: FoodListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    header_image?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    foods?: FoodOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    header_image?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    foods?: FoodListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    header_image?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    header_image?: StringNullableWithAggregatesFilter<"Category"> | string | null
    image?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    user_uuid?: StringFilter<"Bookmark"> | string
    food_id?: IntFilter<"Bookmark"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    user_uuid?: SortOrder
    food_id?: SortOrder
    user?: UserOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    bookmark_id?: BookmarkBookmark_idCompoundUniqueInput
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    user_uuid?: StringFilter<"Bookmark"> | string
    food_id?: IntFilter<"Bookmark"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }, "bookmark_id">

  export type BookmarkOrderByWithAggregationInput = {
    user_uuid?: SortOrder
    food_id?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _avg?: BookmarkAvgOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
    _sum?: BookmarkSumOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    user_uuid?: StringWithAggregatesFilter<"Bookmark"> | string
    food_id?: IntWithAggregatesFilter<"Bookmark"> | number
  }

  export type MethodWhereInput = {
    AND?: MethodWhereInput | MethodWhereInput[]
    OR?: MethodWhereInput[]
    NOT?: MethodWhereInput | MethodWhereInput[]
    id?: IntFilter<"Method"> | number
    step?: IntFilter<"Method"> | number
    how?: StringFilter<"Method"> | string
    food_id?: IntFilter<"Method"> | number
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type MethodOrderByWithRelationInput = {
    id?: SortOrder
    step?: SortOrder
    how?: SortOrder
    food_id?: SortOrder
    food?: FoodOrderByWithRelationInput
  }

  export type MethodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MethodWhereInput | MethodWhereInput[]
    OR?: MethodWhereInput[]
    NOT?: MethodWhereInput | MethodWhereInput[]
    step?: IntFilter<"Method"> | number
    how?: StringFilter<"Method"> | string
    food_id?: IntFilter<"Method"> | number
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }, "id">

  export type MethodOrderByWithAggregationInput = {
    id?: SortOrder
    step?: SortOrder
    how?: SortOrder
    food_id?: SortOrder
    _count?: MethodCountOrderByAggregateInput
    _avg?: MethodAvgOrderByAggregateInput
    _max?: MethodMaxOrderByAggregateInput
    _min?: MethodMinOrderByAggregateInput
    _sum?: MethodSumOrderByAggregateInput
  }

  export type MethodScalarWhereWithAggregatesInput = {
    AND?: MethodScalarWhereWithAggregatesInput | MethodScalarWhereWithAggregatesInput[]
    OR?: MethodScalarWhereWithAggregatesInput[]
    NOT?: MethodScalarWhereWithAggregatesInput | MethodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Method"> | number
    step?: IntWithAggregatesFilter<"Method"> | number
    how?: StringWithAggregatesFilter<"Method"> | string
    food_id?: IntWithAggregatesFilter<"Method"> | number
  }

  export type IngredientsWhereInput = {
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    id?: IntFilter<"Ingredients"> | number
    name?: StringFilter<"Ingredients"> | string
    amount?: IntFilter<"Ingredients"> | number
    price?: IntFilter<"Ingredients"> | number
    food_id?: IntFilter<"Ingredients"> | number
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type IngredientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
    food?: FoodOrderByWithRelationInput
  }

  export type IngredientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    name?: StringFilter<"Ingredients"> | string
    amount?: IntFilter<"Ingredients"> | number
    price?: IntFilter<"Ingredients"> | number
    food_id?: IntFilter<"Ingredients"> | number
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }, "id">

  export type IngredientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
    _count?: IngredientsCountOrderByAggregateInput
    _avg?: IngredientsAvgOrderByAggregateInput
    _max?: IngredientsMaxOrderByAggregateInput
    _min?: IngredientsMinOrderByAggregateInput
    _sum?: IngredientsSumOrderByAggregateInput
  }

  export type IngredientsScalarWhereWithAggregatesInput = {
    AND?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    OR?: IngredientsScalarWhereWithAggregatesInput[]
    NOT?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredients"> | number
    name?: StringWithAggregatesFilter<"Ingredients"> | string
    amount?: IntWithAggregatesFilter<"Ingredients"> | number
    price?: IntWithAggregatesFilter<"Ingredients"> | number
    food_id?: IntWithAggregatesFilter<"Ingredients"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    location?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    rating?: IntFilter<"Order"> | number
    user_uuid?: StringFilter<"Order"> | string
    food_id?: IntFilter<"Order"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    user_uuid?: SortOrder
    food_id?: SortOrder
    user?: UserOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    location?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    rating?: IntFilter<"Order"> | number
    user_uuid?: StringFilter<"Order"> | string
    food_id?: IntFilter<"Order"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    user_uuid?: SortOrder
    food_id?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    location?: StringWithAggregatesFilter<"Order"> | string
    date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    rating?: IntWithAggregatesFilter<"Order"> | number
    user_uuid?: StringWithAggregatesFilter<"Order"> | string
    food_id?: IntWithAggregatesFilter<"Order"> | number
  }

  export type UserCreateInput = {
    uuid?: string
    username: string
    email: string
    password: string
    bookmark?: BookmarkCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uuid?: string
    username: string
    email: string
    password: string
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bookmark?: BookmarkUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bookmark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uuid?: string
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateInput = {
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category: CategoryCreateNestedOneWithoutFoodsInput
    method?: MethodCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkCreateNestedManyWithoutFoodInput
    order?: OrderCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category_id: number
    method?: MethodUncheckedCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsUncheckedCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutFoodInput
    order?: OrderUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
    method?: MethodUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUpdateManyWithoutFoodNestedInput
    order?: OrderUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    method?: MethodUncheckedUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUncheckedUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutFoodNestedInput
    order?: OrderUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category_id: number
  }

  export type FoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    header_image?: string | null
    image?: string | null
    foods?: FoodCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    header_image?: string | null
    image?: string | null
    foods?: FoodUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    header_image?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    foods?: FoodUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    header_image?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    foods?: FoodUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    header_image?: string | null
    image?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    header_image?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    header_image?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookmarkCreateInput = {
    user: UserCreateNestedOneWithoutBookmarkInput
    food: FoodCreateNestedOneWithoutBookmarkInput
  }

  export type BookmarkUncheckedCreateInput = {
    user_uuid: string
    food_id: number
  }

  export type BookmarkUpdateInput = {
    user?: UserUpdateOneRequiredWithoutBookmarkNestedInput
    food?: FoodUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkCreateManyInput = {
    user_uuid: string
    food_id: number
  }

  export type BookmarkUpdateManyMutationInput = {

  }

  export type BookmarkUncheckedUpdateManyInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type MethodCreateInput = {
    step: number
    how: string
    food: FoodCreateNestedOneWithoutMethodInput
  }

  export type MethodUncheckedCreateInput = {
    id?: number
    step: number
    how: string
    food_id: number
  }

  export type MethodUpdateInput = {
    step?: IntFieldUpdateOperationsInput | number
    how?: StringFieldUpdateOperationsInput | string
    food?: FoodUpdateOneRequiredWithoutMethodNestedInput
  }

  export type MethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    step?: IntFieldUpdateOperationsInput | number
    how?: StringFieldUpdateOperationsInput | string
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type MethodCreateManyInput = {
    id?: number
    step: number
    how: string
    food_id: number
  }

  export type MethodUpdateManyMutationInput = {
    step?: IntFieldUpdateOperationsInput | number
    how?: StringFieldUpdateOperationsInput | string
  }

  export type MethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    step?: IntFieldUpdateOperationsInput | number
    how?: StringFieldUpdateOperationsInput | string
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsCreateInput = {
    name: string
    amount: number
    price: number
    food: FoodCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientsUncheckedCreateInput = {
    id?: number
    name: string
    amount: number
    price: number
    food_id: number
  }

  export type IngredientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    food?: FoodUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsCreateManyInput = {
    id?: number
    name: string
    amount: number
    price: number
    food_id: number
  }

  export type IngredientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    location: string
    date?: Date | string
    rating: number
    user: UserCreateNestedOneWithoutOrderInput
    food: FoodCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    location: string
    date?: Date | string
    rating: number
    user_uuid: string
    food_id: number
  }

  export type OrderUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    food?: FoodUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyInput = {
    id?: number
    location: string
    date?: Date | string
    rating: number
    user_uuid: string
    food_id: number
  }

  export type OrderUpdateManyMutationInput = {
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type MethodListRelationFilter = {
    every?: MethodWhereInput
    some?: MethodWhereInput
    none?: MethodWhereInput
  }

  export type IngredientsListRelationFilter = {
    every?: IngredientsWhereInput
    some?: IngredientsWhereInput
    none?: IngredientsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    category_id?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    category_id?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    category_id?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    category_id?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    category_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    header_image?: SortOrder
    image?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    header_image?: SortOrder
    image?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    header_image?: SortOrder
    image?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type BookmarkBookmark_idCompoundUniqueInput = {
    user_uuid: string
    food_id: number
  }

  export type BookmarkCountOrderByAggregateInput = {
    user_uuid?: SortOrder
    food_id?: SortOrder
  }

  export type BookmarkAvgOrderByAggregateInput = {
    food_id?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    user_uuid?: SortOrder
    food_id?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    user_uuid?: SortOrder
    food_id?: SortOrder
  }

  export type BookmarkSumOrderByAggregateInput = {
    food_id?: SortOrder
  }

  export type MethodCountOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    how?: SortOrder
    food_id?: SortOrder
  }

  export type MethodAvgOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    food_id?: SortOrder
  }

  export type MethodMaxOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    how?: SortOrder
    food_id?: SortOrder
  }

  export type MethodMinOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    how?: SortOrder
    food_id?: SortOrder
  }

  export type MethodSumOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    food_id?: SortOrder
  }

  export type IngredientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
  }

  export type IngredientsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
  }

  export type IngredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
  }

  export type IngredientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
  }

  export type IngredientsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    user_uuid?: SortOrder
    food_id?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    food_id?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    user_uuid?: SortOrder
    food_id?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    date?: SortOrder
    rating?: SortOrder
    user_uuid?: SortOrder
    food_id?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    food_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutFoodsInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
  }

  export type MethodCreateNestedManyWithoutFoodInput = {
    create?: XOR<MethodCreateWithoutFoodInput, MethodUncheckedCreateWithoutFoodInput> | MethodCreateWithoutFoodInput[] | MethodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MethodCreateOrConnectWithoutFoodInput | MethodCreateOrConnectWithoutFoodInput[]
    createMany?: MethodCreateManyFoodInputEnvelope
    connect?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
  }

  export type IngredientsCreateNestedManyWithoutFoodInput = {
    create?: XOR<IngredientsCreateWithoutFoodInput, IngredientsUncheckedCreateWithoutFoodInput> | IngredientsCreateWithoutFoodInput[] | IngredientsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutFoodInput | IngredientsCreateOrConnectWithoutFoodInput[]
    createMany?: IngredientsCreateManyFoodInputEnvelope
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutFoodInput = {
    create?: XOR<BookmarkCreateWithoutFoodInput, BookmarkUncheckedCreateWithoutFoodInput> | BookmarkCreateWithoutFoodInput[] | BookmarkUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFoodInput | BookmarkCreateOrConnectWithoutFoodInput[]
    createMany?: BookmarkCreateManyFoodInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutFoodInput = {
    create?: XOR<OrderCreateWithoutFoodInput, OrderUncheckedCreateWithoutFoodInput> | OrderCreateWithoutFoodInput[] | OrderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFoodInput | OrderCreateOrConnectWithoutFoodInput[]
    createMany?: OrderCreateManyFoodInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MethodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<MethodCreateWithoutFoodInput, MethodUncheckedCreateWithoutFoodInput> | MethodCreateWithoutFoodInput[] | MethodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MethodCreateOrConnectWithoutFoodInput | MethodCreateOrConnectWithoutFoodInput[]
    createMany?: MethodCreateManyFoodInputEnvelope
    connect?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
  }

  export type IngredientsUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<IngredientsCreateWithoutFoodInput, IngredientsUncheckedCreateWithoutFoodInput> | IngredientsCreateWithoutFoodInput[] | IngredientsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutFoodInput | IngredientsCreateOrConnectWithoutFoodInput[]
    createMany?: IngredientsCreateManyFoodInputEnvelope
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<BookmarkCreateWithoutFoodInput, BookmarkUncheckedCreateWithoutFoodInput> | BookmarkCreateWithoutFoodInput[] | BookmarkUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFoodInput | BookmarkCreateOrConnectWithoutFoodInput[]
    createMany?: BookmarkCreateManyFoodInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<OrderCreateWithoutFoodInput, OrderUncheckedCreateWithoutFoodInput> | OrderCreateWithoutFoodInput[] | OrderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFoodInput | OrderCreateOrConnectWithoutFoodInput[]
    createMany?: OrderCreateManyFoodInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    upsert?: CategoryUpsertWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFoodsInput, CategoryUpdateWithoutFoodsInput>, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type MethodUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MethodCreateWithoutFoodInput, MethodUncheckedCreateWithoutFoodInput> | MethodCreateWithoutFoodInput[] | MethodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MethodCreateOrConnectWithoutFoodInput | MethodCreateOrConnectWithoutFoodInput[]
    upsert?: MethodUpsertWithWhereUniqueWithoutFoodInput | MethodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MethodCreateManyFoodInputEnvelope
    set?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    disconnect?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    delete?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    connect?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    update?: MethodUpdateWithWhereUniqueWithoutFoodInput | MethodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MethodUpdateManyWithWhereWithoutFoodInput | MethodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MethodScalarWhereInput | MethodScalarWhereInput[]
  }

  export type IngredientsUpdateManyWithoutFoodNestedInput = {
    create?: XOR<IngredientsCreateWithoutFoodInput, IngredientsUncheckedCreateWithoutFoodInput> | IngredientsCreateWithoutFoodInput[] | IngredientsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutFoodInput | IngredientsCreateOrConnectWithoutFoodInput[]
    upsert?: IngredientsUpsertWithWhereUniqueWithoutFoodInput | IngredientsUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: IngredientsCreateManyFoodInputEnvelope
    set?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    disconnect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    delete?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    update?: IngredientsUpdateWithWhereUniqueWithoutFoodInput | IngredientsUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: IngredientsUpdateManyWithWhereWithoutFoodInput | IngredientsUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutFoodNestedInput = {
    create?: XOR<BookmarkCreateWithoutFoodInput, BookmarkUncheckedCreateWithoutFoodInput> | BookmarkCreateWithoutFoodInput[] | BookmarkUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFoodInput | BookmarkCreateOrConnectWithoutFoodInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutFoodInput | BookmarkUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: BookmarkCreateManyFoodInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutFoodInput | BookmarkUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutFoodInput | BookmarkUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutFoodNestedInput = {
    create?: XOR<OrderCreateWithoutFoodInput, OrderUncheckedCreateWithoutFoodInput> | OrderCreateWithoutFoodInput[] | OrderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFoodInput | OrderCreateOrConnectWithoutFoodInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFoodInput | OrderUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: OrderCreateManyFoodInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFoodInput | OrderUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFoodInput | OrderUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MethodUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MethodCreateWithoutFoodInput, MethodUncheckedCreateWithoutFoodInput> | MethodCreateWithoutFoodInput[] | MethodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MethodCreateOrConnectWithoutFoodInput | MethodCreateOrConnectWithoutFoodInput[]
    upsert?: MethodUpsertWithWhereUniqueWithoutFoodInput | MethodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MethodCreateManyFoodInputEnvelope
    set?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    disconnect?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    delete?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    connect?: MethodWhereUniqueInput | MethodWhereUniqueInput[]
    update?: MethodUpdateWithWhereUniqueWithoutFoodInput | MethodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MethodUpdateManyWithWhereWithoutFoodInput | MethodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MethodScalarWhereInput | MethodScalarWhereInput[]
  }

  export type IngredientsUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<IngredientsCreateWithoutFoodInput, IngredientsUncheckedCreateWithoutFoodInput> | IngredientsCreateWithoutFoodInput[] | IngredientsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: IngredientsCreateOrConnectWithoutFoodInput | IngredientsCreateOrConnectWithoutFoodInput[]
    upsert?: IngredientsUpsertWithWhereUniqueWithoutFoodInput | IngredientsUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: IngredientsCreateManyFoodInputEnvelope
    set?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    disconnect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    delete?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    connect?: IngredientsWhereUniqueInput | IngredientsWhereUniqueInput[]
    update?: IngredientsUpdateWithWhereUniqueWithoutFoodInput | IngredientsUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: IngredientsUpdateManyWithWhereWithoutFoodInput | IngredientsUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<BookmarkCreateWithoutFoodInput, BookmarkUncheckedCreateWithoutFoodInput> | BookmarkCreateWithoutFoodInput[] | BookmarkUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFoodInput | BookmarkCreateOrConnectWithoutFoodInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutFoodInput | BookmarkUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: BookmarkCreateManyFoodInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutFoodInput | BookmarkUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutFoodInput | BookmarkUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<OrderCreateWithoutFoodInput, OrderUncheckedCreateWithoutFoodInput> | OrderCreateWithoutFoodInput[] | OrderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFoodInput | OrderCreateOrConnectWithoutFoodInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFoodInput | OrderUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: OrderCreateManyFoodInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFoodInput | OrderUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFoodInput | OrderUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FoodCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookmarkInput = {
    create?: XOR<UserCreateWithoutBookmarkInput, UserUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarkInput
    connect?: UserWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutBookmarkInput = {
    create?: XOR<FoodCreateWithoutBookmarkInput, FoodUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: FoodCreateOrConnectWithoutBookmarkInput
    connect?: FoodWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarkNestedInput = {
    create?: XOR<UserCreateWithoutBookmarkInput, UserUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarkInput
    upsert?: UserUpsertWithoutBookmarkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarkInput, UserUpdateWithoutBookmarkInput>, UserUncheckedUpdateWithoutBookmarkInput>
  }

  export type FoodUpdateOneRequiredWithoutBookmarkNestedInput = {
    create?: XOR<FoodCreateWithoutBookmarkInput, FoodUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: FoodCreateOrConnectWithoutBookmarkInput
    upsert?: FoodUpsertWithoutBookmarkInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutBookmarkInput, FoodUpdateWithoutBookmarkInput>, FoodUncheckedUpdateWithoutBookmarkInput>
  }

  export type FoodCreateNestedOneWithoutMethodInput = {
    create?: XOR<FoodCreateWithoutMethodInput, FoodUncheckedCreateWithoutMethodInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMethodInput
    connect?: FoodWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutMethodNestedInput = {
    create?: XOR<FoodCreateWithoutMethodInput, FoodUncheckedCreateWithoutMethodInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMethodInput
    upsert?: FoodUpsertWithoutMethodInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutMethodInput, FoodUpdateWithoutMethodInput>, FoodUncheckedUpdateWithoutMethodInput>
  }

  export type FoodCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<FoodCreateWithoutIngredientsInput, FoodUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutIngredientsInput
    connect?: FoodWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<FoodCreateWithoutIngredientsInput, FoodUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutIngredientsInput
    upsert?: FoodUpsertWithoutIngredientsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutIngredientsInput, FoodUpdateWithoutIngredientsInput>, FoodUncheckedUpdateWithoutIngredientsInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutOrderInput = {
    create?: XOR<FoodCreateWithoutOrderInput, FoodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: FoodCreateOrConnectWithoutOrderInput
    connect?: FoodWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type FoodUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<FoodCreateWithoutOrderInput, FoodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: FoodCreateOrConnectWithoutOrderInput
    upsert?: FoodUpsertWithoutOrderInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutOrderInput, FoodUpdateWithoutOrderInput>, FoodUncheckedUpdateWithoutOrderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BookmarkCreateWithoutUserInput = {
    food: FoodCreateNestedOneWithoutBookmarkInput
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    food_id: number
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    location: string
    date?: Date | string
    rating: number
    food: FoodCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    location: string
    date?: Date | string
    rating: number
    food_id: number
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    user_uuid?: StringFilter<"Bookmark"> | string
    food_id?: IntFilter<"Bookmark"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    location?: StringFilter<"Order"> | string
    date?: DateTimeFilter<"Order"> | Date | string
    rating?: IntFilter<"Order"> | number
    user_uuid?: StringFilter<"Order"> | string
    food_id?: IntFilter<"Order"> | number
  }

  export type CategoryCreateWithoutFoodsInput = {
    name: string
    header_image?: string | null
    image?: string | null
  }

  export type CategoryUncheckedCreateWithoutFoodsInput = {
    id?: number
    name: string
    header_image?: string | null
    image?: string | null
  }

  export type CategoryCreateOrConnectWithoutFoodsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
  }

  export type MethodCreateWithoutFoodInput = {
    step: number
    how: string
  }

  export type MethodUncheckedCreateWithoutFoodInput = {
    id?: number
    step: number
    how: string
  }

  export type MethodCreateOrConnectWithoutFoodInput = {
    where: MethodWhereUniqueInput
    create: XOR<MethodCreateWithoutFoodInput, MethodUncheckedCreateWithoutFoodInput>
  }

  export type MethodCreateManyFoodInputEnvelope = {
    data: MethodCreateManyFoodInput | MethodCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type IngredientsCreateWithoutFoodInput = {
    name: string
    amount: number
    price: number
  }

  export type IngredientsUncheckedCreateWithoutFoodInput = {
    id?: number
    name: string
    amount: number
    price: number
  }

  export type IngredientsCreateOrConnectWithoutFoodInput = {
    where: IngredientsWhereUniqueInput
    create: XOR<IngredientsCreateWithoutFoodInput, IngredientsUncheckedCreateWithoutFoodInput>
  }

  export type IngredientsCreateManyFoodInputEnvelope = {
    data: IngredientsCreateManyFoodInput | IngredientsCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutFoodInput = {
    user: UserCreateNestedOneWithoutBookmarkInput
  }

  export type BookmarkUncheckedCreateWithoutFoodInput = {
    user_uuid: string
  }

  export type BookmarkCreateOrConnectWithoutFoodInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutFoodInput, BookmarkUncheckedCreateWithoutFoodInput>
  }

  export type BookmarkCreateManyFoodInputEnvelope = {
    data: BookmarkCreateManyFoodInput | BookmarkCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutFoodInput = {
    location: string
    date?: Date | string
    rating: number
    user: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutFoodInput = {
    id?: number
    location: string
    date?: Date | string
    rating: number
    user_uuid: string
  }

  export type OrderCreateOrConnectWithoutFoodInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFoodInput, OrderUncheckedCreateWithoutFoodInput>
  }

  export type OrderCreateManyFoodInputEnvelope = {
    data: OrderCreateManyFoodInput | OrderCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutFoodsInput = {
    update: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFoodsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type CategoryUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    header_image?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    header_image?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MethodUpsertWithWhereUniqueWithoutFoodInput = {
    where: MethodWhereUniqueInput
    update: XOR<MethodUpdateWithoutFoodInput, MethodUncheckedUpdateWithoutFoodInput>
    create: XOR<MethodCreateWithoutFoodInput, MethodUncheckedCreateWithoutFoodInput>
  }

  export type MethodUpdateWithWhereUniqueWithoutFoodInput = {
    where: MethodWhereUniqueInput
    data: XOR<MethodUpdateWithoutFoodInput, MethodUncheckedUpdateWithoutFoodInput>
  }

  export type MethodUpdateManyWithWhereWithoutFoodInput = {
    where: MethodScalarWhereInput
    data: XOR<MethodUpdateManyMutationInput, MethodUncheckedUpdateManyWithoutFoodInput>
  }

  export type MethodScalarWhereInput = {
    AND?: MethodScalarWhereInput | MethodScalarWhereInput[]
    OR?: MethodScalarWhereInput[]
    NOT?: MethodScalarWhereInput | MethodScalarWhereInput[]
    id?: IntFilter<"Method"> | number
    step?: IntFilter<"Method"> | number
    how?: StringFilter<"Method"> | string
    food_id?: IntFilter<"Method"> | number
  }

  export type IngredientsUpsertWithWhereUniqueWithoutFoodInput = {
    where: IngredientsWhereUniqueInput
    update: XOR<IngredientsUpdateWithoutFoodInput, IngredientsUncheckedUpdateWithoutFoodInput>
    create: XOR<IngredientsCreateWithoutFoodInput, IngredientsUncheckedCreateWithoutFoodInput>
  }

  export type IngredientsUpdateWithWhereUniqueWithoutFoodInput = {
    where: IngredientsWhereUniqueInput
    data: XOR<IngredientsUpdateWithoutFoodInput, IngredientsUncheckedUpdateWithoutFoodInput>
  }

  export type IngredientsUpdateManyWithWhereWithoutFoodInput = {
    where: IngredientsScalarWhereInput
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyWithoutFoodInput>
  }

  export type IngredientsScalarWhereInput = {
    AND?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
    OR?: IngredientsScalarWhereInput[]
    NOT?: IngredientsScalarWhereInput | IngredientsScalarWhereInput[]
    id?: IntFilter<"Ingredients"> | number
    name?: StringFilter<"Ingredients"> | string
    amount?: IntFilter<"Ingredients"> | number
    price?: IntFilter<"Ingredients"> | number
    food_id?: IntFilter<"Ingredients"> | number
  }

  export type BookmarkUpsertWithWhereUniqueWithoutFoodInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutFoodInput, BookmarkUncheckedUpdateWithoutFoodInput>
    create: XOR<BookmarkCreateWithoutFoodInput, BookmarkUncheckedCreateWithoutFoodInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutFoodInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutFoodInput, BookmarkUncheckedUpdateWithoutFoodInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutFoodInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutFoodInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutFoodInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutFoodInput, OrderUncheckedUpdateWithoutFoodInput>
    create: XOR<OrderCreateWithoutFoodInput, OrderUncheckedCreateWithoutFoodInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutFoodInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutFoodInput, OrderUncheckedUpdateWithoutFoodInput>
  }

  export type OrderUpdateManyWithWhereWithoutFoodInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutFoodInput>
  }

  export type FoodCreateWithoutCategoryInput = {
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    method?: MethodCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkCreateNestedManyWithoutFoodInput
    order?: OrderCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    method?: MethodUncheckedCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsUncheckedCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutFoodInput
    order?: OrderUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodCreateManyCategoryInputEnvelope = {
    data: FoodCreateManyCategoryInput | FoodCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FoodUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
  }

  export type FoodUpdateManyWithWhereWithoutCategoryInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    image?: StringNullableFilter<"Food"> | string | null
    description?: StringNullableFilter<"Food"> | string | null
    rating?: IntNullableFilter<"Food"> | number | null
    category_id?: IntFilter<"Food"> | number
  }

  export type UserCreateWithoutBookmarkInput = {
    uuid?: string
    username: string
    email: string
    password: string
    order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarkInput = {
    uuid?: string
    username: string
    email: string
    password: string
    order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarkInput, UserUncheckedCreateWithoutBookmarkInput>
  }

  export type FoodCreateWithoutBookmarkInput = {
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category: CategoryCreateNestedOneWithoutFoodsInput
    method?: MethodCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsCreateNestedManyWithoutFoodInput
    order?: OrderCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutBookmarkInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category_id: number
    method?: MethodUncheckedCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsUncheckedCreateNestedManyWithoutFoodInput
    order?: OrderUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutBookmarkInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutBookmarkInput, FoodUncheckedCreateWithoutBookmarkInput>
  }

  export type UserUpsertWithoutBookmarkInput = {
    update: XOR<UserUpdateWithoutBookmarkInput, UserUncheckedUpdateWithoutBookmarkInput>
    create: XOR<UserCreateWithoutBookmarkInput, UserUncheckedCreateWithoutBookmarkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarkInput, UserUncheckedUpdateWithoutBookmarkInput>
  }

  export type UserUpdateWithoutBookmarkInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarkInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodUpsertWithoutBookmarkInput = {
    update: XOR<FoodUpdateWithoutBookmarkInput, FoodUncheckedUpdateWithoutBookmarkInput>
    create: XOR<FoodCreateWithoutBookmarkInput, FoodUncheckedCreateWithoutBookmarkInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutBookmarkInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutBookmarkInput, FoodUncheckedUpdateWithoutBookmarkInput>
  }

  export type FoodUpdateWithoutBookmarkInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
    method?: MethodUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUpdateManyWithoutFoodNestedInput
    order?: OrderUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutBookmarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    method?: MethodUncheckedUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUncheckedUpdateManyWithoutFoodNestedInput
    order?: OrderUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateWithoutMethodInput = {
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category: CategoryCreateNestedOneWithoutFoodsInput
    ingredients?: IngredientsCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkCreateNestedManyWithoutFoodInput
    order?: OrderCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutMethodInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category_id: number
    ingredients?: IngredientsUncheckedCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutFoodInput
    order?: OrderUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutMethodInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutMethodInput, FoodUncheckedCreateWithoutMethodInput>
  }

  export type FoodUpsertWithoutMethodInput = {
    update: XOR<FoodUpdateWithoutMethodInput, FoodUncheckedUpdateWithoutMethodInput>
    create: XOR<FoodCreateWithoutMethodInput, FoodUncheckedCreateWithoutMethodInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutMethodInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutMethodInput, FoodUncheckedUpdateWithoutMethodInput>
  }

  export type FoodUpdateWithoutMethodInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
    ingredients?: IngredientsUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUpdateManyWithoutFoodNestedInput
    order?: OrderUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    ingredients?: IngredientsUncheckedUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutFoodNestedInput
    order?: OrderUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateWithoutIngredientsInput = {
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category: CategoryCreateNestedOneWithoutFoodsInput
    method?: MethodCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkCreateNestedManyWithoutFoodInput
    order?: OrderCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category_id: number
    method?: MethodUncheckedCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutFoodInput
    order?: OrderUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutIngredientsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutIngredientsInput, FoodUncheckedCreateWithoutIngredientsInput>
  }

  export type FoodUpsertWithoutIngredientsInput = {
    update: XOR<FoodUpdateWithoutIngredientsInput, FoodUncheckedUpdateWithoutIngredientsInput>
    create: XOR<FoodCreateWithoutIngredientsInput, FoodUncheckedCreateWithoutIngredientsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutIngredientsInput, FoodUncheckedUpdateWithoutIngredientsInput>
  }

  export type FoodUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
    method?: MethodUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUpdateManyWithoutFoodNestedInput
    order?: OrderUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    method?: MethodUncheckedUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutFoodNestedInput
    order?: OrderUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    uuid?: string
    username: string
    email: string
    password: string
    bookmark?: BookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    uuid?: string
    username: string
    email: string
    password: string
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type FoodCreateWithoutOrderInput = {
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category: CategoryCreateNestedOneWithoutFoodsInput
    method?: MethodCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
    category_id: number
    method?: MethodUncheckedCreateNestedManyWithoutFoodInput
    ingredients?: IngredientsUncheckedCreateNestedManyWithoutFoodInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutOrderInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutOrderInput, FoodUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bookmark?: BookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bookmark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodUpsertWithoutOrderInput = {
    update: XOR<FoodUpdateWithoutOrderInput, FoodUncheckedUpdateWithoutOrderInput>
    create: XOR<FoodCreateWithoutOrderInput, FoodUncheckedCreateWithoutOrderInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutOrderInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutOrderInput, FoodUncheckedUpdateWithoutOrderInput>
  }

  export type FoodUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
    method?: MethodUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
    method?: MethodUncheckedUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUncheckedUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type BookmarkCreateManyUserInput = {
    food_id: number
  }

  export type OrderCreateManyUserInput = {
    id?: number
    location: string
    date?: Date | string
    rating: number
    food_id: number
  }

  export type BookmarkUpdateWithoutUserInput = {
    food?: FoodUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutUserInput = {
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    food?: FoodUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    food_id?: IntFieldUpdateOperationsInput | number
  }

  export type MethodCreateManyFoodInput = {
    id?: number
    step: number
    how: string
  }

  export type IngredientsCreateManyFoodInput = {
    id?: number
    name: string
    amount: number
    price: number
  }

  export type BookmarkCreateManyFoodInput = {
    user_uuid: string
  }

  export type OrderCreateManyFoodInput = {
    id?: number
    location: string
    date?: Date | string
    rating: number
    user_uuid: string
  }

  export type MethodUpdateWithoutFoodInput = {
    step?: IntFieldUpdateOperationsInput | number
    how?: StringFieldUpdateOperationsInput | string
  }

  export type MethodUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    step?: IntFieldUpdateOperationsInput | number
    how?: StringFieldUpdateOperationsInput | string
  }

  export type MethodUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    step?: IntFieldUpdateOperationsInput | number
    how?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type BookmarkUpdateWithoutFoodInput = {
    user?: UserUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutFoodInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
  }

  export type BookmarkUncheckedUpdateManyWithoutFoodInput = {
    user_uuid?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutFoodInput = {
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateManyCategoryInput = {
    id?: number
    name: string
    image?: string | null
    description?: string | null
    rating?: number | null
  }

  export type FoodUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    method?: MethodUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUpdateManyWithoutFoodNestedInput
    order?: OrderUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    method?: MethodUncheckedUpdateManyWithoutFoodNestedInput
    ingredients?: IngredientsUncheckedUpdateManyWithoutFoodNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutFoodNestedInput
    order?: OrderUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodCountOutputTypeDefaultArgs instead
     */
    export type FoodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodDefaultArgs instead
     */
    export type FoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookmarkDefaultArgs instead
     */
    export type BookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookmarkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MethodDefaultArgs instead
     */
    export type MethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MethodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientsDefaultArgs instead
     */
    export type IngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}