const ServiceDetailPage = async ({ params }) => {
  
  // ekhane param ta hocche promise. object na tai async await diye korte hobe..
  const resolveId = await params;
  const id = resolveId.id;

  return (
    <div>
      <h1 className="font-bold text-3xl">Service Detail Page</h1>
      <p>Service Id: {id}</p>
    </div>
  );
};

export default ServiceDetailPage;
