const translate = require("google-translate-api");

const translateText = async (text, lang) => {
  try {
    const res = await translate(text, { to: lang });
    return res.text;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Fallback to original text
  }
};

module.exports = { translateText };