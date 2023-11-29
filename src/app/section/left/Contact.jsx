function Contact() {
  return (
    <div id="contact-section" className="flex-col w-full px-6 space-y-3 py-3">
      <p className="text-white font-semibold text-lg mb-5">CONTACT INFO</p>
      <div
        id="no-wangsaf"
        className="flex space-x-4 items-center hover:cursor-pointer"
      >
        <img
          className="w-7"
          src="https://img.icons8.com/color/480/whatsapp--v1.png"
          alt="whatsapp--v1"
        />
        <p className="text-white">+62 813 8483 8398</p>
      </div>
      <div
        id="gmail"
        className="flex space-x-4 items-center hover:cursor-pointer"
      >
        <img
          className="w-6 mr-1"
          src="https://img.icons8.com/color/480/gmail-new.png"
          alt="gmail-new"
        />
        <p className="text-white">mahesabw26@gmail.com</p>
      </div>
      <div
        id="github"
        className="flex space-x-4 items-center hover:cursor-pointer"
      >
        <img
          className="w-7"
          src="https://img.icons8.com/nolan/512/github.png"
          alt="github"
        />
        <a href="https://www.github.com/mahesabimawijaya">
          <p className="text-white hover:text-gray-300">mahesabimawijaya</p>
        </a>
      </div>
      <div
        id="instagram"
        className="flex space-x-4 items-center hover:cursor-pointer"
      >
        <img
          className="w-7"
          src="https://img.icons8.com/fluency/240/instagram-new.png"
          alt="instagram-new"
        />
        <a href="https://www.instagram.com/mahesabw/">
          <p className="text-white hover:text-gray-300">mahesabw</p>
        </a>
      </div>
      <div
        id="no-wangsaf"
        className="flex space-x-4 items-center hover:cursor-pointer"
      >
        <img
          className="w-7"
          src="https://img.icons8.com/color/480/google-maps-new.png"
          alt="google-maps-new"
        />
        <p className="text-white">Serang, Banten</p>
      </div>
    </div>
  );
}

export default Contact;
