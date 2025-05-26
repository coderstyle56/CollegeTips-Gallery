import "./globals.css";



export const metadata = {
  title: 'CollegeTips Gallery',
  description: 'A stylish photo gallery for CollegeTips.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}
