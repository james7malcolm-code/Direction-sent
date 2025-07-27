export default function handler(req, res) {
  // Replace with the URL you want to redirect to
  const targetUrl = "https://direction-testing.vercel.app/api/Redirect.js";

  res.redirect(302, targetUrl);
}
