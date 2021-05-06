const handleApiCall = async (...args) => {
  const response = await fetch(...args).catch(handleError);

  return await handleResponse(response);
}

const handleResponse = async response => {
  if (response === null) return { message: "Something went wrong" };
  
  if (response.ok) {
    let json = await response.json();
    response = json.data;
  } else if (response.status === "404") {
    response.message = "Not found"
  } else {
    response.message = "Something went wrong";
  }

  return response;
}

const handleError = error => {
  console.warn(error);
  return null;
};

export default handleApiCall;
