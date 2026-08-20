import components from '/src/assets/components.png';
import jsxUi from '/src/assets/jsx-ui.png';
import reactCore from '/src/assets/react-core-concepts.png';
import stateMgmt from '/src/assets/state-mgmt.png';
import config from '/src/assets/config.png';
const heroSectionImg = [components, jsxUi, reactCore, stateMgmt, config];
// const heroSectionImg = ['src/assets/components.png', 'src/assets/jsx-ui.png', 'src/assets/react-core-concepts.png', 'src/assets/state-mgmt.png']

function HeroSection() {
    const path = heroSectionImg[0];
    return (
        <div className="flex items-center flex-col sm:flex-row justify-evenly min-h-screen px-10">
            <img src={path} alt="" />
            <div className="max-w-xl">
                <h1 className="font-bold text-6xl mb-6">
                    Build Beautiful Components
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                    Explore a collection of modern, reusable UI components designed
                    to help you build beautiful and responsive web applications faster.
                </p>

                <p className="text-gray-500 mb-8">
                    Simple, flexible, and easy to customize with Tailwind CSS.
                </p>

                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
                    Explore Components
                </button>
            </div>
        </div>

    );
}

export default HeroSection;