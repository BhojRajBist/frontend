'use client';

import { Footer } from 'flowbite-react';

export default function FooterWithLogo() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <Footer.Copyright
          by="My Farm"
          year={2024}
        />
      </div>
    </Footer>
  )
}


