"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ category }) => {
  const router = useRouter();
  async function handleDelete() {
    let res = await fetch(`/api/category/${category?._id}`, {
      method: "DELETE",
    });

    // res = await res.json();
    if (res.ok) {
      router.refresh();
      alert("Deleted");
    }
  }
  return <Button onClick={handleDelete}>DeleteButton</Button>;
};

export default DeleteButton;
