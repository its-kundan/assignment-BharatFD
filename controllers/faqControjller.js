const FAQ = require("../models/FAQ");
const redisClient = require("../cache/redisClient");
const { translateText } = require("../services/translationService");

const getFAQs = async (req, res) => {
  const lang = req.query.lang || "en";

  try {
    // Check cache first
    const cachedFAQs = await redisClient.get(`faqs:${lang}`);
    if (cachedFAQs) {
      return res.json(JSON.parse(cachedFAQs));
    }

    // Fetch from database
    const faqs = await FAQ.find({});
    const translatedFAQs = faqs.map((faq) => faq.getTranslatedText(lang));

    // Cache the result
    redisClient.set(`faqs:${lang}`, JSON.stringify(translatedFAQs), "EX", 3600); // Cache for 1 hour

    res.json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createFAQ = async (req, res) => {
  const { question, answer } = req.body;

  try {
    // Translate to Hindi and Bengali
    const [questionHi, answerHi] = await Promise.all([
      translateText(question, "hi"),
      translateText(answer, "hi"),
    ]);
    const [questionBn, answerBn] = await Promise.all([
      translateText(question, "bn"),
      translateText(answer, "bn"),
    ]);

    const newFAQ = new FAQ({
      question,
      answer,
      translations: {
        hi: { question: questionHi, answer: answerHi },
        bn: { question: questionBn, answer: answerBn },
      },
    });

    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getFAQs, createFAQ };