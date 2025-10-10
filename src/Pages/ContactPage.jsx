import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  MessagesSquare,
  Linkedin,
  Facebook,
  Send,
} from "lucide-react";
import ContentComponent from "~/Components/ContentComponent/ContentComponent";
import { sendEmail } from "~/Services/SendMail";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        alert("Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm nhất có thể.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(result.message || "Có lỗi xảy ra. Vui lòng thử lại!");
      }
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Phucvo140902@gmail.com",
      link: "mailto:Phucvo140902@gmail.com",
    },
    {
      icon: Phone,
      label: "Số điện thoại",
      value: "0387 859 264",
      link: "tel:+84387859264",
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "144 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng",
      link: null,
    },
    {
      icon: Globe,
      label: "Website",
      value: "https://erosennin.click/",
      link: "https://erosennin.click/",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Phuc-EroDev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ph%C3%BAc-v%C3%B5-tr%C3%AD-771966387/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/phuc.vo.692470",
    },
    {
      icon: MessagesSquare,
      label: "Discord",
      link: "https://discord.com/users/",
    },
    {
      icon: Send,
      label: "Telegram",
      link: "https://telegram.com/",
    },
    {
      icon: Phone,
      label: "Zalo",
      link: "https://zalo.com/",
    },
  ];

  return (
    <div>
      <ContentComponent label="Contact Me">
        <div className="px-10 py-6 space-y-8">
          <h3 className="text-2xl text-center mb-8 font-bold text-white mb-3">
            Hãy để lại thông tin, mình sẽ phản hồi bạn sớm nhất có thể!
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="bg-[#2a2a2a] p-5 rounded-lg group hover:bg-[#353535] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#f6b846]/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-[#f6b846]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-400 text-sm mb-1">{item.label}</h3>
                    {item.link ? (
                      <span className="text-white group-hover:text-[#f6b846] duration-300">
                        {item.value}
                      </span>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-6 bg-[#2a2a2a] p-6 rounded-lg mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className={`p-4 bg-[#353535] rounded-full text-white hover:text-[#f6b846] hover:bg-[#f6b846]/10 duration-300`}
                title={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="bg-[#2a2a2a] p-8 rounded-lg">
            <h3 className="text-white font-semibold text-xl mb-6">
              Gửi Tin Nhắn
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-md mb-2">
                    Họ và Tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#353535] text-white text-md rounded-lg border border-transparent focus:border-[#f6b846] focus:outline-none transition-colors duration-300"
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-md mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#353535] text-white text-md rounded-lg border border-transparent focus:border-[#f6b846] focus:outline-none transition-colors duration-300"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-md mb-2">
                  Tiêu Đề <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#353535] text-white text-md rounded-lg border border-transparent focus:border-[#f6b846] focus:outline-none transition-colors duration-300"
                  placeholder="Tiêu đề tin nhắn"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-md mb-2">
                  Nội Dung <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-[#353535] text-white text-md rounded-lg border border-transparent focus:border-[#f6b846] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Nội dung tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-[#f6b846] text-black text-lg font-semibold rounded-lg cursor-pointer hover:bg-[#f6b846]/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-lg">
            <h3 className="text-white font-semibold text-xl mb-4">
              Vị Trí Của Mình
            </h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8985094267406!2d108.15069287503894!3d16.074209084611447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d3e6f8b1e1%3A0x8d6b6c5c5c5c5c5c!2zMTQ0IE5ndXnhu4VuIEzGsMahbmcgQuG6sW5nLCBMacOqbiBDaGnhu4N1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1696000000000!5m2!1svi!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </ContentComponent>
    </div>
  );
};

export default ContactPage;
