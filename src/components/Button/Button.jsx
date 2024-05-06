import "./Button.css";

export default function Button({ icon, title, link }) {
  return (
    <a
      href={link}
      className="direct_link block relative w-full px-16 py-4 bg-white text-black rounded-[30px] 
                      overflow-hidden hover:text-white hover:bg-transparent border border-white transition-colors mb-4"
    >
      <div
        className="icon w-8 h-8 bg-current absolute top-1/2 left-2 -translate-y-1/2"
        style={{ "mask-image": `url("${icon}")` }}
      ></div>

      <p className="text-center">{title}</p>
    </a>
  );
}
