import PageNav from "../components/PageNav";

const Product = () => {
  return (
    <main className="h-screen bg-slate-600">
      <PageNav />
      <section className=" w-[900px] mx-auto text-white flex flex-row justify-between my-14">
        <div className=" h-96">
          <img
            className="  h-full"
            src="img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
          />
        </div>
        <div className=" w-[420px] my-5">
          <h2 className="text-5xl"> About WorldWide.</h2>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
