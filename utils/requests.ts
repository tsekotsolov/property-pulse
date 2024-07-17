const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const fetchProperties = async () => {
  try {
    // handle the case where the apiDomain is not available yet
    if (!apiDomain) {
      return [];
    }
    const response = await fetch(`${apiDomain}/properties`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  } catch (error) {
    return [];
  }
};

export { fetchProperties };
