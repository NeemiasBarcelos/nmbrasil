import { Skeleton } from '../ui/skeleton'
import { TableCell, TableRow } from '../ui/table'

export function SkeletonRow() {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell>
              <Skeleton className='h-10 w-[200px] bg-zinc-700' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-10 w-[200px] bg-zinc-700' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-10 w-[200px] bg-zinc-700' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-10 w-[200px] bg-zinc-700' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-10 w-[200px] bg-zinc-700' />
            </TableCell>
          </TableRow>
        ))}
    </>
  )
}
