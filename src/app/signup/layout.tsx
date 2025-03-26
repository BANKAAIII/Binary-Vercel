"use client"

import { RecoilRoot } from "recoil";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
        <html lang="en">
             <head>
        {/* You can add meta tags, title, etc. here */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
            <body>
               
                {children}
                
                
            </body>
        </html>
        </RecoilRoot>
    );
}
