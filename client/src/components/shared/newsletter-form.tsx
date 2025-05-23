
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  source?: string;
  className?: string;
  buttonText?: string;
  buttonClassName?: string;
  inputClassName?: string;
  showSuccessMessage?: boolean;
}

export default function NewsletterForm({
  source = "footer",
  className = "",
  buttonText = "Subscribe",
  buttonClassName = "",
  inputClassName = "",
  showSuccessMessage = true,
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: NewsletterFormValues) {
    setIsSubmitting(true);
    setError(null);

    try {
      // Make sure to use absolute URL with the correct port
      const response = await fetch(`${window.location.origin}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          source: source,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Success
      setIsSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={className}>
      {isSuccess && showSuccessMessage ? (
        <div className="text-center p-4 bg-green-50 text-green-700 rounded-lg">
          <p className="font-medium">Thanks for subscribing!</p>
          <p className="text-sm mt-1">You've been added to our newsletter.</p>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Input
                        placeholder="Your email address"
                        {...field}
                        className={inputClassName}
                        disabled={isSubmitting}
                      />
                      <Button
                        type="submit"
                        className={buttonClassName}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Subscribing..." : buttonText}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </form>
        </Form>
      )}
    </div>
  );
}
