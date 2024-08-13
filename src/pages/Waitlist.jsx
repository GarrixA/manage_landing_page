import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waitlist = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [openModal, setOpenModal] = useState(false);
	const toggleModal = () => {
		setOpenModal(!openModal);
	};

	const onSubmit = (data) => {
		console.log(data);
		toggleModal();
	};

	return (
		<div className="bg-[#fff] waitlist">
			<div className="flex flex-col px-4 items-center justify-center max-w-4xl m-auto h-screen space-y-5">
				<h1 className="text-3xl lg:text-6xl font-extrabold text-center text-black">
					Join The Waitlist For <br />
					Manage Today!
				</h1>
				<p className="text-md lg:text-xl text-center text-[#9CA3AF]">
					Discover an array of incredible management resources and be prepared
					for an exciting wave of new resources on the horizon. Sign up to our
					waitlist to be notified <br />
					when it launches.
				</p>
				<div className="p-3 w-full">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex p-2 w-full flex-col md:flex-row items-center justify-center gap-3"
					>
						<div className="">
							<input
								{...register("email", {
									required: "Email is required",
								})}
								type="text"
								className="w-full bg-[#fff] py-2 px-2 outline-none rounded-[8px] text-[#333] border border-[#9CA3AF]"
								placeholder="Enter your email"
							/>
							{errors.email && (
								<span className="text-red-500 text-sm">
									{errors.email.message}
								</span>
							)}
						</div>
						<div className="">
							<button
								type="submit"
								className="w-full px-3 py-2 rounded-[8px] bg-brightRed text-[#fff] font-semibold"
							>
								Join waitlist!
							</button>
						</div>
					</form>
				</div>
			</div>
			{openModal && (
				<div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white rounded-lg p-6 w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] duration-75 animate-fadeIn">
                        <div className="flex flex-col items-center space-y-5">
						<h1 className="text-2xl text-[#9CA3AF]">Awesome source!</h1>
						<h1 className="xl:text-5xl lg:text-4xl text-center md:text-2xl text-black font-extrabold">
							🎉 Thank you for joining!
						</h1>
						<p className="text-[#9CA3AF] text-center lg:text-xl">
							You are the most amazing person thank you for joining the waitlist
							in our giveaway. We will reach out to you as soon as we launch the
							platform
						</p>
						<button
							className="bg-[#F36B49] px-4 py-2 rounded text-white font-bold"
							onClick={() => toggleModal()}
						>
							Okay
						</button>
                        </div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Waitlist;