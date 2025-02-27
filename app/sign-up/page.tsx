"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LabelInput } from "@/components/labelInput";
import React, { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Password and confirm password does not match"]);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-[412px]">
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul>
            {errors.map((error) => (
              <li key={error} className="bg-red-100 text-red-500 py-2 rounded">
                {error}
              </li>
            ))}
          </ul>
        )}
        <div>
          <div className="font-bold text-center text-[32px] mt-10">Sign Up</div>
          <div className="text-gray-400 mt-4 text-center">
            Get started to play and win
          </div>
        </div>
        <div className="space-y-4 ml-4 mr-4 mt-6 mb-6">
          <LabelInput
            label="Name"
            htmlFor="name"
            inputId="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LabelInput
            label="Email"
            htmlFor="email"
            inputId="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelInput
            label="Mobile Number"
            htmlFor="mobile"
            inputId="mobile"
            type="number"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <LabelInput
            label="Referral Code (Optional)"
            htmlFor="refferal"
            inputId="refferal"
          />
          <LabelInput
            label="Password"
            htmlFor="password"
            inputId="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LabelInput
            label="Confirm Password"
            htmlFor="cpassword"
            inputId="cpassword"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4 mb-4 grid gap-3 disabled:bg-gray-500">
          <Button
            variant="default"
            className="text-white"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
          <div className="text-center">
            <Link href="/sign-in" className="text-base text-gray-400">
              Already have an account?
              <span className="text-blue-600"> Sign In</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
