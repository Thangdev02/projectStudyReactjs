import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";

const EmailVerify = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_jnpqqfe", // Thay bằng Service ID của bạn
        "template_75a9o6o", // Thay bằng Template ID của bạn
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          phone: formData.phone,
          message: formData.message,
        },
        "mTMw5cFxu5GyH2bxn" // Thay bằng Public Key của bạn
      );
      alert("Email sent successfully!");
      setFormData({ user_name: "", user_email: "", phone: "", message: "" }); // Xóa form sau khi gửi
    } catch (error) {
      alert("Failed to send email. Error: " + error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "400px", margin: "0 auto", mt: 5, p: 2, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
        Contact Us
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          fullWidth
          label="Your Name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Your Email"
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Your Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Send Email"}
        </Button>
      </form>
    </Box>
  );
};

export default EmailVerify;
