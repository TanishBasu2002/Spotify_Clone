"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";

const AccountContent = () => {
  const router = useRouter();
  const { isLoading, subscription, user } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  return ( 
    <div className="mb-7 px-6">
        <div className="flex flex-col gap-y-4">
        <p>No active plan.</p>
        <Button 
          onClick={()=>{}}
          className="w-[300px]"
        >
          Subscribe
        </Button>
        <p>Will be available soon</p>
        <Button 
          onClick={()=>{}}
          className="w-[300px] bg-[#ff3333]"
        >
          Delete Account
        </Button>
        <p>Will be available soon</p>
      </div>
    </div>
  );
}
 
export default AccountContent;
