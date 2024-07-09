"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ location }) => {
  const router = useRouter();
  async function handleDelete() {
    let res = await fetch(`/api/location/${location?._id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
      alert("Deleted");
    }
  }
  return <Button onClick={handleDelete}>Delete</Button>;
};

export default DeleteButton;
