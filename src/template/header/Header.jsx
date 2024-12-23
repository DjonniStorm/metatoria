import logo from "../../image/logo.png";
import telegramm from "../../image/telegramm_logo.png";
import vk from "../../image/vk_logo.png";

export default function Header({}) {
    return (
        <div className="flex flex-wrap gap-x-7 w-[100%] items-center justify-center">
            <div className="relative w-[18%] top-5 left-5 flex justify-center items-center">
                <img className="w-52 object-cover" src={logo} alt="" />
            </div>
            <div className="relative w-[18%] flex justify-center cursor-pointer">
                <div className="text-4xl m-auto hover:border-b-2 hover:border-b-black">
                    <a href="#aboutme">О Нас</a>
                </div>
            </div>
            <div className="relative w-[18%] flex justify-center cursor-pointer">
                <div className="text-4xl m-auto hover:border-b-2 hover:border-b-black">
                    <a href="#ourteam">Команда</a>
                </div>
            </div>
            <div className="relative w-[18%] flex justify-center cursor-pointer">
                <div className="text-4xl m-auto hover:border-b-2 hover:border-b-black">
                    <a href="#currentprojects">Проекты</a>
                </div>
            </div>
            <div className="flex relative right-1 w-[20%] justify-center items-center">
                <div className="flex w-[40%] m-2 cursor-pointer">
                    <a href="https://vk.com/metatory" target="_blank">
                        <img className="max-h-20" src={vk} alt="vk" />
                    </a>
                </div>
                <div className="flex w-[40%] m-2 cursor-pointer">
                    <a href="https://t.me/metatory" target="_blank">
                        <img className="max-h-20" src={telegramm} alt="tg" />
                    </a>
                </div>
            </div>
        </div>
    );
}
