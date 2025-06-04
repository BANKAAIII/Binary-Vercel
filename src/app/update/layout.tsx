"use client"


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
       
        <html lang="en">
            
        {/* You can add meta tags, title, etc. here */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body>
     <main>
               
                {children}
                
                
            </main>
            </body>
       </html>
    );
}
