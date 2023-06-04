import Card from "@/components/card/Card";
import Nav from "../components/layout/nav/Nav";
import Footer from "@/components/layout/footer/Footer";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <div className="bg-neutral-200">
      <Layout>
        <Nav />
        <Card />
        {/* <Footer /> */}
      </Layout>
    </div>
  )
}
