'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Form from 'next/form';

export function Header() {
  const pathname = usePathname();
  return (
    <header>
      <Link
        href="/"
        className={pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link
        href="/posts"
        className={pathname === '/posts' ? 'active' : ''}
      >
        Posts
      </Link>
      <Form action="/posts">
        <input
          type="search"
          name="criteria"
          placeholder="Search"
          aria-label="Search blog posts"
        />
      </Form>
    </header>
  );
}
