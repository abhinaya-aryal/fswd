const dateRegex = /^\d{4}-\d{2}-\d{2}/;

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

export default async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch(window.ENV.api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === "BAD_USER_INPUT") {
        const details = Array.isArray(error.extensions.exception?.errors)
          ? error.extensions.exception.errors.join("\n ")
          : JSON.stringify(error.extensions.exception, null, 2);

        console.error(`${error.message}:\n ${details}`);
      } else {
        console.error(`${error.extensions.code}: ${error.message}`);
      }
      return null;
    }
    return result.data;
  } catch (e) {
    console.error(`Error in sending data to server: ${e.message}`);
    return null;
  }
}
