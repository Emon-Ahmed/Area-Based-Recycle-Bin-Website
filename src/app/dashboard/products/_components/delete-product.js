"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ product }) => {
  const router = useRouter();
  async function handleDelete() {
    let res = await fetch(`/api/products-show/${product?._id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
      alert("Deleted");
    }
  }
  return <div onClick={handleDelete}>Delete</div>;
};

export default DeleteButton;
