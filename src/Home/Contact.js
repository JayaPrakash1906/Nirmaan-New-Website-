import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PageHeader from "../Components/PageHeader";

const CONTACT_EMAIL = "Nirmaan@smail.iitm.ac.in";

function Contact() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        setStatus("sending");

        try {
            const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
            });
            if (res.ok) {
                setStatus("sent");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="site-wrap font-dmsans">
            <Navbar />
            <main className="site-main">
                <PageHeader title="Contact us" trail={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
                <div className="site-container py-6 pb-10">
                    <p className="text-center text-gray-600 text-sm mb-6 max-w-xl mx-auto">
                        Send us a message and it will be delivered to{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-green-800 font-medium hover:underline">
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                    <form
                        id="form-input"
                        className="pro-card max-w-2xl mx-auto grid gap-4 md:grid-cols-2"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="_subject" value="Nirmaan website — contact form" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                        <input
                            type="text"
                            name="first_name"
                            required
                            placeholder="First Name"
                            className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 w-full"
                        />
                        <input
                            type="text"
                            name="last_name"
                            required
                            placeholder="Last Name"
                            className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address"
                            className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 w-full"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Contact Number"
                            className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 w-full"
                        />
                        <textarea
                            name="message"
                            required
                            placeholder="Your Message"
                            rows="4"
                            className="md:col-span-2 w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-green-200"
                        />
                        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            {status === "sent" && (
                                <p className="text-green-700 text-sm font-medium">Thank you — your message was sent.</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-600 text-sm">
                                    Could not send online. Please email{" "}
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                                        {CONTACT_EMAIL}
                                    </a>{" "}
                                    directly.
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="bg-green-700 text-white px-8 py-2 rounded-lg hover:bg-green-800 disabled:opacity-60 sm:ml-auto"
                            >
                                {status === "sending" ? "Sending…" : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;