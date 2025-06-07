// eslint-disable-next-line @next/next/no-page-custom-font
export default function Head() {
  return (
    <>
      <title>Donald Upshaw | Forklift Operator & Machine Specialist</title>
      <meta
        name="description"
        content="Resume and experience portfolio of Donald Upshaw, a certified forklift and machine operator based in Decatur, GA. OSHA certified and trained in food production, warehouse safety, and heavy equipment handling."
      />
      <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="theme-color" content="#0a0a0a" />

      {/* Font Preload (manually included — but you can omit if using next/font) */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;700&family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
