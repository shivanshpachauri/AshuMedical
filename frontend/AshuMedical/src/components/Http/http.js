import axios from "axios";
export async function checkemail(email, password) {
  const response = await axios.patch("http://localhost:5173/api/login", {
    email: email,
    password: password,
  });
  if (!response.ok) {
    throw new Error("Error in login");
  }
  const data = await response.json();
  return data;
}

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
    // console.error("Error fetching medicines:", error.message);

    // return [];
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
  const dataarray = Object.entries(medicines.data);
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
  if (_response.status !== 200) {
    throw new Error("Cannot insert to medicaldb");
  }
}
export async function deletemedicine(medicine) {
  const id = String(medicine[1].id);
  const response = await axios.delete("http://localhost:3000/api/delete", {
    data: { id: id },
  });
  if (response.status !== 200) {
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
  const{email,password,fullname,gender,dob,username}=registerables;
  console.log(email,password,fullname,gender,dob,username);
  const data = await axios.post("http://localhost:3000/api/register", {
    fullname:registerables.fullname,
    username:registerables.username,
    dob:registerables.dob,
    email: registerables.email,
    password: registerables.password,
    gender: registerables.gender,
  });
  if(data.status!=200){
    console.log("Error in formregister");
    
  }
  return data;
}
