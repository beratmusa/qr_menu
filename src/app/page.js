import LandingPage from "@/components/client/landingPage";
import MenuHeader from "@/components/client/menuHeader";
import ProductList from "@/components/client/productList";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <div className="transition-page">
        <MenuHeader />
        <ProductList />
      </div>
    </div>
  );
}
