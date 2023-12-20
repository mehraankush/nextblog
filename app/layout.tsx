import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Love Babbar",
  description: "Love Babbar",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={` min-h-screen  ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className=" h-full bg-[#F9F9F8]  dark:bg-gradient-to-r dark:from-[#20232B] dark:to-[#13111C] text-slate-900 dark:text-slate-50 ">
            <div className="max-w-4xl mx-auto py-10 px-4 ">
              <Navbar/>
              <main>{children}</main>
              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
