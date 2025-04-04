"use client";

import { ContactFormData, ContactFormSchema } from "@/schema/ContactSchema";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });
  const handleFormSubmit = async (data: ContactFormData) => {
    setisLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        toaster.create({
          title: "Message sent.",
          description: "Your message has been sent successfully.",
          type: "success",
          duration: 5000,
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toaster.error({
        title: "Error.",
        description: "An error occurred while sending your message.",
        type: "error",
        duration: 5000,
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Fieldset.Root
      borderWidth={"1px"}
      borderRadius={"lg"}
      borderColor={"brand.gray"}
      padding={"2rem"}
      boxShadow={"lg"}
      _hover={{ boxShadow: "xl", cursor: "pointer" }}
      _active={{ boxShadow: "md" }}
      _focus={{ boxShadow: "md" }}
      transition={"box-shadow 0.3s"}
      marginX={{ base: "1rem", md: "2rem" }}
      marginY={"2rem"}
      marginBottom={{ base: "2rem", md: "0" }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Stack>
        <Fieldset.Legend>Leave a message</Fieldset.Legend>
        <Fieldset.HelperText>
          Please fill in the form below to send us a message.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field.Root invalid={!!errors.Fullname}>
          <Field.Label>Full Name</Field.Label>
          <Input
            {...register("Fullname")}
            required
            placeholder="Your full name"
          />
          {errors.Fullname && (
            <Text color="red.500">{errors.Fullname.message}</Text>
          )}
        </Field.Root>

        <Field.Root invalid={!!errors.Email}>
          <Field.Label>Email</Field.Label>
          <Input
            {...register("Email")}
            required
            type="email"
            placeholder="Your email address"
          />
          {errors.Email && <Text color="red.500">{errors.Email.message}</Text>}
        </Field.Root>

        <Field.Root invalid={!!errors.Subject}>
          <Field.Label>Subject</Field.Label>
          <Input {...register("Subject")} required placeholder="Subject" />
          {errors.Subject && (
            <Text color="red.500">{errors.Subject.message}</Text>
          )}
        </Field.Root>

        <Field.Root invalid={!!errors.Message}>
          <Field.Label>Message</Field.Label>
          <Textarea
            {...register("Message")}
            required
            placeholder="Enter your message"
          />
          {errors.Message && (
            <Text color="red.500">{errors.Message.message}</Text>
          )}
        </Field.Root>
      </Fieldset.Content>

      <Button
        type="submit"
        alignSelf="flex-start"
        bg="brand.maroon"
        color="brand.white"
        _hover={{ bg: "brand.gray" }}
        loading={isLoading}
        loadingText="Sending..."
      >
        Send Message
      </Button>
    </Fieldset.Root>
  );
};

export default ContactForm;
