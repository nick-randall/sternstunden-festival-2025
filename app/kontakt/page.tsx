"use client";
import Link from "next/link";
import "../../styles/common.css";
import "../../styles/contact-page.css";
import Spacer from "@/components/Spacer";
import { useState } from "react";

interface ContactFormValues {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

const KontaktPage: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (sending) return;
    setSending(true);
    setErrorMessage("");
    setSent(false);
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formValues);
    window.history.pushState({}, document.title);
    handleSend();
  };

  const handleError = (error: string) => {
    console.error("Error:", error);
    setErrorMessage("Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut.");
    setSending(false);
    setSent(false);
  };

  const handleSend = async () => {
    let status = 0;
    try {
      const resp = await fetch("https://sternstunden-email-server.fly.dev/send-email", { method: "POST", body: JSON.stringify(formValues) });
      status = resp.status;
    } catch (error) {
      handleError(error as string);
    }
    if (status >= 200 && status < 300) {
      setFormValues({ firstname: "", lastname: "", email: "", subject: "", message: "" });
      setSent(true);
    } else {
      handleError("Fehler beim Senden der Nachricht.");
    }
    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form-container">
        <h1>KONTAKT</h1>
        <Link href="mailto:info@sternstundenfestival.de">info@sternstundenfestival.de</Link>
        <Spacer height={16} />
        <div className="contact-form-row">
          <div className="item">
            <label htmlFor="firstname">Vorname</label>
            <input name="firstname" type="text" value={formValues.firstname} onChange={handleChange} />
          </div>
          <div className="item">
            <label htmlFor="lastname">Nachname</label>
            <input name="lastname" type="text" value={formValues.lastname} onChange={handleChange} />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="item">
            <label htmlFor="email">Email-Adresse *</label>
            <input name="email" type="email" required value={formValues.email} onChange={handleChange} />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="item">
            <label htmlFor="subject">Betreff</label>
            <input name="subject" className="subject" value={formValues.subject} onChange={handleChange} />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="item">
            <label htmlFor="message">Nachricht schreiben</label>
            <textarea name="message" className="message" value={formValues.message} onChange={handleChange} />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="item">
            {sent && errorMessage === "" ? (
              <div>Erfolgreich gesendet!</div>
            ) : (
              <button type="submit">{sending ? "Wird abgesendet..." : "Absenden"}</button>
            )}
          </div>
        </div>
        <div className="contact-form-row">{errorMessage && <div className="error-message">{errorMessage}</div>}</div>
      </div>
      <div className="text-box">
        <br />
        <span style={{ fontSize: 14 }}>(&lowast;) benötigt.</span>
      </div>
    </form>
  );
};

export default KontaktPage;
