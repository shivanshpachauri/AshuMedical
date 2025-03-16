import { InferenceClient } from "@huggingface/inference";

export default async function huggingface({ content }) {
  //   const HF_API_KEY = Deno.env.get("HF_API_KEY");
  const client = new InferenceClient("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");

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
  console.log(chatCompletion.choices[0].message.content);
  return chatCompletion.choices[0].message.content;
}
