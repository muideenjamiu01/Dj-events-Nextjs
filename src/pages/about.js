
import Link from "next/link";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout className="" title="About Dj Event">
      <h1>About</h1>
      <p>This is an app to find the latest dj and other musical events</p>
      <p>Version 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}

// you can hvave the default contents for the layout

