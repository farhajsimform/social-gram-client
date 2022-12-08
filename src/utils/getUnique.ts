import { useMemo } from 'react'

export function getUniqueArray<T extends { _id?: string }>(items: T[]): T[] {
  return useMemo(() => {
    const unique: T[] = []
    ;(items || []).map((x: T) =>
      unique.filter((a) => a?._id == x?._id).length > 0 ? null : unique.push(x),
    )
    return unique
  }, [items, items.length])
}
