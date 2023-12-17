"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { closeSnackbar, enqueueSnackbar, SnackbarProvider } from "notistack";
import {
  emailPattern,
  handleEmpty,
  handlePattern,
} from "@/utilities/form/FormHandlers";
import "@/components/ContactForm/contact-form.scss";

type FormErrorState = {
  nameError: string;
  emailError: string;
  messageError: string;
};

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const [formError, setFormError] = useState<FormErrorState>({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const validateForm = (): boolean => {
    let valid: boolean = true;

    setFormError({
      nameError: "",
      emailError: "",
      messageError: "",
    });

    if (handleEmpty(name)) {
      setFormError((formValueErr) => ({
        ...formValueErr,
        nameError: "Don't deny me the pleasure of a name",
      }));
      valid = false;
    }

    if (handleEmpty(message)) {
      setFormError((formValueErr) => ({
        ...formValueErr,
        messageError: "Don't forget to let me know what you're thinking!",
      }));
      valid = false;
    }

    if (!handlePattern(email, emailPattern)) {
      setFormError((formValueErr) => ({
        ...formValueErr,
        emailError:
          "Please use a valid email address, I would love to make the acquaintance",
      }));
      valid = false;
    }

    return valid;
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleMessage = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };

  const submitForm = (event: FormEvent): void => {
    event.preventDefault();
    setDisabled(true);
    if (validateForm()) {
      enqueueSnackbar("It's on it's way, hang tight!", { variant: "info" });
      fetch("https://galacticdesign.io/api/galactic-design/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            closeSnackbar();
            enqueueSnackbar(
                "An error occurred sending your message, please try again or contact support.",
                { variant: "error" }
            );
            return;
          }
          closeSnackbar();
          enqueueSnackbar("Your message was sent, thanks for reaching out!", {
            variant: "success",
          });
        })
        .finally(() => {
          setName("");
          setEmail("");
          setMessage("");
          setDisabled(false);
        });
    }
    setDisabled(false);
  };

  return (
    <Box>
      <SnackbarProvider maxSnack={5} preventDuplicate />
      <form className="contact-column">
        <TextField
          required
          color="secondary"
          label="Name"
          value={name}
          autoComplete="name"
          onChange={handleName}
          error={!!formError.nameError}
          helperText={formError.nameError}
        />
        <TextField
          required
          color="secondary"
          label="Email"
          value={email}
          autoComplete="email"
          onChange={handleEmail}
          error={!!formError.emailError}
          helperText={formError.emailError}
        />
        <TextField
          required
          color="secondary"
          multiline
          rows={7}
          label="Message"
          value={message}
          autoComplete="off"
          onChange={handleMessage}
          error={!!formError.messageError}
          helperText={formError.messageError}
        />
        <Button
          disabled={disabled}
          sx={{ placeSelf: "end" }}
          variant="contained"
          onClick={submitForm}
          type="submit"
        >
          Send it
        </Button>
      </form>
    </Box>
  );
}
