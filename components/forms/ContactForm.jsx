"use client";
import { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { CONTACT_FORM_API } from "@/api/const";
import { validateContactForm } from "@/utils/validations";
import Button from "../ui/Button";

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e?.target || {};

    if (name === undefined) {
      setFormData((prev) => ({
        ...prev,
        mobile: value,
      }));

      if (errors.mobile) {
        setErrors((prev) => ({
          ...prev,
          mobile: "",
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateContactForm(formData, setErrors)) {
      const payload = {
        ...formData,
      };
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${CONTACT_FORM_API}`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      onClose();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
      <div className="flex w-full flex-col gap-4">
        <div className="w-full">
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border ${
              errors.name ? "border-danger" : "border-border"
            } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-danger">{errors.name}</p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Mobile Number *
          </label>
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.mobile}
            onChange={(value) => {
              handleChange({ target: { name: "mobile", value } });
            }}
            className={`w-full border ${
              errors.mobile ? "border-danger" : "border-border"
            } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
          />
          {errors.mobile && (
            <p className="mt-1 text-sm text-danger">{errors.mobile}</p>
          )}
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-secondary mb-1"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border ${
            errors.email ? "border-danger" : "border-border"
          } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-danger">{errors.email}</p>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-secondary mb-1"
        >
          description *
        </label>
        <textarea
          id="description"
          name="description"
          type="text"
          placeholder="New York"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          className={`w-full border ${
            errors.description ? "border-danger" : "border-border"
          } rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent resize-none`}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-danger">{errors.description}</p>
        )}
      </div>

      <Button
        type="submit"
        className="relative border rounded-none z-10 transition-colors duration-300 group-hover:text-background flex items-center gap-2 text-sm font-bold justify-center"
      >
        Submit Application
      </Button>
    </form>
  );
}
