require("dotenv").config();
const { OpenAIApi } = require("openai");

const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
});

const generateStory = async (nomeProduto) => {
    const prompt = `Generate a story about a ${nomeProduto}.`;
    try {
        const completion = await openai.createCompletion({
            model: "gpt-4-turbo-preview", // Verifique a versão atual do modelo e atualize conforme necessário
            prompt: prompt,
            max_tokens: 2048
        });
        return completion.data.choices[0].text.trim();
    } catch (error) {
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
        } else {
            console.error(error.message);
        }
    }
};

(async () => {
    const nomeProduto = "Knight's Sword";
    const story = await generateStory(nomeProduto);
    console.log(story);
})();
