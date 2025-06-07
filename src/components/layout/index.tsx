import { ReactNode } from "react"
import { Header } from "../common/header"

interface IAppLayout {
  children: ReactNode
}

export const AppLayout = ({ children }: IAppLayout) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}