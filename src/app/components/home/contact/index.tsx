"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setContactData(data.contactLinks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/2004nandakishore@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
          resetForm();

          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">

          {/* Heading */}

          <div className="flex items-center justify-between border-b border-black pb-7 mb-10">
            <h2>Let's Connect</h2>
            <p className="text-xl text-black">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Contact Form */}

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div>
                    <label className="label">Name *</label>

                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="label">Phone *</label>

                    <input
                      required
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                </div>

                <div>
                  <label className="label">Email *</label>

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label className="label">Message *</label>

                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input resize-none"
                  />
                </div>

                {submitted && (
                  <div className="flex items-center gap-3">

                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success"
                      width={24}
                      height={24}
                    />

                    <p className="text-green-600 font-medium">
                      Your message has been sent successfully. I'll get back to
                      you soon!
                    </p>

                  </div>
                )}

                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-lime-500 px-8 py-4 font-semibold text-lime-600 transition-all duration-500 hover:bg-lime-500 hover:text-white hover:shadow-[0_0_20px_rgba(132,204,22,0.6)]"
                >
                  Send Message
                </button>

              </div>
            </form>

            {/* Contact Details */}

            <div className="flex flex-col gap-12 lg:items-end">

              <div>

                <h3 className="text-2xl font-semibold mb-5">
                  Find Me On
                </h3>

                <div className="flex gap-6">

                  {contactData?.socialLinks?.map(
                    (item: any, index: number) => (
                      <Link
                        key={index}
                        href={item.href}
                        target="_blank"
                        className="text-lg text-gray-600 hover:text-lime-500 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )
                  )}

                </div>

              </div>

              <div>

                <h3 className="text-2xl font-semibold mb-5">
                  Contact Information
                </h3>

                <div className="flex flex-col gap-5">

                  {contactData?.contactInfo?.map(
                    (item: any, index: number) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="w-fit border-b border-black pb-2 text-lg text-black transition-all duration-300 hover:border-lime-500 hover:text-lime-500"
                      >
                        {item.label}
                      </Link>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
