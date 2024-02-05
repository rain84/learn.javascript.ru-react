export const createInitialState = <T extends TData>(normalizedData: T[]) => ({
  entities: normalizedData.reduce<TEntities<T>>(
    (acc, value) => ((acc[value.id] = value), acc),
    {}
  ),
  id: normalizedData.map(({ id }) => id),
})

type TData = {
  id: string
} & {
  [K in string]: unknown
}

type TEntities<T extends TData> = Record<string, T>
