import handleApiCall from "./apiCallHandler";

export const mainUrl = "http://localhost:4000/api/";
// const mainUrl = "https://localhost:44387/";

export async function fetchAll(route, query) {
  const URI = `${mainUrl}${route}${query !== undefined ? "?" + query : ""}`;

  return await handleApiCall(URI);
}

export async function fetchOne(route, id) {
  const URI = `${mainUrl}${route}/${id}`;

  return await handleApiCall(URI);
}

export async function addOne(route, data) {
  const URI = `${mainUrl}${route}/`;
  const requestData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return await handleApiCall(URI, requestData);
}

export async function toggleFailureStatus(id) {
  const URI = `${mainUrl}failures/${id}`;
  const requestData = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  };

  return await handleApiCall(URI, requestData);
}

export async function deleteOne(route, id) {
  const URI = `${mainUrl}${route}/${id}`;
  const requestData = {
    method: "DELETE",
  };

  return await handleApiCall(URI, requestData);
}

export async function editOne(route, id, data) {
  const URI = `${mainUrl}${route}/${id}`;
  const requestData = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return await handleApiCall(URI, requestData);
}

export async function upload(files, failureId) {
  const data = new FormData();

  for (let i = 0; i < files.length; i++) {
    data.append("files", files[i]);
  }
  data.append("failure", failureId);

  const URI = `${mainUrl}files`;
  const requestData = {
    method: "POST",
    body: data,
  };

  return await handleApiCall(URI, requestData);
}
