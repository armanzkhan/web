import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section
      className="ftrCalltoaction"
      style={{
        backgroundImage: "url('https://creativechaos.co/wp-content/uploads/2018/04/footerbg.jpg')",
      }}
    >
      <div className="container-fluid mx-auto">
        <div className="cntHolder text-center py-20">
          <h6 className="subheading uppercase text-white text-lg font-semibold">Get in Touch</h6>
          <h2 className="heading h1 text-white text-4xl font-bold mt-4">Let's Build Together</h2>
          <Link
            href="/contact-us"
            className="lnk-calltoaction f12 btn btn-primary text-white mt-6 inline-block py-2 px-8 bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Talk to us <span className="cc-icon icon-arrow-right-blue ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
