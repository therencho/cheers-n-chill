import { Lato, Playfair_Display } from 'next/font/google'
 
export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-lato',
})
 
export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',

})