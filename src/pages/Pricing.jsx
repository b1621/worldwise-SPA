import PageNav from "../components/PageNav";

const Pricing = () => {
  return (
    <>
      <main className="h-screen bg-slate-700">
        <PageNav />
        <section className=" w-[900px] mx-auto text-white flex flex-row justify-between my-24">
          <div className=" w-[420px] my-14">
            <h2 className="text-5xl">
              {" "}
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
          </div>
          <div className=" h-96">
            <img
              className="  h-full"
              src="img-2.jpg"
              alt="person with dog overlooking mountain with sunset"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;
