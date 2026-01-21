interface FooterProps {
  footerText: string;
}

export default function Footer({ footerText }: FooterProps) {
  return (
    <footer className="bg-highlight-dark py-4 sm:py-6 md:py-8 mt-8 sm:mt-12 md:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-background text-sm sm:text-base md:text-lg leading-relaxed">{footerText}</p>
      </div>
    </footer>
  );
}
