import Head from 'next/head'
import Navigation from '@/components/Navigation.component'
import ReactTyped from 'react-typed'
import { TailwindContainer, Footer } from '@/components/Layout.styles'


const Layout = ({ children, title, description, theme, themeToggler }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navigation 
        themeToggler={themeToggler}
        theme={theme}
      />
      <TailwindContainer >
        { children }
      </TailwindContainer>
      <Footer><p> Copyright&copy;{new Date().getFullYear()}{' '}
        <ReactTyped
            loop
            showCursor
            typeSpeed={90}
            backSpeed={60}
            strings={["Hacker News Next.js SSR", "by Alex Burke"]}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            cursorChar="_"
          />
        </p></Footer>
    </>
  )
}

export default Layout



 