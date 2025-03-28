import { InferenceClient } from "@huggingface/inference";
export default async function huggingface({ content }) {
  const HF_API_KEY = Deno.env.get("HF_API_KEY");
  const client = new InferenceClient(HF_API_KEY);

  const chatCompletion = await client.chatCompletion({
    model: "google/gemma-2-9b-it",
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    provider: "novita",
    max_tokens: 500,
  });
  return chatCompletion.choices[0].message.content;
}
