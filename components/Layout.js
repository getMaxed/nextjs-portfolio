import Link from 'next/link';

export default ({ children, title }) => (
    <div>
        <header>header</header>

        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>about</a>
        </Link>
        <Link href="/hireme">
            <a>hireme</a>
        </Link>

        <h1>{title}</h1>
        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
);
