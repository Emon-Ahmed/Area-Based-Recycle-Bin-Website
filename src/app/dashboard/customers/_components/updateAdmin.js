"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UpdateAdmin = ({ getUserData, user }) => {
  const [admin, setAdmin] = useState(user?.isAdmin);
  const router = useRouter();

  const handleUpdateAdmin = async (isAdmin) => {
    setAdmin(isAdmin);
    let data = await fetch(`/api/users/${user?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isAdmin,
      }),
    });
    data = await data.json();
    if (data.success) {
      alert("Updated");
      router.refresh();
      getUserData();
    } else {
      alert("Try Again");
    }
  };
  const handleRemoveAdmin = () => handleUpdateAdmin(false);
  const handleMakeAdmin = () => handleUpdateAdmin(true);

  return (
    <form>
      {user?.isAdmin ? (
        <button
          className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onClick={handleRemoveAdmin}
        >
          Remove Admin
        </button>
      ) : (
        <button
          className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleMakeAdmin}
        >
          Make Admin
        </button>
      )}
    </form>
  );
};

export default UpdateAdmin;
