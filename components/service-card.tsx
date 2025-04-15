import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  className?: string
}

export default function ServiceCard({ icon: Icon, title, description, href, className }: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card className={cn("h-full transition-all hover:shadow-lg", className)}>
        <CardHeader>
          <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#5E308C]/10">
            <Icon className="h-6 w-6 text-[#5E308C]" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
