import { Flex } from "@mantine/core"
import { Link } from "@tanstack/react-router"

export const Header = () => {
  return (
    <header>
      <Flex h="40px" bg="neutral-black.1"></Flex>
      <nav className="flex flex-row">
        <div className="px-2 font-bold bg-neutral-white-50 h-[80px]">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </header>
  )
}
