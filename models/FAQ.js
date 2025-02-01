const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    hi: { question: String, answer: String },
    bn: { question: String, answer: String },
  },
});

faqSchema.methods.getTranslatedText = function (lang) {
  if (this.translations[lang]) {
    return {
      question: this.translations[lang].question || this.question,
      answer: this.translations[lang].answer || this.answer,
    };
  }
  return { question: this.question, answer: this.answer };
};

module.exports = mongoose.model("FAQ", faqSchema);