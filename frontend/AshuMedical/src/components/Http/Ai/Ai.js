import axios from "axios";
export async function saveAi(ai) {
  try {
    const { title, body } = ai;
    const response = await axios.post("http://localhost:3000/api/ai/save", {
      title,
      body,
    });
  } catch (error) {
    console.trace(error);
  }
}
export async function getAi() {
  try {
    const response = await axios.get("http://localhost:3000/api/ai/view");
    return response.data;
  } catch (error) {
    console.trace(error);
  }
}

export const sendMessage = async ({ message }) => {
  try {
    const res = await axios.post("http://localhost:3000/api/chat", {
      message,
    });
    const data = await res.data;
    const dataarray = Object.entries(data);
    return dataarray;
  } catch (error) {
    console.error("Error sending message:", error);
    setResponse("Error sending message");
  }
};
