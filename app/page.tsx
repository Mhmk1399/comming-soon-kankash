import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <body className="bg-gray-100 dark:bg-gray-800">
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <Image
            src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
            alt="Logo"
            className="mb-8 h-40"
            width={160}
            height={160}
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
            سایتمون در دست تعمیر ممنونیم از شکیباییتون
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
            اگر هر سوال یا مشکلی داشتید می‌توانید با شماره پشتیبانی تماس بگیرید
          </p>
          <div className="flex space-x-4 mb-8">
            <a
              href="tel:+989356139033"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              تماس با پشتیبانی
            </a>
          </div>
          <div className="text-black dark:text-white text-2xl font-bold mb-4">
            خرید از دیگر فروشگاه‌ها
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { src: "/assets/images/divar.png", alt: "Divar" },
              { src: "/assets/images/telegram.png", alt: "Telegram" },
              { src: "/assets/images/digikala.png", alt: "Digikala" },
              { src: "/assets/images/whatsapp.png", alt: "WhatsApp" },
            ].map((image, index) => (
              <Link href="/" key={index} className="flex justify-center items-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-md transition-transform transform hover:scale-105"
                  width={160}
                  height={160}
                />
              </Link>
            ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default page;
