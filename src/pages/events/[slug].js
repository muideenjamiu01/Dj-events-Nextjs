import {useRouter} from "next/router";
import Layout from "@/components/Layout";

export default function EventSinglePage() {
    // to use the router
    const router = useRouter()
    console.log(router)
  return (
    <Layout className="">
      <h1>Home</h1>
    </Layout>
  );
}
