import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/property.type";
import { fetchProperties } from "@/utils/requests";
import Link from "next/link";



const HomeProperties = async () => {
  const properties = await fetchProperties();

  const randomProperties = properties
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          {randomProperties?.length === 0 ? (
            <div>No properties found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {randomProperties?.map((property: Property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
        <section className="m-auto max-w-lg my-10 px-6">
          <Link
            href="/properties"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >
            View all properties
          </Link>
        </section>
      </section>
    </>
  );
};

export default HomeProperties;
