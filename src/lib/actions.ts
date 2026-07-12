"use server";

export async function submitWaitlistEmail(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  const url = `${process.env.CONVEX_SITE_URL}/waitlist/join`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "You're on the list! We'll notify you when Pillow Tales launches. ✨",
      };
    } else {
      return { success: false, message: "An error occurred. Please try again." };
    }
  } catch (error) {
    return { success: false, message: "Failed to connect to the server." };
  }
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

  const url = `${process.env.CONVEX_SITE_URL}/support/submit`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you! We've received your message and will get back to you within 48 hours.",
      };
    } else {
      return { success: false, message: "An error occurred. Please try again." };
    }
  } catch (error) {
    return { success: false, message: "Failed to connect to the server." };
  }
}

export async function requestDeletionOTP(formData: FormData) {
  const email = formData.get("email") as string;
  const reason = formData.get("reason") as string;

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const url = `${process.env.CONVEX_SITE_URL}/delete-account/request-otp`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, reason }),
    });

    if (response.ok) {
      return { success: true, message: "A verification code has been sent to your email." };
    } else if (response.status === 404) {
      return { success: false, message: "No active account was found with that email." };
    } else {
      return { success: false, message: "An error occurred. Please try again." };
    }
  } catch (error) {
    return { success: false, message: "Failed to connect to the server." };
  }
}

export async function verifyDeletionOTP(formData: FormData) {
  const email = formData.get("email") as string;
  const otp = formData.get("otp") as string;

  if (!otp || otp.length !== 6) {
    return { success: false, message: "Please enter the 6-digit code." };
  }

  const url = `${process.env.CONVEX_SITE_URL}/delete-account/verify-otp`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    if (response.ok) {
      return { success: true, message: "Your account and all associated data have been permanently deleted." };
    } else if (response.status === 401) {
      return { success: false, message: "Invalid or expired verification code." };
    } else {
      return { success: false, message: "An error occurred. Please try again." };
    }
  } catch (error) {
    return { success: false, message: "Failed to connect to the server." };
  }
}
