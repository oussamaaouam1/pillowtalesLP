"use server";

export async function submitWaitlistEmail(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Mock API call — replace with Resend/Mailchimp integration
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`[Waitlist] New signup: ${email}`);

  return {
    success: true,
    message: "You're on the list! We'll notify you when Pillow Tales launches. ✨",
  };
}

export async function submitSupportForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all fields.",
    };
  }

  // Mock API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`[Support] From: ${name} <${email}> — ${message}`);

  return {
    success: true,
    message: "Thank you! We've received your message and will get back to you within 48 hours.",
  };
}

export async function submitDeleteAccount(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Mock API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log(`[Delete Account] Request for: ${email}`);

  return {
    success: true,
    message: "A deletion confirmation has been sent to your email.",
  };
}
