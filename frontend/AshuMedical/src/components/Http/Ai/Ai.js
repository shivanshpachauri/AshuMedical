import api from "../Axios";
export async function saveAi(ai) {
  try {
    const { title, body } = ai;
    const response = await api.post("/api/ai/save", {
      title,
      body,
    });
  } catch (error) {
    console.trace(error);
  }
}
export async function getAi() {
  try {
    const response = await api.get("/api/ai/view");
    return response.data;
  } catch (error) {
    console.trace(error);
  }
}

export const sendMessage = async ({ message }) => {
  try {
    const res = await api.post("/api/chat", {
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
