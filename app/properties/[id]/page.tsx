"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProperty = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id as string);
        setProperty(property);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching property: ", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    if (!property) {
      getProperty();
    }
  }, [id, property]);

  return <div>page id: {id}</div>;
};

export default PropertyPage;
