import React from 'react';

type historyProps = {
  title: string;
  image: string;
  children: React.ReactNode;
};

export default function HistoryCard({
  title,
  image,
  children,
}: historyProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{image}</div>
      <div>{children}</div>
    </div>
  );
}
