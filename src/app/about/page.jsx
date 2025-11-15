"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Aboutpage = () => {
  const router = useRouter();
  const isLoggedIn = false;  

  const handleNavigation = () => {
    if(isLoggedIn){
        router.push("/about/address")
    }else{
        router.push("/")
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl ">About Pages</h2>
      <Link href="/about/address">Address Page</Link>

      <button type="button" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
};

export default Aboutpage;
