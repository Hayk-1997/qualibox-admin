import React from 'react';

interface ILayout {
  children: React.ReactElement;
}

export default function AuthPageLayout({ children }: ILayout): JSX.Element {
  return (
    <>
      <main>
        <section className="content">
          <div className="container-fluid">{children}</div>
        </section>
      </main>
    </>
  );
}
