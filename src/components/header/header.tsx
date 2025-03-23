"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search") as string;
    if (search) {
      router.push(`/search?q=${search}`);
    }
  };
  return (
    <header className="container mx-auto flex h-20 w-full shrink-0 items-center ">
      <NavigationMenu title="Menu" className="flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild></NavigationMenuLink>
        </NavigationMenuList>
        <form onSubmit={onSubmit}>
          <Input
            type="search"
            name="search"
            placeholder="Search"
            className="w-64"
          />
        </form>
      </NavigationMenu>
      <div className="ml-auto flex gap-2"></div>
    </header>
  );
}
