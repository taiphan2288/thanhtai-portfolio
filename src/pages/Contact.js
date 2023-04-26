import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (formData, e) => {
    e.preventDefault();
    // console.log(formData);

    await emailjs
      .sendForm(
        "service_3ammzdk",
        "template_nrjdjav",
        form.current,
        "57_OhC7XfJ0J2b8vw"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          // console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset();
  };

  return (
    <section id="contact" className="pt-32 pb-16">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col items-center justify-center w-full"
      >
        <p className="font-bold text-7xl mb-4 w-full text-center md:text-5xl xs:text-4xl md:mb-2 dark:text-light uppercase">
          <span className="text-red">CONTACT </span>Me
        </p>

        <LineGradient width="mx-auto w-1/5 ss:w-3/5 xl:w-2/5 " />
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="flex justify-center items-center mt-32 xs:mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="w-[65%] md:w-full lg:w-[90%]"
        >
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <input
              className="w-full bg-white font-semibold placeholder-opaque-black p-3 text-black rounded-2xl outline-none"
              type="text"
              name="name"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-white font-semibold text-black placeholder-opaque-black p-3 mt-5 rounded-2xl outline-none"
              type="text"
              placeholder="EMAIL"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-white font-semibold text-black placeholder-opaque-black p-3 mt-5 rounded-2xl outline-none"
              name="message"
              placeholder="MESSAGE"
              rows="6"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="flex items-center p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 rounded-2xl xs:mx-auto"
              type="submit"
            >
              SEND A MESSAGE <FiSend className="ml-2" size={22} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
