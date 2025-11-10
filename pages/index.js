import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <img src="/images/banner.jpg" alt="Banner" className="w-full h-64 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">Welcome to RobloxShop Clone</h1>
        <p className="mt-2">Trang mua Robux và items Roblox tạm thời mô phỏng.</p>
      </main>
      <Footer />
    </div>
  );
}
