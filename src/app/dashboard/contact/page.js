"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatMyDate } from "@/lib/date";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Loading from "@/app/loading";

const ContactDashboard = () => {
  const [contact, setContact] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setContact(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!contact) return <p>No contact</p>;
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Reply</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contact?.map((contact, i) => {
            return (
              <TableRow key={i}>
                <TableCell className="font-medium">{contact?.fname}</TableCell>

                <TableCell>{contact?.message}</TableCell>
                <TableCell>{formatMyDate(contact?.createdOn)}</TableCell>
                <TableCell>{contact?.email}</TableCell>
                <TableCell>
                  <Link href={"mailto:info@" + contact?.email}>
                    <Button>Reply</Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContactDashboard;
