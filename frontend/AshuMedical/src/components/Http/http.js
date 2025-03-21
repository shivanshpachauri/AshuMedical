import axios from "axios";
export async function checkemail({ email, password }) {
  const response = await axios.patch("http://localhost:3000/api/login", {
    email: email,
    password: password,
  });
  if (response.status != 200) {
    throw new Error("Error in login");
  }
  const data = await response.data;
  return data;
}

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
export async function searchmedicine(
  id,
  manufacturer_name,
  medicine_name,
  pack_size_label,
  short_composition1,
  isSorted
) {
  // Ensure id is treated correctly as a string (since it's a BigInt in the DB)
  const cleanValue = (value) => (value ? value.toString().trim() : " ");

  const params = {
    id: cleanValue(id), // Preserve BigInt by converting to string
    manufacturer_name: cleanValue(manufacturer_name),
    medicine_name: cleanValue(medicine_name),
    pack_size_label: cleanValue(pack_size_label),
    short_composition1: cleanValue(short_composition1),
  };

  // Add sorting conditionally
  if (isSorted) {
    params.sort = "searchasc";
  }

  try {
    const response = await axios.get(
      "http://localhost:3000/api/view/medicines",
      { params }
    );
    const dataArray = Object.entries(response.data || {});

    if (!dataArray.length) {
      throw new Error("No medicines found");
    }

    return dataArray;
  } catch (error) {
    throw new Error("Error in fetching medicines" + error);
  }
}

export async function Fetchmedicines(isSorted) {
  let medicines;

  if (isSorted) {
    medicines = await axios.get("http://localhost:3000/api/view", {
      params: { sort: "asc" },
    });
  } else {
    medicines = await axios.get("http://localhost:3000/api/view");
  }

  // const dataarray = Object.entries(medicines.data);
  const dataarray = medicines.data;
  if (!dataarray) {
    throw new Error("Error in Fetching All Medicines");
  }

  return dataarray;
}
export async function insertmedicines(medicine) {
  const {
    id,
    name,
    price,
    manufacturer_name,
    pack_size_label,
    short_composition1,
  } = medicine;
  try {
    const _response = await axios.post(
      "http://localhost:3000/api/postmedicines",
      {
        id: id,
        name: name,
        price: price,
        manufacturer_name: manufacturer_name,
        pack_size_label: pack_size_label,
        short_composition1: short_composition1,
      }
    );
    return _response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "An unknown error occurred."
    );
  }
}
export async function fetchdelivery() {
  const response = await axios.get("http://localhost:3000/api/fetchdelivery");

  const dataarray = response.data;
  return dataarray;
}
export async function updatedelivery(delivery) {
  const {
    id,
    name,
    pack_size_label,
    quantity,
    manufacturer_name,
    date,
    order_by,
    delivered,
  } = delivery;

  const response = await axios.put("http://localhost:3000/api/deliveryupdate", {
    id,
    name,
    pack_size_label,
    quantity,
    manufacturer_name,
    date,
    order_by,
    delivered,
  });
  return response;
}
export async function postdelivery(delivery) {
  const {
    name,
    pack_size_label,
    manufacturer_name,
    order_by,
    quantity,
    delivered,
    date,
  } = delivery;
  const _response = await axios.post("http://localhost:3000/api/deliverypost", {
    name: name,
    pack_size_label: pack_size_label,
    order_by: order_by,
    quantity: quantity,
    manufacturer_name: manufacturer_name,
    delivered: delivered,
    date: date,
  });
  if (_response.status != 200) {
    console.log("Error in recieving response");
  }
}
export async function deletemedicine(medicine) {
  const id = String(medicine.id);
  const response = await axios.delete("http://localhost:3000/api/delete", {
    data: { id: id },
  });
  if (response.status != 200) {
    throw new Error("Cannot delete");
  }
  return response.data;
}
export async function updatemedicine(medicine) {
  const {
    id,
    name,
    price,
    manufacturer_name,
    pack_size_label,
    short_composition1,
  } = medicine;
  const response = await axios.put("http://localhost:3000/api/update", {
    id: id,
    name: name,
    price: price,
    manufacturer_name: manufacturer_name,
    pack_size_label: pack_size_label,
    short_composition1: short_composition1,
  });
  if (response.status != 200) {
    throw new Error("Cannot update");
  }
  return response.json();
}
export async function formregister(registerables) {
  const { email, password, fullname, gender, dob, username } = registerables;
  console.log(email, password, fullname, gender, dob, username);
  const data = await axios.post("http://localhost:3000/api/register", {
    fullname: registerables.fullname,
    username: registerables.username,
    dob: registerables.dob,
    email: registerables.email,
    password: registerables.password,
    gender: registerables.gender,
  });
  if (data.status != 200) {
    console.log("Error in formregister");
  }
  return data;
}
