import { MdPersonAddAlt1 } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";

export default function GuideComponent() {
  return (
    <div className="w-[100%] flex justify-center items-center mt-12">
      <div className="w-[95%] text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-20">
        <div className="mb-12">
          <h3 className="text-2xl font-mono font-bold py-4 mt-4">
            How It Works
          </h3>
          <div className="flex justify-center gap-8 mt-6">
            <div className="w-[25%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ml-4 pb-8">
              <div className="flex flex-col items-center pt-10">
                <div className="bg-custom_blue h-14 w-14 rounded-full flex justify-center items-center">
                  <MdPersonAddAlt1 className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-mono pt-4">Sign Up</h4>
                <p className="pt-2 text-sm">Create Your Account</p>
              </div>
            </div>
            <div className="w-[25%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  pb-8">
              <div className="flex flex-col items-center pt-10">
                <div className="bg-custom_blue h-14 w-14 rounded-full flex justify-center items-center">
                  <FaUserFriends className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-mono  pt-4">
                  Start or Join <br /> a Cause
                </h4>
                <p className="pt-2 text-sm">
                  Be a changemaker <br /> or support one
                </p>
              </div>
            </div>
            <div className="w-[25%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mr-4  pb-8">
              <div className="flex flex-col items-center pt-10">
                <div className="bg-custom_blue h-14 w-14 rounded-full flex justify-center items-center">
                  <FaRegHandshake className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-mono pt-4">
                  Collaborate <br />& Impact
                </h4>
                <p className="pt-2 text-sm">
                  Share progress, <br /> gather support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
