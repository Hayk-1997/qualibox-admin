import React from 'react';

interface ILayout {
  children: React.ReactElement;
}

export default function LoginPageLayout({ children }: ILayout): JSX.Element {
  return (
    <>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
