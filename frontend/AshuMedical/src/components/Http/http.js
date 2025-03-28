import axios from "axios";
//  for login and password it is in Http/Login/login.js
// Ai related Ai/Ai.j

// for medicines
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

    return response.data;
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
// delivery related
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
