import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "./hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, HideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "Biniyam",
          from_email: form.email,
          to_email: "benjamin.negussie@gmail.com",
          message: `From: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ show:true, text:"Message sent successfully! I will get back to you soon.", type:'success'} );

        setTimeout(() => {
          HideAlert();
          setCurrentAnimation("idle")
          setForm({ name: "", email: "", message: "" });
        }, [5000]);
        formRef.current.reset();
        
      })
      .catch(() => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({ show:true, text:"I didn't receive your message 😢", type:'danger'} );

      });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="bg-black relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}
      <Alert {...alert} />
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text ">Get in touch </h1>
        <form
          className="w-full flex flex-col  gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-white font-semibold">
            Name <span className="red-asterisk"> *</span>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold">
            Email <span className="red-asterisk"> *</span>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold">
            Message <span className="red-asterisk"> *</span>
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]  ">
        <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        
        }}>
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback= {<Loader/>}>
            <Fox
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.8, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
            />

          </Suspense>

        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
