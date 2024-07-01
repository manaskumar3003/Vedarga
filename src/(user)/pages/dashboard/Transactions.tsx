
import { ArrowUpRight } from "lucide-react"

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

const spending = [
  {
    title: "domain",
    cost: "250",
  },
  {
    title: "hosting",
    cost: "125",
  },
  {
    title: "advertising",
    cost: "125",
  },
]

export default function Transactions() {
  return (
    <Card className="mt-5 xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription>
            Recent spends from your budget
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Topic</TableHead>
              <TableHead className="hidden xl:table-column">Type</TableHead>
              <TableHead className="hidden xl:table-column">Status</TableHead>
              <TableHead className="hidden xl:table-column">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {spending.map((spending, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">{spending.title}</div>
              </TableCell>
              <TableCell className="hidden xl:table-column">Sale</TableCell>
              <TableCell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                2023-06-23
              </TableCell>
              <TableCell className="text-right">${spending.cost}</TableCell>
            </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
