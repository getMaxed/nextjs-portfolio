import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout title="about">
        <Link href="/">
            <a>Home</a>
        </Link>
        <p>JS dev</p>
        <img src="/static/JavaScript-logo.png" alt="Js logo" height="200px" />
    </Layout>
);
