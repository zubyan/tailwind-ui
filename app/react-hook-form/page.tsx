"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LabelInput } from "@/components/labelInput";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
    console.log(data);
  };

  return (
    <div className="max-w-[412px]">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500">{`${errors.name.message}`}</p>
          )}
          <LabelInput
            label="Email"
            htmlFor="email"
            inputId="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
          <LabelInput
            label="Mobile Number"
            htmlFor="mobile"
            inputId="mobile"
            type="number"
            {...register("mobile", { required: "Mobile number is required" })}
          />
          {errors.mobile && (
            <p className="text-red-500">{`${errors.mobile.message}`}</p>
          )}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password must be at least 5 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
          <LabelInput
            label="Confirm Password"
            htmlFor="cpassword"
            inputId="cpassword"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords must match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
          )}
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
