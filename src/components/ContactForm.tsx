"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nama harus memiliki minimal 2 karakter"),
  email: z.string().email("Harap berikan alamat email yang valid"),
  phone: z.string().min(8, "Harap berikan nomor telepon yang valid"),
  message: z.string().min(10, "Pesan harus memiliki minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    
    // In a real app, you would submit to an API endpoint
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isSubmitSuccessful && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md mb-6 border border-green-200">
          Terima kasih atas pesan Anda! Kami akan menghubungi Anda segera.
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#001435] mb-1"
          >
            Nama
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001435]/50 focus:border-[#001435] transition-all duration-300 hover:border-[#003366] text-[#001435]"
            placeholder="Nama lengkap Anda"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#001435] mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001435]/50 focus:border-[#001435] transition-all duration-300 hover:border-[#003366] text-[#001435]"
            placeholder="Alamat email Anda"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#001435] mb-1"
          >
            Telepon
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001435]/50 focus:border-[#001435] transition-all duration-300 hover:border-[#003366] text-[#001435]"
            placeholder="Nomor telepon Anda"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#001435] mb-1"
          >
            Pesan
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001435]/50 focus:border-[#001435] resize-none transition-all duration-300 hover:border-[#003366] text-[#001435]"
            placeholder="Bagaimana kami bisa membantu Anda?"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-[#001435] hover:bg-[#003366] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-white"
        size="lg"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </Button>
    </form>
  );
}
